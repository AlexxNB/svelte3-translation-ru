---
title: Препроцессинг
---

Некоторым разработчикам нравится использовать нестандартные языки, вроде [Pug](https://pugjs.org/api/getting-started.html), [Sass](http://sass-lang.com/) или [CoffeeScript](http://coffeescript.org/).

Ничто не мешает использовать эти языки или любые другие, которые можно преобразовать в HTML, CSS и JavaScript, используя *препроцессоры*.


### svelte.preprocess

Svelte экспортирует функцию `preprocess`, которая берёт некоторый исходный код и возвращает промис для стандартного компонента Svelte, готового для использования со `svelte.compile`:

```js
const svelte = require('svelte');

const input = fs.readFileSync('App.html', 'utf-8');

svelte.preprocess(input, {
	filename: 'App.html', // this is passed to each preprocessor

	markup: ({ content, filename }) => {
		return {
			code: '<!-- some HTML -->',
			map: {...}
		};
	},

	style: ({ content, attributes, filename }) => {
		return {
			code: '/* some CSS */',
			map: {...}
		};
	},

	script: ({ content, attributes, filename }) => {
		return {
			code: '// some JavaScript',
			map: {...}
		};
	}
}).then(preprocessed => {
	fs.writeFileSync('preprocessed/App.html', preprocessed.toString());

	const { js } = svelte.compile(preprocessed);
	fs.writeFileSync('compiled/App.js', js.code);
});
```

Если указан препроцессор `markup`, то он запускается первым. Свойство `content` представляет всю входную строку.

Препроцессоры `style` и `script` получают содержимое элементов `<style>` и `<script>` соответственно, вместе с любыми атрибутами в этих элементах (например, `<style lang='scss'>`) ,

Все три препроцессора являются необязательными. Каждый из них должен возвращать объект `{code, map}` или промис, который резолвится в объект `{code, map}`, где `code` — результирующая строка, а `map` — карта исходников(source map), объясняющая преобразование.

> Возвращаемый объект `map` в настоящее время не используются Svelte, но их поддержка будет добавлена в будущих версиях


### Использование сборщиков

Большинство плагинов для сборщиков, таких как [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte) и [svelte-loader](https://github.com/sveltejs/svelte-loader), позволяют установить опции `preprocess`. В этом случае инструмент сборки будет выполнять всю работу.