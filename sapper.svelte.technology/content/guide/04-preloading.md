---
title: Предзагрузка
---

Как мы видели в разделе [Маршруты](guide#routing), компоненты страниц верхнего уровня могут иметь функцию `preload`, которая будет загружать некоторые данные, от которых зависит страница. Она похожа на `getInitialProps` в Next.js или `asyncData` в Nuxt.js.

```html
<script>
	export default {
		preload({ params, query }) {
			const { slug } = params;

			return this.fetch(`blog/${slug}.json`).then(r => r.json()).then(article => {
				return { article };
			});
		}
	};
</script>
```

Функция `preload` не является обязательной; независимо от того, используете вы ее или нет, компонент все равно будет иметь доступ к объектам `query` и `params`, в составе [предустановленных данных](https://svelte.technology/guide#default-data), прописанных в свойстве `data`.

Компонент `_layout.html` рендерится со значением `preloading: true` во время предварительной загрузки, и со значением `false`, когда она будет окончена. Это значение полезно, чтобы показать анимацию прелоадера или иным образом показать пользователю, что на данный момент происходит загрузка содержимого страницы.

```html
<!-- src/routes/_layout.html -->
{#if preloading}
  <div>Подождите...</div>
{/if}

<svelte:component this={child.component} {...child.props}/>
```

Значение `preloading` устанавливается только во время перехода между страниц. Предзагрузка(см. [ниже](guide#prefetching)) не устанавливает `preloading`, поскольку она предназначена быть прозрачной для пользователя.

### Аргументы

Функция `preload` получает объект `{ params, query }`, где `params` получена из URL и имени файла маршрута, а `query` является объектом значений из строки запроса.

So if the example above was `src/routes/blog/[slug].html` and the URL was `/blog/some-post?foo=bar&baz`, the following would be true:
Для примера расмотрим знакомую страницу `src/routes/blog/[slug].html`. Предположим, к ней обратились по а URL-адресу вида `/blog/some-post?foo=bar&baz`, то тогда мы получим следующие данные:

* `params.slug === 'some-post'`
* `query.foo === 'bar'`
* `query.baz === true`


### Возвращаемое значение

Если вы вернете промис из `preload`, страница будет не будет отображаться, пока промис не исполнится. Но вы также можете вернуть и простой объект.

Когда Sapper ренедерит страницу на сервере, он пытается сериализовать полученное значение (используя [devalue](https://github.com/Rich-Harris/devalue)) и помещает его на страницу, поэтому клиентской части нет необходимости повторно вызывать `preload` при инициализации. Сериализация выдаст ошибку, если значение включает функции или пользовательские классы (но можно использовать циклические и повторяющиеся ссылки, а также встроенные модули, типа `Date`,`Map`, `Set` и `RegExp`).

### Контекст

Внутри функции `preload` у вас есть доступ к трем методам ...

* `this.fetch(url, options)`
* `this.error(statusCode, error)`
* `this.redirect(statusCode, location)`

...и к объекту `this.store`, если вы используете [управление состоянием](guide#state-management).


#### this.fetch

В браузерах вы можете использовать `fetch` для выполнения AJAX запрсов, для получения данных с ваших серверных маршрутов(среди прочего). На сервере это несколько сложнее - вы можете делать HTTP-запросы, но вы должны прописать origin, и у вас нет доступа к файлам cookie. Это означает, что невозможно запрашивать данные, основанные на сеансе пользователя, например, требующих входа в систему.

Чтобы исправить это, Sapper предлагает функцию `this.fetch`, которая работает одинаково как на сервере, так и на клиенте:

```html
<script>
	export default {
		preload() {
			return this.fetch(`secret-data.json`, {
				credentials: 'include'
			}).then(r => {
				// ...
			});
		}
	};
</script>
```

Обратите внимание, что вам нужно будет использовать какую-либо прослойку для управления сессиями  в вашем `app/server.js`, например [express-session](https://github.com/expressjs/session), чтобы обрабатывать сеансы пользователей или делать что-либо, связанное с аутентификацией.


#### this.error

Если пользователь перейдет на `/blog/some-invalid-slug`, хотелось бы ему показать страницу с ошибкой '404 - страница не найдена'. И мы можем сделать это с помощью `this.error`:

```html
<script>
	export default {
		preload({ params, query }) {
			const { slug } = params;

			return this.fetch(`blog/${slug}.json`).then(r => {
				// предположим, что все ответы либо 200 либо 404
				if (r.status === 200) {
					return r.json().then(article => {
						return { article };
					});
				} else {
					this.error(404, 'not found');
				}
			});
		}
	};
</script>
```

Аналогичным образом обрабатываются и другие коды ошибок, с которыми вы можете столкнуться.


#### this.redirect

Вы можете прервать рендеринг и перенаправить пользователя в другое место с помощью `this.redirect`:
```html
<script>
	export default {
		preload({ params, session }) {
			const { user } = this.store.get();

			if (!user) {
				return this.redirect(302, 'login');
			}

			return {
				user
			};
		}
	};
</script>
```
