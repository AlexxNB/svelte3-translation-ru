---
title: Создание приложения
---

Этот учебник разработан, чтобы познакомить вас с процессом написания компонентов. Но в какой-то момент вы захотите начать писать компоненты уже в своём любимом редакторе кода.

Во-первых, понадобится интегрировать Svelte в инструменты сборки. Официально поддерживаются плагины для [Vite](https://vitejs.dev/), [Rollup](https://rollupjs.org) и [webpack](https://webpack.js.org/)...

* [vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte)
* [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte)
* [svelte-loader](https://github.com/sveltejs/svelte-loader)

...а также есть несколько плагинов, [разрабатываемых сообществом](https://sveltesociety.dev/tools).

Не беспокойтесь, если вы  новичок в веб-разработке и ранее не пользовались подобными инструментами. Мы подготовили простое пошаговое руководство [Svelte для зелёных разработчиков](blog/svelte-for-new-developers), которое проведёт вас через этот процесс.

Кроме того, потребуется настроить подсветку синтаксиса `.svelte` файлов в редакторе кода. Есть [плагины](https://sveltesociety.dev/tools#editor-support) для многих популярных редакторов, а также официальное [расширение VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). Или можно настроить подсветку синтаксиса `.svelte` как `.html` по [этому руководству](blog/setting-up-your-editor).

После настройки вашего проекта, использовать компоненты Svelte в коде очень легко. Компилятор превращает каждый компонент в обычный класс JavaScript - просто импортируйте его и создайте экземпляр с помощью ключевого слова `new`:

```js
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		// о свойствах мы узнаем позднее
		answer: 42
	}
});
```

При необходимости можно взаимодействовать с `app`, используя [API компонента](docs#API_компонента_на_клиенте).
