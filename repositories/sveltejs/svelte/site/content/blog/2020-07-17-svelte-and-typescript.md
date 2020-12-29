---
title: Svelte <3 TypeScript
description: Typernetically enhanced web apps
author: Orta Therox
authorURL: https://twitter.com/orta
---

Поддержка Typescript, без сомнения, была самой желанной и востребованной фичей в течении долгого времени и вот она здесь: Svelte официально поддерживает TypeScript!

Мы полагаем, что это даст вам гораздо более приятный опыт разработки. Который прекрасно масштабируется на больших приложениях, независимо от того, используете ли вы TypeScript или JavaScript.

<figure>
	<img alt="Screenshot of TypeScript in Svelte" src="media/svelte-ts.png">
	<figcaption>TypeScript + Svelte в VS Code (тема <a href="https://marketplace.visualstudio.com/items?itemName=karyfoundation.theme-karyfoundation-themes">Kary Pro</a>.)</figcaption>
</figure>


## Попробуйте прямо сейчас

Вы можете просто начать новый Svelte + Typescript проект, скачав [обычный шаблон](https://github.com/sveltejs/template) и запустив специальный скрипт-настройщик `node scripts/setupTypeScript.js`.

```bash
npx degit sveltejs/template svelte-typescript-app
cd svelte-typescript-app
node scripts/setupTypeScript.js
```

Если вы используете VS Code, убедитесь что вы используете новое [официальное расширение](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode), которое заменяет популярное расширение от James Birtles. Далее мы подробно рассмотрим отдельные шаги, связанные с использованием TypeScript в существующем проекте Svelte.

## Что означает поддержка TypeScript в Svelte?

На самом деле, поддержка Typescript в Svelte приложениях уже была возможна в течении долгого времени. Однако вам приходилось смешивать множество разрозненных инструментов, и каждый проект выполнялся независимо. Сегодня почти все эти инструменты находятся в ведении организации Svelte и официально поддерживаются группой людей, которые берут на себя ответственность за весь конвейер и преследуют общие цели.

За неделю до того как COVID был объявлен пандемией, я [внес предложение](https://github.com/sveltejs/svelte/issues/4518)консолидировать лучшие инструменты и идеи Svelte из аналогичных dev-экосистем и предоставил набор шагов, чтобы получить первокласную поддержку TypeScript. С тех пор многие люди присоединились к этому предложению и написали код, чтобы реализовать задуманное.

Итак, когда мы говорим, что Svelte теперь поддерживает TypeScript, мы имеем в виду несколько различных вещей:

* Можно использовать TypeScript внутри блоков `<script>`- просто добавьте атрибут `lang="ts"`
* Компоненты с TypeScript могут быть проверены с помощью команды`svelte-check`
* Вы получаете подсказки, автодополнение и проверку типов, даже в выражениях внутри разметки!
* Файлы TypeScript понимают API компонентов Svelte - больше никаких красных волнистых подчеркиваний при импорте файла `.svelte` в модуль `.ts`

#### Как это работает?

Чтобы понять две основные части поддержки TypeScript, мы рассмотрим техники, которые TypeScript использует для предоставления средств разработки. Существует компилятор `tsc`, который запускается в командной строке для преобразования `*.ts` to `*.js`. Далее, существует`TSServer`, который отвечает на запросы от текстовых редакторов. `TSServer` - это то, что обеспечивает весь анализ JavaScript и TypeScript в реальном времени и в нем содержится большая часть кода компилятора.

Svelte имеет свой собственный `Svelte compiler` и теперь у нас есть [`svelte-language-server`](https://github.com/sveltejs/language-tools/tree/master/packages/language-server#svelte-language-server), который отвечает на вызовы из текстового редактора по стандарту [Language Server Protocol](https://microsoft.github.io//language-server-protocol/overviews/lsp/overview/). Первоклассная поддержка TypeScript означает, что обе эти системы хорошо справляются с кодом TypeScript.

Компилятор Svelte поддерживает TypeScript с помощью [`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess#svelte-preprocess), написанный [Christian Kaisermann](https://github.com/kaisermann), который теперь является официальным проектом Svelte.

Для уровня редактора, мы вдохновлялись работой [Pine](https://github.com/octref) в экосистеме [Vue](https://vuejs.org) через [Vetur](https://github.com/vuejs/vetur). Vetur предоставляет [LSP](https://github.com/vuejs/vetur/blob/master/server), расширение VS Code и CLI. Теперь Svelte также имеет [LSP](https://github.com/sveltejs/language-tools/blob/master/packages/language-server), [расширение VS Code](https://github.com/sveltejs/language-tools/blob/master/packages/svelte-vscode) и [CLI](https://github.com/sveltejs/language-tools/blob/master/packages/svelte-check).


#### Анализ `*.svelte`

Официальное расширение для VS Code мы построили на основе [`UnwrittenFun/svelte-vscode`](https://github.com/UnwrittenFun/svelte-vscode) и [`UnwrittenFun/svelte-language-server`](https://github.com/UnwrittenFun/svelte-language-server/), написанных [James Birtles](https://github.com/UnwrittenFun).

[Simon Holthausen](https://github.com/dummdidumm) и [Lyu, Wei-Da](https://github.com/jasonlyu123)сделали великолепную работу по улучшению анализа JavaScript and TypeScript, включая интеграцию с [svelte2tsx](https://github.com/sveltejs/language-tools/tree/master/packages/svelte2tsx#svelte2tsx) от [@halfnelson](https://github.com/halfnelson), который обеспечивает понимание свойств компонентов в шаблонах.


## Добавление TypeScript в существующий проект

Перед началом работы добавьте зависимости:

```bash
npm install --save-dev @tsconfig/svelte typescript svelte-preprocess svelte-check
```

##### 1. Компиляция TypeScript

Прежде всего нужно настроить [`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess#svelte-preprocess), который пропускает содержимое ваших `<script lang="ts">` через компилятор TypeScript.

Если вы используете Rollup, это будет выглядеть вот так:

```diff
+ import autoPreprocess from 'svelte-preprocess';
+ import typescript from '@rollup/plugin-typescript';

export default {
  ...,
  plugins: [
    svelte({
+       preprocess: autoPreprocess()
    }),
+   typescript({ sourceMap: !production })
  ]
}
```
Обратите внимание, что вам необходимо также установить `@rollup/plugin-typescript`, чтобы Rollup мог работать с `.ts` файлам. [Полные инструкции для других сред здесь](https://github.com/sveltejs/svelte-preprocess#usage).

Чтобы настроить TypeScript, необходимо создать файл `tsconfig.json` в корне проекта:

```json
{
  "extends": "@tsconfig/svelte/tsconfig.json",

  "include": ["src/**/*", "src/node_modules"],
  "exclude": ["node_modules/*", "__sapper__/*", "public/*"],
}
```

Секции `include/exclude` могут отличаться в зависимости от проекта, но эти настройки по-умолчанию должны хорошо работать для большинства проектов Svelte.

##### 2. Поддержка редактором

Любой редактор, который [использует LSP](https://langserver.org/#implementations-client) может получить поддержку. Расширение [VS Code] является наиболее приоритетным для нас, но также идет работа над расширением для [Atom](https://github.com/sveltejs/language-tools/pull/160) и Vim через [coc-svelte](https://github.com/coc-extensions/coc-svelte).
Эти расширения улучшат качество написания кода даже если вы используете только JavaScript. Редактор не будет оповещать об ошибках, но будет предлагать информацию об интерфейсах и инструменты рефакторинга. Вы можете [добавить `// @ts-check`](https://www.staging-typescript.org/docs/handbook/intro-to-js-ts.html) в верхнюю часть тега `<script>` с помощью JavaScript, чтобы получить улучшенные сообщения об ошибках.

Чтобы переключиться с `<script>` на использование TypeScript, просто добавьте `lang="ts"` аттрибут. Надеюсь, вы не увидите океан красных завитков! ;-)

##### 3. CI проверки

Наличие красных завитков - это здорово, однако в долгосрочной перспективе необходимо проверить отсутствие ошибок в коде. Для проверки отсутствия ошибок в проекте можно использовать CLI инструмент `svelte-check`. Он, так же как как редактор, запускает проверку на ошибки для всех файлов `.svelte`.

Можно добавить зависимость в проект, а затем добавить ее в CI.

```bash
❯ npx svelte-check

Loading svelte-check in workspace: /Users/ortatherox/dev/svelte/example-app
Getting Svelte diagnostics...
====================================

/Users/ortatherox/dev/svelte/example-app/src/App.svelte:3:2
Error: Type '123' is not assignable to type 'string'. (ts)

====================================
svelte-check found 1 error
error Command failed with exit code 1.
```

## Как насчет TypeScript в Sapper?

Поддержка TypeScript была добавлена в Sapper начиная с 0.28 версии. Если вы используете более старую версию, необходимо сделать [upgrade](https://sapper.svelte.dev/migrating#0_27_to_0_28).

## Как я могу внести свой вклад?

Мы так рады, что вы спросили об этом. Основная работа ведется в репозитории [sveltejs/language-tools](https://github.com/sveltejs/language-tools), а обсуждения в канале [#language-tools](https://discord.gg/enV6v8K) в Discord. Если вы хотите сообщить о проблемах, отправить исправления или помочь с расширениями для новых редакторов и так далее, вы можете найти нас. Увидимся там!
