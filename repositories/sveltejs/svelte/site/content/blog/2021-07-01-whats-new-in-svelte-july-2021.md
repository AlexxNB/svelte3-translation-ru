---
title: Что нового в Svelte: Июль 2021
description: Сохраняя прохлажу с исправлениями, инструментами TypeScript и тоннами новых функций
author: Daniel Sandoval
authorURL: https://desandoval.net
---

Пока северное полушарие нагревается, Svelte остается прохладным, предлагая множество исправлений производительности и ошибок, улучшенную поддержку TypeScript и множество новых компонентов и инструментов для всей экосистемы. Давайте взглянем 👀


## Новое в SvelteKit

- `adapter-node` теперь предварительно сжимает ассеты, используя GZIP & Brotli ([#1693](https://github.com/sveltejs/kit/pull/1693))
- Поддержка транспиляции TypeScript была добавлена ​​в инструментарий `svelte-kit package`. ([#1633](https://github.com/sveltejs/kit/pull/1633))
- Улучшено кэширование по умолчанию в `adapter-node` ([#1416](https://github.com/sveltejs/kit/pull/1416))
- Разрешена конфигурация параметров вывода rollup ([#1572](https://github.com/sveltejs/kit/pull/1572))
- Исправлено использование SSL с HMR ([#1517](https://github.com/sveltejs/kit/pull/1517))


## Особенности и исправления ошибок со всего svelte/*

- [Svelte 3.38.3](https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md#3383) (выпущенный 22 июня) получил кучу исправлений производительности и ошибок, включая оптимизацию гидратации, сохранение `this` во всплывающих событиях и многое другое!
- Последние языковые инструменты выпускают поддержку переименования реквизита извне компонента, грамматику синтаксиса PostCSS и выходную цель `.d.ts` в `svelte2tsx`, которую можно использовать для создания определений типов из файлов Svelte.
- Также в языковых инструментах были добавлены некоторые долгожданные экспериментальные функции для расширенной поддержки TypeScript, включая явный ввод всех возможных событий или слотов компонентов и использование обобщений. Взгляните на [RFC](https://github.com/sveltejs/rfcs/pull/38) для получения более подробной информации и оставьте отзыв в [этом issue](https://github.com/sveltejs/language-tools/issues/442), если вы его используете.
- `svelte-scroller` получил некоторые исправления качества жизни в версии 2.0.7 - исправление ошибки начальной ширины и более консервативное обновление его `index`


## Скоро в Svelte

- Константы в разметке ([RFC](https://github.com/sveltejs/rfcs/blob/master/text/0000-markup-constants.md)): Добавится новый тэг `{@const ...}` для определния локальных констант ([PR](https://github.com/sveltejs/svelte/pull/6413))

---

## Крутые примеры сообщества

**Apps & Sites**
- [SvelteThemes](https://sveltethemes.dev/) – список тем и шаблонов SVELTE, построенных с использованием svelte, sveltekit, elderjs, routify и т.д.
- [Beatbump](https://github.com/snuffyDev/Beatbump) – альтернативный интерфейс для YouTube Music, созданный с использованием Svelte/SvelteKit.
- [Sveltuir](https://github.com/webspaceadam/sveltuir) это приложение поможет вам запомнить гитарный гриф


**Educational Content**
- [Svelte Radio: A Jolly Good Svelte Summer](https://share.transistor.fm/s/60880542) – разговор о том, что нового в Svelte и празднование 1-летней годовщины Svelte Radio
- [Class properties in Svelte](https://navillus.dev/blog/svelte-class-props) - это напоминание о силе `class` для разработчиков, переходящих на Svelte с React.
- [Sveltekit Tutorial for Beginners](https://www.youtube.com/playlist?list=PLm_Qt4aKpfKjf77S8UD79Ockhwp_699Ms) – это видео-плейлист для изучения SvelteKit от WebJeda
- [How To Cache Dynamic Pages On Demand With A Service Worker In SvelteKit](https://jochemvogel.medium.com/how-to-cache-dynamic-pages-on-demand-with-a-service-worker-in-sveltekit-4b4a7652583d) – демонстрирует возможности сервис-воркеров при использовании в SvelteKit для кэширования по требованию
- [Vue vs Svelte: Comparing Framework Internals](https://www.vuemastery.com/blog/vue-vs-svelte-comparing-framework-internals/) – глубокое погружение в различия между Vue и Svelte изнутри
- [Setting up a development environment for SvelteKit with Docker and Docker Compose](https://jenyus.web.app/blog/2021-05-30-setting-up-a-development-environment-for-sveltekit-with-docker-and-compose) – рассказывает, как использовать Docker для создания повторно используемых сред разработки, независимо от того, на каком устройстве вы запускаете свой код.
- В этом месяце Scalable Scripts выпустили три видеоролика, в которых рассказывается, как развернуть докеризированные приложения Svelte на [AWS](https://youtu.be/VOs2Od5jYOc), [Azure](https://youtu.be/gdg4ne_uDm8) и [Google Cloud](https://youtu.be/_-uBb61Tikw)
- [Render Katex with Svelte from zero to hero](https://www.youtube.com/watch?v=euowJs9CblA) – демонстрирует, как реализовать Katex в проекте Svelte.
- [Using Custom Elements in Svelte](https://css-tricks.com/using-custom-elements-in-svelte/) – показывает некоторые особенности, на которые следует обратить внимание при использовании пользовательских элементов на сайте Svelte.


**Libraries, Tools & Components**
- [svelte-pipeline](https://github.com/novacbn/svelte-pipeline) – предоставляет настраиваемые контексты Javascript и Svelte Compiler в качестве Svelte Stores, для REPL, редакторов и т. д.
- [Sveltotron](https://github.com/Salemmous/sveltotron) – это приложение на основе Electron, предназначенное для проверки вашего приложения Svelte
- [svelte-qr-reader-writer](https://github.com/pleasemarkdarkly/svelte-qr-reader-writer) – это компонент Svelte, который помогает читать и записывать данные из QR-кодов
- [svelte-stack-router](https://www.npmjs.com/package/svelte-stack-router) – стремится сделать приложения Svelte более естественными за счет маршрутизации с помощью Stacks.
- [svelte-typed-context](https://www.npmjs.com/package/svelte-typed-context) – интерфейс типизации для `getContext` или `setContext`
- [svelte-modals](https://svelte-modals.mattjennings.io/) – это простой, гибкий модальный менеджер с нулевой зависимостью для Svelte


**Хотите поделиться своим компонентом? Хотите помочь Svelte выглядеть лучше в сети?** Разместите компонент на сайте Svelte Society, сделав [PR в этот файл](https://github.com/svelte-society/sveltesociety-2021/blob/main/src/routes/components/components.json) или проверьте [список открытых задач](https://github.com/svelte-society/sveltesociety-2021/issues) если вы хотите внести свой вклад в переезд Svelte Society на SvelteKit.


## Увидимся в следующем месяце!

Хотите больше обновлений? Присоединяйтесь к нам на [Reddit](https://www.reddit.com/r/sveltejs/) или в [Discord](https://discord.com/invite/yy75DKs)!