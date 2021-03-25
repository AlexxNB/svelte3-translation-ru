---
question: Есть ли роутеры?
---
Официальная библиотека для роутинга – [SvelteKit](https://ru.kit.svelte.dev/), которая пока находится в бета-версии. SvelteKit предлагает роутер основанный на файловой системе, рендер на стороне сервера(SSR), и горячую перезагрузку модулей(HMR) в одном пакете, который легко использовать. Он предлагает концепции схожие с идеями Next.js для React.

Тем не менее, вы можете использовать любую библиотеку роутинга по своему желанию. Например, множество разработчиков используют [page.js](https://github.com/visionmedia/page.js). Есть, ещё очень похожий роутер [navaid](https://github.com/lukeed/navaid).

Если вы предпочитаете декларативный подход, попробуйте [tinro](https://github.com/AlexxNB/tinro).

Если нужна навигация на клиенте при помощи hash части URL, возьмите [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router), или [abstract-state-router](https://github.com/TehShrike/abstract-state-router/), зрелый роутер, использующийся в существующих бизнес-решениях.

Для маршрутизации на основе файловой системы, посмотрите на [Routify](https://routify.dev).