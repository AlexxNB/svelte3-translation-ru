---
title: "Что нового в Svelte: Декабрь 2020"
description: Улучшенный инструментарий, экспорт карт и улучшения слотов и контекста
author: Daniel Sandoval
authorURL: https://desandoval.net
---

Это последнее «Что нового в Svelte» в этом году, и есть что отпраздновать! Обзор этого месяца включает обновления от `rollup-plugin-svelte`, `Sapper` и `SvelteKit` а также множество демонстраций от сообщества Svelte!

## Новые возможности и багфиксы

1. `$$props`, `$$restProps`, и `$$slots` все теперь поддерживаются в пользовательских веб-компонентах (**3.29.5**, [Пример](https://svelte.dev/repl/ad8e6f39cd20403dacd1be84d71e498d?version=3.29.5)) и `slot` компонентов теперь поддерживают rest props: `<slot {...foo} />` (**3.30.0**)
2. Новая функция жизненного цикла `hasContext` позволяет легко проверить, был ли установлен `key` в контексте родительского компонента (**3.30.0** & **3.30.1**, [Docs](https://svelte.dev/docs#hasContext))
3. Теперь существует новый класс  `SvelteComponentTyped` который упрощает добавление строго типизированных компонентов, расширяющих базовые компоненты Svelte. Авторы библиотеки компонентов и фреймворка радуются! Пример: `export class YourComponent extends SvelteComponentTyped<{aProp: boolean}, {click: MouseEvent}, {default: {aSlot: string}}> {}` (**3.31.0**, [RFC](https://github.com/sveltejs/rfcs/pull/37))
4. Переходы внутри `{:else}` блока теперь должны успешно завершаться (**3.29.5**, [Example](https://svelte.dev/repl/49cef205e5da459594ef2eafcbd41593?version=3.29.5))
5. Svelte теперь включает карту экспорта, в которой явно указано, какие файлы можно импортировать из его пакета npm (**3.29.5** с некоторыми исправлениями в **3.29.6**, **3.29.7** и **3.30.0**)
6. `rollup-plugin-svelte` был новый [7.0.0 release](https://github.com/sveltejs/rollup-plugin-svelte/blob/master/CHANGELOG.md). Самым большим изменением является удаление опции  `css`. Пользователи, которые использовали эту опцию, должны добавить еще один плагин, например  `rollup-plugin-css-only` как показано [in the template](https://github.com/sveltejs/template/blob/5b1135c286f7a649daa99825a077586655051649/rollup.config.js#L48)


## Что с Sapper?
Множество новых улучшений определений TypeScript, которые делают редактирование приложений Sapper еще проще! CSS для динамического импорта теперь также должен работать в файлах`client.js` files. (Unreleased)

## В чем дело со SvelteKit?
Мы рады, что вы спросили! Если вы не видели сообщение в блоге Рича в начале прошлого месяца, [вы можете найти его тут](https://svelte.dev/blog/whats-the-deal-with-sveltekit)!

Чтобы узнать обо всех функциях и исправлениях, см. CHANGELOGs [Svelte](https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md) и [Sapper](https://github.com/sveltejs/sapper/blob/master/CHANGELOG.md).

---

## Community Showcase

**Apps & Sites**
- [narration.studio](https://narration.studio/) (Только для Chrome) - это платформа для автоматической записи и редактирования звука в браузере для озвучивания.
- [Vippet](https://vippet.netlify.app/) инструмент для записи и редактирования видео в браузере.
- [Pattern Monster](https://pattern.monster/) простой онлайн-генератор шаблонов для создания повторяемых шаблонов SVG.
- [Plant-based diets](https://planetbaseddiets.panda.org/) веб-сайт Всемирного фонда дикой природы (WWF), созданный с помощью Svelte.
- [johnells.se](https://www.johnells.se/) шведский сайт электронной коммерции модной одежды, созданный с помощью [Crown](https://crownframework.com/) - фреймворка на базе Svelte.
- [sentence-length](https://sentence-length.netlify.app/) инструмент обучения и анализа, чтобы показать, как одни авторы играют с разной продолжительностью, в то время как другие придерживаются одной.
- [svelte-presenter](https://github.com/stephane-vanraes/svelte-presenter) позволяет быстро создавать красивые презентации с помощью Svelte и mdsvex.

**Demos**
- [u/loopcake got SSR working in Java Spring Boot](https://www.reddit.com/r/sveltejs/comments/jkh5up/svelte_ssr_but_its_java_spring_boot_and_its_native/) для всех магазинов Java, которые хотят рендерить Svelte на стороне сервера.
- [svelte-liquid-swipe](https://github.com/tncrazvan/svelte-liquid-swipe) демонстрирует причудливый шаблон взаимодействия с использованием путей svg.
- [Crossfade Link Animation](https://svelte.dev/repl/7f68e148caf04b2787bb6f296208f870?version=3.29.7) демонстрирует, как анимировать между навигационными ссылками с помощью кроссфейда (made by Blu, from the Discord community)
- [Clip-Path Transitions](https://svelte.dev/repl/b5ad281ae8024b629b545c70c9e8764d?version=3.29.7) демонстрирует, как использовать траектории клипа и пользовательские переходы для создания волшебных входов и выходов (made by Faber, from the Discord community)

**Learning Resources**
- [lihautan](https://www.youtube.com/channel/UCbmC3HP3FaAFdcZkui8YoMQ/featured) делает простые видеоролики, чтобы поделиться своими глубокими знаниями о Svelte.
- [Lessons From Building a Static Site Generator](https://nicholasreese.com/lessons-from-building-a-static-site-generator/) делится предысторией и идеями, лежащими в основе Elder.js, а также дизайнерскими решениями, принятыми на этом пути.
- [Svelte Tutorial and Projects Course ](https://www.udemy.com/course/svelte-tutorial-and-projects-course/) это udemy курс Джона Смилги, в котором студенты изучают Svelte.js, создавая интересные проекты.
- [Building Pastebin on IPFS - with FastAPI, Svelte, and IPFS](https://amalshaji.wtf/building-pastebin-on-ipfs-with-fastapi-svelte-and-ipfs) объясняет, как сделать распределенное приложение, подобное pastebin.


**Components, Libraries & Tools**
- [svelte-crossword](https://russellgoldenberg.github.io/svelte-crossword/) настраиваемый компонент кроссворда для Svelte.
- [svelte-cloudinary](https://github.com/cupcakearmy/svelte-cloudinary) упрощает интеграцию Cloudinary со Svelte (включая поддержку Typescript и SSR)
- [Svelte Nova](https://extensions.panic.com/extensions/sb.lao/sb.lao.svelte-nova/) расширяет новый редактор Nova для поддержки Svelte
- [saos](https://github.com/shiryel/saos) небольшой изящный компонент для анимации ваших элементов при прокрутке.
- [Svelte-nStore](https://github.com/lacikawiz/svelte-nStore) замена стора общего назначения, которая выполняет контракт стора Svelte и добавляет функции получения и вычисления.
- [svelte-slimscroll](https://github.com/MelihAltintas/svelte-slimscroll) Svelte Action, который преобразует любой div в прокручиваемую область с красивой полосой прокрутки.
- [svelte-typewriter](https://github.com/henriquehbr/svelte-typewriter) простой и многоразовый эффект пишущей машинки для ваших приложений Svelte
- [svelte-store-router](https://github.com/zyxd/svelte-store-router) маршрутизатор на основе хранилища для Svelte, который предполагает, что маршрутизация - это просто еще одно глобальное состояние, а изменения History API - просто необязательные побочные эффекты этого состояния.
- [Routify](https://routify.dev/blog/routify-2-released) только что выпустила версию 2 своего роутера Svelte.
- [svelte-error-boundary](https://www.npmjs.com/package/@crownframework/svelte-error-boundary) предоставляет простой компонент границы ошибок для Svelte, который можно использовать как с DOM, так и с целями SSR.
- [svelte2dts](https://www.npmjs.com/package/svelte2dts) генерирует файлы d.ts из файлов svelte, создавая по-настоящему совместимые и хорошо типизированные компоненты.

## Увидимся в следующем месяце!

Есть, что показать? Хотите больше участвовать в Svelte? Мы всегда ищем сопровождающих, участников и фанатиков ... Ознакомьтесь с [Svelte Society](https://sveltesociety.dev/), [Reddit](https://www.reddit.com/r/sveltejs/) и [Discord](https://discord.com/invite/yy75DKs)!

Вот и все на год, ребята! Увидимся в январе 😎
