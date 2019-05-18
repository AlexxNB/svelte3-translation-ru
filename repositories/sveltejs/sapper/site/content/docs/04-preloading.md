---
title: Предзагрузка
---

Как мы видели в разделе [Маршруты](docs#Marshruty), компоненты страниц верхнего уровня могут иметь функцию `preload`, которая будет загружать некоторые данные, от которых зависит страница. Она похожа на `getInitialProps` в Next.js или `asyncData` в Nuxt.js.

```html
<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;

		const res = await this.fetch(`blog/${slug}.json`);
		const article = await res.json();

		return { article };
	}
</script>
```

Она помещается в блоке `<script context="module">`, потому что он не является частью экземпляров компонентов; вместо этого он выполняется *до* создания компонента, что позволяет избежать морганий компонента во время выборки данных. Подробнее в [Учебнике](https://ru.svelte.dev/tutorial/module-exports)

### Аргументы

В функцию `preload` передаётся два аргумента — `page` и `session`.

`page` is a `{ path, params, query }` object where `path` is the URL's pathname, `params` is derived from `path` and the route filename, and `query` is an object of values in the query string.
`page` является объектом `{ path, params, query }`, где `path` — это часть пути URL, `params` выводится из URL и имени файла маршрута, а `query` является объектом значений из строки запроса..

Для примера рассмотрим знакомую страницу `src/routes/blog/[slug].svelte`. Предположим, к ней обратились по а URL-адресу вида `/blog/some-post?foo=bar&baz`, тогда мы получим следующие данные:

* `page.path === '/blog/some-post'`
* `page.params.slug === 'some-post'`
* `page.query.foo === 'bar'`
* `page.query.baz === true`

`session` генерируется на сервере путём передачи параметра `session` в `sapper.middleware` (TODO это требует дополнительной документации. Возможно будет раздел API сервера?)


### Возвращаемое значение

Если вы вернёте промис из `preload`, страница не будет отображаться, пока промис не исполнится. Но вы также можете вернуть и простой объект.

Когда Sapper ренедерит страницу на сервере, он пытается сериализовать полученное значение (используя [devalue](https://github.com/Rich-Harris/devalue)) и помещает его на страницу, поэтому клиентской части нет необходимости повторно вызывать `preload` при инициализации. Сериализация выдаст ошибку, если значение включает функции или пользовательские классы (но можно использовать циклические и повторяющиеся ссылки, а также встроенные модули, типа `Date`,`Map`, `Set` и `RegExp`).


### Контекст

Внутри функции `preload` у вас есть доступ к трём методам ...

* `this.fetch(url, options)`
* `this.error(statusCode, error)`
* `this.redirect(statusCode, location)`


#### this.fetch

В браузерах вы можете использовать `fetch` для выполнения AJAX запросов, например, для получения данных с ваших серверных маршрутов. На сервере это несколько сложнее — вы можете делать HTTP-запросы, но нужно прописать origin, и у вас нет доступа к файлам cookie. Это означает, что невозможно запрашивать данные, основанные на сеансе пользователя, например, требующих входа в систему.

Чтобы исправить это, Sapper предлагает функцию `this.fetch`, которая работает одинаково как на сервере, так и на клиенте:

```html
<script context="module">
	export async function preload() {
		const res = await this.fetch(`secret-data.json`, {
			credentials: 'include'
		});

		// ...
	}
</script>
```

Обратите внимание, что вам нужно будет использовать какую-либо прослойку для управления сессиями  в вашем `app/server.js`, чтобы обрабатывать сеансы пользователей или делать что-либо, связанное с аутентификацией. Например [express-session](https://github.com/expressjs/session).


#### this.error

Если пользователь перейдёт на `/blog/some-invalid-slug`, хотелось бы ему показать страницу с ошибкой '404 — страница не найдена'. И мы можем сделать это с помощью `this.error`:

```html
<script context="module">
	export async function preload({ params, query }) {
		const { slug } = params;

		const res = await this.fetch(`blog/${slug}.json`);

		if (res.status === 200) {
			const article = await res.json();
			return { article };
		}

		this.error(404, 'Страница не найдена');
	}
</script>
```

Аналогичным образом обрабатываются и другие коды ошибок, с которыми вы можете столкнуться.


#### this.redirect

Вы можете прервать отрисовку и перенаправить пользователя в другое место с помощью `this.redirect`:

```html
<script context="module">
	export async function preload(page, session) {
		const { user } = session;

		if (!user) {
			return this.redirect(302, 'login');
		}

		return { user };
	}
</script>
```
