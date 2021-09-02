---
title: Что нового в Svelte: Сентябрь 2021
description: Самый любимый веб-фреймворк на StackOverflow
author: Daniel Sandoval
authorURL: https://desandoval.net
---

В этом месяце Svelte [стал самым любимым веб-фреймворком на StackOverflow](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks), Тан Ли Хау [разговорился на Svelte Radio](https://share.transistor.fm/s/84c7521b) о своем [Svelte-filled YouTube-канале](https://www.youtube.com/channel/UCbmC3HP3FaAFdcZkui8YoMQ), а SvelteKit добился еще большего прогресса к выпуску версии 1.0!

## Новое в Svelte

- `use:actions` теперь может использоваться на `<svelte:body>` (**3.42.0**)
- `HTMLElement`, `SVGElement` (**3.42.2**) и `BigInt` (**3.42.3**) теперь известны как глобальные переменные
- В выходных данных Svelte меньше кода благодаря следующим улучшениям в **3.42.2**:
    - Пробелы теперь сворачиваются в атрибутах класса и стиля
    - Гидрированные компоненты были обновлены, чтобы полагаться только на хелперы для создания типов элементов, присутствующих в компоненте
- Масштабирование теперь учитывается в анимации `flip` (**3.42.2**)
- Все `<option>` в `<select>` теперь отменяются, когда связанное значение не соответствует ни одному из них (**3.42.2**)

Полный список функций и исправлений ошибок см. в [Svelte changelog](https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md).

## Обновления в SvelteKit

Мантейнеры Svelte [ищут помощь в доведении SvelteKit до 1.0](https://github.com/sveltejs/kit/issues/2100). Мы закрыли более 100 вопросов, которые были на этапе 1.0. Осталось всего пару десятков, и мы хотели бы, чтобы этот список был немного короче!

Если вы хотите помочь, пожалуйста, рассмотрите возможность работы по любому из [1.0 milestone issues](https://github.com/sveltejs/kit/issues?q=is%3aOpen+is%3aissue+mileestone%3a1.0).

В прошлом месяце основное внимание уделялось шлифовке кода, это позволило принять более 100 пул-реквестов. Также появились несколько новых функций...

- SvelteKit теперь определит, пытается ли предварительно отрендеренное приложение получить доступ к параметру запроса и вернуть ошибку вместо молчаливого сбоя. ([#2104](https://github.com/sveltejs/kit/pull/2104))
- `adapter-node` теперь позволяет [добавить мидлвары Kitа на свой собственный сервер](https://ru.kit.svelte.dev/faq#integrations) для использования с другими мидлварами. Вы также можете [добавить мидлвары в режиме разработки](https://ru.kit.svelte.dev/faq#how-do-i-use-x-with-sveltekit-how-do-i-use-middleware) с дополнительными улучшениями в этой области
- Новый хелпер [`sequence` позволяет объединить несколько вызовов `handle`](https://ru.kit.svelte.dev/docs#moduli-sveltejs-kit-hooks)
- Новый хук [`handleError`](https://ru.kit.svelte.dev/docs#huki-handleerror) дает вам возможность отправить данные в службу отслеживания ошибок или настроить форматирование перед печатью ошибки в консоли.
- `adapter-node` теперь может слушать по пути сокета ([#2048](https://github.com/sveltejs/kit/pull/2048))

Чтобы увидеть все обновления для SvelteKit, проверьте [SvelteKit changelog](https://github.com/sveltejs/kit/blob/master/packages/kit/changeLog.md).


---

## Крутые примеры сообщества

**Apps & Sites**
- [macos-web](https://github.com/PuruVJ/macos-web) от @puruvjdev был переписан c улучшениями с React на Svelte.Проверьте все детали в этом [Twitter thread](https://twitter.com/puruvjdev/status/1426267327687847939)
- [Brave Search](https://search.brave.com/) использует Svelte
- [exatorrent](https://github.com/varbhat/exatorrent) селф-хостед, простой в использовании, легкий и современный торрент-клиент написанный на Go и Svelte
- [json2TsTypes](https://github.com/jatinhemnani01/json2TsTypes) это простой инструмент, который преобразует ваш JSON в Typescript Types/Interfaces
- [Histogram.dev](https://histogram.dev/) генерирует гистограммы для каждой функции в CSV
- [cybernetic.dev](https://cybernetic.dev/) коллекция ориентированных на данные UI экспериментов сделанных в процессе изучения Svelte
- [LunaNotes](https://chrome.google.com/webstore/detail/lunanotes-youtube-video-n/oehoffnnkgcdacmbkhmlbjedinpampak?hl=en) раширение Chrome помогающее собирать заметки с YouTube video
- [theia.games](https://theia.games/#dev)'s встроенный редактор 3D-среды позволяет создать VR World с меню, построенным на Svelte
- [Ferrum](https://github.com/probablykasper/ferrum) музыкальная библиотека и плеер для Mac, Windows или Linux
- [Fluid Earth](https://github.com/byrd-polar/fluid-earth) это интерактивное приложение WebGL для визуализации атмосферы Земли и океанов

**Ищете проект Svelte для работы? Заинтересованы в помощи сделать Свелте в Интернете лучше?** 
Посмотрите [список открытых issues](https://github.com/svelte-society/sveltesociety-2021/issues) если вы хотели бы внести свой вклад в сообщество Svelte, и помочь переписать на Sveltekit.

**Educational Content**
- [Tauri with Standard Svelte or SvelteKit](https://medium.com/@cazanator/tauri-with-standard-svelte-or-sveltekit-ad7f103c37e7) как настроить SVELTE с Tauri, для разработки кроссплатформенных гибридных настольных приложений
- [Svelte - Web App Development Reimagined [An Intro to Svelte]](https://www.youtube.com/watch?v=4CGzFwHoD0A&list=PLEx5khR4g7PKSASVAXXiAhkyx02_OeruP) это великое вступление от GOTO Conferences
- [LevelUpTuts - Even More 5 Things I Like More In Svelte Than React](https://www.youtube.com/watch?v=ISmnG2sIOeM) Подчеркивает подход Svelte к рефам(они не нужны), метатегам и многому другому
- [State Management in Svelte Applications](https://auth0.com/blog/state-management-in-svelte-applications/) учебное пособие о том, как использовать сторы для управления состоянием в приложениях Svelte
- [Migrating from Sapper to SvelteKit](https://shipbit.de/blog/migrating-from-sapper-to-svelte-kit/) Это обзор и ретроспектива миграции ShipBit с Sapper

**Libraries, Tools & Components**
- [svelte-stripe-js](https://github.com/joshnuss/svelte-stripe-js) все, что вам нужно, чтобы добавить Stripe в ваш проект Svelte. 100% совместимость со SvelteKit
- [svelte-steps](https://github.com/shaozi/svelte-steps) настраиваемый компонент шагов, написанный на Svelte
- [simple-optics-module](https://gitlab.com/Samzelot/simple-optics-module) онлайн-инструмент с открытым исходным кодом для экспериментов и обучения геометрической оптике
- [inlang](https://github.com/samuelstroschein/inlang) инструмент интернационализации (i18n) для приложений SvelteKit
- [Sveno](https://github.com/pocinnovation/sveno) траняпилятор React компонентов в Svelte
- [svelte-useactions](https://github.com/paolotiu/svelte-useactions) полностью типизированная библиотека для actions в компонентах
- [Svelte-Element-Query](https://github.com/leveluptuts/Svelte-Element-Query) 322b library/action имитирующая container-query
- [svelte-meta-tags](https://github.com/oekazuma/svelte-meta-tags) плагин, который облегчает управление SEO в проектах Svelte
- [svelte-domtree](https://github.com/alex-knyaz/svelte-domtree) позволяет визуализировать DOM - похож на дерево DOM в Chrome devtools
- [Diffx](https://github.com/jbjorge/diffx/tree/master/svelte), независимый от фреймворков стейт-менеджер, добавил поддержку Svelte
- [svelte-ionic-starter](https://github.com/Zettexe/svelte-ionic-starter) шаблон приложения iOS/Android - Svelte + Ionic + CapacitorJS с live reload
- [demo-sveltekit-sanity](https://github.com/stephane-vanraes/demo-sveltekit-sanity/) стартер SvelteKit и Sanity(open source React CMS)

Проверьте сайт сообщества [sveltesociety.dev](https://sveltesociety.dev/templates/) для получения дополнительных шаблонов, дополнений и адаптеров со всей экосистемы Svelte.


## Увидимся в следующем месяце!

Хотите больше обновлений?
Присоединяйтесь к нам на [Reddit](https://www.reddit.com/r/sveltejs/) или в [Discord](https://discord.com/invite/yy75DKs)!