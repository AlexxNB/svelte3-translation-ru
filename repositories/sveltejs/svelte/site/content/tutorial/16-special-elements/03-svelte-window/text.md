---
title: <svelte:window>
---

Вы можете добавлять обработчики событий не только к любому элементу в DOM, но и к объекту `window`, используя специальный элемент `<svelte:window>`.

В строке №33, добавьте обработчик для события `keydown`:

```html
<svelte:window on:keydown={handleKeydown}/>
```