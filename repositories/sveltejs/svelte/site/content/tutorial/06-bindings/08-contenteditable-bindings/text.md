---
title: Блоки с редактируемым содержимым
---

Элементы с атрибутом `contenteditable="true"` поддерживают привязки `textContent` и `innerHTML`:

```html
<div
	contenteditable="true"
	bind:innerHTML={html}
></div>
```