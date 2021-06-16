---
title: "Что нового в Svelte: Октябрь 2020"
description: Новые методы объектов, ресурсы для углубленного изучения и множество примеров интеграции!
author: Daniel Sandoval
authorURL: https://desandoval.net
---

Добро пожаловать в первый выпуск нашей серии «Что нового в Svelte»! Мы постараемся сделать это ежемесячным сообщением в блоге, в котором вы будете узнавать о новых функциях, исправлениях ошибок и демонстрации проектов Svelte со всего сообщества.

## Новые возможности
1. `use:obj.method` позволяет функциям, определенным в объектах, использоваться в действиях ([Пример](https://svelte.dev/repl/c305722adb4a4545b27b198ea8ff9bde?version=3.27.0), **3.26.0**, предупреждение удалено в **3.27.0**)
2. `_` теперь поддерживается как «числовой разделитель», аналогично `.` или `,` ([Пример](https://svelte.dev/repl/844c39e91d1248649fe54af839fab570?version=3.26.0), **3.26.0**)
3. `import.meta` теперь работает в шаблонных выражениях ([Пример](https://svelte.dev/repl/9630de41957a4c80a4fce264360a6bc7?version=3.26.0), **3.26.0**)
4. Селекторы CSS с комбинаторами `~` и `+` теперь поддерживаются ([Пример](https://svelte.dev/repl/91ad9257d2d1430185a504a18cc60172?version=3.29.0), **3.27.0**, с исправлением компилятора в **3.29.0**)
5. Блок `{#key}` теперь доступен для ввода произвольного содержимого в выражение. При изменении выражения содержимое внутри блока `{#key}` будет уничтожено и создано заново. Подробное объяснение, как это реализовано, читайте в [статье](https://lihautan.com/contributing-to-svelte-implement-key-block/)  участника Svelte Team Tan Li Hau. ([Подробнее](https://github.com/sveltejs/svelte/issues/1469), **3.29.0**)
6. Теперь слоты можно перенаправлять через дочерние компоненты! Раньше это было возможно только с дополнительной оберткой `<div>` ([Подробнее](https://github.com/sveltejs/svelte/issues/2079), **3.29.0**)
7. При использовании TypeScript теперь вы можете использовать метод `createEventDispatcher`:
```html
<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher<{
        /**
         * you can also add docs
         */
        checked: boolean; // Will translate to `CustomEvent<boolean>`
        hello: string;
    }>();

    // ...
</script>
```
Это гарантирует, что вы можете вызывать отправку только с указанными именами событий и их типами. Расширение Svelte для VS Code также было обновлено с учетом этой новой функции. Оно обеспечит строгую типизацию для этих событий, а также подсказки для автодополнения и при наведении курсора.

**Новое в Sapper!**
Только что вышел Sapper 0.28.9. Основные новшества: лучшая поддержка атрибута `nonce` для CSP, поддержка предварительной загрузки ресурсов для экспортированных страниц и сведения об ошибках, которые теперь доступны в хранилище `$page` на страницах ошибок.

Кроме того, переписана обработка CSS, чтобы исправить существующие ошибки, теперь CSS обрабатывается отдельным плагином Rollup, что устранило необходимость внутренней регистрации CSS в системе маршрутизации. Поздравляем и благодарим всех, кто работает над Sapper, за их солидную работу!


## Багфиксы
- Компиляция CSS больше не удаляет правила для атрибута `open` в элементах `<details>` ([Пример](https://svelte.dev/repl/ab4c0c177d1f4fab92f46eb8539cea9a?version=3.26.0), **3.26.0**)
- `prettier-plugin-svelte` теперь будет лучше справляться с пробелами, особенно вокруг встроенных элементов. Он также сохранит форматирование внутри тегов `<pre>` и больше не будет форматировать языки, которые не поддерживаются Prettier, такие как SASS, Pug или Stylus.


## Скоро
- [Svelte Summit](https://sveltesummit.com/), Вторая глобальная онлайн-конференция Svelte состоится 18 октября! Зарегистрируйтесь бесплатно, чтобы получать напоминания и обсуждать обновления!

Чтобы узнать обо всех функциях и исправлениях, см. CHANGELOG для [Svelte](https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md) и [Sapper](https://github.com/sveltejs/sapper/blob/master/CHANGELOG.md).


---

## Svelte Showcase
- [This CustomMenu example](https://svelte.dev/repl/3a33725c3adb4f57b46b597f9dade0c1?version=3.25.0) демонстрации того, как заменить контекстное меню браузера
- [Github Tetris](https://svelte.dev/repl/cc1eaa7c66964fedb5e70e3ecbbaa0e1?version=3.25.1) тетрис, в истории коммитов git
- [Who are my representatives?](https://whoaremyrepresentatives.us/) веб-сайт, созданный с помощью Svelte, чтобы помочь жителям США получить больше информации о своих представителях в Конгрессе
- [Pick Palette](https://github.com/bluwy/pick-palette) крутой менеджер цветовой палитры, созданный с помощью Svelte!

#### Обучение:
- [Svelte 3 Up and Running](https://www.amazon.com/dp/B08D6T6BKS/ref=cm_sw_r_tw_dp_x_OQMtFb3GPQCB2) новая книга о создании готовых к работе статических веб-приложений с помощью Svelte 3
- [Sapper Tutorial (Crash Course)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gdr4Qhx83gBBcID-KMe-PQ) подробно рассказывает о Sapper, фреймворке для приложений на базе Svelte.
- [Svelte Society Day France](https://france.sveltesociety.dev/) 27 сентября мы обсудили самые разные темы на французском языке! Вы можете найти полную запись [здесь](https://www.youtube.com/watch?v=aS1TQ155JK4).

#### Переиспользуемые компоненты:
- [svelte-zoom](https://github.com/vaheqelyan/svelte-zoom) обеспечивает "почти родное" панорамирование и масштабирование изображений на компьютерах и мобильных устройствах.
- [svelte-materialify](https://github.com/TheComputerM/svelte-materialify) библиотека Material компонентов для Svelte с более чем 50 компонентами
- [svelte-undoable](https://github.com/macfja/svelte-undoable) упрощает операции отмены и повтора с помощью `bind:`
- [This Tilt component](https://svelte.dev/repl/7b23ad9d2693424482cd411b0378b55b?version=3.24.1) при наведлении мыши элемент наклоняется в перспективе следуя за мышью

#### В этом месяце появилось множество примеров использования технологии JS:
  - [Sapper with PostCSS and Tailwind](https://codechips.me/sapper-with-postcss-and-tailwind/)
  - [PrismJS (Code block syntax highlighting)](https://github.com/phptuts/Svelte-PrismJS)
  - [Filepond (Drag-and-drop file upload)](https://github.com/pqina/svelte-filepond)
  - [Ionic (UI Components)](https://github.com/Tommertom/svelte-ionic-app)
  - [Pell (WYSIWYG Editor)](https://github.com/Demonicious/svelte-pell/)
  - [Leaflet (Mapping)](https://github.com/anoram/leaflet-svelte)

**Напоминание**: [Svelte integrations repo](https://github.com/sveltejs/integrations) который демонстрирует способы включения Svelte в ваш стек (и наоборот). Если у вас есть вопросы о том, как использовать определенную технологию со Svelte, вы можете найти там свой ответ ... и если у вас есть что-то для работы со Svelte, подумайте об участии!

Чтобы увидеть больше потрясающих проектов Svelte, посетите [Svelte Society](https://sveltesociety.dev/), [Reddit](https://www.reddit.com/r/sveltejs/) и [Discord](https://discord.com/invite/yy75DKs)… и обязательно разместите свой пост!

## Увидимся в следующем месяце!

Кстати, у Svelte теперь есть [OpenCollective](https://opencollective.com/svelte)! и все расходы публикуются публично. Узнайте, кто жертвует, сколько, куда идут эти деньги, укажите расходы, получите возмещение и многое другое!
