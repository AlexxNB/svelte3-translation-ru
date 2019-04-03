---
title: Создание приложения
---

Этот учебник разработан, чтобы познакомить вас с процессом написания компонентов. Но в какой-то момент вы захотите начать писать компоненты уже в своем любимом редакторе кода.

Во-первых, понадобится интегрировать Svelte в инструменты сборки. Популярные варианты:

* [Rollup](https://rollupjs.org) / [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte)
* [Webpack](https://webpack.js.org/) / [svelte-loader](https://github.com/sveltejs/svelte-loader)
* [Parcel](https://parceljs.org/) / [parcel-plugin-svelte](https://github.com/DeMoorJasper/parcel-plugin-svelte)

Не беспокойтесь, если вы  новичок в веб-разработке и ранее не пользовались подобными инструментами. Мы подготовили простое пошаговое руководство [Svelte для зелёных разработчиков](blog/svelte-for-new-developers), которое проведет вас через этот процесс.

Кроме того, потребуется настроить ваш редактор кода, чтобы он подсвечивал синтаксис `.svelte` файлов. Узнать как это сделать можно просто [прочитав это руководство](blog/setting-up-your-editor).

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

При необходимости можно взаимодействовать с `app`, используя [API компонента](docs/component-api).
