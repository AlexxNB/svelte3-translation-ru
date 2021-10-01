---
title: Что нового в Svelte: Октябрь 2021
description: Целый год "Что нового в svelte"
author: Daniel Sandoval
authorURL: https://desandoval.net
---

Привет всем 👋 Прошёл 1 год с тех пор, как рубрика «Что нового в Svelte» начала публиковаться в блоге Svelte. Я хотел начать с благодарности всем вам за чтение и всем контрибьюторам каждого месяца за их вклад. От мантейнеров до всех, кто публикует свои работы в Discord и Reddit, удивительно наблюдать за всеми усилиями, которые направлены на то, чтобы сделать сообщество Svelte великим.

Продолжайте в том же духе, все! Теперь давайте погрузимся в новости этого месяца..

## Новое вокруг Svelte

- Новые дополнения к карте экспорта Svelte теперь предоставляют no-op версии функций жизненного цикла для SSR (Svelte **3.43.0**)
- Пользовательские компоненты с атрибутом `src` больше не нарушают сборки `svelte-native` (Svelte **3.42.4**)
- Пользователям плагина Svelte без включенного [плагина TypeScript](https://www.npmjs.com/package/typescript-svelte-plugin) теперь будет предложено включить его. Он расширяет файлы TypeScript и JavaScript дополнительным интеллектом для взаимодействия с файлами Svelte. [Пожалуйста, оставьте отзыв](https://github.com/sveltejs/language-tools/issues/580), если вы используете его (Расширения Svelte **105.4.0**)
- Модификаторы событий были добавлены в intellisense в качестве автодополнения с информацией при наведении курсора (Svelte extensions **105.4.0**)
- Пользователям TypeScript больше не нужно строго отделять импорт типов и значений при использовании Svelte версии 3.39 или выше и `svelte-preprocess` версии 4.9.5 или выше. Это означает, что теперь вы можете написать `import { MyInterface, myValue } из './somewhere'` вместо `import type { MyInterface } from './somewhere'; import { myValue } from './somewhere'`. Огромное спасибо члену сообщества [@SomaticIT](https://github.com/SomaticIT), который в основном реализовал это!

Полный список функций и исправлений ошибок см. в [Svelte changelog](https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md).

## Обновления SvelteKit

Почти 100 PR комитов пришли в прошлом месяце, но еще многое предстоит сделать, и мантейнеры Svelte [ищут помощь в доведении SvelteKit до 1.0](https://github.com/sveltejs/kit/issues/2100). Энтони хорошо сказал это в [недавнем комментарии](https://github.com/sveltejs/kit/issues/2100#issuecomment-895446285) по этому вопросу:

> Если вы думаете, что слишком n00b, чтобы внести свой вклад (это не так), добавьте тесты или напишите тесты для функции, которую хотите добавить, прежде чем добавлять ее! Начните с малого и изучите кодовую базу таким образом.

Если вы хотите помочь, пожалуйста, подумайте о том, чтобы поработать над любой из [1.0 основных проблем с пометкой «требуется помощь»](https://github.com/sveltejs/kit/issues?q=is%3Aopen+is%3Aissue+milestone%3A1.0+label%3A%22help+wanted%22).

Заметные улучшения SvelteKit в этом месяце включают...

- Сервис воркерам теперь разрешен доступ к файлам с псевдонимом `$lib` ([#2326](https://github.com/sveltejs/kit/pull/2326))
- Библиотеки Svelte теперь должны работать «из коробки» без какой-либо конфигурации Vite ([#2343](https://github.com/sveltejs/kit/pull/2343))
- Улучшения поля экспорта пакетов ([#2345](https://github.com/sveltejs/kit/pull/2345) и [#2327](https://github.com/sveltejs/kit/pull/2327))
- [breaking] Опция конфигурации `prerender.pages` была переименована в `prerender.entries` ([#2380](https://github.com/sveltejs/kit/pull/2380))
- Добавлен новый общий аргумент, позволяющий вводить Body из хуков ([#2413](https://github.com/sveltejs/kit/pull/2413))
- Поле `svelte` будет добавлено в package.json при выполнении команды package ([#2431](https://github.com/sveltejs/kit/pull/2431))
- [breaking] Параметр `context` функции загрузки был переименован в `stuff` ([#2439](https://github.com/sveltejs/kit/pull/2439))
- Добавлена опция `entryPoint` для создания пользовательского сервера с `adapter-node` ([#2414](https://github.com/sveltejs/kit/pull/2414))
- `vite-plugin-svelte` улучшена поддержка [useVitePreprocess](https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#usevitepreprocess), которая использует Vite для автоматической предварительной обработки TypeScript, PostCSS, Scss и т. д. в компонентах Svelte ([#173](https://github.com/sveltejs/vite-plugin-svelte/pull/173))

Чтобы увидеть все обновления SvelteKit, проверьте [SvelteKit changelog](https://github.com/sveltejs/kit/blob/master/packages/kit/changeLog.md).

---

## Крутые примеры сообщества

**Apps & Sites**
- [radiofrance](https://www.radiofrance.fr/) только что перенесли свой веб-сайт на SvelteKit
- [FLAYKS](https://flayks.com/) - сайт-портфолио Félix Péault, сделанный с помощью SvelteKit, Sanity и Anime.js
- [hirehive](https://www.hirehive.com/) сайтом для отслеживания кандидатов и работы
- [Microsocial](https://microsocial.xyz/) - экспериментальная одноранговая социальная платформа
- [Dylan Ipsum](https://www.dylanlyrics.app/) - генератор случайного текста для замены lorem ipsum текстами песен Боба Дилана
- [Chip8 Svelte](https://github.com/mikeyhogarth/chip8-svelte) - интерфейс эмулятора CHIP-8, построенный поверх CHIP8 Typescript

**Ищете проект Svelte для работы? Заинтересованы в помощи сделать Свелте в Интернете лучше?** 
Посмотрите [список открытых issues](https://github.com/svelte-society/sveltesociety-2021/issues) если вы хотели бы внести свой вклад в сообщество Svelte, и помочь переписать на Sveltekit.

**Podcasts Featuring Svelte**
- [Syntax Podast: от React до SvelteKit](https://podcasts.apple.com/us/podcast/from-react-to-sveltekit/id1253186678?I=1000536276106) Скотт беседует с Уэсом о переносе учебных пособий по повышению уровня с React на SvelteKit - почему он это сделал, как, преимущества, на что следует обратить внимание, и многое другое!
- [Подкаст Web Rush: Svelte Tools and Svelte Society](https://www.webrush.io/episodes/episode-150-svelte-tools-and-svelte-society) Кевин Оберг Культалахти рассказывает о том, что такое Svelte Society, что его волнует
- [Svelte: The Compiled Future of Front End](https://www.arahansen.com/the-compiled-future-of-front-end/) подробно описывает историю интерфейсов на основе компонентов и то, как компилятор меняет все
- [Svelte Radio: Вклад в Svelte с Мартином «Grygrflzr» Криснанто Путрой](https://share.transistor.fm/s/10aa305c) Grygrflzr делится своим путешествием к тому, чтобы стать сопровождающим, и своими взглядами на React, Vite и множество
- [Svelte Radio: Routify 3 с Джейком и Уиллоу](https://share.transistor.fm/s/10aa305c) команда Svelte Radio с мантейнерами Routify обсуждает только что выпущенный Routify 3
- [JS Party: 1Password](https://twitter.com/geoffrich_/status/1441816829853253640?S=20) упомянули в последнем эпизоде The Changelog's JS Party, что они используют Svelte для улучшения своих предложений на странице

**Educational Content**
- [Как я создал блог с помощью Svelte и SvelteKit](https://fantinel.dev/blog-development-sveltekit/) - введение в Svelte, SvelteKit и Progressive Enhancement с примерами кода
- [Я создал децентрализованное приложение для чата](https://www.youtube.com/watch?v=J5x3OMXjgMc) - учебник о том, как использовать популярные технологии web3, такие как GUN, для создания децентрализованного веб-приложения (dapp)
- [Написание Svelte Store с помощью TypeScript](https://javascript.plainenglish.io/writing-a-svelte-store-with-typescript-22fa1c901a4) - глубокое погружение в написание сторов Svelte с помощью TypeScript
- [Как Svelte охватывает стили компонентов](https://geoffrich.net/posts/svelte-scoped-styles/) - объясняет область применения с использованием классов и более сложных спецификаторов CSS
- [SvelteKit Hooks](https://www.youtube.com/watch?v=RarufLoEL08) - показывает, как использовать hooks.js в Sveltekit.. Когда закончите, ознакомьтесь с [Частью 2](https://www.youtube.com/watch?v=RmIBG3G0-VY)
- [Ранний взгляд на SvelteKit](https://www.infoworld.com/article/3630395/an-early-look-at-sveltekit.html) - пост от Infoworld, просматривающий функции и адаптацию SvelteKit

**Libraries, Tools & Components**
- [sveltekit-netlify-cms](https://github.com/buhrmi/sveltekit-netlify-cms) - скелетное приложение SvelteKit, настроенное для использования с Netlify CMS
- [SvelteFireTS](https://github.com/jacobbowdoin/sveltefirets) - библиотека SvelteKit + Typescript + Firebase, вдохновленная Fireship.io
- [stores-x](https://github.com/Anyass3/stores-x) - позволяет использовать сторы Svelte так же, как vueX
- [sveltekit-snippets](https://github.com/stordahl/sveltekit-snippets) - расширение VSCode, которое предоставляет фрагменты для общих шаблонов в SvelteKit & Vanilla Svelte
- [svelte-xactor](https://github.com/wobsoriano/svelte-xactor) - мидлвара, которая позволяет легко преобразовать ваши машины xactor в глобальный стор, реализующий контракт стора.
- [vite-plugin-pages-svelte](https://github.com/aldy505/vite-plugin-pages-svelte) - плагин vite для автоматической маршрутизации на основе файловой системы
- [sveltio](https://www.npmjs.com/package/sveltio) - обертка Svelte для valtio - библиотеки прокси-состояния
- [svelte-transition-classes](https://github.com/rmarscher/svelte-transition-classes) - пользовательские переходы Svelte для добавления и замены классов CSS
- [Svelte-Boring-Avatars](https://github.com/paolotiu/svelte-boring-avatars) - Svelte порт популярного проекта React [скучные аватары](https://github.com/boringdesigners/boring-avatars)
- [Svelte DataTables](https://github.com/homescriptone/svelte-datatables) - приносит DataTable, популярную библиотеку JavaScript, позволяющую легко отображать ваши данные в удобной таблице, в ваш проект Svelte.
- [focus-svelte](https://github.com/chanced/focus-svelte) - фокустрап для Svelte с нулевыми зависимостями
- [filedrop-svelte](https://github.com/chanced/filedrop-svelte) - действие и компонент файлдроппер для Svelte


Проверьте сайт сообщества [sveltesociety.dev](https://sveltesociety.dev/templates/) для получения дополнительных шаблонов, дополнений и адаптеров со всей экосистемы Svelte.


## Перед уходом ответьте на звонок спикерам!

Svelte Summit Fall 2021 (происходит 20 ноября 2021 года) ищет спикеров. Отправьте свой доклад до 30 октября... все желающие могут представить и принять участие.

### Дополнительная информация на [сеансовом сайте](https://sessionize.com/svelte-summit-fall-2021/)

Не можете дождаться саммита? Присоединяйтесь к нам на [Reddit](https://www.reddit.com/r/sveltejs/) или [Discord](https://discord.com/invite/yy75DKs)!
