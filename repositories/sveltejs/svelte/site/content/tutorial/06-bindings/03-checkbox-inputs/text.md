---
title: Чекбоксы
---

Чекбоксы используются для переключения между двумя состояниями. Вместо привязки к `input.value`, мы привяжемся к `input.checked`:

```html
<input type=checkbox bind:checked={yes}>
```