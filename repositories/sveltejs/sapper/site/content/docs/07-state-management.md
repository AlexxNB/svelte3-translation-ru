---
title: Хранилища
---

Значения `page` и `session`, передаваемые в функции `preload`, а так же `preloading`, доступны компонентам как [хранилища](https://ru.svelte.dev/tutorial/writable-stores).

Получение ссылок на хранилища внутри компонента выглядит следующим образом:

```html
<script>
	import { stores } from '@sapper/app';
	const { preloading, page, session } = stores();
</script>
```

* `preloading` булевое значение только для чтения, показывающее идет ли еще процесс загрузки после перехода
* `page` содержит объект `{path, params, query}`, только для чтения. Аналогичен объекту, передаваемому функции `preload`.
* `session` содержит любые данные сессии, которые были оставлены на сервере. Это [доступное для записи хранилище](https://ru.svelte.dev/tutorial/writable-stores), то есть вы можете обновить его новыми данными (например, после входа пользователя в систему), затем приложение будет перерисовано.


### Обновление данных сессии

На сервере можно заполнить данными `session`, передав соответствующий параметр в `sapper.middleware`:

```js
// src/server.js
express() // или Polka, или похожий фреймворк
	.use(
		serve('static'),
		authenticationMiddleware(),
		sapper.middleware({
			session: (req, res) => ({
				user: req.user
			})
		})
	)
	.listen(process.env.PORT);
```

> Данные сессии должны быть сериализуемыми(используется [devalue](https://github.com/Rich-Harris/devalue)) — никаких функций или пользовательских классов, только встроенные в JavaScript типы данных