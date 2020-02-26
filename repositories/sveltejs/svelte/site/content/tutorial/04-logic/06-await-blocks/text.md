---
title: Блок await
---


Большинство веб-приложений работают с асинхронными данными. Svelte позволяет прямо в разметке использовать оператор `await`, который в JavaScript *ожидает* ответ от [промисов](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Ispolzovanie_promisov):

```html
{#await promise}
	<p>...подождите</p>
{:then number}
	<p>Число равно {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
```

> Выводится только один сработавший `promise`, так что вам не нужно беспокоиться о появлении [состояния гонки](https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B5_%D0%B3%D0%BE%D0%BD%D0%BA%D0%B8).

Если вы уверены, что ваш промис не вернёт ошибку — можете не использовать блок `catch`. Также можно не писать первый блок, если не нужно ничего показывать пока промис не вернёт значение:

```html
{#await promise then value}
	<p>Число равно {value}</p>
{/await}
```
