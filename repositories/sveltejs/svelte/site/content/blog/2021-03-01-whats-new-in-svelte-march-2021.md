---
title: "Что нового в Svelte: Март 2021"
description: Приглашаем спикеров Svelte Summit! Улучшенный SSR, цели компиляции, отличные от HTML5, и поддержка ESLint TypeScript.
author: Daniel Sandoval
authorURL: https://desandoval.net
---

В этом месяце есть что рассказать о выпусках по всей экосистеме Svelte. Самое главное, что у Svelte Summit Spring 2021 есть [Open Call for Speakers](https://sessionize.com/svelte-summit-spring-2021). **Крайний срок - 14 марта**, так что если у вас есть идея для выступления, отправьте ее сейчас!

Погрузимся в новости 🐬

## Что нового в `sveltejs/svelte`
* Обработка хранилища SSR была переработана для подписки и отказа от подписки, в режиме DOM. SSR-сторы теперь должны работать намного более стабильно (**3.31.2**, see [custom stores](https://svelte.dev/examples#custom-stores) and [Server-side component API ](https://svelte.dev/docs#Server-side_component_API))
* Теперь для элемента разрешено несколько экземпляров одного и того же действия (**3.32.0**, [example](https://svelte.dev/repl/01a14375951749dab9579cb6860eccde?version=3.32.0))
* Новое `foreign` пространство имен должно упростить использование альтернативных целей компиляции (таких как Svelte Native и SvelteGUI) за счет отключения определенного специфичного для HTML5 поведения и проверок. (**3.32.0**, [more info](https://github.com/sveltejs/svelte/pull/5652))
* Поддержка встроенных исходных карт комментариев в коде препроцессоров (**3.32.0**)
* Деструктурированные значения по умолчанию теперь могут ссылаться на другие переменные (**3.33.0**, [example](https://svelte.dev/repl/0ee7227e1b45465b9b47d7a5ae2d1252?version=3.33.0))
* Пользовательские элементы теперь будут вызывать функции `onMount` при подключении и очищать при отключении. [this PR](https://github.com/sveltejs/svelte/pull/4522) для интересного разговора о том, как люди используют Svelte с веб-компонентами)
* Параметр `cssHash` был добавлен в параметры компилятора для управления именем класса, используемым для области видимости CSS. (**3.34.0**, [docs](https://svelte.dev/docs#svelte_compile))
* Постоянное улучшение определений TypeScript

Полный список изменений, включая исправления ошибок и ссылки на PR, см. в [CHANGELOG](https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md)


## Новинки от `sveltejs/language-tools`

- Для клиентов языковых серверов, которые не поддерживают `didChangeWatchedFiles`, вместо этого будет использоваться средство отслеживания резервных файлов.
- Новые правила выделения для аксессоров хранилища и директив элементов (например, `bind:` и `class :`)
- HTML-теги теперь можно переименовывать вместе
- Синтаксический анализ тегов Mustache tags стал более надежным и обеспечит лучший интеллект в большем количестве ситуаций.

Еще не пробовали языковые инструменты? Проверьте [Svelte Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) или найдите плагин для своей любимой IDE!

## Другие изменения от `sveltejs/*`

- [eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3) теперь поддерживает TypeScript с версии 3.1.0
- [prettier-plugin-svelte](https://github.com/sveltejs/prettier-plugin-svelte/) выпустил ряд второстепенных версий для устранения проблем с обрезкой пробелов и комментариев.
- [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess/) bug fixes this month include fixes to postcss transformations and support for both v2 and v3 of `postcss-load-config`
- [sapper](https://github.com/sveltejs/sapper/)'s В выпуске 0.29.1 исправлены некоторые неправильные импорты в определениях типов, обновлены типизации для совместимости с экспресс / полькой и восстановлено хеширование всех имен файлов CSS.

---

## Community Showcase

**Apps & Sites**

- [Tracking the Coronavirus](https://www.nytimes.com/interactive/2021/us/new-york-city-new-york-covid-cases.html) от NYTimes - это пример SvelteKit в производстве
- [Budibase](https://github.com/Budibase/budibase) платформа с открытым исходным кодом и низким уровнем кода, помогающая разработчикам и ИТ-специалистам создавать, автоматизировать и поставлять внутренние инструменты в 50 раз быстрее в своей собственной инфраструктуре
- [Track the Parcel](https://tracktheparcel.com/) универсальный инструмент для отслеживания статуса посылки со всеми основными отправителями посылок.
- [Memo](https://sendmemo.app/features/) замена электронной почты, которая использует Svelte для современного обмена сообщениями.
- [Userscripts Safari](https://github.com/quoid/userscripts) редактор пользовательских скриптов с открытым исходным кодом для Safari ... нативное приложение Svelte для Mac OS!
- [SVGX](https://svgx.app/) "настольный SVG-менеджер ресурсов, которого хотели бы видеть дизайнеры и разработчики".
- [Armoria](https://azgaar.github.io/Armoria/) генератор и редактор процедурной геральдики
- [FictionBoard](https://www.fictionboard.com) представляет собой платформу виртуальной столешницы (VTT), которая только что выпустила заполняемые и отзывчивые листы персонажей
- [Castles & Crusades Treasure Generator](https://treasure.playaheadgames.com/) генератор сокровищ для настольной ролевой игры: Castles and Crusades.
- [NESBit Studio](https://jensa.org/NESBitStudio-web/graphics/spritesheets) набор инструментов, помогающий разрабатывать самодельные игры для NES.
- [ElectroBlocks](https://electroblocks.org/) онлайн-среда разработки Arduino со встроенным симулятором (только для Chrome)
- [Goblin.life](https://store.steampowered.com/app/552180/GoblinLife/) конструктор трехмерного мира, пользовательский интерфейс которого построен с помощью Svelte.
- [farmbox](https://farmbox.ae/) служба доставки продуктов в ОАЭ
- [heroeswearmasks.fun](https://heroeswearmasks.fun/) инструмент машинного обучения на стороне клиента, который определяет, носите ли вы маску или нет.
- [weatherify](https://brdtheo-weatherify.netlify.app/) очень красивое  (и [open source](https://github.com/brdtheo/weatherify)) погодное приложение
- [DSN Live](https://dsn-live.netlify.app/#/) позволяет отслеживать связи между NASA / JPL и миссиями межпланетных космических кораблей в режиме реального времени.



**Demos, Libraries, Tools & Components**

- [spc](https://github.com/khang-nd/spc) компонент выбора специальных символов для Интернета
- [svelte-injector](https://www.npmjs.com/package/svelte-injector) позволяет внедрять компоненты Svelte в React, Angular, Vue, jQuery, Vanilla JS.
- [Felte](https://felte.dev/) библиотека форм для Svelte с простой проверкой отчетов.
- [svelte-use-form](https://github.com/noahsalvi/svelte-use-form#readme) s, которая «проста в использовании и не имеет шаблонов».
- [Formula](https://formula.svelte.codes/) предоставляет «Реактивные формы с нулевой конфигурацией для Svelte».
- [Houdini](https://github.com/AlecAivazis/houdini) «исчезающий клиент GraphQL, созданный для Sapper и Sveltekit»
- [svelte-split-pane](https://www.reddit.com/r/sveltejs/comments/leoe33/sveltesplitpane/) перетаскиваемый компонент с разделенной панелью
- [svelte-virtualized-auto-sizer](https://github.com/micha-lmxt/svelte-virtualized-auto-sizer) компонент высшего порядка, который автоматически регулирует ширину и высоту одного дочернего элемента.
- [svelte-window](https://github.com/micha-lmxt/svelte-window) компоненты для эффективной визуализации больших прокручиваемых списков и табличных данных.
- [Svelte Persistent store](https://github.com/MacFJA/svelte-persistent-store) стор Svelte, который сохраняет свои значения через страницы и перезагружает
- [Svelte Dark](https://marketplace.visualstudio.com/items?itemName=NickScialli.svelte-dark) тема VSCode, вдохновленная REPL svelte.dev
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) был обновлен, чтобы поддерживать библиотеки Svelte и помогать разработчикам контролировать размер своих пакетов.
- [Tree-sitter-svelte](https://github.com/Himujjal/tree-sitter-svelte) предоставляет древовидную грамматику для svelte
- [Svelte Ripple](https://svelte.dev/repl/b73224a0fd4248178e3eab41943d41a9?version=3.31.2) эффект пульсации в материальном дизайне, который не зависит от `@material/ripple` (made by @karakara in the Svelte Discord)
- [Analog SVG Clock](https://svelte.dev/repl/270e83f43e7a48918d8f2d497760904f?version=3.32.1) отличный пример функций ослабления (made by @tonmcg in the Svelte Discord)
- [Console Log Styler](https://svelte.dev/repl/11f609d0d90746f08da6d3d90bba84fc?version=3.32.0) позволяет создавать стилизованный консольный журнал с использованием псевдо-HTML и CSS. (made by @EmNudge in the Svelte Discord)
- [svelte-heroicons](https://github.com/martinse/svelte-heroicons) удобная оболочка для библиотеки значков Heroicons
- [supabase-ui-svelte](https://github.com/joshnuss/supabase-ui-svelte) компоненты пользовательского интерфейса для аутентификации Supabase

**У вас есть компонент, которым вы хотите поделиться?** Посетите страницу [Components](https://sveltesociety.dev/components) на сайте Svelte Society. Вы можете внести свой вклад, сделав [a PR to this file](https://github.com/svelte-society/sveltesociety.dev/blob/master/src/pages/components/components.json).


**Learning Resources & Starters**

- [The **unofficial** SvelteKit docs](https://sk-incognito.vercel.app/learn/what-is-sveltekit) были созданы с использованием SvelteKit и [open for contributions](https://github.com/GrygrFlzr/kit-docs)
- [📦 Svelte Store](https://www.youtube.com/playlist?list=PLoKaNN3BjQX3fG-XOSwsPHtnV8FUY6lgK) курс lihautan охватывает основы Svelte Stores и передовой опыт.
- [Svelte Events](https://www.youtube.com/watch?v=cbxxbBofjAw&feature=youtu.be) WebJeda объясняет, как директивы вроде `on:` могут использоваться для прослушивания событий DOM.
- [How to Set Up Protected Routes in Your Svelte Application](https://www.webtips.dev/how-to-set-up-protected-routes-in-your-svelte-application) описывает, как аутентифицировать ваших пользователей для доступа к вашим маршрутам
- [Using Fauna's streaming feature to build a chat with Svelte](https://dev.to/fauna/using-fauna-s-streaming-feature-to-build-a-chat-with-svelte-1gkd) демонстрирует, как установить и настроить Fauna для создания интерфейса чата в реальном времени с помощью Svelte.
- [Using TakeShape with Sapper](https://www.takeshape.io/articles/using-takeshape-with-sapper/) демонстрирует, как подключить TakeShape CMS к Sapper
- [YastPack](https://github.com/rodabt/yastpack) еще один пакет шаблонов Snowpack-Svelte-TailwindCss-Routify
- [S2T2](https://ralphbliu.medium.com/s2t2-snowpack-svelte-tailwindcss-typescript-8928caa5af6c) шаблон Snowpack + Svelte + TailwindCSS + Typescript
- [tonyketcham/sapper-tailwind2-template](https://github.com/tonyketcham/sapper-tailwind2-template) шаблон Sapper с Tailwind 2.0, TypeScript, ESLint и Prettier

## Увидимся в следующем месяце!

Есть, что показать? Хотите больше участвовать в Svelte? Мы всегда ищем сопровождающих, участников и фанатиков ... Ознакомьтесь с [Svelte Society](https://sveltesociety.dev/), [Reddit](https://www.reddit.com/r/sveltejs/) и [Discord](https://discord.com/invite/yy75DKs)!
