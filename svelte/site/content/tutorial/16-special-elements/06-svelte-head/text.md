---
title: <svelte:head>
---

Элемент `<svelte:head>` позволяет вставлять содержимое внутрь блока `<head>` вашего приложения:

```html
<svelte:head>
	<link rel="stylesheet" href="tutorial/dark-theme.css">
</svelte:head>
```


> В режиме рендеринга на стороне сервера (SSR) содержимое `<svelte:head>` возвращается отдельно от остальной части HTML разметки.