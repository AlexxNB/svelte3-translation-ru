---
title: Контекст модуля
---

До сих пор наши теги `<script>` выполнялись в контексте *экземпляра* компонента. Т.е. предположим, у нас есть два экземпляра компонента `Counter`...

```html
<!-- { title: 'Counter' } -->
<script>
	import Counter from './Counter.html';
</script>

<Counter/>
<Counter/>
```

```html
<!--{ filename: 'Counter.html' }-->
<script>
	let count = 0;
</script>

<button on:click="{() => count += 1}">+1</button>
```
...каждый `Counter` имеет свою собственную переменную `count`. Код запускается по одному разу для каждого из экземпляров компонента.

Иногда, вместо этого, нужно, чтобы код запускался один раз для всего *модуля компонента*. В этом нам поможет атрибут `context="module"`:

```html
<!-- { title: 'Module context' } -->
<script context="module">
	console.log(`это запустится единожды`);
	const answer = 42;
</script>

<script>
	console.log(`это запускается по разу для каждого экземпляра`);
	console.log(`тут нам 'видны' переменные модуля, например ${answer}`);
</script>
```

> Не стоит заниматься перемещением всех своих функций из контекста экземпляра в контекст модуля, чтобы предотвартить их дублирование в каждом экземпляре, ведь Svelte уже делает это за вас.


### Экспорты из модулей

Любой именованный экспорт из `<script context="module">` становится частью статического экспорта модуля. Например, чтобы определить функцию `preload` для использования с [Sapper](https://sapper.svelte.technology) можно сделать так:

```html
<!-- { title: 'Module exports', repl: false } -->
<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`/blog/${params.slug}.json`);

		return {
			post: await res.json()
		};
	}
</script>
```

```js
import BlogPost, { preload } from './BlogPost.html';
```

Вы можете создавать только именованные экспорты. Использовать `export default` не получится, потому что сам компонент *уже является* экспортом по-умолчанию.