---
title: Отладка
---

Заниматься отладкой серверного кода особенно просто при помощи [ndb](https://github.com/GoogleChromeLabs/ndb). Установите его глобально ...

```bash
npm install -g ndb
```

...потом запустите приложение Sapper:

```bash
ndb npm run dev
```

> Предполагается, что скрипт `npm run dev` запускает `sapper dev`. Вы также можете запустить Sapper через [npx](https://blog.npmjs.org/post/162869356040/introduction-npx-an-npm-package-runner) таким образом - `ndb npx sapper dev`.

Note that you may not see any terminal output for a few seconds while ndb starts up.
Обратите внимание, что в терминале может не быть никакого вывода, пока запускается ndb.
