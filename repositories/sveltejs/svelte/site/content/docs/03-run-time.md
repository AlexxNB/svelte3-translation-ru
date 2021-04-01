---
title: Рантайм
---


### `svelte`

Пакет `svelte` предоставляет [функции жизненного цикла](tutorial/onmount) и [API контекста](tutorial/context-api).

#### `onMount`

```js
onMount(callback: () => void)
```
```js
onMount(callback: () => () => void)
```

---

Функция `onMount` запланирует запуск своей callback-функции, как только компонент будет смонтирован в DOM. Эта функцция должна быть вызвана только во время инициализации компонента (но она не обязана находится *внутри* компонента; её можно вызывать и из внешнего модуля).

`onMount` не запускается для [компонентов на стороне сервера](docs#API_компонента_на_сервере).

```sv
<script>
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('компонент смонтирован');
	});
</script>
```

---

Если `onMount` возвращает функцию, то она будет вызвана при удалении компонента из DOM.

```sv
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

> Чтобы такое поведение работало, функция, переданная в `onMount` должна быть *синхронной*. Асинхронные `async` функции всегда возвращают `Промис`, и поэтому не могут *синхронно* возвращать функцию.


#### `beforeUpdate`

```js
beforeUpdate(callback: () => void)
```

---

Запланирует запуск своей callback-функции непосредственно перед обновлением компонента после любого изменения состояния приложения.

> Первый раз функция в `beforeUpdate` сработает непосредственно перед запуском `onMount`

```sv
<script>
	import { beforeUpdate } from 'svelte';

	beforeUpdate(() => {
		console.log('компонент сейчас обновится');
	});
</script>
```

#### `afterUpdate`

```js
afterUpdate(callback: () => void)
```

---

Запланирует запуск своей callback-функции сразу после обновления компонента.

```sv
<script>
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		console.log('компонент только что обновился');
	});
</script>
```

#### `onDestroy`

```js
onDestroy(callback: () => void)
```

---

Запланирует запуск своей callback-функции непосредственно перед удалением компонента из DOM.

Из всех функций жизненного цикла `onMount`, `beforeUpdate`, `afterUpdate` и `onDestroy`, эта единственная, которая запускается при рендеринге на стороне сервера.

```sv
<script>
	import { onDestroy } from 'svelte';

	onDestroy(() => {
		console.log('компонент удаляется');
	});
</script>
```

#### `tick`

```js
promise: Promise = tick()
```

---

Возвращает промис, который выполняется после применения всех ожидающих изменений состояния приложения либо в следующей микрозадаче, если таковые отсутствуют.

```sv
<script>
	import { beforeUpdate, tick } from 'svelte';

	beforeUpdate(async () => {
		console.log('компонент сейчас будет обновляться');
		await tick();
		console.log('компонент обновился');
	});
</script>
```

#### `setContext`

```js
setContext(key: any, context: any)
```

---

Связывает произвольный объект `context` с текущим компонентом и указанным ключом `key`. После этого, при помощи метода `getContext`, контекст становится доступным для всех дочерних элементов компонента (включая содержимое слотов).

Как и функции жизненного цикла, этот метод должен вызываться во время инициализации компонента.

```sv
<script>
	import { setContext } from 'svelte';

	setContext('answer', 42);
</script>
```

> По своей сути значение, устанавливаемое функцией `setContext`, не является реактивным. Если нужно иметь в контексте реактивное значения, то передайте в качестве параметра `context` объект хранилища.


#### `getContext`

```js
context: any = getContext(key: any)
```

---

Извлекает контекст, который был объявлен с указананным ключом в ближайшем родительском компоненте. Этот метод также должен вызываться во время инициализации компонента.

```sv
<script>
	import { getContext } from 'svelte';

	const answer = getContext('answer');
</script>
```

#### `hasContext`

```js
hasContext: boolean = hasContext(key: any)
```

---

Проверяет, был ли в родительском компоненте задан контекст с ключом `key`. Должен вызываться во время инициализации компонента.

```sv
<script>
	import { hasContext } from 'svelte';

	if (hasContext('answer')) {
		// что-то сделать
	}
