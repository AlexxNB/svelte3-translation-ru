---
title: Специальные элементы
---

Svelte включает в себя несколько встроенных элементов с особыми возможностями.


### `<svelte:self>`

Бывают случаи, когда компонент должен рекурсивно встроить сам в себя - например, если вам нужно отобразить древовидную структуру данных. В Svelte это можно осуществить с помощью тега `<svelte:self>`:

```html
<!-- { title: '<svelte:self> tags' } -->
{#if countdown > 0}
	<p>{countdown}</p>
	<svelte:self countdown="{countdown - 1}"/>
{:else}
	<p>Поехали!</p>
{/if}
```

```json
/* { hidden: true } */
{
	countdown: 5
}
```


### `<svelte:component>`

Когда вы заранее не знаете, какой компонент необходимо отразить, пока приложение не запустится, вы можете использовать `<svelte: component>`. В этом случае рендеринг того или иного компонента будет задаваться через состояние данных, это называется - динамический компонент:

```html
<!-- { title: '<svelte:component> tags' } -->
<script>
	import Red from './Red.html';
	import Blue from './Blue.html';

	let foo = true;
</script>

<input type=checkbox bind:checked={foo}> foo
<svelte:component this="{foo ? Red : Blue}" name="штука"/>
```

```html
<!--{ hidden: true, filename: 'Red.html' }-->
<p style="color: red">Красная {name}</p>
```

```html
<!--{ hidden: true, filename: 'Blue.html' }-->
<p style="color: blue">Синяя {name}</p>
```

Выражение внутри тега `this="{...}"` может быть любым валидным JavaScript выражением.


### `<svelte:window>`

Тег `<svelte:window>` дает вам удобный способ добавлять прослушиватели событий в `window`, которые затем автоматически удаляются при уничтожении компонента.

```html
<!-- { title: '<svelte:window> tags' } -->
<svelte:window on:keydown="{e => (key = event.key, keyCode = e.keyCode)}"/>

<style>
	kbd {
		background-color: #eee;
		border: 2px solid #f4f4f4;
		border-right-color: #ddd;
		border-bottom-color: #ddd;
		font-size: 2em;
		margin: 0 0.5em 0 0;
		padding: 0.5em 0.8em;
		font-family: Inconsolata;
	}
</style>

{#if key}
	<p><kbd>{key === ' ' ? 'Пробел' : key}</kbd> (код {keyCode})</p>
{:else}
	<p>кликните в это окно и нажмите любую клавишу</p>
{/if}
```

You can also bind to certain values — so far `innerWidth`, `outerWidth`, `innerHeight`, `outerHeight`, `scrollX`, `scrollY` and `online`:
Вы также можете привязаться к определенным значениям объекта `window`: `innerWidth`, `outerWidth`, `innerHeight`, `outerHeight`, `scrollX`, `scrollY` и `online`:

```html
<!-- { title: '<svelte:window> bindings' } -->
<svelte:window bind:scrollY={y}/>

<style>
	.background {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 9999px;
		background: linear-gradient(to bottom, #7db9e8 0%,#0a1d33 100%);
	}

	.fixed {
		position: fixed;
		top: 1em;
		left: 1em;
		color: white;
	}
</style>

<div class="background"></div>
<p class="fixed">пользователь прокрутил на {y} пикселей</p>
```


### `<svelte:body>`

Тег `<svelte:body>`, так же как `<svelte:window>`, дает вам удобный способ добавления прослушивателей событий к объекту `document.body`. Это полезно для прослушивания событий, которые не запускаются в `window`, таких как`mouseenter` и `mouseleave`.


### `<svelte:head>`

Когда вы создаете приложение с помощью Svelte (особенно с использованием [Sapper](https://sapper.svelte.technology)), вероятно, вам потребуется добавить некоторый контент в элемент `<head>` на вашей странице.

Например, при помощи специального элемента `<svelte:head>` можно добавить элемент `<title>`:

```html
<!-- { title: '<svelte:head> tags' } -->
<svelte:head>
	<title>{post.title} • Мой блог</title>
</svelte:head>
```

При [серверном рендеринге](guide#server-side-rendering), содержимое элемента `<head>` может быть извлечено отдельно от остальной части разметки.
