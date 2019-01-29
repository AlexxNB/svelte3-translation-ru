---
title: Дополнения
---


### each блоки с ключом

Связывание *ключа* с блоком позволяет Svelte добавлять и удалять элементы из списка более умным способом. Добавьте `(выражение)`, которое однозначно идентифицирует каждый элемент списка:

```html
<!-- { repl: false } -->
{#each people as person (person.name)}
	<div>{person.name}</div>
{/each}
```

Как обычно, проще показать, чем рассказать. Откройте следующий пример в REPL:

```html
<!-- { title: 'Keyed each blocks' } -->
<button on:click="update()">обновить</button>

<section>
	<h2>С ключом</h2>
	{#each people as person (person.name)}
		<div transition:slide>{person.name}</div>
	{/each}
</section>

<section>
	<h2>Без ключа</h2>
	{#each people as person}
		<div transition:slide>{person.name}</div>
	{/each}
</section>

<style>
	button {
		display: block;
	}

	section {
		width: 10em;
		float: left;
	}
</style>

<script>
	import { slide } from 'svelte-transitions';

	var people = ['Alice', 'Barry', 'Cecilia', 'Douglas', 'Eleanor', 'Felix', 'Grace', 'Horatio', 'Isabelle'];

	function random() {
		return people
			.filter(() => Math.random() < 0.5)
			.map(name => ({ name }))
	}

	export default {
		data() {
			return { people: random() };
		},

		methods: {
			update() {
				this.set({ people: random() });
			}
		},

		transitions: { slide }
	};
</script>
```


### Гидратация клиентской части

При использовании [отрисовки на стороне сервера](guide#server-side-rendering) вам, вероятно, нужно будет создать динамическую версию вашего приложения на стороне клиента *поверх* версии загруженной клиентом с сервера. Самый очевидный способ сделать это - удалить все элементы из DOM и отрендерить в него заново уже клиентское приложение:

```js
import App from './App.html';

const target = document.querySelector('#element-with-server-rendered-html');

// не надо так делать!
target.innerHTML = '';
new App({
	target
});
```

Но, конечно, лучше для этого использовать уже существующие елементы DOM. Процесс переноса существующего статического DOM в клиентское приложение и называется *гидратацией*. Для включения данной возможности, для начала, нужно указать компилятору создать код, необходимый для работы гидратации, передав опцию `hydratable: true`:

```js
const { js } = svelte.compile(source, {
	hydratable: true
});
```

(Точно так же, сожно предать эту опцию и в плагины [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte) или [svelte-loader](https://github.com/sveltejs/svelte-loader).)

Затем, при создании экземпляра компонента на клиентской стороне, мы говорим ему использовать существующий DOM опцией `hydrate: true`:

```js
import App from './App.html';

const target = document.querySelector('#element-with-server-rendered-html');

new App({
	target,
	hydrate: true
});
```

> Если приложение на стороне клиента не будет полностью соответствовать отрисованому на сервере HTML - Svelte позаботится об этом и восстановит DOM в процессе своей работы.


### Неизменяемые объекты

Поскольку массивы и объекты являются *изменяемыми*, Svelte должен быть осторожен при принятии решения, обновлять или нет вещи, которые к ним относятся.

Но если все ваши данные [неизменяемые](https://en.wikipedia.org/wiki/Immutable_object), вы можете использовать опцию компилятора `{immutable: true}`, чтобы иметь возможность использовать строгое сравнение объектов (используя `===` ). Если даже у вас есть только один компонент, который использует неизменяемые данные, вы можете настроить Svelte на использование строгого сравнения только для этого компонента.

В приведенном ниже примере `searchResults` обычно пересчитывается всякий раз, когда `items` *мог* измениться, но с `immutable: true` он будет обновляться только тогда, когда `items` *совершенно точно* изменился. Безусловно, это может улучшить производительность вашего приложения.

```html
<!-- { repl: false } -->
{#each searchResults as item}
	<div>{item.name}</div>
{/each}

<script>
	import FuzzySearch from 'fuzzy-search';

	export default {
		immutable: true,

		computed: {
			searchResults: ({ searchString, items }) => {
				if (!searchString) return items;

				const searcher = new FuzzySearch(items, ['name', 'location']);
				return searcher.search(searchString);
			}
		}
	}
</script>
```

Посмотрите [пример](repl?demo=immutable), показывающий работу опции `immutable: true`.
