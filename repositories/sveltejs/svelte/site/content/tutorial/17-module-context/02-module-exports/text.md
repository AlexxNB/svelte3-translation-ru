---
title: Экспорты
---

Все, что экспортируется из блока скрипта `context="module"`, становится экспортом из самого модуля. Если мы экспортируем функцию `stopAll` из `AudioPlayer.svelte`...

```html
<script context="module">
	const elements = new Set();

	export function stopAll() {
		elements.forEach(element => {
			element.pause();
		});
	}
</script>
```

...то можем затем импортировать её в `App.svelte`...

```html
<script>
	import AudioPlayer, { stopAll } from './AudioPlayer.svelte';
</script>
```

...и использовать как обработчик события:

```html
<button on:click={stopAll}>
	остановить всё
</button>
```

> Вы не сможете сделать `default export`, потому что *сам компонент* уже является экспортом по-умолчанию.