</script>
```


#### `createEventDispatcher`

```js
dispatch: ((name: string, detail?: any) => void) = createEventDispatcher();
```

---

Создает диспетчер событий, который можно использовать для отправки [событий компонента](docs#Sobytiya_komponenta). Диспетчер событий — это функция, которая может принимать два аргумента: `name` и` detail`.

События компонента созданные при помощи метода `createEventDispatcher` создают пользовательские события [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent). Эти события не [всплывают](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/%D0%A1%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F#%D0%92%D1%81%D0%BF%D0%BB%D1%8B%D1%82%D0%B8%D0%B5_%D0%B8_%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%B2%D0%B0%D1%82_%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9) и не могут быть отменены методом `event.preventDefault()`. Аргумент `detail` соответствует свойству [CustomEvent.detail](https://developer.mozilla.org/ru/docs/Web/API/CustomEvent/detail) и может содержать данные любого типа.

```sv
<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<button on:click="{() => dispatch('notify', 'любые данные')}">Запустить событие</button>
```

---

События, отправленные из дочернего компонента, можно прослушивать в их родительском компоненте. Любые данные, указанные при отправке события, будут доступны в свойстве `detail` объекта события.

```sv
<script>
	function callbackFunction(event) {
		console.log(`Событие запущено! Данные: ${event.detail}`)
	}
</script>

<Child on:notify="{callbackFunction}"/>
```

### `svelte/store`

Модуль `svelte/store` предоставляет функции [readable](docs#readable), [writable](docs#writable) и [derived](docs#derived) для создания соответствующих хранилищ.

Вы *не обязаны* использовать только эти функции для того, чтобы иметь возможность работать с [префиксом $ для хранилищ](docs#4_Dobavte_prefiks_$_k_hranilishhu_dlya_polucheniya_ego_znacheniya) в компонентах. Любой объект, в котором есть методы `.subscribe`, `.unsubscribe` и `.set`(опционально), является валидным хранилищем и будет работать как с соответствующим синтаксисом в компонентах, так и с [`производными` хранилищами](docs#derived).

Таким образом можно легко создать обертку практически для любой библиотеки управления состоянием для использования её в Svelte. Прочитайте про [контракт хранилища](docs#Store_contract) для правильной реализации подобной обертки.


#### `writable`

```js
store = writable(value: any)
```
```js
store = writable(value: any, (set: (value: any) => void) => () => void)
```

---

Функция создаёт хранилище со значениями, которые могут быть установлены 'снаружи' компонентов. Оно создаётся как объект с двумя дополнительными методами `set` и `update`.

Метод `set` принимает единственный аргумент, который является новым значением. Значение хранилища устанавливается равным ему, если оно уже не равно ему.

Метод `update` принимает единственный аргумент, который является callback-функцией. Эта функция получает в качестве параметра текущее значение хранилища и возвращает новое значение, которое должно быть присвоено значению хранилища.

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

Если в качестве второго аргумента передается функция, она вызывается, когда число подписчиков меняется с ноля на единицу (но не с одного на два и т.д.). Этой функции будет передана функция `set`, которая задаёт значение хранилища. Также она должна возвращать функцию `stop`, которая вызывается, когда счётчик подписчиков изменяется с одного на ноль.

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

#### `readable`

```js
store = readable(value: any, (set: (value: any) => void) => () => void)
```

---

Создает хранилище, значение которого нельзя установить извне. Первый аргумент задаёт начальное значение хранилища.

Второй аргумент в `readable` такой же, как второй аргумент в `writable`, за исключением того, что он является обязательным для `readable` (в противном случае не было бы возможности обновить значение хранилища).

```js
import { readable } from 'svelte/store';

