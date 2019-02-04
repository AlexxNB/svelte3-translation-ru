---
title: Безопасность
---

По умолчанию Sapper не добавляет в ваше приложение никиаких http-заголовков, касающихся безопасности, но вы можете добавить их самостоятельно, используя прослойку, например [Helmet][].

### Политики защиты контента(CSP)

Sapper генерирует встроенные в страницу элементы `<script>`, которые могут не выполняться, если заголовки [Политики защиты контента/Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) запрещают выполнение таких скриптов (`unsafe-inline`).

Чтобы обойти это, Sapper может встроить [nonce](https://www.troyhunt.com/locking-down-your-website-scripts-with-csp-hashes-nonces-and-report-uri/), который может быть сконфигурирован для генерации нужных CSP заголовков. Вот пример использования [Express][] и [Helmet][]:

```js
// server.js
import uuidv4 from 'uuid/v4';
import helmet from 'helmet';

app.use((req, res, next) => {
	res.locals.nonce = uuidv4();
	next();
});
app.use(helmet({
	contentSecurityPolicy: {
		directives: {
			scriptSrc: [
				"'self'",
				(req, res) => `'nonce-${res.locals.nonce}'`
			]
		}
	}
}));
app.use(sapper.middleware());
```

Использование `res.locals.nonce` таким образом подсмотрено в
[документации Helmet по CSP](https://helmetjs.github.io/docs/csp/#generating-nonces).

[Express]: https://expressjs.com/
[Helmet]: https://helmetjs.github.io/