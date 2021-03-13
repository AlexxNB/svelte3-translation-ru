---
title: Что нового в Svelte: Январь 2021
description: A Svelte-packed showcase to kick-off the new year!
author: Daniel Sandoval
authorURL: https://desandoval.net
---

С Новым годом от Svelte! В прошлом месяце мы добились прогресса в предстоящем выпуске Sapper, доработали наши типы `SvelteComponent` и увидели несколько замечательных приложений, сайтов и библиотек, выходящих на витрине.

## Что изменилось в Svelte?

В новом минорном релизе заменили `SvelteComponent` класс на `SvelteComponentTyped`. This renaming should help with backwards compatibility. Мы обновили [в декабре](https://svelte.dev/blog/whats-new-in-svelte-december-2020) чтобы избежать путаницы с изменением названия.

Если вы используете `SvelteComponent` или новый `SvelteComponentTyped` в своем проекте или библиотеке, сообщите нам, для чего вы его используете, и мы добавим его в витрину!


## Что происходит в Сапере?

Каждый день в предстоящем выпуске появляется больше функций повышения качества жизни. `0.29.0` будет включать новые определения TypeScript, исправления для отслеживания прокрутки и предварительной выборки, а также улучшения в маршрутизаторе для поддержки закодированных параметров запроса.

Если вы обновляетесь с 0.28.x, проверьте [the migration guide](https://sapper.svelte.dev/migrating/#0_28_to_0_29) для шагов по обновлению до Sapper 0.29.


## Готов ли SvelteKit?

Чтобы избежать слишком большого оттока во время разработки, SvelteKit все еще работает в частном репо. Объявление будет опубликовано в Discord, блоге и Twitter, когда оно будет готово для большей группы пользователей и участников.

А пока вы можете изучить текущую сборку, запустив `npm init svelte@next` из командной строки.

Как указано в _[What's the deal with SvelteKit?](https://svelte.dev/blog/whats-the-deal-with-sveltekit)_, пока нет доступных документов или поддержки ... Так что используйте на свой страх и риск / для собственного удовольствия!

---

## Community Showcase

**Apps & Sites**

- [manitu.me](https://manitu.me/) таймер фонового звука / помидора для сосредоточения и расслабления
- [Answer Socrates](https://answersocrates.com/) помогает найти актуальные вопросы в Интернете, чтобы вы могли написать наиболее релевантный пост в блоге, твит или рекламный щит
- [multris](https://multris.s1h.org/) многопользовательская игра в тетрис. Вы можете прочитать о его развитии [здесь](https://blog.s1h.org/svelte-multiplayer-game/)
- [weather-ab](https://github.com/ganochenkodg/weather-ab) сравнивает архив погоды в разных городах мира. Незаменим для людей, думающих о миграции
- [Game Nibs](https://gamenibs.com/) латформа для геймеров, где они могут найти и поделиться краткими игровыми советами, советами, приемами, скриншотами, сборками и многим другим
- [Ora](https://github.com/cupcakearmy/ora) инструмент с открытым исходным кодом для отслеживания и ограничения веб-сайтов для Chrome и Firefox
- [vscode-dms](https://github.com/techsyndicate/vscode-dms) приложение для группового чата с прямым обменом сообщениями для VSCode
- [Zero.2](https://zero.oleksandrdemian.tech/) математическая игра, в которой вы пытаетесь достичь нуля как можно быстрее
- [Octave Compass](https://octavecompass.com/2741) таблица аккордов и инструмент масштабирования для многих популярных музыкальных гамм
- [Infinite Walking Bass Generator 2](https://github.com/elialbert/infinitewalkingbass2) онлайн-музыкальный проигрыватель, который воспроизводит уникальную ходячую басовую партию
- [ListenAddict](https://www.listenaddict.com/) сайт, который уведомляет вас всякий раз, когда у человека новый разговор / интервью в подкасте

**Demos, Libraries & Components**

- [svelte-tiny-virtual-list](https://github.com/Skayo/svelte-tiny-virtual-list) ускоряет длинные списки, отображая только видимые элементы
- [svelte-query](https://github.com/TanStack/svelte-query) представляет собой набор полезных ловушек для управления, кэширования и синхронизации асинхронных и удаленных данных
- [svelte-previous](https://github.com/bryanmylee/svelte-previous) компактное хранилище для запоминания предыдущих значений - полезно для переходов или быстрой отмены стека
- [Let's Build a Confetti Cannon](https://varun.ca/confetti/) объясняет, как создать систему частиц и интегрировать анимацию на основе Canvas в более крупное приложение
- [svelte-micro](https://github.com/ayndqy/svelte-micro) однокомпонентный роутер
- [svelte-standalone-router](https://github.com/hjalmar/svelte-standalone-router) автономный маршрутизатор с API на основе  [standalone-router](https://github.com/hjalmar/standalone-router)
- [svelte-datepicker](https://github.com/beyonk-adventures/svelte-datepicker) компонент выбора даты с вариациями выбора времени, диапазонов дат и адаптивных тем
- [svelte-slimscroll](https://github.com/MelihAltintas/svelte-slimscroll) действие для Svelte.js, которое может преобразовывать любой div в прокручиваемую область с красивой полосой прокрутки
- [Svelte Zoomable](https://svelte.dev/repl/58dfe87756ee4db897c281b52fdef7b7?version=3.31.0) настраиваемый переход с красивым эффектом масштабирования

**У вас есть компонент, которым вы хотите поделиться?** Посетите страницу [Components](https://sveltesociety.dev/components) на сайте Svelte Society. Вы можете внести свой вклад, сделав [a PR to this file](https://github.com/svelte-society/sveltesociety.dev/blob/master/src/pages/components/components.json).

**Learning Resources**

- [Using Svelte to create a scroll video effect](https://blog.koenvangilst.nl/tutorial-svelte-scroll-video/) демонстрирует, как команду `bind` можно использовать для создания крутого видеоэффекта прокрутки с очень небольшим количеством кода.
- [How to make a flappybird game in svelte and typescript](https://www.youtube.com/watch?v=nhrYBoVI8pQ) видеоурок, включающий документы и код для справки
- [Accessible Svelte Transition](https://www.youtube.com/watch?v=QK_QuRL7nSo&feature=youtu.be) проходит через `prefers-reduced-motion`, чтобы сделать стройные переходы более доступными
- [Svelte's module scripts explained](https://codechips.me/svelte-module-scripts-explained/) отличное введение в контекст модуля, распространенный паттерн Sapper
- [Awesome Svelte](https://github.com/TheComputerM/awesome-svelte#readme) тщательно подобранный список ресурсов Svelte
- [.NET Core and Svelte](https://dev.to/cainux/net-core-and-svelte-f8o) объясняет, как запустить Svelte с .NET Core
- [A la découverte de Svelte JS](https://www.youtube.com/watch?v=SLpx1Y8e1ek&list=PLff5I1miao9ZEUhpqkrOx7k8RGAZt-nm9) изящная серия учебных пособий на французском языке!
- [Svelte for React Developers](https://soshace.com/svelte-for-react-developers/) объясняет основные концепции Svelte людям, которые привыкли к React
- [Building a Svelte Static Website with Smooth Page Transitions](https://www.youtube.com/watch?v=dvPfmcGtmrI&feature=emb_title) показывает, как создать статический веб-сайт с помощью Svelte и добавить плавные переходы между страницами с помощью Three.js и GSAP
- [Using Apollo Client in Sapper](https://bjornlu.com/blog/using-apollo-client-in-sapper/) объясняет «простейшие» решения для интеграции клиента запросов Apollo в Sapper
- [Reactive web apps with Crystal + Svelte](https://www.youtube.com/watch?v=i1xjLd6z7BU) eисследует, как создавать приложения Svelte с полным стеком и рендерингом на сервере с помощью [Crystal](https://crystal-lang.org)

**Related Projects**

- [Snowpack's v3 release candidate](https://www.snowpack.dev/posts/2020-12-03-snowpack-3-release-candidate) сейчас выходит в рамках подготовки к дате релиза 6 января. Check out the [Getting Started with Svelte](https://www.snowpack.dev/tutorials/svelte) для получения дополнительной информации о том, как использовать Snowpack.
- [Uppy](https://uppy.io/blog/2020/12/1.24/), загрузчик файлов с открытым исходным кодом, объявил о поддержке Svelte в своей новой версии 1.24

## Увидимся в следующем месяце!

Есть, что показать? Хотите больше участвовать в Svelte? Мы всегда ищем сопровождающих, участников и фанатиков ... Ознакомьтесь с [Svelte Society](https://sveltesociety.dev/), [Reddit](https://www.reddit.com/r/sveltejs/) и [Discord](https://discord.com/invite/yy75DKs)!
