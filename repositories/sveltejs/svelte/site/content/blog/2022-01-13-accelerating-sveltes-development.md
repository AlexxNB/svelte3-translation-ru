---
title: "Ускорение развития Svelte"
description: "Масштабирование команды, строительство партнерских отношений и растущее сообщество"
author: Ben McCann
authorURL: https://www.benmccann.com/
---

[Svelte](/) - это фронтенд-фреймворк для создания быстрых реактивных веб-приложений с меньшим количеством кода. Если вы новичок здесь, [пройдите учебник](/tutorial) или посмотрите [примеры](/examples), чтобы почувствовать это.

Svelte был [запущен 5 лет назад](https://news.ycombinator.com/item?Id=13069841) и с тех пор [прошло долгий путь](https://www.youtube.com/watch?v=YeY5M29-WcY). В 2021 году, когда использование более чем удвоилось, он был признан [самым любимым](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks) с [наиболее удовлетворенными](https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/) разработчиками в паре опросов. Наряду с такими известными компаниями, как The New York Times, Apple, Spotify, Square, Rakuten, Bloomberg, Reuters, Ikea, Brave и бесчисленными другими, Svelte используется для всего, от хобби-проектов до интерфейсов встроенных систем.

Чтобы помочь разработчикам создавать полнофункциональные приложения с помощью Svelte, не беспокоясь о сложных деталях, мы разрабатываем фреймворк приложений [SvelteKit](https://kit.svelte.dev/). Мы быстро переходим к [стабильному выпуску 1.0](https://github.com/sveltejs/kit/issues?q=is%3Aopen+is%3Aissue+milestone%3A1.0) с помощью ранних последователей, которые уже загрузили SvelteKit почти миллион раз.

## Масштабирование команды

Рич Харрис, создатель Svelte, [присоединился к Vercel, чтобы работать над Svelte полный рабочий день](https://vercel.com/blog/vercel-welcomes-rich-harris-creator-of-svelte). Мы невероятно рады, что уровень участия Рича в Svelte еще больше повышается и заставляет его управлять Svelte в будущем.

Svelte стал возможным благодаря работе большого, преданного сообщества. К Svelte присоеденились множество основных сопровождающих в ходе пандемии, в том числе трех на прошлой неделе. В алфавитном порядке:
- [benmccann](https://github.com/benmccann) - основной сопровождающий SvelteKit на протяжении большей части 2021 года
- [bluwy](https://github.com/bluwy) - основной участник SvelteKit, vite-plugin-svelte и Vite
- [dominikg](https://github.com/dominikg) - создатель vite-plugin-svelte
- [dummdidumm](https://github.com/dummdidumm) - сопровождающий language-tools, который включает в себя расширение VS Code и `svelte-check`
- [ehrencrona](https://github.com/ehrencrona) - участник SvelteKit и использует Svelte на работе
- [geoffrich](https://github.com/geoffrich) - стимулировал усилия по улучшению доступности сайта и документации Svelte
- [GrygrFlzr](https://github.com/GrygrFlzr) - имеет уникальный статус сопровождающего как SvelteKit, так и Vite
- [Halfnelson](https://github.com/Halfnelson) - создатель svelte-native
- [ignatiusmb](https://github.com/ignatiusmb) - обычный участник SvelteKit, особенно поддержка TypeScript
- [jasonlyu123](https://github.com/jasonlyu123) - сопровождающий языковых инструментов, который включает в себя расширение VS Code и `svelte-check`
- [kaisermann](https://github.com/kaisermann) - создатель svelte-preprocess
- [RedHatter](https://github.com/RedHatter) - создатель Svelte Devtools
- [rixo] (https://github.com/rixo) - создатель svelte-hmr

Svelte начал принимать пожертвования через [OpenCollective](https://opencollective.com/svelte) в прошлом году и на сегодняшний день пожертвовал более 60 000 долларов США с [Cohere](https://cohere.ai/), дав 10 000 долларов только сегодня. Мы надеемся, что эти фонды позволят существующим сопровождающим тратить больше времени на Svelte или что средства могли бы в противном случае поддерживать Svelte на неполный рабочий день или контрактной основе, что мы будем продолжать расследовать.

## Партнерство

Несколько крупных поставщиков облачных услуг активизируются, чтобы сделать развертывание приложений SvelteKit в любом месте бесшовным. В результате новой работы Рича SvelteKit скоро будет работать на [Vercel Edge Functions](https://vercel.com/features/edge-functions). Netlify внесла [большой вклад](https://github.com/sveltejs/kit/pull/2113) в адаптер SvelteKit Netlify, а также [обновлено](https://github.com/dependents/node-precinct/pull/88) свой инструмент zip- Недавний [запуск Cloudflare Pages](https://blog.cloudflare.com/cloudflare-pages-goes-full-stack/) SvelteKit был партнером первого дня через [новый адаптер](https://github.com/sveltejs/kit/tree/master/packages/adapter-cloudfla [Начать](https://begin.com) создал [адаптер SvelteKit](https://github.com/architect/sveltekit-adapter) для приложений [Architect](https://arc.codes). И члены сообщества [вкладные адаптеры](https://sveltesociety.dev/components#adapters) для таких сред, как Firebase и Deno, демонстрируя способность SvelteKit работать везде, где это делает JavaScript.

Мы также тесно сотрудничаем с командой [Vite](https://vitejs.dev), чтобы устранить проблемы SSR, выявленные пользователями SvelteKit. Vite - это инструмент сборки, который делает возможным опыт разработчика SvelteKit, и благодаря напряженной работе базы участников, в которую входят представители нескольких фреймворков, последние выпуски решили почти все проблемы, которые мы отслеживали в качестве блокировщиков релизов SvelteKit 1.0.

## Растущее сообщество

[SvelteSociety](https://sveltesociety.dev/) только что провел [4-й саммит Svelte](https://sveltesummit.com/) — [читайте резюме здесь](https://svelte.dev/blog/whats-new-in-svelte-december-2021) В дополнение к хостингу Svelte Summit Кевин и SvelteSociety ведут и управляют [подкастом Svelte Radio](https://www.svelteradio.com/), [каналом SvelteSociety на YouTube](https://www.youtube.com/SvelteSociety) и [Svelte subreddit](https://www.reddit.com/r/sveltejs). SvelteSociety стал домом для всех вещей, связанных с сообществом Svelte, а sveltejs/community и sveltejs/integrations repos были уволены в пользу [sveltesociety.dev](https://sveltesociety.dev/), который был переработан и перестроен в SvelteKit. В октябре Бриттни Постма, которая внесла свой вклад в дизайн пользовательского интерфейса сайта, основала [Svelte Sirens](https://sveltesirens.dev/), группу для женщин и небинарных членов сообщества и их союзников.

Сотни разработчиков присоединяются к Svelte Discord каждую неделю, чтобы поговорить о Svelte. Возможно, вы заметили, что в последнее время некоторые члены сервера имеют фиолетовые имена. Это люди с ролью послов, которая была создана, чтобы признать некоторых из самых ценных членов сообщества и помочь справиться с требованиями быстро растущего сообщества. Послы Svelte - это люди, которые хорошо известны своей полезностью и вкладом, а также за поддержание репутации Svelte как дружелюбного, гостеприимного сообщества, и мы глубоко благодарны за их участие. Первоначальными послами в алфавитном порядке являются:
- [babichjacob](https://github.com/babichjacob)
- [brady fractal](https://github.com/FractalHQ)
- [brittney postma](https://github.com/brittneypostma)
- [d3sandoval](https://github.com/d3sandoval)
- [geoffrich](https://github.com/geoffrich)
- [kev](https://github.com/kevmodrome)
- [puru](https://github.com/PuruVJ)
- [rainlife](https://github.com/stephane-vanraes)
- [rmunn](https://github.com/rmunn)
- [stolinski](https://github.com/stolinski)
- [swyx](https://github.com/sw-yx)
- [theo](https://github.com/theo-steiner)

Мы также тестируем [обсуждения GitHub на SvelteKit](https://github.com/sveltejs/kit/discussions) и можем принести это в другие репозитории в организации Svelte, если обратная связь будет положительной.

## Что посмотреть

SvelteKit продолжает продвигаться к 1.0, и только на прошлой неделе мы добавили основные функции, такие как [улучшенный клиентский рендеринг](https://github.com/sveltejs/kit/pull/2804), [хуки маршрутизации](https://github.com/sveltejs/kit/pull В настоящее время мы работаем над рядом других высокоприоритетных пунктов, таких как обсуждение дизайна API для таких функций, как потоковая передача и загрузка файлов, а также участие в предстоящем выпуске Vite 2.8.

Хотя в последнее время в SvelteKit прилагаются большие усилия, мы продолжаем развивать всю экосистему. [Svelte 3.46.0](https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md#3460) был одним из наших крупнейших выпусков за последнее время с двумя основными новыми функциями: [константы в разметке](https://github.com/sveltejs/rfcs/blob/master/text/0007-markup-constants.md) и [директивы стиля](https://github.com/sveltejs/rfcs/blob/master/text/0008-style-directives.md).

Траектории Svelte и SvelteKit были ускорены многочисленными инвестициями выше, и в ближайшие будет много обновлений - подпишитесь на [блог](/blog) через [RSS](https://svelte.dev/blog/rss.xml) или проверяйте ежемесячно, чтобы получить их первыми.