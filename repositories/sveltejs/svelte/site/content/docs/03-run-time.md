---
title: Run time
---


### svelte

Пакет `svelte` предоставляет [функции жизненного цикла](tutorial/onmount) и [API контекста](tutorial/context-api).

* `onMount(callback: () => void)`
* `onMount(callback: () => () => void)`

---

Функция `onMount` запланирует запуск своей callback-функции, как только компонент будет смонтирован в DOM. Эта функцция должна быть вызвана только во время инициализации компонента (но она не обязана находится *внутри* компонента; её можно вызывать и из внешнего модуля).

`onMount` не запускается для [компонентов на стороне сервера](docs#server-side-component-api).

```html
<script>
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('компонент смонтирован');
	});
</script>
```

---

Если `onMount` возвращает функцию, то она будет вызвана при удалении компонента из DOM.

```html
<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const interval = setInterval(() => {
			console.log('beep');
		}, 1000);

		return () => clearInterval(interval);
	});
</script>
```

* `beforeUpdate(callback: () => void)`

---

Запланирует запуск своей callback-функции непосредственно перед обновлением компонента после любого изменения состояния приложения.

> Первый раз функция в `beforeUpdate` сработает непосредственно перед запуском `onMount`

```html
<script>
	import { beforeUpdate } from 'svelte';

	beforeUpdate(() => {
		console.log('компонент сейчас обновится');
	});
</script>
```

* `afterUpdate(callback: () => void)`

---

Запланирует запуск своей callback-функции сразу после обновления компонента.

```html
<script>
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		console.log('компонент только что обновился');
	});
</script>
```

* `onDestroy(callback: () => void)`

---

Запланирует запуск своей callback-функции при удалении компонента из DOM.

Из всех функций жизненного цикла `onMount`, `beforeUpdate`, `afterUpdate` и `onDestroy`, эта единственная, которая запускается в при рендеринге на стороне сервера.

```html
<script>
	import { onDestroy } from 'svelte';

	onDestroy(() => {
		console.log('компонент удаляется');
	});
</script>
```

* `promise: Promise = tick()`

---

Возвращает промис, который выполняется после применения всех ожидающих изменений состояния приложения либо в следующей микрозадаче, если таковые отсутствуют.

```html
<script>
	import { beforeUpdate, tick } from 'svelte';

	beforeUpdate(async () => {
		console.log('комопнент сейчас будет обновляться');
		await tick();
		console.log('компонент обновился');
	});
</script>
```

* `setContext(key: any, context: any)`

---

Связывает произвольный объект `context` с текущим компонентом и указанным ключом `key`. После этого, при помощи метода `getContext`, контекст становится доступным для всех дочерних элементов компонента (включая содержимое слотов).

Как и функции жизненного цикла, этот метод должен вызываться во время инициализации компонента.

```html
<script>
	import { setContext } from 'svelte';

	setContext('answer', 42);
</script>
```

* `context: any = getContext(key: any)`

---

Извлекает контекст, который был объявлен с указнанным ключом в ближайшем родительском компоненте. Этот метод также должен вызываться во время инициализации компонента.

```html
<script>
	import { getContext } from 'svelte';

	const answer = getContext('answer');
</script>
```



### svelte/store

Модуль `svelte/store` предоставляет функции для создания [хранилищ](tutorial/writable-stores).

---

Чтобы считаться хранилищем, объект должен иметь метод `subscribe`, который возвращает функцию `unsubscribe`.

```js
const unsubscribe = store.subscribe(value => {
	console.log(value);
}); // вывод значения `value`

// позднее...
unsubscribe();
```

---

Хранилища имеют особую выразительность внутри компонентов Svelte. Их значения можно получить, поставив перед именем хранилища символ `$`, что заставляет Svelte автоматически подписываться и отписываться от хранилища в течение жизненного цикла компонента.

```html
<script>
	import { count } from './stores.js';

	function handleClick() {
		// это эквивалентно count.update(n => n + 1)
		$count += 1;
	}
</script>

<button on:click={handleClick}>
	Клик:ов {$count}
</button>
```

* `store = writable(value: any)`
* `store = writable(value: any, () => () => void)`

---

Создает хранилище с дополнительными методами `set` и `update`.

```js
import { writable } from 'svelte/store';

const count = writable(0);

count.subscribe(value => {
	console.log(value);
}); // выведет '0'

count.set(1); // выведет '1'

count.update(n => n + 1); // выведет '2'
```

---

Если в качестве второго аргумента передается функция, она вызывается, когда число подписчиков меняется с ноля до одного (но не с одного до двух и т. д.). Эта функция может возвращать другую функцию, которая вызывается, когда число подписчиков меняется с одного на ноль.

```js
import { writable } from 'svelte/store';

const count = writable(0, () => {
	console.log('у нас есть подписчик');
	return () => console.log('подписчиков не осталось');
});

count.set(1); // ничего не делает

const unsubscribe = count.subscribe(value => {
	console.log(value);
}); // выводит 'у нас есть подписчик', потом '1'

unsubscribe(); // выводит 'подписчиков не осталось'
```

* `store = readable(value: any)`
* `store = readable(value: any, (set: (value: any) => void) => () => void)`

---

Создает хранилище, значение которого нельзя установить извне. Первый аргумент задаёт начальное значение хранилища.

Второй, необязательный, аргумент в `readable` функция, которая вызывается, когда число подписчиков меняется с ноля на единицу, и вызывает переданный в аргументе метод `set`. Также она должна возвращать функцию, которая будет вызываться, когда количество подписчиков уменьшается  до нуля.

```js
import { readable } from 'svelte/store';

const time = readable(new Date(), set => {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return () => clearInterval(interval);
});
```

* `store = derive(a, callback: (a: any) => any)`
* `store = derive(a, callback: (a: any, set: (value: any) => void) => void)`
* `store = derive([a, ...b], callback: ([a: any, ...b: any[]]) => any)`
* `store = derive([a, ...b], callback: ([a: any, ...b: any[]], set: (value: any) => void) => void)`

---

Создаёт производное хранилище, на основе одного или нескольких других хранилищ. Всякий раз, когда меняются значения отслеживаемых хранилищ, выполняется callback-функция.

В самом простом случае в `derive` передаётся одно хранилище, а из callback-функции возвращается производное значение.

```js
import { derive } from 'svelte/store';

const doubled = derive(a, $a => $a * 2);
```

---

Callback-функция может устанавливать значение асинхронно, принимая второй аргумент `set` и вызывая его при необходимости.

```js
import { derive } from 'svelte/store';

const delayed = derive(a, ($a, set) => {
	setTimeout(() => set($a), 1000);
});
```

---

В обоих случаях в качестве первого аргумента может быть передан массив хранилищ.

```js
import { derive } from 'svelte/store';

const summed = derive([a, b], ([$a, $b]) => $a + $b);

const delayed = derive([a, b], ([$a, $b], set) => {
	setTimeout(() => set($a + $b), 1000);
});
```

* `value: any = get(store)`

---

Обычно, нужно получить значение хранилища, подписавшись на него, затем использовать его в нужных местах, с учетом того, что оно может изменяться со временем. Иногда может понадобиться просто получить значение хранилища, на которое вы не подписывались. `get` позволяет сделать это.

> Этот метод просто подписывается на хранилище, получает значение и отписывается. Поэтому, не рекомендуется использовать его в высоконагружненых частях кода.

```js
import { get } from 'svelte/store';

const value = get(store);
```


### svelte/motion

Модуль `svelte/motion` экспортирует две функции, `tweened` и `spring`, для создания записываемых хранилищ, чьи значения, при изменении функциями `set` и `update`, меняются постепенно в течение какого-то количества времени, а не моментально.

#### tweened

* `store = tweened(value: any, options)`

Хранилище, которое обновляет свои значения в течение фиксированного периода времени. Доступны следующие опции:

* `delay` (`number`, по умолчанию 0) — миллисекунды до начала изменения
* `duration` (`number`, по умолчанию 400) — длительность изменения в миллисекундах
* `easing` (`function`, по умолчанию `t => t`) —  [функция плавности](docs#svelte-easing)
* `interpolator` (`function`) — смотри ниже

Методы `store.set` и `store.update` могут принимать второй аргумент `options`, который может перезаписать параметры, установленные при инициализации хранилища.

Обе функции возвращают промис, которое выполняется, когда изменение завершается. Если изменение прервать, промис никогда не будет выполнен.

---

Из коробки Svelte умеет рассчитывать изменения между двумя числами, двумя массивами или двумя объектами (при условии, что массивы и объекты имеют одинаковую структуру, а все окончания ветвлений свойств также являются числами).

```html
<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const size = tweened(1, {
		duration: 300,
		easing: cubicOut
	});

	function handleClick() {
		// эквивалентно вызову size.update(n => n + 1)
		$size += 1;
	}
</script>

<button
	on:click={handleClick}
	style="transform: scale({$size}); transform-origin: 0 0"
>embiggen</button>
```

---

Опция `interpolator` позволяет вам рассчитывать промежуточные значения между *любыми* произвольными значениями. Это должна быть функция `(a, b) => t => value`, где` a` - начальное значение, `b` - конечное значение,` t` - число от 0 до 1 и `value` это результат. Например, мы можем использовать пакет [d3-interpolate](https://github.com/d3/d3-interpolate) для плавного перехода между двумя цветами.

```html
<script>
	import { interpolateLab } from 'd3-interpolate';
	import { tweened } from 'svelte/motion';

	const colors = [
		'rgb(255, 62, 0)',
		'rgb(64, 179, 255)',
		'rgb(103, 103, 120)'
	];

	const color = tweened(colors[0], {
		duration: 800,
		interpolate: interpolateLab
	});
</script>

{#each colors as c}
	<button
		style="background-color: {c}; color: white; border: none;"
		on:click="{e => color.set(c)}"
	>{c}</button>
{/each}

<h1 style="color: {$color}">{$color}</h1>
```

#### spring

* `store = spring(value: any, options)`

Хранилище `spring` постепенно меняет свое значение на основе параметров `stiffness`(жёсткость) и `damping`(затухание), получаются колебания по типу движения пружины. В отличие от хранилищ типа `tweened`, где значение меняется строго определенное количество времени, хранилища типа `spring` изменяют значение в течение продолжительности, которая задается их текущей скоростью, что позволяет более естественно выглядеть во многих ситуациях. Доступны следующие опции:

* `stiffness` (`number`, по умолчанию `0.15`) — значение от 0 до 1, чем больше, тем *туже пружина*
* `damping` (`number`, по умолчанию `0.8`) — значение 0 до 1, чем меньше тем *пружиннее пружина*
* `precision` (`number`, по умолчанию `0.001`) — определяет порог, при котором *колебания пружины* прекращаются, чем меньше, тем точнее

---

Как и в случае с `tweened` хранилищами, `set` и `update` возвращают промис, который выполняется, когда колебания прекратятся. Свойства `store.stiffness` и` store.damping` могут быть изменены, даже во время колебаний и применяются немедленно.

[Посмотрите полноценный пример.](tutorial/spring)

```html
<script>
	import { spring } from 'svelte/motion';

	const coords = spring({ x: 50, y: 50 }, {
		stiffness: 0.1,
		damping: 0.25
	});
</script>
```

### svelte/transition

TODO

* fade, fly, slide, draw
* crossfade...

### svelte/animation

TODO

* TODO this doesn't even exist yet

TODO

### svelte/easing

* TODO could have nice little interactive widgets showing the different functions, maybe

### svelte/register

TODO


### Client-side component API

* `const component = new Component(options)`

---

Компонент на стороне клиента — это компонент, скомпилированный с помощью метода `generate: 'dom'`(или опция `generate` не была указана) и являющийся JavaScript классом.

```js
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		// предполагается, что App.svelte содержит что-то вроде
		// `export let answer`:
		answer: 42
	}
});
```

Могут быть указаны следующие параметры инициализации:

| Параметр | По умолчанию | Описание |
| --- | --- | --- |
| `target` | **none** | `HTML` элемент в который необходимо отрисовать компонент. Обязательный.
| `anchor` | `null` | Потомок `target`, перед которым будет отрисован компонент
| `props` | `{}` | Объект свойств для передачи компоненту
| `hydrate` | `false` | См.ниже
| `intro` | `false` | Если `true`, будет отыгрывать переходы при начальной отрисовке, а не ждать последующих изменений состояния

Существующие вложенные элементы в `target` остаются там, где они есть.


---

Параметр `hydrate` инструктирует Svelte обновить существующий DOM (обычно полученный в ходе рендеринга на стороне сервера), а не создавать новые элементы. Это будет работать только в том случае, если компонент был скомпилирован с параметром `hydratable: true`.

В то время как дочерние элементы `target` обычно нормально остаются одни,` hydrate: true` приведет к удалению всех детей. По этой причине опция `anchor` не может использоваться вместе с` hydrate: true`.

Существующий DOM не обязан полностью совпадать с компонентом - Svelte будет 'чинить' структуру DOM по мере необходимости.

```js
import App from './App.svelte';

const app = new App({
	target: document.querySelector('#server-rendered-html'),
	hydrate: true
});
```

* `component.$set(props)`

---

Программно устанавливает свойство экземпляру компонента. Действие `component.$set({ x: 1 })` эквивалентно присвоению `x = 1` внутри блока `<script>` компонента.

Вызов этого метода запланирует обновление в следующей микрозадаче - DOM *не* обновляется синхронно.

```js
app.$set({ answer: 42 });
```

* `component.$on(event, callback)`

---

Вызывает функцию `callback` каждый раз когда компонент отправляет событие `event`.

```js
app.$on('selected', event => {
	console.log(event.detail.selection);
});
```


* `component.$destroy()`

Удаляет компонент из DOM и запускает все имеющиеся обработчики функции `onDestroy`.

* `component.prop`
* `component.prop = value`

---

Если компонент скомпилирован с параметром `accessors: true`, каждый экземпляр будет иметь геттеры и сеттеры, соответствующие каждому из компонентов компонента. Установка значения приведет к *синхронному* обновлению, а не к асинхронному обновлению по умолчанию, которое вызывается методом `component.$set(...)`.

По умолчанию `accessors` имеет значение` false`, если вы не компилируете компонент как пользовательский элемент.

```js
console.log(app.count);
app.count += 1;
```


### Custom element API

* TODO


### Server-side component API

* `const result = Component.render(...)`

---

В отличие от компонентов на стороне клиента, компоненты га стороне сервера не имеют такого же жизненного цикла после их рендеринга - вся их работа заключается лишь в создании HTML и CSS. По этой причине API несколько отличается.

Компонент на стороне сервера предоставляет метод `render`, который можно вызывать, передав при необходимости нужные свойства. Он возвращает объект со свойствами `head`, `html` и `css`. При этом в `head` будет помещено содержимое всех имеющихся элементов `<svelte:head>`.

```js
const App = require('./App.svelte');

const { head, html, css } = App.render({
	answer: 42
});
```