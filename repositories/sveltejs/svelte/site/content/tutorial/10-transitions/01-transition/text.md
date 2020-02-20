---
title: Директива transition
---

Мы можем сделать пользовательские интерфейсы привлекательнее, плавно отображая и скрывая элементы в DOM. В Svelte это легко реализуется при помощи директивы `transition`.

Сначала импортируйте функцию `fade` из `svelte/transition`...

```html
<script>
	import { fade } from 'svelte/transition';
	let visible = true;
</script>
```

...затем добавьте директиву в элемент `<p>`:

```html
<p transition:fade>Появляется и исчезает</p>
```
