---
title: Что нового в Svelte: Декабрь 2021
description: "SVELTE Summit Fall 2021, Рич Харрис присоединяется к Vercel, а Кевин идет на полный рабочий день в Svelte Society"
author: Daniel Sandoval
authorURL: https://desandoval.net
---

Поскольку SvelteKit становится все более стабильным с каждым днем, нечего скрывать с точки зрения изменений кода, кроме исправлений ошибок... Итак, в информационном бюллетене этого месяца мы будем освещать Svelte Summit Fall 2021!

Если вы хотите узнать об исправлении ошибок в прошлом месяце, проверьте [Svelte](https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md) и [SvelteKit](https://github.com/sveltejs/kit/blob/master/pack


## Что было на Svelte Summit?

Если вы пропустили Svelte Summit, есть запись на [YouTube](https://www.youtube.com/watch?v=1Df-9EKvZr0) и поймать резюме в канале [#svelte-summit в Discord](https://discord.gg/YmHcdnhu).

Вот основные моменты:
- [Рич Харрис](https://twitter.com/rich_harris) провел нас через тур по истории Svelte и объявил [свой переезд в Versel](https://vercel.com/blog/vercel-welcomes-rich-harris-creator-of-svelte) - где он будет помогать поддерживать Svelte полный рабочий день! ([20:00](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=1200s))
- [Стеф Дитц](https://twitter.com/steph_dietz_) объяснил, как простые абстракции Svelte позволяют новичкам и экспертам легко изучать и использовать JavaScript - без шаблона ([29:00](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=1740s))
- [Кевин Бриджес](https://twitter.com/kevinast) глубоко погрузился в логику реактивности Svelte, визуализируя ее через `ReflectiveCounter` и показывая, как «тонко настроить» ее по мере необходимости. Полная «пробная программа» презентации доступна на [сайте Кевина](https://wiibridges.com/presentations/ResponsiveSvelte/). ([42:55](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=2575s))
- [Матео Моррис](https://twitter.com/_mateomorris) запустил [Primo](https://primo.af/), универсальную CMS SvelteKit для создания статических сайтов и управления ими ([1:12:34](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=4354s))
- [Гильермо Раух](https://vercel.com/about/rauchg) объяснил приверженность Vercel к Svelte, что значит иметь Рича в команде и что будет дальше от компании... ([1:21:54](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=4914s))
- [Джефф Рич](https://twitter.com/geoffrich_) представил различные способы изменения движения и переходов в Svelte, чтобы быть более доступными для всех пользователей Интернета. Слайды и полная транскрипция доклада доступны на [сайте Джеффа](https://geoffrich.net/posts/svelte-summit-2021/). ([1:32:30](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=5550s))
- [Дин Фогарти](https://df.id.au/) продемонстрировал ряд различных сценариев использования для пользовательских сторов - преобразование данных в механизмы хранения и из них в Svelte. Стенограмма и код доступны на [Dean's GitHub](https://github.com/angrytongan/svelte-summit-2021). ([1:43:06](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=6186s))
- [Келлен Мейс](https://twitter.com/kellenmace) поделился тем, как создателям контента продолжать использовать WordPress со Svelte на фронте, чтобы обеспечить феноменальный пользовательский опыт ([1:49:30](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=6570s))
- [Бен Холмс](https://twitter.com/bholmesdev) объяснил архитектуру «островов» и то, как 11ty + [Slinkity](https://slinkity.dev/) могут перенести эти острова в любой шаблон HTML ([2:17:15](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=8235s))
- [Скотт Толински](https://twitter.com/stolinski) поделился уроками, извлеченными из переписывания LevelUpTutorials с React на Svelte ([3:16:35](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=11795s))
- [Svelte Sirens](https://sveltesirens.dev) был объявлен новым сообществом Svelte для женщин, небинарных и союзников. Их первое мероприятие состоялось 29 ноября - все будущие мероприятия можно найти на [сайте Svelte Sirens](https://sveltesirens.dev/events) ([3:50:45](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=13845s))
- [Рич Харрис](https://twitter.com/rich_harris) обсудил создание библиотек с помощью SvelteKit, лучшие способы связывания пакетов при разработке и то, как SvelteKit помогает с разработкой современной библиотеки JavaScript ([3:56:00](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=14160s))
- [Кен Кунц](https://twitter.com/kennethkunz) объяснил, как конечные автоматы (и библиотека svelte-fsm) могут сделать управление состояниями компонентов Svelte более... управляемым. Примеры из доклада доступны на [Ken's GitHub](https://github.com/kenkunz/svelte-fsm/wiki/Examples). ([4:07:18](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=14838s))
- [Остин Крим](https://twitter.com/crim_codes) подключил обучение программированию в Интернете к обучению игре на инструменте. Предоставляя учащимся ранние победы и внедряя основы через реальные приложения, изучение Svelte не обязательно должно быть рутиной ([4:21:50](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=15710s))
- [Джесси Скиннер](https://twitter.com/JesseSkinner) принес наши устаревшие приложения в будущее, объяснив, как использовать (и переиспользовать) компоненты Svelte в React (и даже jQuery!) ([4:32:30](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=16350s))
- [Джим Фиск](https://twitter.com/jimafisk) и [Стефани Луз](https://stephanie-luz.medium.com/) представили [Plenti](https://plenti.co/) и его инструменты темизации, чтобы сделать создание новых сайтов Svelte намного быстрее ([4:59:00](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=17940s))
- [Эвьятар Алуш](https://twitter.com/evyataral) помог нам всем создавать (и поддерживать) лучшие формы с помощью мощной библиотеки проверки под названием [Vest](https://github.com/ealush/vest) ([5:08:55](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=18535s))
- Доминик Г. представил свежий взгляд на библиотеки иконок - ту, которая уменьшает размер пакета приложений и открывает всю библиотеку иконок для использования в любом приложении Svelte ([5:30:04](https://www.youtube.com/watch?v=1Df-9EKvZr0&t=19804s))

Спасибо [Кевину](https://twitter.com/kevmodrome) и всем волонтерам Svelte Society за организацию такого удивительного события! Захватывающе, [Кевин объявил](https://twitter.com/kevmodrome/status/1463151477174714373) после события, когда он теперь будет работать полный рабочий день над Svelte Society! Вы можете ознакомиться со всеми докладами, разбитые на отдельные видео для удобства, в [этом плейлисте Svelte Society на YouTube](https://www.youtube.com/playlist?list=PL8bMgX1kyZTg2bI9IOMgfBc8lrU3v2itt).

Если у вас есть отзывы о саммите Svelte, Кев [ждёт их на Svelte subreddit](https://www.reddit.com/r/sveltejs/comments/qzgo3k/svelte_summit_feedback/) 👀


---

## Крутые примеры сообщества

**Apps & Sites**
- [pixeldrain](https://github.com/Fornaxian/pixeldrain_web) - это бесплатная платформа для обмена файлами
- [LifeHash](http://lifehash.info/) генерирует красивые визуальные хэши от Blockchain Commons
- [simple-cloud-music](https://github.com/dufu1991/simple-cloud-music) - это легкий облачный музыкальный проигрыватель NetEase для современных браузеров (вероятно, работает только в Chrome)
- [palette.rocks](https://palette.rocks/) - это генератор цветовых палитр со встроенной проверкой контрастности
- [Kadium](https://github.com/probablykasper/kadium) - это приложение для того, чтобы оставаться на вершине загрузки каналов YouTube
- [Калькулятор мультимонитора](https://multimonitorcalculator.com/) - это инструмент для планирования настройки нескольких мониторов
- [Ваш дом](https://yourhome.fb.com/) - это интерактивный обзор настроек конфиденциальности Facebook
- [Svelte Crush](https://svelte-crush.netlify.app/) - это игра в стиле Candy Crush match-3
- [100 000 смертей от короны в Германии](https://twitter.com/h_i_g_s_c_h/status/1463767113563353089?S=20) - это визуализация, сделанная для Spiegel Gesundheit

**Ищите проект Svelte для работы? Хотите помочь сделать Svelte в Интернете лучше?** Ознакомьтесь со [списком открытых задач](https://github.com/svelte-society/sveltesociety-2021/issues), если вы хотите внести свой вклад в переписывание Svelte Society на SvelteKit.


**Videos, Blogs and Podcasts**
- [Как сделать и опубликовать библиотеку Svelte](https://www.youtube.com/watch?v=_TymiadmPrc)
- [SvelteKit теперь полностью поддерживается в WebContainers](https://blog.stackblitz.com/posts/sveltekit-supported-in-webcontainers/)
- [Представление Svelte и сравнение Svelte с React и Vue](https://joshcollinsworth.com/blog/introducing-svelte-comparing-with-react-vue)
- [Тестирование приложения Svelte с помощью Jest](https://www.roboleary.net/2021/11/18/svelte-app-testing-jest.html)
- [Как создать пакет библиотеки уведомлений о тостах с помощью SvelteKit](https://www.sarcevic.dev/blog/toasting-in-svelte)
- [Svelte training: Здесь вы можете изучить Svelte](https://sustainablewww.org/principles/svelte-training-here-you-can-learn-svelte)
- [Введение в Svelte Actions](https://blog.logrocket.com/svelte-actions-introduction/)
- [Наслаждайтесь созданием DAPP с помощью SvelteWeb3](https://chiuzon.medium.com/enjoy-making-dapps-using-svelteweb3-b78dfea1d902)
- [Svelte creator: Веб-разработка должна быть веселее](https://www.infoworld.com/article/3639521/svelte-creator-web-development-should-be-more-fun.html)
- [Svelte Radio: Рич Харрис теперь работает полный рабочий день над Svelte 🤯](https://share.transistor.fm/s/d9b04961)
- [Web Rush: Svelte и Elder.js с Ником Ризом](https://webrush.io/episodes/episode-158-svelte-and-elderjs-with-nick-reese)
- [Создание приложений SvelteKit с помощью Serverless Redis](https://blog.upstash.com/svelte-with-serverless-redis)

**Libraries, Tools & Components**
- [svelte-cubed](https://github.com/Rich-Harris/svelte-cubed) - это библиотека компонентов Three.js для Svelte - созданная Ричем Харрисом для его презентации на Svelte Summit Fall 2021
- [svelte-fsm](https://github.com/kenkunz/svelte-fsm) - это крошечная, простая, выразительная, прагматичная библиотека конечных автоматов (FSM), оптимизированная для Svelte
- [bromb](https://github.com/samuelstroschein/bromb) - это виджет обратной связи для веб-сайтов/веб-приложений, который является небольшим и простым в интеграции на самостоятельном хостинге
- [Spaper](https://github.com/Oli8/spaper) - это набор компонентов PaperCSS для Svelte
- [svelte-intl-precompile](https://github.com/cibernox/svelte-intl-precompile) - это библиотека i18n для Svelte, которая анализирует и компилирует ваши переводы во время сборки
- [svelte-preprocess-svg](https://github.com/svitejs/svelte-preprocess-svg) автоматически оптимизирует встроенный svg в компонентах Svelte для лучшей производительности и уменьшения размера файла
- [svelte-subcomponent-preprocessor](https://github.com/srmullen/svelte-subcomponent-preprocessor) позволяет записать более одного компонента в svelte файл
- [svelte-pdfjs](https://github.com/gtm-nayan/svelte-pdfjs) - это грубая реализация компонента просмотра Svelte PDF
- [svelte-inview](https://github.com/maciekgrzybek/svelte-inview) - это экшн Svelte, который отслеживает элемент, входящий или покидающий viewport/parent
- [sveltekit-adapter-wordpress-shortcode](https://github.com/tomatrow/sveltekit-adapter-wordpress-shortcode) - это адаптер для SvelteKit, который превращает ваше приложение в shortcode WordPress
- [svelte-websocket-store](https://github.com/arlac77/svelte-websocket-store) - это стор Svelte с бэкэндом веб-сокета
- [Svelte Auto Form](https://github.com/leveluptuts/auto-form) - это быстрая и веселая библиотека форм, ориентированная на простоту использования, а не на гибкость.
- [set-focus](https://www.npmjs.com/package/@svackages/set-focus) - это экшн Svelte, которое сосредоточит внимание на элементах `<a>` или `<button>`, как только они смонтируются - полезно для некоторых впечатлений и тестирования

Есть идея для SvelteKit? Ознакомьтесь с новыми [обсуждениями на GitHub](https://github.com/sveltejs/kit/discussions) в репозитории Svelte. Вы также можете присоединиться к нам на [Reddit](https://www.reddit.com/r/sveltejs/) или в [Discord](https://discord.com/invite/yy75DKs).

Увидимся в следующем ~~месяце~~ году!