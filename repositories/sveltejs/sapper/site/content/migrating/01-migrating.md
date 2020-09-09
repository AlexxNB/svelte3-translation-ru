---
title: Миграция
---

Пока мы не дойдём до версии 1.0, в структуре проекта, которую ожидает увидеть Sapper, могут происходить различные изменения.

### 0.27 to 0.28

* Rollup 0.x.x больше не поддерживается. ([#1326](https://github.com/sveltejs/sapper/pull/1326)). Любые версии старше 1.x поддерживаются, но рнастоятельно рекомендуется использовать последниее версии (на данный момент 2.x).
* Версии Svelte ранее 3.17.3 больше не поддерживаются. ([#1067](https://github.com/sveltejs/sapper/pull/1067))
* Блоки `<script>` теперь загружаются с атрибутом `defer` ([#1123](https://github.com/sveltejs/sapper/pull/1123)), т.е.:
	* Поддержка IE9 прекращена, поскольку IE9 может перемешать чередование выполнения отложенных скриптов.
	* `%sapper.scripts%` могут быть перемещены в элемент `<head>` для чуть более лучшей производительности
* Вы должны установить `hydratable: true` также и в серверном конфиге для правильной гидрации элементов `<head>` ([#1067](https://github.com/sveltejs/sapper/pull/1067))
* Файлы в генерируемом файле`service-worker.js` теперь начинаются с `/` ([#1244](https://github.com/sveltejs/sapper/pull/1244)). Если вы используете `service-worker.js` из станадртного шаблона, никаких изменений не понадобится. Если у вас модифицированный сервис-воркер, проверьте совместимость.
* Атрибут `sapper-noscroll` переименован в `sapper:noscroll` ([#1320](https://github.com/sveltejs/sapper/pull/1320))
* Пользователи Rollup должны обновить фильтр `onwarn` в `rollup.config.js`, как описано [тут](https://github.com/sveltejs/sapper-template/pull/246/files). 


### 0.25 to 0.26

Пока что, самое значительное изменение: Sapper теперь базируется на Svelte 3.

#### Импортирование Sapper

Рантайм приложения теперь собирается в папке `src/node_modules/@sapper` — это позволяет проще импортировать его в любом месте вашего кода. Обновите ваш `server.js`...

```diff
// src/server.js
-import * as sapper from '../__sapper__/server.js';
+import * as sapper from '@sapper/server';
```

...и client.js:

```diff
-import * as sapper from '../__sapper__/client.js';
+import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});
```

Это же касается и прочих импортов, например `goto` и `prefetchRoutes`.


#### Настройка Webpack

Если вы используете webpack, необходимо обновить добавить в его конфигурацию распознавание файлов `.mjs` и `.svelte`:

```js
resolve: {
	extensions: ['.mjs', '.js', '.json', '.svelte', '.html']
}
```

При использовании `.svelte` файлов (рекомендуется), нужно сообщить об этом загрузчику `svelte-loader`:

```diff
-test: /\.html$/
+test: /\.(svelte|html)$/
```


#### Данные сессии

Передача данных с сервера на клиент теперь выполняется с помощью функции `session`, которая передаётся в прослойку, обслуживающую сессии:

```js
// src/server.js
sapper.middleware({
	session: (req, res) => ({
		// данные сессии размещаются здесь
	})
})
```

Эти данные доступны в функциях `preload` в качестве второго аргумента:

```html
<!-- SomeComponent.svelte -->
<script context="module">
	export function preload(page, session) {
		const { path, params, query } = page; // как и раньше

		if (!session.user) return this.redirect(302, 'login');
		// ...
	}
</script>
```


#### Хранилища

Сессия, а так же `page` и` preloading`, доступны внутри компонентов как хранилища:

```html
<script>
	import * as sapper from '@sapper/app';
	const { page, preloading, session } = sapper.stores();
</script>
```

`page` и `preloading` — это [хранилища только для чтения](https://ru.svelte.dev/tutorial/readable-stores), а `session` — [записываемое хранилище](https://ru.svelte.dev/tutorial/writable-stores). Запись в хранилище сессии(например при авторизации пользователя) заставит перезапуститься все функции `preload`, которые зависят от данных сессии; на сервере при этом ничего не будет сохранено.


#### Макеты

Компоненты макета теперь должны использовать элемент `<slot>` для рендеринга вложенных маршрутов вместо `<svelte: component>`:

```diff
<main>
-	<svelte:component this={child.component} {...child.props}/>
+	<slot></slot>
</main>
```

Сам компонент в макете теперь получает свойство `segment`, которое эквивалентно `child.segment` в более ранних версиях.


### с 0.21 на 0.22

Вместо импорта прослойки из пакета `sapper` или импорта клиентской среды выполнения из `sapper/runtime.js`, приложение *встраивается* в сгенерированные файлы:

```diff
// src/client.js
-import { init } from 'sapper/runtime.js';
-import { manifest } from './manifest/client.js';
+import * as sapper from '../__sapper__/client.js';

-init({
+sapper.start({
	target: document.querySelector('#sapper'),
-	manifest
});
```

```diff
// src/server.js
import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
-import sapper from 'sapper';
-import { manifest } from './manifest/server.js';
+import * as sapper from '../__sapper__/server.js';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
-		sirv('assets', { dev }),
+		sirv('static', { dev }),
-		sapper({ manifest })
+		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
```

```diff
// src/service-worker.js
-import { assets, shell, routes, timestamp } from './manifest/service-worker.js';
+import { files, shell, routes, timestamp } from '../__sapper__/service-worker.js';
```

Кроме того, директории для сборки и экспорта по умолчанию теперь `__sapper__/build` и `__sapper__/export` соответственно.

### с 0.20 на 0.21

* Директория `app` переименована в `src`
* Папка `routes` перемещена в `src/routes`
* Каталог `assets` переименован в `static` (не забудьте обновить `src/server.js` с учётом этого изменения)
* Вместо трёх отдельных конфигурационных файлов (`webpack/client.config.js`, `webpack/server.config.js` и `webpack/service-worker.config.js`), теперь имеется единый файл `webpack.config.js`, который экспортирует конфигурации `client`, `server` и `serviceworker`.


### с 0.17 на 0.18

Файл `sapper/webpack/config.js` (который импортируется в файлах `webpack/*.config.js`) теперь `sapper/config/webpack.js`.


### с 0.14 на 0.15

Этот выпуск изменил способ обработки маршрутов, что привело к ряду изменений.

Вместо единственного компонента `App.html`, теперь вы можете поместить компоненты `_layout.html` в любой каталог в директории `routes`. Вы должны переместить файл `app/App.html` в `routes/_layout.html` и изменить его следующим образом:

```diff
-<!-- app/App.html -->
+<!-- routes/_layout.html -->

-<Nav path={props.path}/>
+<Nav segment={child.segment}/>

-<svelte:component this={Page} {...props}/>
+<svelte:component this={child.component} {...child.props}/>
```

Затем вам нужно будет удалить `App` из точек входа вашего клиента и сервера и заменить `route` на `manifest`:

```diff
// app/client.js
import { init } from 'sapper/runtime.js';
-import { routes } from './manifest/client.js';
-import App from './App.html';
+import { manifest } from './manifest/client.js';

init({
	target: document.querySelector('#sapper'),
-	routes,
-	App
+	manifest
});
```

```diff
// app/server.js
import sirv from 'sirv';
import polka from 'polka';
import sapper from 'sapper';
import compression from 'compression';
-import { routes } from './manifest/server.js';
-import App from './App.html';
+import { manifest } from './manifest/server.js';

polka()
	.use(
		compression({ threshold: 0 }),
		sirv('assets'),
-		sapper({ routes, App })
+		sapper({ manifest })
	)
	.listen(process.env.PORT)
	.catch(err => {
		console.log('error', err);
	});
```

`preload` функции больше не принимают весь объект запроса на сервере; вместо этого они получают такой же аргумент, что и на клиенте.



### с 0.13 на 0.14

Файлы страниц ошибок `4xx.html` и `5xx.html` заменены единым файлом `_error.html`. В дополнение к обычным свойствам `params`, `query` и `path`, также передаются `status` и `error`.



### с 0.11 на 0.12

В более ранних версиях каждая страница была полностью независимым компонентом. При навигации вся страница отрисовывалась с нуля. Обычно, каждая страница могла импортировать общий компонент `<Layout>` для достижения визуального постоянства на разных страницах.

Начиная с версии 0.12 это изменилось: теперь у нас есть единый компонент `<App>`, определённый в `app/App.html`, который управляет рендерингом остальной части приложения. См. [sapper-template](https://github.com/sveltejs/sapper-template/blob/master/app/App.html) для примера.

Этот компонент ренедрится со следующими значениями:

* `Page` — конструктор компонента для текущей страницы
* `props` — объект, содержащий `params`, `query` и любые иные данные, возвращённые из функции `preload`
* `preloading` — `true` пока выполняется предзагрузка, и `false` по её окончании. Полезно для отображения прелоадеров или прогресс-баров

Необходимо сообщить Sapper о компоненте `<App>`. Для этого вам нужно будет изменить `app/server.js` и `app/client.js`:

```diff
// app/server.js
import polka from 'polka';
import sapper from 'sapper';
import serve from 'serve-static';
import { routes } from './manifest/server.js';
+import App from './App.html';

polka()
	.use(
		serve('assets'),
-		sapper({ routes })
+		sapper({ App, routes })
	)
	.listen(process.env.PORT);
```

```diff
// app/client.js
import { init } from 'sapper/runtime.js';
import { routes } from './manifest/client.js';
+import App from './App.html';

-init(target: document.querySelector('#sapper'), routes);
+init({
+	target: document.querySelector('#sapper'),
+	routes,
+	App
+});
```

После того как вы создали `App.html` и обновили серверное и клиентское приложения, можете удалить компоненты `<Layout>` с всех ваших страниц.


### с <0.9 на 0.10

#### app/template.html

* Элемент `<head>` должен содержать `%sapper.base%` (см. [Базовые URL](docs#Bazovye_URL))
* Удалите ссылку на сервис-воркер; теперь она включена в`%sapper.scripts%`

#### Страницы

* Функции `preload` теперь должны использовать `this.fetch` вместо `fetch`. Функция `this.fetch` позволяет вам делать идентифицированные запросы на сервере и это означает, что вам больше не нужно создавать объект `global.fetch` в `app/server.js`.



### с 0.6 на 0.7

С полными примерами вы можетте ознакомиться в официальном шаблоне [sapper-template](https://github.com/sveltejs/sapper-template).


#### package.json

Для запуска dev-сервера, теперь нужно использовать команду `sapper dev` вместо `node server.js`. Скорее всего нужно будет обновить скрипт `npm run dev` в вашем package.json.

#### Точки входа

Начиная с версии 0.7, Sapper ожидает найти ваши точки входа — для клиента, сервера и сервис-воркера — в папке `app`. Вместо использования `__variables__`, каждая точка входа импортируется из соответствующего файла в папке `app/manifests`. Они автоматически генерируются Sapper.

```js
// app/client.js (было templates/main.js)
import { init } from 'sapper/runtime.js';
import { routes } from './manifest/client.js';

init(document.querySelector('#sapper'), routes);

if (module.hot) module.hot.accept(); // включение горячей замены модулей
```

```js
// app/server.js (было server.js)
// Обратите внимание, что теперь мы используем синтаксис ES модулей,
// поскольку этот файл обрабатывается webpack, как и остальное приложение.
import sapper from 'sapper';
import { routes } from './manifest/server.js';
// ..остальные импорты

// теперь передаём объект `routes` в Sapper
app.use(sapper({
	routes
}));
```

```js
// app/service-worker.js (было templates/service-worker.js)
import { assets, shell, timestamp, routes } from './manifest/service-worker.js';

// не забудьте заменить, к примеру,  `__assets__` на `assets` в остальной части файла
```


#### Шаблоны и страницы ошибок

В предыдущих версиях у нас были файлы `templates/2xx.html`, `templates/4xx.html` и `templates/5xx.html`. Теперь у нас есть только один файл, `app/template.html`, который должен выглядеть как ваш старый `templates/2xx.html`.

Для отображения ошибок, у нас есть 'особый' маршрут: `routes/_error.html`.

Эта страница точно такая же, как и любая другая, за исключением того, что она будет отображаться всякий раз, когда будет обнаружена какая-либо ошибка. Компонент имеет доступ к объектам `status` и `error`.

Кстати, теперь `this.error(statusCode, error)` можно использовать в функциях `preload`.


#### Конфигурация Webpack

Конфигурационные файлы Webpack теперь находятся в каталоге `webpack`:

* `webpack.client.config.js` теперь `webpack/client.config.js`
* `webpack.server.config.js` теперь `webpack/server.config.js`

Если в проекте есть сервис-воркер, то должен быть файл `webpack/service-worker.config.js`. См. пример на [sapper-template](https://github.com/sveltejs/sapper-template).