const time = readable(null, set => {
	set(new Date());

	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return () => clearInterval(interval);
});
```
#### `derived`

```js
store = derived(a, callback: (a: any) => any)
```
```js
store = derived(a, callback: (a: any, set: (value: any) => void) => void | () => void, initial_value: any)
```
```js
store = derived([a, ...b], callback: ([a: any, ...b: any[]]) => any)
```
```js
store = derived([a, ...b], callback: ([a: any, ...b: any[]], set: (value: any) => void) => void | () => void, initial_value: any)
```

---

Создаёт производное хранилище, на основе одного или нескольких других хранилищ. Всякий раз, когда меняются значения отслеживаемых хранилищ, выполняется callback-функция.

В самом простом случае в `derived` передаётся одно хранилище, а из callback-функции возвращается производное значение.

```js
import { derived } from 'svelte/store';

const doubled = derived(a, $a => $a * 2);
```

---

Callback-функция может устанавливать значение асинхронно, принимая второй аргумент `set` и вызывая его при необходимости.

В этом случае,  также можно передать третий аргумент в `derived`, которое будет начальным значением производного хранилища до первого вызова метода `set`.

```js
import { derived } from 'svelte/store';

const delayed = derived(a, ($a, set) => {
	setTimeout(() => set($a), 1000);
}, 'секундочку...');
```

---

Если из callback-функции возвращается какая-либо функция, то она будет вызвана, когда callback-функция сработает снова или от хранилища отпишется последний подписчик:

```js
import { derived } from 'svelte/store';
const tick = derived(frequency, ($frequency, set) => {
	const interval = setInterval(() => {
	  set(Date.now());
	}, 1000 / $frequency);

	return () => {
		clearInterval(interval);
	};
}, 'секундочку...');
```

---

В качестве первого аргумента может быть передан массив хранилищ.

```js
import { derived } from 'svelte/store';

const summed = derived([a, b], ([$a, $b]) => $a + $b);

const delayed = derived([a, b], ([$a, $b], set) => {
	setTimeout(() => set($a + $b), 1000);
});
```

#### `get`

```js
value: any = get(store)
```

---

Обычно, нужно получить значение хранилища, подписавшись на него, затем использовать его в нужных местах, с учетом того, что оно может изменяться со временем. Иногда может понадобиться просто получить значение хранилища, на которое вы не подписывались. `get` позволяет сделать это.

> Этот метод просто подписывается на хранилище, получает значение и отписывается. Поэтому, не рекомендуется использовать его в высоконагружненых частях кода.

```js
import { get } from 'svelte/store';

const value = get(store);
```


### `svelte/motion`

Модуль `svelte/motion` экспортирует две функции, `tweened` и `spring`, для создания записываемых хранилищ, чьи значения, при изменении функциями `set` и `update`, меняются постепенно в течение какого-то количества времени, а не моментально.

#### `tweened`

```js
store = tweened(value: any, options)
```

Хранилище, которое обновляет свои значения в течение фиксированного периода времени. Доступны следующие опции:

* `delay` (`number`, по умолчанию 0) — миллисекунды до начала изменения
* `duration` (`number`, по умолчанию 400) — длительность изменения в миллисекундах
* `easing` (`function`, по умолчанию `t => t`) —  [функция плавности](docs#svelte_easing)
* `interpolate` (`function`) — смотри ниже

Методы `store.set` и `store.update` могут принимать второй аргумент `options`, который может перезаписать параметры, установленные при инициализации хранилища.

Обе функции возвращают промис, который выполняется, когда изменение завершается. Если изменение прервать, промис никогда не будет выполнен.

---

Из коробки Svelte умеет рассчитывать изменения между двумя числами, двумя массивами или двумя объектами (при условии, что массивы и объекты имеют одинаковую структуру, а все окончания ветвлений свойств также являются числами).

```sv
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
>увеличить</button>
```

---

Если начальное значение равно `undefined` или `null`, то следующее значение будет достигнуто моментально. Это полезно, когда вы получаете значение `tweened`-хранилища из свойств компонента и не хотите видеть никакого движения при первой отрисовке компонента.

```js
const size = tweened(undefined, {
	duration: 300,
	easing: cubicOut
});

