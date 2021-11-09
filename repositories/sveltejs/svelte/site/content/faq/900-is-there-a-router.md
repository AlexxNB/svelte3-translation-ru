---
question: Есть ли роутеры?
---
Официальная библиотека для роутинга – [SvelteKit](https://ru.kit.svelte.dev/), которая пока находится в бета-версии. SvelteKit предлагает роутер основанный на файловой системе, рендер на стороне сервера(SSR), и горячую перезагрузку модулей(HMR) в одном пакете, который легко использовать. Он предлагает концепции схожие с идеями Next.js для React.

Тем не менее, вы можете использовать любую библиотеку маршрутизатора, которую хотите. Многие люди используют [page.js](https://github.com/visionmedia/page.js). Есть также [navaid](https://github.com/lukeed/navaid), что очень похоже. И [universal-router](https://github.com/kriasoft/universal-router), который изоморфен дочерним маршрутам, но без встроенной поддержки истории.

Если вы предпочитаете декларативный подход, попробуйте [tinro](https://github.com/AlexxNB/tinro) или изоморфный [svelte-routing](https://github.com/EmilTholin/svelte-routing) или его форк [svelte-navigator](https://github.com/mefechoel/svelte-navigator), содержащий некоторую дополнительную функциональность.

Если нужна навигация на клиенте при помощи hash части URL, возьмите [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router) или [abstract-state-router](https://github.com/TehShrike/abstract-state-router/), зрелый роутер.

[Routify](https://routify.dev) - это еще один маршрутизатор на основе файловой системы, похожий на маршрутизатор SvelteKit.
