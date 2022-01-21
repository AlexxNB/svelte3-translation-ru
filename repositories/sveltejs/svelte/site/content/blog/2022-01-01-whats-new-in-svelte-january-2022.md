---
title: "Что нового в Svelte: Январь 2022"
description: "Более быстрые сборки с помощью SvelteKit и долгожданные функции REPL"
author: Daniel Sandoval
authorURL: https://desandoval.net
---

С новым годом, сообщество Svelte! В этом месяце есть много того, чем хочется поделиться в Svelte, SvelteKit, Language Tools и Showcase. Спасибо всем, кто сделал 2021 год отличным годом для использования Svelte. С нетерпением жду следующего 🚀

## Что нового в SvelteKit
- `@sveltejs/adapter-static` для SvelteKit теперь имеет опцию `precompress`, чтобы облегчить сжатие активов и страниц brotli из коробки ([#3079](https://github.com/sveltejs/kit/pull/3079))
- Режим параллелизма в SvelteKit теперь будет пререрисовывать страницы параллельно ([#3120](https://github.com/sveltejs/kit/pull/3120)). Он включен по умолчанию в `1.0.0-next.205` и более поздних версиях
- CSS теперь автоматически включается перед JS для повышения производительности страницы ([d13efe](https://github.com/sveltejs/kit/commit/d138efe21692f5925f1e89afc0a33f42d6a1a711))
- Новая опция конфигурации добавляет возможность отключить регистрацию сервис-воркера для выполнения собственной пользовательской регистрации ([#2988](https://github.com/sveltejs/kit/pull/2988))
- Сплитинг маршрутов SSR - разбивка монолитных сборок на более мелкие части для повышения производительности запуска и маршрутизации ([#2931](https://github.com/sveltejs/kit/pull/2931))
- `request.origin/path/query` теперь `request.url` - упрощение функций конфигурации и страницы `load` ([#3126](https://github.com/sveltejs/kit/pull/3126))
- После [обновление до Vite 2.7](https://github.com/sveltejs/kit/pull/3018) пользователи SvelteKit [сообщают о значительных улучшениях производительности](https://www.reddit.com/r/sveltejs/comments/rljhfc/sveltekit_massive_compiler_improvement_by/) и загрузка сторонних библиотек в SSR также значительно улучшилась
- Сервер SvelteKit теперь автоматически перезапустится при изменении файлов конфигурации ([vite-plugin-svelte#237](https://github.com/sveltejs/vite-plugin-svelte/pull/237))


## Другие новые биты от `svelte/*`
- [Svelte 3.44.3](https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md#3443) вышел с несколькими исправлениями ошибок в коде биндингов и цикла
- Svelte Language Tools представила поддержку сокращений от Svelte 3.41 и функции TypeScript ([105.8.0 и более поздних версий](https://github.com/sveltejs/language-tools/releases/tag/extensions-105.8.0))
- Svelte REPL также получил хорошее обновление, что позволило удалить сохраненные REPL. Попробуйте, войдя в систему по адресу [svelte.dev/apps](https://svelte.dev/apps)


---

## Крутые примеры сообщества

**Приложения и сайты**
- [Discover Twitter Spaces](https://github.com/navneetsharmaui/discover-twitter-spaces) - это инструмент, который поможет вам найти Twitter Spaces
- [Modern Fluid Typography Editor](https://github.com/codeAdrian/modern-fluid-typography-editor) помогает создавать красивую плавную типографику с помощью зажима CSS
- [Unnwhiteboard] (https://github.com/AviKKi/unnwhiteboard) - это доска объявлений о вакансиях для компаний (или команд), которые не проводят интервью "whiteboard"
- [Secret Santa](https://gitlab.com/arturoguzman/secret-santa-sveltekit) - это приложение для координации подарков, разработанное с учетом легкости
- [LogSnag] (https://logsnag.com/) уведомляет вас о событиях ваших проектов и предоставляет вам временную шкалу для отслеживания всего важного, что происходит
- [Tangent 0.2](http://tangentnotes.com/Download), приложение для написания заметок на основе Svelte, теперь находится в бета-версии
- [Intl Explorer](https://github.com/jesperorb/intl-explorer) - это инструмент для просмотра вывода для всех возможных форматтеров для Intl

В этом месяце большая работа была посвящена миграции основного веб-сайта Svelte и Svelte REPL, чтобы жить в репозитории https://github.com/sveltejs/sites, включая совершенно новую домашнюю страницу для [svelte.dev] (https://svelte.dev/). Спасибо всем участникам, которые сделали это возможным!

Если вы ищете забавный проект SvelteKit для работы, [вы можете внести свой вклад в переписывание сайта Svelte Society](https://github.com/svelte-society/sveltesociety-2021/issues) 💅


**Обучение**

_Почитать_
- [Мутация параметров запроса в SvelteKit без перезагрузки страниц или навигации](https://dev.to/mohamadharith/mutating-query-params-in-sveltekit-without-page-reloads-or-navigations-2i2b) Мохамада Харита
- [Svelte для Reactaholics: Руководство для разработчиков React](https://www.100ms.live/blog/svelte-guide-for-react-developers) Пуру Виджай
- [Методы жизненного цикла Свельте могут быть использованы в любом месте](https://geoffrich.net/posts/svelte-lifecycle-examples/) и [Многие значения $ в Svelte] (https://geoffrich.net/posts/svelte-$-meanings/) Джеффа
- [Vercel и Svelte: Идеальное соответствие для веб-разработчиков](https://thenewstack.io/vercel-and-svelte-a-perfect-match-for-web-developers/) Дэррил К. Тафт
- [Определяемая пользователем цветовая схема TailwindCSS с магазинами Svelte](https://blog.dayslice.io/user-defined-tailwindcss-color-scheme-with-svelte-stores-ad80ca2cf038) Джереми Заборовского
- [Ionic 6 + Svelte 🚀](https://medium.com/@raymondboswel/ionic-6-svelte-ae904caa82df) Рэймонд Босвел
- [Что произошло в языковых инструментах #Svelte в этом году](https://twitter.com/dummdidumm_/status/1474158105395179525?t=ytj2K2Q52iD5-lNyLnQaAQ&s=19) Саймона Х.

_Посмотреть_
- [Будущее Свелте (интервью с Ричем Харрисом)](https://www.youtube.com/watch?v=uQntFkK8Z54) Ли Робинсон, директор по связям с разработчиками Vercel
- [Svelte становится основой](https://www.youtube.com/watch?v=fo6BKY2xR2w&t=1834s) для разработчиков плагинов Obsidian
- [Блог Sveltekit WordPress без головы](https://www.youtube.com/watch?v=c0UDVgjPxFw) от WebJeda
- [Начало работы с SvelteKit](https://www.youtube.com/watch?v=i2suPKMPUFA) от Lihau Tan
- [Разверните полнофункциональный набор приложений SvelteKit на Cloudflare Pages](https://www.youtube.com/watch?v=Wc1_U6Dy5Tw) от 1nf

_Послушать_
- [Подкаст Синтаксиса: Как делать вещи в Svelte](https://podcasts.apple.com/ca/podcast/how-to-do-things-in-svelte/id1253186678?I=1000544796072)
- [JS Party #205: So much Sveltey goodness (w/ Rich Harris)](https://changelog.com/jsparty/205)

**Библиотеки, инструменты и компоненты**
- [svelte-headlessui](https://github.com/rgossiaux/svelte-headlessui) является неофициальным, полным портом Svelte библиотеки компонентов Headless UI
- [svelte-forms v2](https://chainlist.github.io/svelte-forms/) был выпущен - автор [ищит обратную связь](https://www.reddit.com/r/sveltejs/comments/r6354j/svelteforms_v2_has_been_released/)
- [Percival](https://github.com/ekzhang/percival) - это декларативный язык запросов и визуализации данных
- [Svelte FlatList](https://github.com/snuffyDev/svelte-flatlist) - это удобное для мобильных устройств, простое и настраиваемое перетаскиваемое меню
- [svelte-keyed](https://github.com/bryanmylee/svelte-keyed) является записываемым производным хранилищем для объектов и массивов
- [Svemix](https://github.com/svemix/svemix) - это Remix для Svelte - предоставляющий серверные скрипты внутри ваших компонентов/маршрутов Svelte, которые будут преобразованы в конечные точки

Есть идея для SvelteKit? Ознакомьтесь с новыми [обсуждениями на GitHub](https://github.com/sveltejs/kit/discussions) в репозитории Svelte. Вы также можете присоединиться к нам на [Reddit](https://www.reddit.com/r/sveltejs/) или в [Discord](https://discord.com/invite/yy75DKs).

Увидимся в следующем месяце!