$: $size = big ? 100 : 10;
```

---

Опция `interpolate` позволяет вам рассчитывать промежуточные значения между *любыми* произвольными значениями. Это должна быть функция `(a, b) => t => value`, где` a` - начальное значение, `b` - конечное значение,` t` - число от 0 до 1 и `value` это результат. Например, мы можем использовать пакет [d3-interpolate](https://github.com/d3/d3-interpolate) для плавного перехода между двумя цветами.

```sv
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

#### `spring`

```js
store = spring(value: any, options)
```

Хранилище `spring` постепенно меняет свое значение на основе параметров `stiffness`(жёсткость) и `damping`(затухание), получаются колебания по типу движения пружины. В отличие от хранилищ типа `tweened`, где значение меняется строго определенное количество времени, хранилища типа `spring` изменяют значение в течение продолжительности, которая задается их текущей скоростью, что позволяет более естественно выглядеть во многих ситуациях. Доступны следующие опции:

* `stiffness` (`number`, по умолчанию `0.15`) — значение от 0 до 1, чем больше, тем *туже пружина*
* `damping` (`number`, по умолчанию `0.8`) — значение 0 до 1, чем меньше тем *пружиннее пружина*
* `precision` (`number`, по умолчанию `0.001`) — определяет порог, при котором *колебания пружины* прекращаются, чем меньше, тем точнее

---

