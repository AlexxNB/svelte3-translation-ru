---
question: Есть ли роутеры?
---

Вы можете использовать любую библиотеку роутинга по своему желанию. Например, множество разработчиков используют [page.js](https://github.com/visionmedia/page.js). Есть, ещё очень похожий роутер [navaid](https://github.com/lukeed/navaid).

Если вы предпочитаете декларативный подход, попробуйте [tinro](https://github.com/AlexxNB/tinro).

Если нужна навигация на клиенте при помощи hash части URL, возьмите [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router), или [abstract-state-router](https://github.com/TehShrike/abstract-state-router/), зрелый роутер, использующийся в существующих бизнес-решениях.

Для маршрутизации на основе файловой системы, посмотрите на [Routify](https://routify.dev).

Не существует какого-либо официального роутера для Svelte. Тем не менее, у нас есть [Sapper](https://sapper.svelte.dev/), официальный фреймворк в стиле Next.js, основанный на Svelte, для создания веб-приложений, который имеет в своем составе собственный маршрутизатор, основанный на файловой системе.