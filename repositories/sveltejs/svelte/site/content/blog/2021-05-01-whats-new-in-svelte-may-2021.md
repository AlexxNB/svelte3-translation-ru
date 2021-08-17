---
title: "Что нового в Svelte: Май 2021"
description: Работаем над SvelteKit 1.0 и клёвыми примерами сайтов на нём!
author: Daniel Sandoval
authorURL: https://desandoval.net
---

На прошлой неделе Svelte Summit поразил нас горой контента! [Просмотрите полную запись](https://www.youtube.com/watch?v=fnr9XWvjJHw) или аудиообзор [на Svelte Radio](https://www.svelteradio.com/episodes/svelte-summit-party-episode). А теперь перейдем к новостям этого месяца...


## Новые возможности компилятора Svelte

- `:global()` теперь поддерживается как часть составных селекторов CSS (**3.38.0**, [Пример](https://ru.svelte.dev/repl/54148fd2af484f2c84977c94e523c7c5?version=3.38.0))
- Пользовательские свойства CSS теперь можно передавать компонентам для таких случаев использования, как темизация (**3.38.0**, [Документы скоро появятся](https://github.com/sveltejs/svelte/issues/6268))


## Новое в SvelteKit

- [kit.svelte.dev](https://ru.kit.svelte.dev/) выглядит по-новому, а [Демо-сайт SvelteKit](https://netlify.demo.svelte.dev/) получил свежий набор иллюстраций и красок. Проверьте это, запустив `npm init svelte@next`
- Теперь вы можете использовать `@sveltejs/adapter-static` для создания одностраничного приложения или SPA, указав резервную страницу ([PR](https://github.com/sveltejs/kit/pull/1181), [Документы](https://github.com/sveltejs/kit/tree/master/packages/adapter-static))
- Отключить рендеринг на стороне сервера (SSR) для всего приложения или постранично ([PR](https://github.com/sveltejs/kit/pull/713), [Документы](https://ru.kit.svelte.dev/docs#ssr-i-javascript-ssr))
- Сообщения об ошибках, выдаваемые во время предварительного рендеринга, теперь гораздо более информативны и читабельны ([PR](https://github.com/sveltejs/kit/pull/1062), [Документы](https://ru.kit.svelte.dev/docs#makety-straniczy-oshibok))
- Макеты теперь можно сбрасывать, чтобы страницы не наследовали корневой макет. Это полезно, если у вас есть конкретный макет для страницы или вариант i18n ([PR](https://github.com/sveltejs/kit/pull/1061), [Документы](https://ru.kit.svelte.dev/docs#lmakety-straniczy-oshibok))
- `fetch` в коде SvelteKit теперь будет использовать реализацию, предоставленную окружением, когда это возможно. Если `fetch` недоступен, он будет заполифиллен адаптерами ([PR](https://github.com/sveltejs/kit/pull/1066), [Документы](https://ru.kit.svelte.dev/docs#zagruzka-dannyh-poluchaemye-znacheniya-fetch)) 


## Новое в Svelte & Language Tools

- `svelte-preprocess` теперь поддерживает поле "extends" файла tsconfig.json (4.7.2)
- Атрибуты HTML `style` теперь имеют ховер и автозаполнение. Внешние пространства имен и конфигурации ESM теперь поддерживаются в языковом сервере и расширениях Svelte.
- Языковые инструменты Svelte теперь могут определять типы слотов/событий из своих свойств, если между ними была определена общая связь.

---

## Крутые примеры сообщества

**Apps & Sites**

- [gitpod.io](https://github.com/gitpod-io/website) — недавно переписал свой сайт с помощью SvelteKit
- [highlight eel](https://highlighteel.com/) — это веб-редактор, позволяющий отмечать ваши любимые части любого видео YouTube, чтобы вырезать их и поделиться с кем угодно
- [The Far Star Mission](https://thefarstar.apotheus.net/) — интерактивная аудиокнига, дополняющая альбом The Far Star by Apotheus.
- [JavaScript quiz](https://github.com/nclskfm/javascript-quiz) — небольшая викторина, которая сохраняет ваши ответы локально
- [ExtensionPay](https://extensionpay.com/) — позволяет разработчикам принимать безопасные платежи в расширениях браузера без бэкенд-сервера.
- [mk48.io](https://mk48.io/) — военно-морская игра, созданная с помощью SvelteKit 👍🏻
- [Frog Safety](https://frog-safety.vercel.app/) - это руководство по африканским карликовым лягушкам и основной набор API для пресноводных животных.
- [Stardew Valley Character Preview](https://github.com/overscore-media/stardew-valley-character-preview) — загружает атрибуты вашего персонажа из файла сохранения Stardew Valley и позволяет вам поиграть с различными нарядами, цветами и аксессуарами.


**Demos, Libraries, Tools & Components**

- [svelte-parallax](https://github.com/kindoflew/svelte-parallax) — компонент параллакса с применением Svelte технологии spring
- [@svelte-plugins/viewable](https://github.com/svelte-plugins/viewable) — простой подход к отслеживанию видимости элементов, основанный на правилах.
- [Sveltekit-JUI](https://github.com/Wolfr/sveltekit-jui) — набор компонентов пользовательского интерфейса для Svelte и Svelte Kit.
- [EZGesture](https://github.com/mhmd-22/ezgesture#integrating-with-other-frameworks) — упрощает добавление функций жестов с помощью простых собственных событий DOM

**Хотите поделиться своим компонентом?** Отправьте [Компонент](https://sveltesociety.dev/components) на сайт Svelte Society, сделав [PR](https://github.com/svelte-society/sveltesociety.dev/blob/master/src/pages/components/components.json).


**Starters**

- [How to use Vercel Analytics with SvelteKit](https://ivoberger.com/posts/using-vercel-analytics-with-svelte-kit) — учит, как отслеживать Web Vitals на устройствах ваших пользователей.
- [Asp.NETCore + Svelte + Vite](https://github.com/Kiho/aspcore-spa-cli/tree/master/samples/SviteSample) — связывает три фреймворка с SpaCliMiddleware (VS2019)
- [Add CoffeeScript to Svelte](https://github.com/Leftium/coffeescript-adder) — экспериментальная команда для добавления CoffeeScript в ваш проект SvelteKit или приложение Svelte на базе Vite.
- [Adds Supabase to Svelte](https://github.com/joshnuss/svelte-supabase) — экспериментальная команда для добавления Supabase в ваш проект SvelteKit
- [svelte-babylon](https://github.com/SectorXUSA/svelte-babylon) — позволяет использовать BabylonJS как A-Frame через реактивные компоненты Svelte

**Ищете конкретный стартер?** Посмотрите [svelte-adders](https://github.com/svelte-add/svelte-adders) и ряд других примеров шаблонов на сайте сообщества [sveltesociety.dev](https://sveltesociety.dev/templates/)


**Learning Resources**

- [Amazing macOS Dock animation in Svelte](https://dev.to/puruvj/amazing-macos-dock-animation-in-svelte-5hfb) — демонстрирует, как хорошо смотрятся Svelte и popmotion вместе
- [Solving the Tower of Hanoi with recursive Svelte templates](https://geoffrich.net/posts/svelte-tower-of-hanoi/) — включает элемент `<svelte:self>` в общую задачу информатики
- [DIY SvelteKit CDK adapter](https://dev.to/juranki/diy-sveltekit-cdk-adapter-3enp) — объединяет SvelteKit и AWS CDK
- Fireship's [Svelte in 100 Seconds](https://www.youtube.com/watch?v=rv3Yq-B8qp4) — это быстрое и легкое введение в основные концепции Svelte
- [Tech Downtime](https://www.youtube.com/watch?v=tsePBA2JC7o&list=PLualcIC6WNK1LHIYx2Tg9AQfTQDv4zNPu) — в этом плейлисте погружение в SvelteKit - от начала работы до отладки.
- последние обновления видео lihautan в [Svelte 101](https://www.youtube.com/watch?v=rwYgOU0WmVk&list=PLoKaNN3BjQX3mxDEVG3oGJx2ByXnue_gR&index=59) и [Svelte Store](https://www.youtube.com/watch?v=p4GmT0trCPE&list=PLoKaNN3BjQX3fG-XOSwsPHtnV8FUY6lgK&index=19) плейлисты охватывают слоты, сторы и контекст - и когда их использовать
- [DavidParkerW](https://www.youtube.com/c/DavidParkerW/playlists) — изучение Svelte, Sapper и SvelteKit в некоторых реальных сценариях, например [отображение списка сообщений в блоге из API](https://www.youtube.com/watch?v=kAPVFgFnxaM&list=PLPqKsyEGhUna6cvm6d4vZNI6gbt_0S4Xx)



## Увидимся в следующем месяце!

Есть, что показать? Присоединяйтесь к нам в [Svelte Society](https://sveltesociety.dev/), [Reddit](https://www.reddit.com/r/sveltejs/) и [Discord](https://discord.com/invite/yy75DKs)!