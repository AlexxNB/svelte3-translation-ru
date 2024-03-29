---
title: "Sapper: На пути к идеальному фреймворку Web-приложений"
description: Делаем шаг в будущее, а затем еще один
author: Rich Harris
authorURL: https://twitter.com/Rich_Harris
translator: Alexey Schebelev
---

> Для нетерпеливых: [руководство Sapper](https://ru.sapper.svelte.dev) и [стартовый шаблон](https://github.com/sveltejs/sapper-template)

Если бы вас попросили перечислить характеристики идеального фреймворка для веб-приложений на Node.js, то у вас бы получилось что-то вроде этого:

1. Он должен выполнять рендеринг на стороне сервера, чтобы быть дружественным к SEO оптимизациям и для более быстрой первой загрузки
2. Как следствие, кодовая база вашего приложения должна быть универсальной — вы пишите один раз сразу для сервера *и* клиента
3. Клиентское приложение должно *гидрировать* полученный с сервера HTML, прикрепляя обработчики событий и прочие штуки к существующим элементам, а не перерисовывать их полностью
4. Переход на другие страницы должен быть мгновенным
5. Оффлайн режим и другие характеристики Прогрессивных веб-приложений должны поддерживаться из коробки
6. Изначально должны загружаться только те JavaScript и CSS, которые необходимы для первой страницы. Это означает, что фреймворк должен выполнять автоматическое разбиение кода на уровне роутера и поддерживать динамический `import(...)` для более точного ручного управления
7. Без компромиссов по производительности
8. Первоклассный опыт разработки, с возможностью горячей перезагрузки модулей и всеми настройками
9.  Получившаяся кодовая база должна легко обрабатываться и поддерживаться
10. Должна быть возможность понять и настроить каждый аспект системы — никаких конфигов webpack'а, захардкоденых в фреймворке, и как можно меньше скрытых фиговин
11. Должно быть легко изучить весь фреймворк за час, и не только для опытных разработчиков

[Next.js](https://github.com/zeit/next.js) близок к этому идеалу. Если вы ещё не сталкивались с ним, я настоятельно рекомендую просмотреть учебные материалы на [learnnextjs.com](https://learnnextjs.com). Next.js предложил ​​блестящую идею: все страницы вашего приложения — это файлы в каталоге `your-project/pages`, а каждый из этих файлов является просто React компонентом.

Всё остальное вытекает из этого прорывного дизайнерского решения. Найти код, отвечающий за данную страницу, легко, потому что вы можете просто посмотреть на структуру файлов, а не играть в игру 'угадай имя компонента'. Велосипедостроение структуры проекта ушло в прошлое. А сочетание SSR (рендеринга на стороне сервера) и разделения кода — это то, от чего [отказалась](https://reacttraining.com/react-router/web/guides/code-splitting) команда React Router, объявив 'Бог в помощь тем, кто пытается использовать серверные приложения с разделением кода' — тривиально.

Но и он не идеален. Какой список недостатков можно придумать для чего-то *супер-пуперского*? Но кое-что всё-таки можно отметить:

* Next использует нечто, называемое 'маска маршрута', для создания человекопонятных URL-адресов (например, `/blog/hello-world` вместо `/post?slug=hello-world`). Что не может гарантировать структуру каталогов, соответствующую структуре приложения, и вынуждает вас поддерживать конфигурацию, которая транслируется между двумя формами
* Все ваши маршруты считаются универсальными 'страницами'. Но очень часто требуются маршруты, которые работают только на сервере, такие как редиректы 301 или [эндпоинт API](/blog/sapper-towards-the-ideal-web-app-framework.json), который предоставляет данные для ваших страниц, и у Next нет хорошего решения для этого. Вы можете добавить некоторую логику в ваш файл `server.js`, чтобы справиться с этими случаями, но это не согласуется с декларативным подходом, принятым для страниц
* При использовании роутера на стороне клиента, ссылки не могут быть обычными тегами `<a>`. Вместо этого вы должны использовать специальные компоненты вроде `<Link>`, что невозможно, например в содержимом типа markdown для сообщения в блоге.

Однако настоящая проблема заключается в том, что всё это добро 'дорого стоит'. Наипростейшее приложений Next — единственная страница «Привет, мир», которая просто отображает некоторый статический текст — содержит 66 КБ *сжатого* JavaScript. В обычном виде, это уже 204 КБ, что является довольно большим объёмом кода для мобильного устройства, который нужно анализировать в то время, когда производительность является критическим фактором, определяющим, будут ли ваши пользователи оставаться на вашем сайте. И это только *базовые вещи*.

Мы можем сделать лучше!


## Взлёт парадигмы 'компилятор-как-фреймворк'

[Svelte представил радикальную идею](/blog/frameworks-without-the-framework): Что если, UI фреймворк вообще не фреймворк, а компилятор, который превращает ваши компоненты в автономные JavaScript модули? Вместо использования библиотек, вроде React или Vue, которые по сути ничего не знают о вашем приложении и поэтому содержат в себе всё, что может и не может понадобиться, мы можем поставлять высоко оптимизированный ванильный JavaScript. Исключительно только тот код, который нужен вашему приложению, и без лишних расходов памяти и заведомо более медленной производительности решений, основанных на виртуальном DOM.

Мир JavaScript [движется к этой модели](https://tomdale.net/2017/09/compilers-are-the-new-frameworks/). [Stencil](https://stenciljs.com), фреймворк, вдохновлённый Svelte, от команды Ionic, компилируется в веб-компоненты. [Glimmer](https://glimmerjs.com) *не* компилируется в автономный JavaScript (плюсы и минусы этого заслуживают отдельного поста в блоге), но команда проводит несколько интересных исследований по компиляции шаблонов в байт-код. (React тоже щупает в [этом направлении](https://twitter.com/trueadm/status/944908776896978946), хотя их текущие исследования скорее направлены на оптимизацию JSX кода, что, больше похоже на A-o-T оптимизации, которую Angular, Ractive и Vue делали в течение последних нескольких лет.)

Что произойдёт, если мы используем эту новую модель в качестве отправной точки?


## Представляем Sapper

<aside><p><a href="https://sapper.svelte.technology/docs#why-the-name-">Название</a> позаимствовано у военных, а так же просто сокращение от 'Создеталь приложений Svelte' (Svelte app maker)</p></aside>

[Sapper](https://sapper.svelte.technology) — это наш ответ на заданный вопрос. **Sapper — это фреймворк в стиле Next.js, цель которого — соответствовать одиннадцати критериям, приведённым в начале этой статьи, и значительно сократить объём кода, отправляемого в браузер.** Он реализован как связующее ПО, совместимое с Express, которое понять и настроить.

То же самое приложение 'hello world', которое заняло 204 КБ на React и Next, весит всего 7 КБ с Sapper. Это число, вероятно, будет уменьшаться в будущем, поскольку мы работаем над различными оптимизациями, например, *вообще* не отправляем JavaScript для страниц, которые не являются интерактивными, за исключением крошечной среды выполнения Sapper, которая обрабатывает маршрутизацию на стороне клиента.

А как насчёт более приближенного к реальности приложения? Как удачно, что проект [RealWorld](https://github.com/gothinkster/realworld), который сравнивает фреймворки на реализациях клона Medium, даёт нам возможность это выяснить. [Реализация Sapper](https://github.com/sveltejs/realworld) для отрисовки стартовой страницы занимает 39,6 КБ (11,8 КБ в сжатом виде).

<aside><p>Разделение кода не достаётся даром — если бы эталонная реализация использовала разделение кода, она была бы сильно больше</p></aside>

Всё приложение весит 132,7 КБ (39,9 КБ в сжатом виде), что значительно меньше, чем реализация на React/Redux со своими 327 КБ (85,7 КБ). Но даже если бы оно было таким же большим, то всё равно *работало* бы быстрее из-за разделения кода. И это важный момент. В последнее время все говорят, что нам нужно разделить код наших приложений, но если ваше приложение использует традиционный фреймворк, вроде React или Vue, тогда существует жёсткая нижняя граница для размера вашего исходного фрагмента кода — сам фреймворк, который, вероятно, вообще будет более занимать большую часть от размера вашего приложения. У Svelte такого нет по определению.

Но размер это только часть истории. Приложения Svelte также чрезвычайно производительны и экономят память, а фреймворк включает мощные функции, которыми вы бы пожертвовали, если бы выбрали 'минимальный' или 'простой' UI фреймворк.


## Компромиссы

Основной проблемой для некоторых разработчиков, приценивающихся к Sapper, будет утверждение 'но мне нравится React, и я уже знаю, как его использовать', что справедливо.

Если вы находитесь в этом лагере, я бы предложил хотя бы попробовать альтернативные фреймворки. Вы можете быть приятно удивлены! Реализация [Sapper RealWorld](https://github.com/sveltejs/realworld) насчитывает 1201 строку исходного кода по сравнению с 2377 для эталонной реализации, поскольку вы можете очень кратко выразить концепции, используя синтаксис шаблона Svelte (который [осваивается за пять минут](https://v2.svelte.dev/guide#template-syntax)). Вы получаете [изолированный CSS](/blog/the-zen-of-just-writing-css) с встроенным удалением неиспользуемых стилей и минимизацией, и вы можете использовать препроцессоры, такие как LESS, если хотите. Вам больше не нужно использовать Babel. SSR неимоверно быстр, потому что по сути это просто конкатенация строк. А недавно мы представили [svelte/store](https://v2.svelte.dev/guide#state-management), крошечное глобальное хранилище, которое синхронизирует состояние по всей иерархии компонентов. В итоге, в худшем случае вы останетесь при своём мнении!

Но компромиссы всё же есть. Некоторые люди испытывают патологическое отвращение к любой форме 'языка шаблонов', и, возможно, это относится к вам. Сторонники JSX обманывают вас мантрой 'это всего лишь JavaScript', и в этом заключается бесконечная гибкость React. Эта гибкость сопровождается собственным набором компромиссов, но это не место для их обсуждения.

Наконец, не последнее место занимает *экосистема* технологии. В частности, у React  есть целая своя вселенная- инструменты разработчика, интеграции редакторов, вспомогательные библиотеки, учебные пособия, ответы на StackOverflow, да и даже возможности трудоустройства куда выше. Но полагаю, что упоминание 'экосистемы' в качестве основной причины выбора инструмента является признаком того, что вы застряли на своём локальном максимуме, начиная отставать от прогресса. Но всё же, бесспорно, это важный аспект в пользу действующих технологий.


## Дорожная карта

У нас пока нет даже версии 1.0.0, и некоторые вещи могут измениться, прежде чем мы до неё доберёмся. Как только мы это сделаем (скоро!), у нас будет много интересных возможностей.

Я полагаю, что следующий рубеж веб-производительности — 'полная оптимизация всего приложения'. В настоящее время компилятор Svelte работает на уровне компонентов, но компилятор, который понимает границы *между* этими компонентами, может генерировать ещё более эффективный код. [Исследование Prepack](https://twitter.com/trueadm/status/944908776896978946), команды React, основано на аналогичной идее, и команда Glimmer проделывает некоторую интересную работу в этой области. Svelte и Sapper, конечно, тоже могут воспользоваться этими идеями.

Говоря о Glimmer, идея компиляции компонентов в байт-код — это, вероятно, то, что мы 'украдём' в 2018 году. Фреймворк, такой как Sapper, может предположительно определить, какой режим компиляции использовать, основываясь на характеристиках вашего приложения. Он может даже предоставлять JavaScript в качестве начального маршрута для максимально быстрого времени запуска, а затем лениво запускать интерпретатор байт-кода для последующих маршрутов, что приводит к оптимальной комбинации размера запуска и общего размера приложения.

Однако в основном мы хотим, чтобы направление Sapper определялось его пользователями. Если вы тот разработчик, которому нравится быть в авангарде и вы хотите помочь в формировании видения того как мы будем строить веб-приложения, присоединяйтесь к нам на [GitHub](https://github.com/sveltejs/svelte) и [Discord](/chat).