---
title: Директива Transition
---

Мы можем сделать более привлекательные пользовательские интерфейсы, плавно отображая и скрывая элементы в DOM. В Svelte это легко реализуется при помощи директивы `transition`.

Сначала импортируйте функцию `fade` из `svelte/transition`...

```html
<script>
	import { fade } from 'svelte/transition';
	let visible = true;
</script>
```

...затем добавьте дериктиву в элемент `<p>`:

```html
<p transition:fade>Появляется и исчезает</p>
```