---
title: Привязки к <svelte:window>
---

Мы также можем сделать привязки к определенным свойствам объекта `window`, например, к `scrollY`. Отредактируйте строку №7:

```html
<svelte:window bind:scrollY={y}/>
```

Полныый список свойств, к которым можно првязаться:

* `innerWidth`
* `innerHeight`
* `outerWidth`
* `outerHeight`
* `scrollX`
* `scrollY`
* `online` — сокращение для `window.navigator.onLine`

Все свойства, кроме `scrollX` и `scrollY`, доступны только для чтения