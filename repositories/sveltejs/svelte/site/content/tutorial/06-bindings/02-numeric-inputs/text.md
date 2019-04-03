---
title: Числовые поля
---

В DOM всё имеет тип строки. Это мешает, когда дело доходит до числовых полей — `type="number"` и `type="range"` — приходится помнить, что нужно принудительно вызывать `input.value` перед использованием значения.

Но при использовании `bind:value`, Svelte позаботится об этом за вас:

```html
<input type=number bind:value={a} min=0 max=10>
<input type=range bind:value={a} min=0 max=10>
```