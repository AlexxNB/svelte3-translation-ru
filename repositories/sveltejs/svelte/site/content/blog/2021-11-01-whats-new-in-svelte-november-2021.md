---
title: Что нового в Svelte: Ноябрь 2021
description: Более 5000 звезд осветили крутые примеры сообщества
author: Daniel Sandoval
authorURL: https://desandoval.net
---

SvelteKit пересекает [80% отметку готовности](https://github.com/sveltejs/kit/milestone/2), набирает более [5000 звезд](https://github.com/sveltejs/kit) на GitHub, и уже используется больше, чем Sapper, похоже самое время, чтобы попробовать его! В сообществе появилось много крутых примеров в этом месяце.....

20 ноября не пропустите 👀 [SVELTE Summit](https://sveltesummit.com/) - с участием докладчиков со всего мира!

Теперь о новшествах!

## Новое в Svelte и SvelteKit

- [Svelte.dev](https://svelte.dev/) теперь работает на SvelteKit вместе с [sveltesociety.dev](https://sveltesociety.dev). svelte.dev - относительно сложный сайт с редактированием кода в реальном времени, аутентификацией и блогом на основе md файлов – отличный тест для SvelteKit
- Новая опция компилятора, `enableSourcemap`, обеспечивает больший контроль над выводом компилятора для исходных карт JS и CSS (**3.44.0**). С помощью этой новой функции SvelteKit и плагин Vite Svelte теперь могут правильно обрабатывать переменные среды в шаблонах `.svelte` (см. [sveltejs/kit#720](https://github.com/sveltejs/kit/issues/720) и [sveltejs/vite-plugin-svelte#201](https://github.com/sveltejs/vite-plugin-svelte/pull/201))
- Инструменты языка Svelte теперь поддерживают чтение конфигурации настроек CSS в VS Code ([#1219](https://github.com/sveltejs/language-tools/issues/1219))
- `vite-plugin-svelte` добавил новую опцию `experimental.prebundleSvelteLibraries`, которая значительно ускоряет загрузку библиотек Svelte со многими компонентами, такими как библиотеки иконок и фреймворки пользовательского интерфейса. Опция может быть установлена в корне `svelte.config.js`. Пожалуйста, проверьте это и дайте нам обратную связь!
- SvelteKit будет маршрутизировать эндпоинты только на клиенте, если не помечено как `rel="external"` – уменьшит размер клиентского JS и упростит рефакторинг маршрутизатора в будущем ([2656](https://github.com/sveltejs/kit/pull/2656))
- SvelteKit больше не поддерживает node12 ([2604](https://github.com/sveltejs/kit/pull/2604))
- SvelteKit был обновлен с Vite 2.6.0 до Vite 2.6.12, устранена проблема, из-за которой Vite мог повредить среду выполнения Svelte (https://github.com/vitejs/vite/issues/4306). Он также включает два исправления от команды SvelteKit, чтобы избежать или упростить диагностику проблем Vite в шаблонах SvelteKit (https://github.com/vitejs/vite/pull/5192 и https://github.com/vitejs/vite/pull / 5193). Vite 2.7 в настоящее время доступен в бета-версии с дополнительными исправлениями для SSR


Чтобы увидеть все обновления для Svelte и SvelteKit, проверьте [Svelte](https://github.com/sveltejs/svelte/blob/master/changeLog.md) и [Sveltekit ChangeLog](https://github.com/sveltejs/kit/blob/master/packages/kit/changelog.md), соответственно.


---

## Крутые примеры сообщества

**Apps & Sites**
- [Tangent](http://tangentnotes.com/) - чистое и мощное приложение для заметок для Mac и Windows.
- [The Pudding](https://pudding.cool/) - цифровая публикация, которая объясняет идеи, обсуждаемые в культуре, с помощью визуальных эссе. Перестроено в SvelteKit.
- [Power Switcher](https://powerswitcher.axpo.com/) - интерактивный обзор развития электроснабжения в Швейцарии по мере перехода источников энергии к более чистым.
- [Sublive](https://sub.live/) - новый способ создания музыки, объединяющий музыкантов со всего мира с помощью высококачественной аудиосети с низкой задержкой.
- [Vibify](https://www.vibify.me/) - поможет вам найти скрытые плейлисты в вашей музыке, используя историю прослушивания Spotify.
- [Обзор Marvel Unlimited по годам](https://marvel.geoffrich.net/) - сайт SvelteKit, на котором можно узнать, какие выпуски доступны на Marvel Unlimited за данный год.
- [Files](https://files.community/) - современный файловый менеджер для Windows, имеет новый сайт, перестроенный с помощью SvelteKit.
- [lil-hash](https://github.com/jackbow/lil-hash) - простой инструмент сокращения URL-адресов, который создает легко-запоминаемые сокращенные URL-адреса.
- [PWA Haven](https://github.com/ThaUnknown/pwa-haven) - набор небольших, быстрых и простых PWA для замены собственных приложений ОС.
- [DottoBit](https://dottobit.com/) - многоцветная 16-битная программа для рисования со встроенным URL-адресом
- [Бывший Fast Document for Print](https://github.com/zummon/former) - генератор счетов с красивым дизайном, возможностью работы с международными языками и автоматическим расчетом.
- [Helvetikon](https://github.com/noahsalvi/helvetikon) - словарь швейцарского немецкого языка, поддерживаемый сообществом.
- [Приложение Palitra](https://palitra.app/) - генератор цветовой палитры на основе поиска.

**Podcasts Featuring Svelte**
- [Svelte Radio](https://www.svelteradio.com/episodes/svelte-summit-is-coming-up-and-svelte-is-growing) погружается в технологию, лежащую в основе недавно выпущенного веб-сайта Svelte Summit и еще нескольких других забавных вещей!
- [PodRocket](https://podrocket.logrocket.com/rich-harris), подкаст LogRocket, беседует о Svelte с Ричем Харрисом.
- [PodRocket также углубился](https://podrocket.logrocket.com/elderjs) в Elder.js с Ником Ризом
- [Web Rush](https://webrush.io/episodes/episode-153-single-page-application-vs-multi-page-application-with-rich-harris) и Рич Харрис рассказывают о различиях между SPA и MPA, какую роль играет серверный рендеринг, какая гидратация на стороне клиента и состояние современных инструментов для разработки SPA или MPA.
- [devtools.fm](https://devtools.fm/episode/15) беседует с Ричем Харрисом о разработке привлекательных визуализаций данных и создании инструментов завтрашнего дня.

**Educational Content**
- [Have Single-Page Apps Ruined the Web?](Https://www.youtube.com/watch?v=860d8usGC0o) Рич Харрис отвечает на спорный вопрос на конференции Jamstack Conf в этом году
- [Svelte vs SvelteKit - What's The Difference?](Https://www.youtube.com/watch?v=IKhtnhQKjxQ) LevelUpTuts предоставляет краткое руководство, объясняющее взаимосвязь между двумя проектами. Вы можете ознакомиться с остальными руководствами Скотта Толински по Svelte в его новой серии, ["Weekly Svelte"](https://www.youtube.com/playlist?list=PLLnpHn493BHF-Onm1MQgKC1psvW-rJuYi)
- [WebJeda's SvelteKit Hooks](https://www.youtube.com/watch?v=RarufLoEL08&list=PLm_Qt4aKpfKgzcTiMT2cgWGBDBIPK06DQ) - в этом месяце серия продолжается частью 3 - Аутентификация сеанса файлов cookie.
- [Writing Context Aware Styles in a Svelte App](https://www.ryanfiller.com/blog/tips/svelte-contex-aware-styles) - руководство по написанию автономных компонентов, которые могут динамически адаптироваться к их родителю
- [A Beginner’s Guide to SvelteKit](https://www.sitepoint.com/a-beginners-guide-to-sveltekit/) дает удобный для новичков взгляд на Svelte и SvelteKit и создает простое веб-приложение, показывающее профиль. страницы воображаемых пользователей
- [Svelte vs React: Ending the Debate](https://massivepixel.io/blog/svelte-vs-react/) - исторический взгляд на многовековой аргумент.
- [Svelte Snacks | Custom Events for Modal Actions](https://jeremydayslice.hashnode.dev/svelte-snacks-or-custom-events-for-modal-actions) проходит через надежную реализацию удобной системы настраиваемых событий Svelte.
- [What Svelte's accessibility warnings won't tell you](https://geoffrich.net/posts/svelte-a11y-limits/) объясняет, как работают предупреждения Svelte, и почему вы не должны рассчитывать на них, чтобы сделать ваше приложение доступным.

**Libraries, Tools & Components**
- [svelte-adapter-azure-swa](https://github.com/geoffrich/svelte-adapter-azure-swa) - адаптер для приложений Svelte, который создает статическое веб-приложение Azure с использованием функции Azure для динамического сервера. рендеринг
- [Inlang](https://docs.inlang.dev/getting-started/svelte-kit) - набор инструментов для локализации и интернационализации, который теперь поддерживает SvelteKit.
- [svelte-translate-tools](https://github.com/noelmugnier/svelte-translate-tools) - извлечение/создание/компиляция файлов перевода для вашего приложения Svelte во время сборки
- [@egjs/svelte-infinitegrid](https://github.com/naver/egjs-infinitegrid/tree/master/packages/svelte-infinitegrid) - позволяет реализовать различные сетки, состоящие из разных элементов карты, размеры которых различаются
- [svelte-reactive-css-preprocess](https://github.com/srmullen/svelte-reactive-css-preprocess) - упрощает обновление значений переменных css при изменении состояния вашего компонента.
- [Sveltegen](https://github.com/snuffyDev/sveltegen) - интерфейс командной строки для простого и легкого создания действий, компонентов и маршрутов.
- [svelte-advanced-multistep-form](https://www.npmjs.com/package/svelte-advanced-multistep-form) - помогает обернуть элементы формы, передавая стили к компоненту для визуализации, а также представляет каждый шаг формы упорядоченным и стильным образом
- [gQuery](https://github.com/leveluptuts/gQuery) - сборщик и кэш GraphQL для SvelteKit
- [date-picker-svelte](https://github.com/probablykasper/date-picker-svelte) - средство выбора даты и времени для Svelte.
- [TwelveUI](https://twelveui.readme.io/reference/what-is-twelveui) - библиотека компонентов Svelte со встроенными функциями специальных возможностей.
- [svelte-outclick](https://github.com/babakfp/svelte-outclick/) - компонент Svelte, который позволяет вам отслеживать клики вне элемента, предоставляя вам событие outclick.
- [svelte-zero-api](https://github.com/ymzuiku/svelte-zero-api) - позволяет использовать API-интерфейсы SvelteKit как клиентские функции - с поддержкой Typescript
- [svelte-recaptcha-v2](https://github.com/basaran/svelte-recaptcha-v2) - реализация Google reCAPTCHA v2 для статических сайтов Svelte SPA, SSR и sveltekit.
- [Svelte Body](https://github.com/ghostdevv/svelte-body) - позволяет применять стили к body в маршрутах - разработан для работы с SvelteKit и Routify.
- [svelte-debug-console](https://github.com/basaran/svelte-debug-console) - реализация debug.js для статических сайтов Svelte SPA, SSR и sveltekit, которая позволяет просматривать операторы отладки в браузере. .
- [SVEO](https://github.com/didier/sveo) - свободный от зависимостей подход к объявлению метаданных на страницах SvelteKit.
- [@svelte-drama/Suspense](https://www.npmjs.com/package/@svelte-drama/suspense) - компонент Svelte, который реализует основную идею React `<Suspense>`. Также ознакомьтесь с [SWR для Svelte](https://www.npmjs.com/package/@svelte-drama/swr), чтобы упростить повторное получение.
- [sveltekit-adapter-browser-extension](https://github.com/antony/sveltekit-adapter-browser-extension) - это адаптер для SvelteKit, который превращает ваше приложение в кроссплатформенное расширение браузера.

Проверьте сайт сообщества [sveltesociety.dev](https://sveltesociety.dev/templates/) для получения дополнительных шаблонов, дополнений и адаптеров со всей экосистемы Svelte.

Ищете больше Svelte-добра? Присоединяйтесь к нам на [Reddit](https://www.reddit.com/r/sveltejs/) или [Discord](https://discord.com/invite/yy75dks)!