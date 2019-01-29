---
title: Управление состоянием
---

Компоненты Svelte имеют встроенное управление состоянием с помощью методов `get` и `set`. Но по мере того, как ваше приложение становится все более сложным, оказывается, что передача данных между компонентами становится не простой задачей.

Например, пусть у нас есть компонент `<Options>` внутри компонента `<Sidebar>`, который позволяет пользователю контролировать поведение компонента `<MainView>`. Мы, конечно, можем использовать привязки или события, чтобы 'отправить' информацию из `<Options>` через `<Sidebar>` к общему предку `<App>` - который, затем, должен будет отправить её обратно в `<MainView>`. Но это очень громоздко и неочевидно, особенно если `<MainView>` при этом сам состоит из каких-то более мелких компонентов.

Вместо этого, для подобной ситуации разработчиками придумано *глобальное хранилище* данных, которое доступно во всей иерархии компонентов приложения. У Vue есть свой [Vuex](https://vuex.vuejs.org/en/), в React - [Redux](https://redux.js.org/) и [MobX](https://mobx.js.org/index.html) (впрочем, эти библиотеки универсальны и могут быть использованы даже в Svelte).

Ну а у Svelte есть `Store`. При этом `Store` также можно использовать в любом приложении JavaScript, но, конечно, для приложений Svelte он подходит лучше всего.


### Основы

Импортируйте `Store` из `svelte/store.js` (не забудьте про фигурные скобки, так как это *именованный импорт*), затем создайте новое хранилище с некоторыми начальными данными (или без них):

```js
import { Store } from 'svelte/store.js';

const store = new Store({
	name: 'мир'
});
```

Каждый экземпляр `Store` имеет методы `get`, `set`, `on` и `fire`, которые ведут себя идентично своим аналогам в компоненте Svelte:

```js
const { name } = store.get(); // 'мир'

store.on('state', ({ current, changed, previous }) => {
	console.log(`привет ${current.name}`);
});

store.set({ name: 'всем' }); // 'привет всем'
```



### Создание компонентов с хранилищем

Давайте переработаем наш самый [первый пример](guide#understanding-svelte-components):

```html
<!-- { repl: false } -->
<h1>Привет {$name}!</h1>
<Greeting/>

<script>
	import Greeting from './Greeting.html';

	export default {
		components: { Greeting }
	};
</script>
```

```html
<!--{ filename: 'Greeting.html' }-->
<p>Как поживаете, {$name}?</p>
```

```js
/* { filename: 'main.js' } */
import App from './App.html';
import { Store } from 'svelte/store.js';

const store = new Store({
	name: 'мир'
});

const app = new App({
	target: document.querySelector('main'),
	store
});

window.store = store; // может пригодиться при отладке!
```

Следует отметить три важных момента:

* Мы передаем `store` в конструктор `new App(...)` вместо начальных данных `data`
* В шаблоне мы используем `$name` вместо `name`. Префикс `$` означает, что `name` является *свойством хранилища*
* Так как `<Greeting>` - это дочерний элемент для `<App>`, то это означает, что у него тоже есть доступ к хранилищу. В протиивном случае, компоненту `<App>` пришлось бы передавать свойство `name` дальше через механизм свойств компонентов (`<Greeting name={name}/>`)

Компоненты, которые зависят от свойств хранилища, будут перерисовываться всякий раз, когда они изменятся.


### Декларативные хранилища

В качестве альтернативы добавлению опции `store` при создании экземпляра компонента, сам компонент может объявить зависимость от хранилища внутри себя:

```html
<!-- { title: 'Declarative stores' } -->
<h1>Привет {$name}!</h1>
<Greeting/>

<script>
	import Greeting from './Greeting.html';
	import store from './store.js';

	export default {
		store: () => store,
		components: { Greeting }
	};
</script>
```

```html
<!--{ filename: 'Greeting.html' }-->
<p>Как поживаете, {$name}?</p>
```

```js
/* { filename: 'store.js' } */
import { Store } from 'svelte/store.js';
export default new Store({ name: 'world' });
```

Обратите внимание, что опция `store` - это функция, которая *возвращает* хранилище, а не само хранилище - это обеспечивает большую гибкость.


### Вычисляемые свойства хранилища

Как и в компонентах, в хранилище могут быть вычисляемые свойства:

```js
store = new Store({
	width: 10,
	height: 10,
	depth: 10,
	density: 3
});

store.compute(
	'volume',
	['width', 'height', 'depth'],
	(width, height, depth) => width * height * depth
);

store.get().volume; // 1000

store.set({ width: 20 });
store.get().volume; // 2000

store.compute(
	'mass',
	['volume', 'density'],
	(volume, density) => volume * density
);

store.get().mass; // 6000
```

Первый аргумент - это имя вычисляемого свойства. Вторым является массив *зависимостей*, за которыми следует следить - это могут быть обычные свойства данных или другие вычисляемые свойства. Третий аргумент - это функция, которая пересчитывает значение при каждом изменении зависимостей.

Компонент, подключенный к этому хранилищу, может ссылаться на `{$volume}` и `{$mass}`, как и на любое другое свойство хранилища.


### Доступ к хранилищу внутри компонента

Каждый компонент получает ссылку на `this.store`. Это позволяет, например, прикрепить прослушку события в хуке `oncreate` ...

```html
<!-- { repl: false } -->
<script>
	export default {
		oncreate() {
			const listener = this.store.on('state', ({ current }) => {
				// ...
			});
	
			// слушатели событий не удаляются автоматически -
			// сделайте это вручную
			this.on('destroy', listener.cancel);
		}
	};
</script>
```

... или вызывать методы хранилища в обработчиках событий, используя тот же префикс `$`, что и для свойств:

```html
<!-- { repl: false } -->
<button on:click="$set({ muted: true })">
	Убрать звук
</button>
```


### Пользовательские методы хранилища

В `Store` нет понятия *действий* или *фиксаций*, как Redux и Vuex. Вместо этого состояние всегда обновляется с помощью `store.set(...)`.

Но вы можете создать и свои методы в хранилище путем созданиея подкласса `Store`:

```js
class TodoStore extends Store {
	addTodo(description) {
		const todo = {
			id: generateUniqueId(),
			done: false,
			description
		};

		const todos = this.get().todos.concat(todo);
		this.set({ todos });
	}

	toggleTodo(id) {
		const todos = this.get().todos.map(todo => {
			if (todo.id === id) {
				return {
					id,
					done: !todo.done,
					description: todo.description
				};
			}

			return todo;
		});

		this.set({ todos });
	}
}

const store = new TodoStore({
	todos: []
});

store.addTodo('Закончить писать это рукводство');
```

Методы могут обновлять хранилище асинхронно:

```js
class NasdaqTracker extends Store {
	async fetchStockPrices(ticker) {
		const token = this.token = {};
		const prices = await fetch(`/api/prices/${ticker}`).then(r => r.json());
		if (token !== this.token) return; // токен "протух"

		this.set({ prices });
	}
}

const store = new NasdaqTracker();
store.fetchStockPrices('AMZN');
```

Вы можете вызывать эти методы в ваших компонентах, также как и обычные методы:


```html
<!-- { repl: false } -->
<input
	placeholder="Введите биржевый индекс"
	on:change="$fetchStockPrices(this.value)"
>
```

### Привязки в хранилище

Вы можете сделать привязки к свойствам хранилища так же, как обычным свойствам компонентов - просто добавьте префикс `$`:

```html
<!-- { repl: false } -->
<!-- глобальное управление громкостью -->
<input bind:value=$volume type=range min=0 max=1 step=0.01>
```

### Использование свойств хранилища в вычисляемых свойствах

Как и в шаблонах, вы можете получить доступ к свойствам хранилища в вычисляемых свойствах компонента, поставив перед ними префикс `$`:

```html
<!-- { repl: false } -->
{#if isVisible}
	<div class="todo {todo.done ? 'done': ''}">
		{todo.description}
	</div>
{/if}

<script>
	export default {
		computed: {
			// `todo` свойство компонента, `$filter` - это
			// свойство хранилища
			isVisible: ({ todo, $filter }) => {
				if ($filter === 'all') return true;
				if ($filter === 'done') return todo.done;
				if ($filter === 'pending') return !todo.done;
			}
		}
	};
</script>
```


### Встроенные оптимизации

Компилятор Svelte знает, какие свойства хранилища интересуют ваши компоненты (благодаря префиксу `$`), и пишет код, который прослушивает только изменения этих свойств. ПОэтому вам не нужно беспокоиться о наличии множества свойств в вашем хранилище, даже часто обновляемых. Соответственно, компоненты, которые не используют свойства хранилища, не будут содержать в себе никакой логики для работы с ними.

