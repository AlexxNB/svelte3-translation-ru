---
title: Что нового в Svelte: Июнь 2021
description: Прогресс в направлении SvelteKit 1.0 и более тесной интеграции TypeScript / Svelte в языковые инструменты
author: Daniel Sandoval
authorURL: https://desandoval.net
---

В этом месяце мы увидели множество публикаций в SvelteKit и его документацию. Языковые инструменты также получили некоторые новые функции, в первую очередь более глубокую интеграцию с файлами Svelte в файлах JavaScript или TypeScript. Перейдем к обновлениям...


## Новое в SvelteKit

- Файл конфигурации `svelte.config.js` теперь загружается в формате ESM (.js вместо .cjs).
- Страницы AMP теперь используют обработанный CSS, а не генерируемый CSS.
- `svelte-check` был добавлен в шаблон TypeScript ([sveltejs/kit#1556](https://github.com/sveltejs/kit/pull/1556))
- Поддержка https keypair [sveltejs/kit#1456](https://github.com/sveltejs/kit/pull/1456)
- SvelteKit теперь включает в себя Vite и использует обновленную версию. Удалите Vite из вашего `package.json`, если он там.
- Etags для бинарных ответов [sveltejs/kit#1382](https://github.com/sveltejs/kit/pull/1382)
- `$layout` переименован в `__layout`, а `$error` в `__error`.
- Удален `getContext` в пользу `request.locals`
- Переименован выходной каталог `.svelte` в `.svelte-kit`. Обновите ваш .gitignore
- `trailingSlash: 'never' | 'always' | 'ignore'` теперь доступен в конфиге. Это должно упростить создание сайтов, работающих на статических хостингах, где ожидается слэш в конце url для страниц `index.html`, и обеспечит выход для всех, кому требуется более сложное поведение.


## Исправления ошибок в SvelteKit

- `adapter-netlify` получил исправление [sveltejs/kit#1467](https://github.com/sveltejs/kit/pull/1467) и новую документацию в файле [readme](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify)
- Маршрутизатор больше не будет перехватывать навигацию для URL-адресов, не принадлежащих приложению. Это устраняет сбой для приложений, которые имеют `<a>` элементы на странице с одинаковым происхождением, но не имеют общего базового пути с приложением.
- Изменения только хеша теперь обрабатываются маршрутизатором, исправляя "обратную" навигацию браузера между изменениями хеша в некоторых случаях.


## Новое в Svelte и Language Tools

- Svelte 3.38.1 и 3.38.2 исправили проблему с гидратацией, которая приводила к дублированию элементов. Если вы видите это в своем проекте, обязательно обновитесь до последней версии!
- Новый плагин TypeScript обеспечивает более глубокую интеграцию с файлами Svelte в файлах JavaScript или TypeScript. Это включает в себя диагностику, ссылки и переименование переменных. Он поставляется с расширением VS Code, но пока отключен по умолчанию. Вы можете включить его через [этот параметр](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-vscode#svelteenable-ts-plugin). Мы рекомендуем вам протестировать его и [оставить отзыв](https://github.com/sveltejs/language-tools/issues/580)
- В последней версии `svelte-check` теперь вы можете указать путь к вашему `tsconfig.json` или `jsconfig.json`. Пример: `svelte-check --tsconfig "./tsconfig.json"`. Это гарантирует, что диагностика запускается только для файлов, на которые есть ссылка в этой конфигурации. Он также запускает диагностику файлов JavaScript и/или TypeScript, что избавляет от необходимости запускать другую проверку (например, `tsc --noEmit`) для файлов, отличных от Svelte (версия `svelte-check` [**1.6.0**]( https://github.com/sveltejs/language-tools/releases/tag/svelte-check-1.6.0))
- Расширение VS Code и svelte-check получили новый мажорный выпуск. Раньше свойства, не имевшие инициализатора (`export let foo;`), требовались только в том случае, если пользователь использовал TypeScript, и активировал `strict` режим. Теперь это изменено: люди, использующие TypeScript, а также те, кто также  использует `checkJs` в файлах JavaScript, теперь всегда будут иметь эти свойства, отмеченные как обязательные (версия `svelte-check` [**2.0.0**](https://github.com/sveltejs/language-tools/releases/tag/svelte-check-2.0.0), версия расширения [**105.0.0**](https://github.com/sveltejs/language-tools/releases/tag/extensions-105.0.0))

---


## Крутые примеры сообщества

**Apps & Sites**

- [vidu](https://github.com/pa-nic/vidu) - минимальный сборщик веб-аналитики и панель инструментов.
- [River Runner](https://river-runner.samlearner.com/) - виртуальный способ следовать за реками вниз по течению, созданный с помощью Mapbox и Svelte.
- [JSDoc Type Generator](https://rafistrauss.github.io/jsdoc-generator/) - генерирует типы JSDoc для действительного JSON.
- [pagereview.io](https://pagereview.io/) - инструмент обратной связи с веб-сайтом, который позволяет оставлять комментарии непосредственно на просматриваемом сайте.
- [gamesroom.io](https://gamesroom.io/) - платформа для настольных онлайн-игр со встроенным видеочатом.
- [Greedy Goblin](https://greedygoblin-fe11c.web.app/) - приложение с рецептами для игроков старой школы Runescape.
- [hashbrown.geopjr.dev](https://hashbrown.geopjr.dev/) - веб-страница, вдохновленная оболочкой GNOME, где можно узнать, изучить исходный код и загрузить приложение Hashbrown GTK ([ссылка на источник](https://github.com/GeopJr/Hashbrown/tree/website)).

**Libraries, Tools & Components**

- [svelte-image-cropping](https://novacbn.github.io/svelte-image-crop/) - простая библиотека обрезки изображений с использованием веб-API.
- [svelte-datepicker](https://github.com/andrew-secret/svelte-datepicker) - легкая и инклюзивная сборка средства выбора даты с Svelte.
- [svelte-regex-router](https://www.npmjs.com/package/svelte-regex-router) - простая и легкая библиотека, позволяющая легко обрабатывать маршруты в вашем приложении Svelte.
- [Svelte Micro](https://www.npmjs.com/package/svelte-micro) - легкий и реактивный однокомпонентный маршрутизатор для Svelte.
- [svelte-entity-store](https://www.npmjs.com/package/svelte-entity-store) - предоставляет простое универсальное решение для хранения коллекций объектов entity.
- [svelte-animation-store](https://github.com/joshnuss/svelte-animation-store) - стор, основанный на tweened-сторе Svelte, который позволяет приостанавливать, продолжать, сбрасывать, воспроизводить, отменять или настраивать скорость анимации.


**Хотите поделиться своим компонентом?** Отправьте [Компонент](https://sveltesociety.dev/components) на сайт Svelte Society, сделав [PR](https://github.com/svelte-society/sveltesociety.dev/blob/master/src/pages/components/components.json).


## Увидимся в следующем месяце!

Есть, что показать? Присоединяйтесь к нам в [Svelte Society](https://sveltesociety.dev/), [Reddit](https://www.reddit.com/r/sveltejs/) и [Discord](https://discord.com/invite/yy75DKs)!