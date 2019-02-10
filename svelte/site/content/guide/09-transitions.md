---
title: Переходы
---

Переходы позволяют элементам изящно отображаться и скрываться, а не просто появляться и исчезать.

```html
<!-- { title: 'Transitions' } -->
<script>
	import { fade } from 'svelte/transition';
	let visible = false;
</script>

<input type=checkbox bind:checked={visible}> visible

{#if visible}
	<p transition:fade>Плавно исчезаю и появляюсь</p>
{/if}
```

Переходы могут иметь параметры - обычно `delay(задержка)` and `duration(длительность)`, но у различных типов переходов бывают и другие. Например, для перехода `fly`:

```html
<!-- { title: 'Transition with parameters' } -->
<script>
	import { fly } from 'svelte/transition';
	let visible = false;
</script>

<input type=checkbox bind:checked={visible}> показать

{#if visible}
	<p transition:fly="{{y: 200, duration: 1000}}">медленно улетаю вверх на 200 пикселей</p>
{/if}
```


### Переходы появления и исчезновения

У элементов могут быть отличающиеся переходы появления `in` и исчезновения `out`:
```html
<!-- { title: 'Transition in/out' } -->
<script>
	import { fade, fly } from 'svelte-transitions';
	let visible = false;
</script>

<input type=checkbox bind:checked={visible}> показать

{#if visible}
	<p in:fly="{{y: 50}}" out:fade>прилетаю и растворяюсь</p>
{/if}
```


### Встроенные переходы

Svelte поставляется с несколькими готовыми переходами:

```html
<!-- { repl: false } -->
<script>
	import {
		fade,
		fly,
		slide,
		draw
	} from 'svelte/transition';
</script>
```


### Пользовательские переходы

Вы можете создать свой собственный переход. На самом деле переходы - это простые функции, которые принимают `узел(node)` и любые предоставленные `параметры(parameters)` и возвращают объект со следующими свойствами:

* `duration` — сколько времени занимает переход в миллисекундах
* `delay` — миллисекунды до начала перехода
* `easing` — [функция плавности](https://github.com/rollup/eases-jsnext)
* `css` — функция, принимающая аргумент `t` между 0 и 1 и возвращает стили, которые должны быть применены в этот момент
* `tick` — функция, которая будет вызываться в каждом кадре с одинаковым аргументом `t`, пока происходит переход

Из них обязательно необходимо вернуть `duration` и *хотя бы один* из `css` или `tick`. Остальные можно возвращать по желанию. 

Вот, например, как реализован переход `fade`:

```html
<!-- { title: 'Fade transition' } -->
<script>
	function fade(node, { delay = 0, duration = 400 }) {
		const o = +getComputedStyle(node).opacity;

		return {
			delay,
			duration,
			css: t => `opacity: ${t * o}`
		};
	}

	let visible = false;
</script>

<input type=checkbox bind:checked={visible}> показать

{#if visible}
	<p transition:fade>Плавно появляюсь и исчезаю</p>
{/if}
```
> При использовании опции `css`, Svelte создаст CSS-анимацию, которая запускается вне основного потока и работает более эффективно. Поэтому, при возможности, всегда используйте `css` вместо `tick`.
