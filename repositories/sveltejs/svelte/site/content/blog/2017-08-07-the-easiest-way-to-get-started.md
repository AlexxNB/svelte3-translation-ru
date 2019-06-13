---
title: Легкий способ начать использовать Svelte
description: Это займет всего лишь 1 минуту.
author: Rich Harris
authorURL: https://twitter.com/Rich_Harris
translator: Alexey Schebelev
---

Svelte — это [фреймворк нового типа](/blog/frameworks-without-the-framework). Не нужно помещать на страницу тег `<script src='svelte.js'>` или импортировать его в ваше приложение с помощью `import` или `require`! Svelte — это компилятор, превращающий ваши файлы компонентов в прекрасно оптимизированный ванильный JavaScript.

Из-за этого, начало работы с ним может сначала немного запутать. Как же таки сделать приложение на Svelte?


## 1. С использованием REPL

[Svelte REPL](repl) — самый простой способ начать. Вы можете выбрать из списка один из стартовых примеров, и пытаться изменить его, пока он не начнёт делать то, что вы хотите.

<aside><p>У вас должна быть установлена <a href="https://nodejs.org/">Node.js</a>  и иметься первоначальные навыки работы с командной строкой</p></aside>

В какой-то момент, вы решите, что приложение переросло REPL. Нажмите кнопку **download**, чтобы сохранить файл `svelte-app.zip` на свой компьютер и распакуйте его.

Откройте терминал и выполните команды...

```bash
cd /путь/до/распакованного/svelte-app
npm install
```

...затем запустите сервер для разработки:

```bash
npm run dev
```

После этого ваше приложение будет доступно на [localhost:5000](http://localhost:5000) и оно будет пересобираться с помощью [Rollup](https://rollupjs.org) каждый раз, когда вы вносите изменения в файлы в `svelte-app/src`.


## 2. С использованием degit

При загрузке из REPL вы получаете настроенную версию репозитория [sveltejs/template](https://github.com/sveltejs/template). Но есть путь и без всякой возни с zip-файлами, используя [degit](https://github.com/Rich-Harris/degit), инструмент для создания проектов.

Вы можете создать новый проект прямо из терминала:

```bash
npx degit sveltejs/template my-svelte-project
cd my-svelte-project
npm install
npm run dev
```

Нужные файлы загрузятся в папку `my-svelte-project`, установятся все зависимости и запустится сервер на http://localhost:5000.

Когда вы немного поизучаете основы и поймёте как всё работает, можете форкнуть [sveltejs/template](https://github.com/sveltejs/template) и начать делать так:

```bash
npx degit your-name/template my-new-project
```

Вот, в принципе, и всё! Выполните `npm run build`, чтобы собрать готовую к продакшену версию своего приложения, и прочтите [README](https://github.com/sveltejs/template/blob/master/README.md) шаблона проекта, чтобы узнать, как легко развернуть своё приложение в Интернете с помощью [Now](https://zeit.co/now) или [Surge](http://surge.sh/).

Вы не обязаны использовать Rollup — у нас есть интеграции с [webpack](https://github.com/sveltejs/svelte-loader), [Browserify](https://github.com/tehshrike/sveltify) и прочими. Вы можете использовать [Svelte CLI](https://github.com/sveltejs/svelte-cli) (Обновление от 2019 г.: с выходом Svelte 3 инструмент CLI убран, теперь мы используем в нашем шаблоне [sirv-cli](https://www.npmjs.com/package/sirv-cli). Но вы можете использовать любую утилиту по своему выбору!) или [API](https://github.com/sveltejs/svelte/tree/v2#api) напрямую. Если вы сделали шаблон проекта с помощью одного из этих инструментов, расскажите об этом в [чате Svelte Discord](chat) или в Twitter [@sveltejs](https://twitter.com/sveltejs)!