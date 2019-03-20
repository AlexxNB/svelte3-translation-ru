---
title: <svelte:body>
---

Как и в случае со `<svelte:window>`, специальный элемент `<svelte:body>` позволяет прослушивать события на объекте `document.body`. Это может пригодится при отслеживании событий `mouseenter` и `mouseleave`, которые не запускаются на объекте `window`.

Добавьте обработчики для `mouseenter` и `mouseleave` в элемент `<svelte:body>`:

```html
<svelte:body
	on:mouseenter={handleMouseenter}
	on:mouseleave={handleMouseleave}
/>
```