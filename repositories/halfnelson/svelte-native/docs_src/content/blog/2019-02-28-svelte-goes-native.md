---
title: Нативные приложения на Svelte
description: Svelte и NativeScript теперь вместе
pubdate: 2019-02-28
author: Halfnelson
authorURL: https://twitter.com/halfnelson_au/
---

Svelte — это веб-фреймворк следующего поколения, который компилирует код вашего компонента в быстрые, эффективные манипуляции с DOM на ванильном JavaScript.

Nativescript предоставляет доступ к нативным API iOS как к ванильным объектам JavaScript.

Svelte Native — это библиотека, в которой к визуальным компонентам NativeScripts предоставляется доступ как к DOM элементам, которыми могут управлять компоненты Svelte.

![nativescript + svelte = svelte-native](/logos_combined.svg)


### Но разве NativeScript уже не предлагает поддержку Vue и Angular?

Предлагает!, и они даже поддерживаются разработчиками NativeScript. Однако, сочетание крошечного размера  Svelte-приложений, лаконичности кода компонентов и сверхэффективного обновлений DOM дают нам уникальный набор, который кажется очень подходящим для мобильной разработки.


### На что это похоже

```html
<page xmlns="tns" class="page">
    <actionBar title="Нативное приложение Svelte" class="action-bar" />
    <stackLayout class="p-20">
        <label text="Нажми кнопку" class="h1 text-center" />
        <button text="TAP" on:tap="{ () => counter-- }" class="btn btn-primary btn-active" />
        <label class="h2 text-center" textWrap="true">{message}</label>
    </stackLayout>
</page>

<script>
    let counter = 42;
    let message;
    $: message = (counter <= 0)
                    ? "Ю-у-у-х-у! Вы разблокировали достижение — Кликер Svelte-Native!"
                    : `Осталось нажатий: ${counter}`
</script>
```

Чтобы начать работу со Svelte-Native, почитайте [Документацию](/docs) или пройдите уроки в [Учебнике](/tutorial).

