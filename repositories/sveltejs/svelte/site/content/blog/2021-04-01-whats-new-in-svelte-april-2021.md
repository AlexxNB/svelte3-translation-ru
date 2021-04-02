---
title: Что нового в Svelte: Апрель 2021
description: SvelteKit beta и новый путь использовать слоты
author: Daniel Sandoval
authorURL: https://desandoval.net
---

Два проекта, на создание которых ушли месяцы (или даже годы), увидели свет. SvelteKit сейчас находится в стадии публичной бета-версии, а компоненты со слотами теперь доступны в Svelte!

## Что там со SvelteKit?
[SvelteKit](https://kit.svelte.dev/) - Универсальный фреймворк Svelte для создания SSR, бессерверных приложений или SPA теперь официально находится в стадии публичной бета-версии. Ожидайте ошибок! Подробнее об этом можно прочитать в [в предыдущем посте](https://ru.svelte.dev/blog/sveltekit-beta). Хотите знать, когда выйдет версия 1.0? Смотрите статус здесь [github](https://github.com/sveltejs/kit/milestone/2).

Хотите узнать больше о том, как начать работу, чем отличается от Sapper, какие есть новые функции и пути миграции? Послушайте [новый эпизод на Svelte Radio](https://www.svelteradio.com/episodes/svelte-kit-public-beta) для глубокого погружения с Antony, Kev и Swyx.

## Новое в Svelte & Language Tools
- Компоненты со слотами, в том числе `<svelte:fragment slot="...">` позволяют потребителям компонентов нацеливаться на определенные слоты с богатым контентом (**Svelte 3.35.0, Language Tools [104.5.0](https://github.com/sveltejs/language-tools/releases/tag/extensions-104.5.0)**, подробнее в [документации](https://ru.svelte.dev/docs#svelte_fragment) и [учебнике](https://ru.svelte.dev/tutorial/svelte-fragment))
- Связанное редактирование теперь работает для HTML в Svelte файлах (**Language Tools, [104.6.0](https://github.com/sveltejs/language-tools/releases/tag/extensions-104.6.0)**)
- Определения типов в файле `svelte.d.ts` теперь разрешены по порядку, что позволяет авторам библиотек отправлять определения типов вместе со своими компактными компонентами (**Language Tools, [104.7.0](https://github.com/sveltejs/language-tools/releases/tag/extensions-104.7.0)**)
- [vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte) доступен для использования Svelte в Vite. `npm init @vitejs/app` включает параметры Svelte, используя этот плагин.

---

## Крутые примеры сообщества

**Apps & Sites**

- [Nagato](https://nagato.app/) — инструмент управления задачами, который объединяет популярные инструменты отслеживания времени и текущих дел в одном месте.
- [type-kana](https://type-kana.cass.moe/setup) — викторина, помогающая изучить ひらがな (хигарана) и カタカナ (катакана), японские слоговые азбуки.
- [Pittsburgh Steps](https://pittsburgh-steps.samlearner.com/) — интерактивная карта из более чем 800 общественных открытых лестниц в Питтсбурге, штат Пенсильвания.
- [Music Mode Wheels](https://tobx.github.io/music-mode-wheels/) — веб-сайт, на котором музыкальные режимы отображаются в виде интерактивных колес.
- [Critical Notes](https://www.critical-notes.com/) — помогает мастерам игр и игрокам отслеживать свои кампании и приключения в ролевых играх.
- [Svelte Game of Life](https://github.com/alanrsoares/svelte-game-of-life) — образовательная реализация Conway's Game of Life на TypeScript + Svelte
- [foxql](https://github.com/foxql) — одноранговая система полнотекстового поиска, работающая в вашем браузере.


**Demos, Libraries, Tools & Components**

- [svelte-nodegui](https://github.com/nodegui/svelte-nodegui) — это способ создавать производительные, нативные и кроссплатформенные настольные приложения с помощью Node.js и Svelte.
- [Svelte Story Format](https://www.npmjs.com/package/@storybook/addon-svelte-csf) — позволяет вам писать свои «истории» в Storybook, используя синтаксис Svelte. Больше информации в [Storybook blog](https://storybook.js.org/blog/storybook-for-svelte/)
- [SelectMadu](https://github.com/pavish/select-madu) — замена нативного селекта с поддержкой поиска, множественного выбора, асинхронной загрузки данных и многого другого.
- [Svelte Checklist](https://www.npmjs.com/package/svelte-checklist) — настраиваемый контрольный список, созданный с помощью Svelte.
- [Suspense for Svelte](https://www.npmjs.com/package/@jamcart/suspense) — компонент Svelte, реализующий основную идею React `<Suspense>`.
- [MiniRx](https://spierala.github.io/mini-rx-store/) — RxJS Redux Store который работает со Svelte и TypeScript
- [svelte-formly](https://github.com/arabdevelop/svelte-formly) — генерирует динамические формы для Svelte и Sapper
- [7ty](https://www.npmjs.com/package/@jamcart/7ty) — генератор статических сайтов, который использует Svelte, поддерживает частичную гидратацию компонентов и использует файловую маршрутизацию, похожую на Sapper и 11ty.

**Хотите поделиться своим компонентом?** Отправьте [Компонент](https://sveltesociety.dev/components) на сайт Svelte Society, сделав [PR](https://github.com/svelte-society/sveltesociety.dev/blob/master/src/pages/components/components.json).


**Starters**

- [sveltekit-electron](https://github.com/FractalHQ/sveltekit-electron) — стартовый набор для Electron с использованием SvelteKit
- [sveltekit-tailwindcss-external-api](https://github.com/acidlake/sveltekit-tailwindcss-external-api) — это все, что вам нужно для создания проекта Svelte с помощью TailwindCSS и внешнего API, основанного на create-svelte.
- [Sapper Netlify](https://www.npmjs.com/package/sapper-netlify) — это проект Sapper, который может работать с функцией Netlify.


**Ищете конкретный стартер?** Посмотрите [svelte-adders](https://github.com/svelte-add/svelte-adders) и ряд других примеров интеграции на [sveltejs/integrations](https://github.com/sveltejs/integrations)

**Learning Resources**
- [Как создавать сайты на Svelte и SvelteKit](https://prismic.io/blog/svelte-sveltekit-tutorial) — пошаговое руководство по настройке SvelteKit.
- [Хранилище Svelte для prefers-reduced-motion](https://geoffrich.net/posts/svelte-prefers-reduced-motion-store/) — демонстрирует, как создать собственное хранилище Svelte, значение которого будет указывать, запросил ли пользователь уменьшение движения и улучшение доступности.
- [Поддержка TypeScript в Svelte](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript) — руководство MDN по использованию TypeScript в Svelte.
- [Как объединить ячейки с помощью svelte-window](https://gradientdescent.de/merging-cells/) пошаговое руководство по svelte-window, порту популярного инструмента react-window для объединения ячеек таблицы. Подробнее об этой миграции [от react-window 1:1 к svelte-window](https://gradientdescent.de/porting-react-window/).
- [Легковстраиваемые компоненты Svelte](https://codeandlife.com/2021/03/06/easy-to-embed-svelte-components/) — объясняет, как использовать Rollup и тег `<script>` для встраивания компонентов Svelte в любое место.
- [Перевод Svelte проекта с Rollup на Snowpack](https://www.youtube.com/watch?v=-sHcqj4YLeQ) — демонстрирует распространенную схему миграции на видео.
- [Как интернационализировать маршрутизацию в Svelte и Sapper](https://www.leaf.cloud/blog/how-to-internationalize-routing-in-svelte-sapper?utm_medium=story&utm_source=reddit.com&utm_campaign=awareness&utm_content=sapper_routing) — объясняет, как leaf.cloud перевел свой сайт на голландский.
- [Svelte Store: реактивный контекст с использованием Svelte Store](https://www.youtube.com/watch?v=-rTnWlbdjoY) — видеоответ на вопрос: «Как сделать значение контекста [a] реактивным?»
- [Создание изображений для обмена в социальных сетях с помощью Cloudinary и Svelte](https://www.youtube.com/watch?v=-Si5o-R7KHY) — видео от Cloudinary, демонстрирующее, как динамически создавать изображения Open Graph и карты Twitter для веб-сайта JAMstack.


## Увидимся в следующем месяце!

Есть, что показать? Присоединяйтесь к нам в [Svelte Society](https://sveltesociety.dev/), [Reddit](https://www.reddit.com/r/sveltejs/) и [Discord](https://discord.com/invite/yy75DKs)!