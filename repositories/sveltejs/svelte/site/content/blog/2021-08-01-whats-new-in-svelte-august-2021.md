---
title: Что нового в Svelte: Август 2021
description: Shadow DOM, export и await - ОГО!
author: Daniel Sandoval
authorURL: https://desandoval.net
---

От логов изменений ([JS Party Ep. 182](https://changelog.com/jsparty/182)) до Svelte Radio (эпизоды [29](https://share.transistor.fm/s/adc23e84) и [30](https://share.transistor.fm/s/6316622d)), кажется, что люди не могли не говорить о Свелте в этом месяце! Кроме того, поддержка Shadow DOM и новые функции export и await в Svelte.


## Новое в Svelte

Июль был самым активным месяцем для репозитория ядра Svelte с конца 2019 года, так как мы работали над сокращением количества PR и выпустили Svelte 3.39.0, 3.40.0 и 3.41.0. Были добавлены тонны исправлений ошибок, а также следующие новые функции:

- Модификатор события `|trusted` позволяет проверить, является ли событие доверенным до его вызова ([#6137](https://github.com/sveltejs/svelte/issues/6137))
- Новый пакет `svelte/ssr` для поддержки работы по улучшению SvelteKit SSR ([#6416](https://github.com/sveltejs/svelte/pull/6416))
- Новая опция компилятора `errorMode` для поддержки улучшенной предварительной обработки файлов TypeScript ([#6194](https://github.com/sveltejs/svelte/pull/6194))
- Теперь вы можете указать `ShadowRoot` в качестве `target` при создании компонента - что позволяет визуализировать компоненты Svelte внутри shadow DOM ([#5869](https://github.com/sveltejs/svelte/issues/5869))
- Синтаксисы `export { ... } from` ([#2214](https://github.com/sveltejs/svelte/issues/2214)), `export let { ... } =` ([#5612](https://github.com/sveltejs/svelte/issues/5612)) и `{#await ... then/catch}` ([#6270](https://github.com/sveltejs/svelte/issues/6270)) теперь поддерживаются в компонентах Svelte

Полный список функций и исправлений ошибок смотрите в [журнале изменений Svelte](https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md).


## Обновления SvelteKit

- `prerender.force` теперь `prerender.onError`, который позволяет точно настроить, какие ошибки "валят" сборку, а какие нет ([#2007](https://github.com/sveltejs/kit/pull/2007))
- конфигурация esbuild теперь доступна для использования с адаптерами SvelteKit ([#1914](https://github.com/sveltejs/kit/pull/1914))
- Сообщения об ошибках теперь более дружелюбны для распространенных ошибок конфигурации ([#1910](https://github.com/sveltejs/kit/pull/1910)) и ошибок компилятора ([#1827](https://github.com/sveltejs/kit/pull/1827))
- Файлы cookie будут передаваться только в том случае, если целевой хост совпадает с приложением SvelteKit или более конкретным его поддоменом ([#1847](https://github.com/sveltejs/kit/pull/1847))
- экспорт index.js теперь будет изменен на экспорт каталогов при упаковке - что делает импорт лучше ([#1905](https://github.com/sveltejs/kit/pull/1905))
- `mode` Vite.js теперь доступен из `$app/env` ([#1789](https://github.com/sveltejs/kit/pull/1789))
- Лучшие типы по всем направлениям ([#1778](https://github.com/sveltejs/kit/pull/1778), [#1791](https://github.com/sveltejs/kit/pull/1791), [#1646](https://github.com/sveltejs/kit/pull/1646))

Чтобы увидеть все обновления SvelteKit, ознакомьтесь с [журналом изменений SvelteKit](https://github.com/sveltejs/kit/blob/master/packages/kit/CHANGELOG.md).


## Особенности и исправления ошибок со всего svelte/*

- Языковые инструменты теперь лучше поддерживают функцию «Доверие к рабочему месту» (используется в VS Code)
- В svelte2tsx объявления типа окружающей среды теперь переименованы, чтобы избежать конфликтующих объявлений в будущем. Теперь ожидается, что пользователи сами предоставят определения типов окружающей среды - исправление вывода JS
- Sapper выпустил v0.29.2, который исправляет маршруты регулярных выражений, коды состояния при запросе каталога и экспорт, когда пользователь не предоставил тег `base` ([changelog](https://github.com/sveltejs/sapper/blob/master/CHANGELOG.md))

---


## Крутые примеры сообщества

**Apps & Sites**
- [Parsnip](https://www.parsnip.ai/) — Mobile-First, Progressive-Web-приложение, которое поможет вам научиться готовить дома. В [переписке на Reddit](https://www.reddit.com/r/sveltejs/comments/oearb9/learning_to_cook_at_home_with_parsnip_built/) можно узнать обо всех деталях.
- [Central Bank Digital Currency (CBDC) tracker](https://www.atlanticcouncil.org/cbdctracker/) — сайт, который отслеживает, как страны по всему миру принимают цифровые валюты.
- [Svelte Commerce](https://github.com/itswadesh/svelte-commerce) — продвинутая платформа Frontend для электронной коммерции на основе SVELTEKIT.
- [neovimcraft](https://neovimcraft.com/) — сайт SVELTEKIT, посвященный плагинам Neovim.

**Ищете проект Svelte для работы? Заинтересованы в помощи сделать Свелте в Интернете лучше?** 
Посмотрите [список открытых issues](https://github.com/svelte-society/sveltesociety-2021/issues) если вы хотели бы внести свой вклад в сообщество Svelte, и помочь переписать на Sveltekit.

**Educational Content**
- [How I Built a Cross-Platform Desktop Application with Svelte, Redis, and Rust](https://css-tricks.com/how-i-built-a-cross-platform-desktop-application-with-svelte-redis-and-rust/) — Luke Edwards, Svelte maintainer and Developer Advocate from Cloudflare.
- [How to Create a Blog with SvelteKit and Strapi](https://strapi.io/blog/how-to-create-a-blog-with-svelte-kit-strapi) это пошаговый учебный урок Aarnav Pai от Strapi
- [Sveltekit Markdown Blog](https://www.youtube.com/watch?v=sKKgT0SEioI&list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V) видео-руководство YouTube By WebJeda.
- [Using Custom Elements in Svelte](https://css-tricks.com/using-custom-elements-in-svelte/) глубокое погружение в пользовательские элементы с Geoff Rich.
- [learn / graphql / svelte](https://hasura.io/learn/graphql/svelte-apollo/introduction/) бесплатный двухчасовой курс GraphQL от Hasura.
- [How to add Magic Link to a SvelteKit application](https://magic.link/posts/magic-svelte) руководство по популярному password-less паттерну входа в систему.

**Libraries, Tools & Components**
- [Svelte-Capacitor](https://github.com/drannex42/svelte-capacitor/) только что выпустил v2.0.0 - ещё проще построить гибридные мобильные приложения для iOS и Android, используя Svelte и Capacitor с высокой собственной производительностью.
- [svelte-remixicon](https://github.com/ABarnob/svelte-remixicon) библиотека иконок для Svelte на основе Remix, состоящей из более чем 2000 значков.
- [SveltePress](https://github.com/GeopJr/SveltePress) инструмент документации, построенный на SVELTEKIT.
- [Svelte Starter Kit](https://github.com/one-aalam/svelte-starter-kit/tree/auth-supabase) бойлерплейт, чтобы быстро начать работать с SVELTE, с профилями Auth и пользователей, работающий на основе Supabase.
- [Kahi UI](https://github.com/novacbn/kahi-ui) UIkit SVELTE-First со встроенным темным режимом.
- [typesafe-i18n](https://github.com/ivanhofer/typesafe-i18n) самоуверенная, полностью безопасная, легкая библиотека локализации для проектов Typescript и JavaScript без внешних зависимостей.

Проверьте [sveltejs/integrations](https://github.com/sveltejs/integrations) для получения дополнительных шаблонов, дополнений и адаптеров со всей экосистемы Svelte.


## Увидимся в следующем месяце!

Хотите больше обновлений? Присоединяйтесь к нам на [Reddit](https://www.reddit.com/r/sveltejs/) или в [Discord](https://discord.com/invite/yy75DKs)!