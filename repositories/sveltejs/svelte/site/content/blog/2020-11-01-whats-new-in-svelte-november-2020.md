---
title: Что нового в Svelte: Ноябрь 2020
description: Исправления переадресации слотов, SvelteKit для более быстрой локальной разработки и многое другое со Svelte Summit France
author: Daniel Sandoval
authorURL: https://desandoval.net
---

С возвращением в серию "Что нового в Svelte"! В этом месяце мы расскажем о новых функциях и исправлениях ошибок, о прошедшем в прошлом месяце Svelte Summit France, а также о некоторых выдающихся сайтах и ​​библиотеках ...

## Новые возможности и багфиксы

1. Destructuring Promises теперь работает должным образом, используя синтаксис `{#await}`
 (**3.29.3**, [Пример](https://svelte.dev/repl/3fd4e2cecfa14d629961478f1dac2445?version=3.29.3))
2. Проброс слотов (выпущено в 3.29.0) больше не должен зависать во время компиляции (**3.29.3**, [Пример](https://svelte.dev/repl/29959e70103f4868a6525c0734934936?version=3.29.3))
3. Улучшенная типизация для `get` функции в `svelte/store` и на хуках жизненного цикла (**3.29.1**)

**Что с Sapper?**

Sapper получил несколько новых типов в `preload` функцию, которые упростят типизацию, если вы используете TypeScript. Посмотрите в [Sapper docs](https://sapper.svelte.dev/docs#Typing_the_function) как лучше их использовать. Также были исправлены ошибки `preload` ссылок на экспортированных сайтах. Макеты маршрутов также получили несколько исправлений, в том числе обеспечение применения CSS к вложенным макетам маршрутов. Вы также можете лучше организовать свои файлы, теперь, когда поддерживаются расширения с несколькими точками. (**0.28.10**)


Все функции и исправления в CHANGELOG для [Svelte](https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md) и [Sapper](https://github.com/sveltejs/sapper/blob/master/CHANGELOG.md).


## [Svelte Summit](https://sveltesummit.com/) was Svelte-tacular!
- Рич Харрис продемонстрировал возможное будущее разработки Svelte в докладе под названием «Футуристическая веб-разработка». Еще не публичный проект называется SvelteKit (название может измениться) и принесет первоклассный опыт разработчика и большую гибкость для результатов сборки. Если вы хотите получить полную картину, [смотрите видео](https://www.youtube.com/watch?v=qSfdtmcZ4d0).
- 17 докладчиков максимально использовали виртуальный формат конференции ... От плавающих голов до бесшовных демонстраций, разработчики Svelte любого уровня подготовки найдут что-то интересное в этом году [YouTube playlist](https://www.youtube.com/playlist?list=PL8bMgX1kyZThM1sbYCoWdTcpiYysJsSeu)

---

## Community Showcase
- [Svelte Lab](https://sveltelab.app/) демонстрирует различные компоненты, визуализации и взаимодействия. Вы можете щелкнуть любой компонент, чтобы увидеть его источник или отредактировать его, используя встроенный REPL сайта.
- [svelte-electron-boilerplate](https://github.com/hjalmar/svelte-electron-boilerplate) быстрый способ начать работу с приложением Svelte, для десктопов на Electron
- [React Hooks in Svelte](https://github.com/joshnuss/react-hooks-in-svelte) демонстрирует примеры распространенных хуков React, портированных на Svelte.
- [gurlic](https://gurlic.com/) социальная сеть и интернет-эксперимент, который очень быстр благодаря Svelte
- [Interference 2020](https://interference2020.org/) визуализирует сообщения об иностранном вмешательстве в выборы в США 2020 года. Вы можете узнать больше о том, как он был встроен в [YYY's talk at Svelte Summit]()
- [jitsi-svelte](https://github.com/relm-us/jitsi-svelte) позволяет легко создавать свой собственный клиент Jitsi, предоставляя готовые компоненты, созданные с помощью Svelte
- [Ellx](https://ellx.io/) электронная таблица, записная книжка и IDE. Это супер гладко благодаря Svelte 😎
- [This New Zealand news site](https://www.nzherald.co.nz/nz/election-2020-latest-results-party-vote-electorate-vote-and-full-data/5CFVO4ENKNQDE3SICRRNPU5GZM/) разбивает результаты парламентских выборов 2020 года с помощью Svelte
- [Budibase](https://github.com/Budibase/budibase) конструктор приложений без кода, работающий на Svelte
- [Svelt-yjs](https://github.com/relm-us/svelt-yjs) сочетает в себе совместную технологию Yjs, ориентированную на локальное взаимодействие, с мощью Svelte, позволяющую нескольким пользователям в Интернете оставаться в синхронизации.
- [tabler-icons-svelte](https://github.com/benflap/tabler-icons-svelte) обёртка Svelte для более чем 850 бесплатных высококачественных SVG-иконок, под бесплатной лицензией MIT, которые вы можете использовать в своих веб-проектах.

## Увидимся в следующем месяце!

Есть, что показать? Хотите больше участвовать в Svelte? Мы всегда ищем сопровождающих, участников и фанатиков ... Ознакомьтесь с [Svelte Society](https://sveltesociety.dev/), [Reddit](https://www.reddit.com/r/sveltejs/) и [Discord](https://discord.com/invite/yy75DKs)!