Как и в случае с [`tweened`](docs#tweened) хранилищами, `set` и `update` возвращают промис, который выполняется, когда колебания прекратятся. Свойства `store.stiffness` и` store.damping` могут быть изменены, даже во время колебаний и применяются немедленно.

Оба метода `set` и `update` могут принимать второй аргумент — объект со свойствами `hard` или `soft`. `{ hard: true }` устанавливает новое значение немедленно; `{ soft: n }` сохраняет существующий импульс в течение `n` секунд перед установкой значения. `{ soft: true }` эквивалентно `{ soft: 0.5 }`.



[Посмотрите полноценный пример.](tutorial/spring)

```sv
<script>
	import { spring } from 'svelte/motion';

	const coords = spring({ x: 50, y: 50 }, {
		stiffness: 0.1,
		damping: 0.25
	});
</script>
```

---

Если начальное значение равно `undefined` или `null`, то следующее значение будет достигнуто моментально, аналогично   `tweened`-хранилищу (см. выше).

```js
const size = spring();
$: $size = big ? 100 : 10;
```

### `svelte/transition`

Модуль `svelte / transition` экспортирует семь функций:` fade`, `blur`, `fly`,` slide`, `scale`,` draw` и `crossfade`. Они предназначены для использования в [`переходах`](docs#transition_fn).

#### `fade`

```sv
transition:fade={параметры}
```
```sv
in:fade={параметры}
```
```sv
out:fade={параметры}
```

---

Анимирует прозрачность элемента от 0 до установленной прозрачности для переходов `in` и от текущей прозрачности до 0 для переходов `out`.

`fade` принимает следующие параметры:

* `delay` (`number`, по умолчанию 0) — задержка до начала перехода в миллисекундах
* `duration` (`number`, по умолчанию 400) — длительность перехода в миллисекундах
* `easing` (`function`, по умолчанию `linear`) — [функция плавности](docs#svelte_easing)

Вы можете посмотреть переход `fade` в действии в соответствующем [разделе учебника](tutorial/transition).

```sv
<script>
	import { fade } from 'svelte/transition';
</script>

{#if condition}
	<div transition:fade="{{delay: 250, duration: 300}}">
		появляется и исчезает
	</div>
{/if}
```

#### `blur`

```sv
transition:blur={параметры}
```
```sv
in:blur={параметры}
```
```sv
out:blur={параметры}
```

---

Анимирует эффект размытия через фильтр `blur` и прозрачность элемента.

`blur` принимает следующие параметры:

* `delay` (`number`, по умолчанию 0) — задержка начала перехода в миллисекундах
* `duration` (`number`, по умолчанию 400) — длительность перехода в миллисекундах
* `easing` (`function`, по умолчанию `cubicOut`) — [функция плавности](docs#svelte_easing)
* `opacity` (`number`, по умолчанию 0) — значение прозрачности, конечное для `out` и начальное для `in`
* `amount` (`number`, по умолчанию 5) - величина размытия в пикселях

```sv
<script>
	import { blur } from 'svelte/transition';
</script>

{#if condition}
	<div transition:blur="{{amount: 10}}">
		появляется и исчезает
	</div>
{/if}
```

#### `fly`

```sv
transition:fly={параметры}
```
```sv
in:fly={параметры}
```
```sv
out:fly={параметры}
```

---

Анимирует позицию и прозрачность элемента. Переход появления `in` осуществляет анимацию перемещения элемента из текущей (по умолчанию) позиции на указанное в параметрах расстояние по `x` и `y`. Переход исчезновения `out`  анимирует перемещение элемента из указанной параметрами позиции в его естественное состояние.

`fly` принимает следующие параметры:

* `delay` (`number`, по умолчанию 0) — задержка начала перехода в миллисекундах
* `duration` (`number`, по умолчанию 400) — длительность перехода в миллисекундах
* `easing` (`function`, по умолчанию `cubicOut`) — [функция плавности](docs#svelte_easing)
* `x` (`number`, по умолчанию 0) — сдвиг по оси x, конечная позиция для `out` и начальная для `in`
* `y` (`number`, по умолчанию 0) — сдвиг по оси y, конечная позиция для `out` и начальная для `in`
* `opacity` (`number`, по умолчанию 0) — значение прозрачности, конечное для `out` и начальное для `in`

Вы можете посмотреть переход `fadflye` в действии в соответствующем [разделе учебника](tutorial/adding-parameters-to-transitions).

```sv
<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

{#if condition}
	<div transition:fly="{{delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut}}">
		прилетает и улетает
	</div>
{/if}
```

#### `slide`

```sv
transition:slide={параметры}
```
```sv
in:slide={параметры}
```
```sv
out:slide={параметры}
```

---

Сворачивает и разворачивает элемент.

`slide`  принимает следующие параметры:

* `delay` (`number`, по умолчанию 0) — задержка начала перехода в миллисекундах
* `duration` (`number`, по умолчанию 400) — длительность перехода в миллисекундах
* `easing` (`function`, по умолчанию `cubicOut`) — [функция плавности](docs#svelte_easing)

```sv
<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

{#if condition}
	<div transition:slide="{{delay: 250, duration: 300, easing: quintOut }}">
		разворачивается и сворачивается
	</div>
{/if}
```

#### `scale`

```sv
transition:scale={параметры}
```
```sv
in:scale={параметры}
```
```sv
out:scale={параметры}
```

---

Анимирует прозрачность и размер элемента. Переход появления `in` осуществляет анимацию элемента из текущего (по умолчанию) состояния в состояние, указанное через параметры. Переход исчезновения `out`  анимирует изменение состояния элемента из заданного параметрами в естественное состояние.

`scale`  принимает следующие параметры:

* `delay` (`number`, по умолчанию 0) — задержка начала перехода в миллисекундах
* `duration` (`number`, по умолчанию 400) — длительность перехода в миллисекундах
* `easing` (`function`, по умолчанию `cubicOut`) — [функция плавности](docs#svelte_easing)
* `start` (`number`, по умолчанию 0) — размер, конечный для `out` и начальный для `in`
* `opacity` (`number`, по умолчанию 0) — значение прозрачности, конечное для `out` и начальное для `in`

```sv
<script>
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

{#if condition}
	<div transition:scale="{{duration: 500, delay: 500, opacity: 0.5, start: 0.5, easing: quintOut}}">
		увеличивается и уменьшается
	</div>
{/if}
```

#### `draw`

```sv
transition:draw={параметры}
```
```sv
in:draw={параметры}
```
```sv
out:draw={параметры}
```

---

Анимация закрашивания элемента в SVG. Переход появления `in` начинается с невидимого элемента path, который затем постепенно закрашивается. Переход исчезновения `out` начинается с видимого элемента path, который затем постепенно стирается. `draw` работает только с элементами, у которых есть метод `getTotalLength`, например `<path>` и `<polyline>`.

`draw` принимает следующие параметры:

* `delay` (`number`, по умолчанию 0) — задержка начала перехода в миллисекундах
* `speed` (`number`, по умолчанию undefined) - скорость анимации, см. ниже
* `duration` (`number` | `function`, по умолчанию 800) — длительность перехода в миллисекундах
* `easing` (`function`, по умолчанию `cubicInOut`) — [функция плавности](docs#svelte_easing)

Параметр `speed` задаёт длительность перехода в зависимости от длины элемента path. Это модификатор, который применяется к длине пути: `длительность = длина/скорость`. Отрисовка линии в 1000 пикселей со скоростью 1 будет иметь длительность 1000мс, при `speed` равном `0.5` длительность увеличится вдвое, а при `2` — уменьшится в два раза.

```sv
<script>
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
	{#if condition}
		<path transition:draw="{{duration: 5000, delay: 500, easing: quintOut}}"
					d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
					fill="none"
					stroke="cornflowerblue"
					stroke-width="0.1px"
					stroke-linejoin="round"
		/>
	{/if}
</svg>

```


<!-- Crossfade is coming soon... -->



### `svelte/animate`

Модуль `svelte/animate` экспортирует единственную функцию, которая используется для отображения [анимации](docs#animate_fn).

#### `flip`

```sv
animate:flip={параметры}
```

Функция `flip` вычисляет начальную и конечную позиции элемента и создаёт анимацию перемещения между ними, подставляя соответствующие значения `x` и `y`. Аббревиатура `flip` расшифровывается как [First, Last, Invert, Play](https://aerotwist.com/blog/flip-your-animations/).

`flip` принимает следующие параметры:

* `delay` (`number`, по умолчанию 0) — миллисекунды до начала анимации
* `duration` (`number` | `function`, по умолчанию `d => Math.sqrt(d) * 120`) — длительность анимации, см.ниже
* `easing` (`function`, по умолчанию `cubicOut`) — [функция плавности](docs#svelte_easing)


`duration` может быть передана двумя способами:

- просто число, в миллисекундах.
- функция, `distance: number => duration: number`, которая получает расстояние в пикселях, на которое элемент должен переместится и возвращает длительность в миллисекундах. Она позволяет задавать длительность анимации для разных элементов в зависимости от расстояния перемещения для каждого из них.

---

Вы можете познакомиться с полноценным примером в [разделе учебника](tutorial/animate).


```sv
<script>
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	let list = [1, 2, 3];
</script>

{#each list as n (n)}
	<div animate:flip="{{delay: 250, duration: 250, easing: quintOut}}">
		{n}
	</div>
{/each}
```

### `svelte/easing`

Функции плавности определяют скорость изменения параметра с течением времени и полезны при работе со встроенными в Svelte переходами, анимациями и функциями `tweened` или `spring`. Модуль `svelte/easing` содержит 31 наименования — функцию линейной плавности `linear` и 10 различных функций плавности в 3 вариантах: `in`, `out` и `inOut`.

Вы можете посмотреть как работают все эти функции в [визуализаторе функций плавности](examples#easing) в [разделе примеров](examples).


| ease | in | out | inOut |
| --- | --- | --- | --- |
| **back** | `backIn` | `backOut` | `backInOut` |
| **bounce** | `bounceIn` | `bounceOut` | `bounceInOut` |
| **circ** | `circIn` | `circOut` | `circInOut` |
| **cubic** | `cubicIn` | `cubicOut` | `cubicInOut` |
| **elastic** | `elasticIn` | `elasticOut` | `elasticInOut` |
| **expo** | `expoIn` | `expoOut` | `expoInOut` |
| **quad** | `quadIn` | `quadOut` | `quadInOut` |
| **quart** | `quartIn` | `quartOut` | `quartInOut` |
| **quint** | `quintIn` | `quintOut` | `quintInOut` |
| **sine** | `sineIn` | `sineOut` | `sineInOut` |


### `svelte/register`

Чтобы отрендерить компонент Svelte в Node.js без сборки, используйте `require('svelte/register')`. После этого можно импортировать любой файл `.svelte` при помощи `require`.

```js
require('svelte/register');
const App = require('./App.svelte').default;
...
const { html, css, head } = App.render({ answer: 42 });
```

> Свойство `.default` необходимо, потому что происходит преобразование из нативных модулей JavaScript в модули CommonJS, используемые в Node. Учтите, что если в компоненте есть импорты JavaScript-модулей, то они не смогут загрузиться в Node, и тогда придётся использовать сборщик.

Чтобы установить параметры компиляции или использовать собственное расширение файла, вызовите хук `register` как функцию:

```js
require('svelte/register')({
  extensions: ['.customextension'], // по умолчанию ['.html', '.svelte']
	preserveComments: true
});
```


### API компонента на клиенте

#### Создание компонента

```js
const component = new Component(options)
```

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
| `context` | `new Map()` | `Map` пар "ключ-значение" контекста корневого уровня для передачи компоненту
| `hydrate` | `false` | См.ниже
| `intro` | `false` | Если `true`, будет отыгрывать переходы при начальной отрисовке, а не ждать последующих изменений состояния

Существующие вложенные элементы в `target` остаются там, где они есть.


---

Параметр `hydrate` инструктирует Svelte обновить существующий DOM (обычно полученный в ходе рендеринга на стороне сервера), а не создавать новые элементы. Это будет работать только в том случае, если компонент был скомпилирован с параметром [`hydratable: true`](docs#svelte_compile). Гидратация элемента `<head>` работает корректно лишь в случае, когда код на стороне сервера также был скомпилирован с параметром `hydratable: true`, который добавляет маркер каждому элементу внутри `<head>`, благодаря которому которому компонент знает какие их элементов может удалить в процессе гидратации.

Обычно при отрисовке компонента дочерние элементы в `target` остаются на месте, но когда указан параметр `hydrate: true`, они будут удалены.
По этой причине параметр `anchor` не может использоваться одновременно с `hydrate: true`.

Существующий DOM не обязан полностью совпадать с компонентом - Svelte будет 'чинить' структуру DOM по мере необходимости.

```js
import App from './App.svelte';

const app = new App({
	target: document.querySelector('#server-rendered-html'),
	hydrate: true
});
```

#### `$set`

```js
component.$set(props)
```

---

Программно устанавливает свойство экземпляру компонента. Действие `component.$set({ x: 1 })` эквивалентно присвоению `x = 1` внутри блока `<script>` компонента.

Вызов этого метода запланирует обновление в следующей микрозадаче - DOM *не* обновляется синхронно.

```js
component.$set({ answer: 42 });
```

#### `$on`

```js
component.$on(event, callback)
```

---

Вызывает функцию `callback` каждый раз когда компонент отправляет событие `event`.

Возвращает функцию, при вызове которой обработчик события удаляется.

```js
const off = app.$on('selected', event => {
	console.log(event.detail.selection);
});

off();
```

#### `$destroy`

```js
component.$destroy()
```

Удаляет компонент из DOM и запускает все имеющиеся обработчики функции `onDestroy`.

#### Свойства компонента

```js
component.prop
```
```js
component.prop = value
```

---

Если компонент скомпилирован с параметром `accessors: true`, каждый экземпляр будет иметь геттеры и сеттеры, соответствующие каждому из компонентов компонента. Установка значения приведет к *синхронному* обновлению, а не к асинхронному обновлению по умолчанию, которое вызывается методом `component.$set(...)`.

По умолчанию `accessors` имеет значение` false`, если вы не компилируете компонент как пользовательский элемент.

```js
console.log(app.count);
app.count += 1;
```


### API пользовательского элемента

---

Компоненты Svelte также могут быть скомпилированы в пользовательские элементы (или web-компоненты) с помощью параметра компилятора `customElement: true`. Вы должны указать имя тега для компонента, используя [элемент](docs#svelte_options) `<svelte:options>`.

```sv
<svelte:options tag="my-element" />

<script>
	export let name = 'мир';
</script>

<h1>Привет, {name}!</h1>
<slot></slot>
```

---

Либо используйте `tag={null}`, чтобы указать, что тот кто будет использовать этот пользовательский элемент должен сам задать имя тега.

```js
import MyElement from './MyElement.svelte';

customElements.define('my-element', MyElement);
```

---

Как только пользовательский элемент будет определён методом `define`, можно использовать его как обычный элемент DOM:

```js
document.body.innerHTML = `
	<my-element>
		<p>Вложенное содержимое</p>
	</my-element>
`;
```

---

По умолчанию пользовательские элементы компилируются с параметром `accessors: true`, то есть любые [свойства](docs#Atributy_i_svojstva) будут представлены как свойства DOM-элемента (а также, при возможности, будут доступны для чтения и записи как атрибуты).

Если это нежелательно, добавьте параметр `accessors={false}` в `<svelte:options>`.

```js
const el = document.querySelector('my-element');

// получаем текущее значение свойства 'name'
console.log(el.name);

// устанавливаем новое значение, обновляем Shadow DOM
el.name = 'everybody';
```


Компиляция в пользовательские элементы может быть полезна, если предполагается их использование не в Svelte-приложениях, поскольку они будут работать с обычными HTML и JavaScript, а также с [большинством фреймворков](https://custom-elements-everywhere.com/). Однако следует помнить о некоторых важных различиях:

* Стили полностью *инкапсулированы*, а не просто имеют *ограниченную область видимости*. Это означает, что любые стили вне компонента (например из `global.css`) не будут применяться к пользовательскому элементу, включая стили с модификатором `:global(...)`
* Стили встраиваются в компонент в виде JavaScript строки, а не выносятся в отдельный .css файл
* Пользовательские элементы обычно не подходят для отрисовки на стороне сервера, поскольку Shadow DOM невидим до загрузки JavaScript 
* В Svelte, вложенное содержимое отрисовывается *лениво*. В DOM, оно отрисовывается *сразу же*. Иначе говоря, оно всегда будет создаваться в компоненте, даже если элемент `<slot>` находится внутри блока `{#if ...}`.  Также, помещение `<slot>` в блок `{#each ...}` не приведет к множественному повтору вложенного содержимого.
* Директива `let:` не имеет никакого действия
* Для поддержки старых браузеров необходимы полифилы


### API компонента на сервере

```js
const result = Component.render(...)
```

---

В отличие от компонентов на стороне клиента, компоненты на стороне сервера не имеют такого же жизненного цикла после их рендеринга - вся их работа заключается лишь в создании HTML и CSS. По этой причине API несколько отличается.

Компонент на стороне сервера предоставляет метод `render`, который можно вызывать, передав при необходимости нужные свойства. Он возвращает объект со свойствами `head`, `html` и `css`. При этом в `head` будет помещено содержимое всех имеющихся элементов `<svelte:head>`.

```js
const App = require('./App.svelte');

const { head, html, css } = App.render({
	answer: 42
});
```

 ---

 Метод `.render()` принимает следующие параметры:

 | параметр | по умолчанию | описание |
 | --- | --- | --- |
 | `props` | `{}` | Объект свойств, предоставляемых компоненту
 | `options` | `{}` | Объект опций

 Объект `options` принимает следующие параметры:

 | параметр | по умолчанию | описание |
 | --- | --- | --- |
 | `context` | `new Map()` | `Map` пар "ключ-значение" контекста корневого уровня для передачи компоненту.

 ```js
 const { head, html, css } = App.render(
 	// props
 	{ answer: 42 },
 	// options
 	{
 		context: new Map([['context-key', 'context-value']])
 	}
 );
 ```