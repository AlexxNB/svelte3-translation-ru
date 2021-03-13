---
title: Что нового в Svelte: Февраль 2021
description: Молниеносные интеграции и улучшения ...
author: Daniel Sandoval
authorURL: https://desandoval.net
---

С приближением самого короткого месяца в году сопровождающие Svelte и члены сообщества были заняты в прошлом месяце - от больших изменений в `svelte-loader`, `prettier-plugin-svelte`, `rollup-plugin-svelte` и `language-tools` до устойчивого прогресса в Sapper и `svelte-preprocess`. Между тем, многие люди были заняты интеграцией Svelte с другими популярными фреймворками.

## Новые возможности компилятора
- Роли Aria из [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0/#role_definitions) теперь распознаются как допустимые роли aria в компонентах Svelte (**3.31.1**)
- Предупреждения компилятора для общих атрибутов React, `className` и `htmlFor`, теперь упрощают перенос компонентов React в Svelte. (**3.31.1**)

У вас есть предложение относительно функции компилятора или вы хотите помочь реализовать новые функции / исправления ошибок? Проверьте ["triage: good first issue" tag for Svelte](https://github.com/sveltejs/svelte/issues?q=is%3Aopen+is%3Aissue+label%3A%22triage%3A+good+first+issue%22)


## Новые биты в языковых инструментах

- Предложения по автоматическому импорту, отключенные пользователем, больше не отображаются в VS Code (**103.0.0**)
- Переименование переменной теперь безопаснее с умным добавлением префикса / суффикса к переименованным переменным (**104.0.0**)
- Выделение семантики (токена) для пользователей TypeScript позволяет разработчикам тем применять семантический стиль в своих темах, если они его поддерживают (**104.0.0**)
- "Extract Component" был добавлен в контекстное меню, что позволяет извлекать компоненты из файлов без необходимости открывать командное окно для ввода "Svelte: Extract Component"(**104.0.0**)
- Расширение VS Code теперь прослушивает изменения файлов JavaScript / TypeScript - вам больше не нужно сохранять файлы, чтобы изменения были заметны (**104.1.0**)

Полный список изменений можно найти в языковых инструментах [Releases page](https://github.com/sveltejs/language-tools/releases).

Отличный способ опробовать языковые инструменты - загрузить [Svelte Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). Это расширение обеспечивает подсветку синтаксиса и богатый интеллект для компонентов Svelte в VS Code с использованием сервера svelte language. Проверьте источники расширений вашего редактора, чтобы узнать, есть ли плагин Svelte для вашей IDE или создайте свой собственный (см. [coc-svelte](https://github.com/coc-extensions/coc-svelte) например)!

## Значительные улучшения в экосистеме Svelte

- [svelte-loader](https://github.com/sveltejs/svelte-loader) выпустила основную версию 3.0.0 с поддержкой Webpack 5 и Node 14, улучшенной горячей перезагрузкой и новыми параметрами `compilerOptions` для соответствия `rollup-plugin-svelte`. Критические изменения включают прекращение поддержки Svelte 2 и Node 8 [More info in the changelog](https://github.com/sveltejs/svelte-loader/blob/master/CHANGELOG.md)
- [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) теперь имеет версию 7.x - с поддержкой относительных имен файлов, улучшенной обработкой исходных карт и согласованными `compilerOptions`. Обязательно внесите критические изменения при обновлении [checkout the changelog](https://github.com/sveltejs/rollup-plugin-svelte/blob/master/CHANGELOG.md)
- [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) В этом месяце был реализован ряд выпусков 4.6.x для улучшения обработки postcss и scss и исправления преобразования исходной карты для пользователей машинописного текста. [More info in the changelog](https://github.com/sveltejs/svelte-preprocess/blob/main/CHANGELOG.md)
- [Sapper](https://github.com/sveltejs/sapper) получили некоторые улучшения в отслеживании прокрутки и обработке параметров запроса кодирования. Динамический импорт теперь также работает должным образом в браузерах, не поддерживающих модули ES. Эти изменения с версии 0.29.0 и пошаговое руководство по миграции можно найти [in the changelog](https://github.com/sveltejs/sapper/blob/master/CHANGELOG.md)
- [prettier-plugin-svelte](https://github.com/sveltejs/prettier-plugin-svelte) вышла версия 2. Он подвергся капитальному ремонту, и в нем переработано форматирование HTML. Вывод теперь намного больше соответствует тому, как стандартный Prettier форматирует HTML. Улучшенные значения по умолчанию для `svelteBracketNewLine` и `options-scripts-markup-styles` теперь должны соответствовать тому, как большинство пользователей предпочитают упорядочивать блоки кода. Кроме того, теперь поддерживается настройка Prettier `htmlWhitespaceSensitivity`. [More info in the changelog](https://github.com/sveltejs/prettier-plugin-svelte/blob/master/CHANGELOG.md)

Новые изменения на веб-сайте Svelte Society включают в себя [a new cheat sheet](https://sveltesociety.dev/cheatsheet) для легкого доступа к полезным шаблонам кода и некоторые небольшие визуальные исправления по всему сайту. Хотите помочь подготовить сайт Svelte Society к работе в прайм-тайм?  [Checkout the GitHub repo](https://github.com/svelte-society/sveltesociety.dev)! 

---

## Community Showcase

**Apps & Sites**

- [The official German vaccination dashboard](https://impfdashboard.de/) отслеживает текущее внедрение вакцины против COVID и содержит несколько хорошо выполненных датавизов
- [La neuva era de la educatión conectada](https://elfuturoesapasionante.vodafone.es/especiales/educacion-conectada/) сайт Vodaphone, на котором рассказывается о том, как технологии и COVID-19 изменили образовательный ландшафт
- [sho.rest](https://github.com/Melonai/shorest) сокращенный URL-адрес, размещаемый на собственном хостинге
- [night.fm](https://night.fm/) радиостанция на тему киберпанка


**Demos, Libraries & Components**

- [Svelte Reactive Debugger](https://addons.mozilla.org/en-US/firefox/addon/svelte-reactive-debugger/) способ отслеживать реактивные операторы Svelte в инструментах разработчика Firefox
- [svelte-actions](https://github.com/sw-yx/svelte-actions) is представляет собой набор прототипов действий Svelte для включения в официальные акции в будущем. [See RFC](https://github.com/sveltejs/rfcs/pull/24) и [Discuss High Level Policy](https://github.com/sw-yx/svelte-actions/issues/7).
- [This css grid gallery](https://svelte.dev/repl/3a1b7fae13b242fe9cd4a4f7aa092fa4?version=3.31.2) сделанный @joja (в Svelte Discord), показывает переходы сетки в зависимости от положения мыши пользователя.
- [Patchcab](https://github.com/spectrome/patchcab) модульный синтезатор в стиле Eurorack, созданный с использованием Web Audio.
- [svelte-knob](https://github.com/MelihAltintas/svelte-knob) ручка для визуализации в стиле спидометра
- [descent-ripple](https://github.com/micha-lmxt/descent-ripple) астраиваемая анимация пульсации javascript для кнопок
- [makeItSnow](https://github.com/florianlouvet/make-it-snow/blob/main/makeItSnowAction.js) действие Svelte, созданное @MrPoule (в Svelte Discord), которое можно использовать для добавления ❄️снега❄️ в любой компонент ([Demo](https://svelte.dev/repl/de5223beb45540a5a11c9bd7b318304f?version=3.31.2))
- [svelte-video-player](https://github.com/meigo/svelte-video-player) настраиваемый компонент `VideoPlayer`
- [svelte-readonly](https://github.com/Crisfole/svelte-readonly) очень маленький стор, который предоставляет только читаемый интерфейс.


**New Integrations & Starters**
- [svelte-derver-starter](https://github.com/AlexxNB/svelte-derver-starter) стартер для запекания полнофункционального приложения с клиентом на основе Svelte и серверной частью на основе Derver
- [eleventy-plugin-embed-svelte](https://github.com/shalomscott/eleventy-plugin-embed-svelte) позволяет легко встраивать компоненты Svelte в сайт 11ty
- [svelte-tailwind-extension-boilerplate](https://github.com/kyrelldixon/svelte-tailwind-extension-boilerplate) является хорошей основой для расширения Chrome, использующего JavaScript или TypeScript, Svelte для внешнего интерфейса, Tailwind CSS для стилизации, Jest для тестирования и Rollup в качестве системы сборки.
- [snowpack-ui](https://github.com/rajasegar/snowpack-ui) позволяет запускать и управлять проектами Snowpack из браузера вместо терминала
- [Svelte for Appwrite](https://dev.to/torstendittmann/svelte-for-appwrite-4fkg) объясняет, как интегрироваться с Appwrite, автономной альтернативой Firebase. [Github Repo](https://github.com/appwrite/sdk-for-svelte)
- [here-maps-svelte](https://github.com/peopledrivemecrazy/here-maps-svelte) позволяет легко включать карты HERE в приложение Svelte
- [p5-svelte](https://github.com/tonyketcham/p5-svelte)  абсолютно простой способ добавить творческий инструмент кодирования / рисования p5 в проект.
- [svelte-windicss-preprocess](https://github.com/voorjaar/svelte-windicss-preprocess) препроцессор Svelte для компиляции tailwindcss во время сборки на основе компилятора windicss
- [MitzaCoder/svelte-boilerplate](https://github.com/MitzaCoder/svelte-boilerplate) бойлерплейт Typescript, TailwindCSS, совместимость с IE11 (с Babel) и модули с отложенной загрузкой

**У вас есть компонент, которым вы хотите поделиться?** Посетите страницу [Components](https://sveltesociety.dev/components) на сайте Svelte Society. Вы можете внести свой вклад, сделав [a PR to this file](https://github.com/svelte-society/sveltesociety.dev/blob/master/src/pages/components/components.json).

**Learning Resources**

- [lihautan's Svelte Actions Playlist](https://www.youtube.com/watch?v=ciaMT_MswzE&list=PLoKaNN3BjQX3Gl14MBygFf8buPIw9pAeK) учит, как работают действия и как они могут помочь в решении типичных проблем при разработке приложений Svelte.
- [One-click Portfolio/Personal blog generator from dev.to API ](https://dev.to/shriji/one-click-portfolio-personal-blog-generator-from-dev-to-api-3apb) проходит через создание сайта Sapper, который также получает ваши статьи с DEV.to с помощью API.
- [How to Code a VSCode Extension](https://www.youtube.com/watch?v=a5DX5pQ9p5M) предлагает Svelte как способ визуализации пользовательского интерфейса в VSCode
- [This YouTube series on Plenti](https://www.youtube.com/watch?v=wyNC7R_VVyQ&list=PLbWvcwWtuDm12y3Hye6oKDwI2gAS0ccHW) подробно ознакомится с новым генератором статических сайтов

## Увидимся в следующем месяце!

Есть, что показать? Хотите больше участвовать в Svelte? Мы всегда ищем сопровождающих, участников и фанатиков ... Ознакомьтесь с [Svelte Society](https://sveltesociety.dev/), [Reddit](https://www.reddit.com/r/sveltejs/) и [Discord](https://discord.com/invite/yy75DKs)!
