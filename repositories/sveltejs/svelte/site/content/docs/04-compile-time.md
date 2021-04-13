---
title: Компиляция
---

В обычных условиях, вам не нужно напрямую взаимодействовать с компилятором Svelte, достаточно просто интегрировать его в вашу систему сборки используя один из следующих плагинов-бандлеров:

* [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) для пользователей [Rollup](https://rollupjs.org)
* [svelte-loader](https://github.com/sveltejs/svelte-loader) для пользователей [webpack](https://webpack.js.org)
* или из [поддерживаемых сообществом](https://github.com/sveltejs/integrations#bundler-plugins)

Тем не менее, полезно знать, как пользоваться компилятором, так как эти плагины обычно предоставляют возможность настройки его параметров.


### `svelte.compile`

```js
result: {
	js,
	css,
	ast,
	warnings,
	vars,
	stats
} = svelte.compile(source: string, options?: {...})
```

---

Тут происходит вся магия. Метод `svelte.compile` берет исходный код вашего компонента и превращает его в JavaScript модуль, который экспортирует класс.

```js
const svelte = require('svelte/compiler');

const result = svelte.compile(source, {
	// параметры
});
```

Компилятору можно передать следующие параметры. Все они являются необязательными:

<!-- | option | type | default
| --- | --- | --- |
| `filename` | string | `null`
| `name` | string | `"Component"`
| `format` | `"esm"` or `"cjs"` | `"esm"`
| `generate` | `"dom"` or `"ssr"` | `"dom"`
| `dev` | boolean | `false`
| `immutable` | boolean | `false`
| `hydratable` | boolean | `false`
| `legacy` | boolean | `false`
| `customElement` | boolean | `false`
| `tag` | string | null
| `accessors` | boolean | `false`
| `css` | boolean | `true`
| `loopGuardTimeout` | number | 0
| `preserveComments` | boolean | `false`
| `preserveWhitespace` | boolean | `false`
| `outputFilename` | string | `null`
| `cssOutputFilename` | string | `null`
| `sveltePath` | string | `"svelte"` -->

| параметр | по умолчанию | описание |
| --- | --- | --- |
| `filename` | `null` | `string` имя файла для подсказок при отладке и карт исходников. Плагин назначит имя автоматически.
| `name` | `"Component"` | `string`  имя JavaScript класса на выходе (если в области видимости будет конфликт имён, компилятор переименует класс). Обычно имя берётся из параметра `filename`.
| `format` | `"esm"` | Значение `"esm"`, создаёт JavaScript модуль  (с `import` и `export`). Значение `"cjs "`, создаёт CommonJS модуль (с `require` и `module.exports`), который обычно полезен при рендеринге на стороне сервера или тестировании.
| `generate` | `"dom"` | При значении `"dom"`, Svelte создаёт JavaScript класс для встраивания в DOM. При значении `"ssr"`, Svelte создаёт объект с методом `render`, подходящим для рендеринга на стороне сервера. Если указать `false`, JavaScript или CSS возвращаться не будут, только метаданные.
| `dev` | `false` | При значении `true`, в компоненты будет встраиваться дополнительный код, который будет выполнять различные проверки и предоставлять отладочную информацию во время разработки.
| `immutable` | `false` | Значение `true`, говорит компилятору, что вы обязуетесь не изменять структуру каких-либо объектов. Это позволяет отслеживать изменения значений более оптимальным путём.
| `hydratable` | `false` | При значении `true`, позволяет установить параметр `hydrate: true` в среде выполнения, который позволяет компоненту обновлять уже существующий DOM, а не создавать новую структуру DOM с нуля. При компиляции серверного кода добавляет маркеры элементам в `<head>`, необходимые для процесса гитратации.
| `legacy` | `false` | При значении `true` будет генерироваться код, совместимый с IE9 и IE10, которые не поддерживают некоторые вещи, например` element.dataset`.
| `accessors` | `false` | Значение `true` заставляет генерировать для свойств компонента геттеры и сеттеры. При значении `false`, они будут создаваться только для экспортируемых значений доступных только для чтения (которые объявлены при помощи `const`, `class` или `function`). Если используется параметр `customElement: true` по умолчанию этот параметр будет равен `true`.
| `customElement` | `false` | При значении `true` компилятор будет создавать конструктор пользовательского элемента, а не обычного Svelte компонента.
| `tag` | `null` | имя тега, с которым нужно зарегистрировать пользовательский элемент. Это должна быть строка из маленьких букв и цифр с хотя бы одним дефисом, например `"my-element"`.
| `css` | `true` | Если значение равно `true`, стили включаются в сам класс JavaScript и будут динамически применены во время выполнения. Рекомендуется установить значение `false` и использовать статически сгенерированный CSS файл, поскольку это приведет к уменьшению JavaScript бандла и повышению производительности.
| `cssHash` | См. правее | Функция, которая принимает объект `{ hash, css, name, filename }` и возвращает строку, которая используется как имя класса для изоляции CSS. По умолчанию она возвращает `svelte-${hash(css)}`.
| `loopGuardTimeout` | 0 | Указывает Svelte  прервать какой-либо цикл, если он блокирует работу потока более чем на `loopGuardTimeout` миллисекунд. Полезно для предотвращения зависаний в бесконечных циклах. **Доступно только при `dev: true`**
| `preserveComments` | `false` | При значении `true`, ваши комментарии в HTML разметке будут сохранены при рендере на стороне сервера. По умолчанию они удаляются.
| `preserveWhitespace` | `false` | При значении `true`, пробелы внутри и между элементами остаются не тронутыми. В ином случае, Svelte удалит лишние пробелы.
| `outputFilename` | `null` | Имя файла для карты исходников JavaScript.
| `cssOutputFilename` | `null` | Имя файла для карты исходников CSS.
| `sveltePath` | `"svelte"` | Расположение пакета `svelte`. Любые импорты из `svelte` или `svelte/[module]` будут соответствующим образом обработаны.
| `namespace` | `"html"` | Пространство имен для элемента; например `"mathml"`, `"svg"`, `"foreign"`.


---

Возвращаемый объект `result` содержит код вашего компонента и некоторые полезные метаданные.

```js
const {
	js,
	css,
	ast,
	warnings,
	vars,
	stats
} = svelte.compile(source);
```

* `js` и `css` — объекты со следующими свойствами:
	* `code` — код JavaScript
	* `map` — карта исходников с дополнительными удобными методами `toString()` и `toUrl()`.
* `ast` — абстрактное синтаксическое дерево, представляющее структуру компонента.
* `warnings` — массив объектов предупреждений, которые могли возникнуть при компиляции. У каждый такого объекта есть несколько свойств:
	* `code` — идентификатор категории ошибки
	* `message` — описание проблемы в форме, понятной для человека
	* `start` и `end` — информация о предупреждениях, относящихся к конкретным местам в коде; являются объектами со свойствами `line`, `column` и `character`
	* `frame` — выделенная часть проблемного кода с номерами строк, если имеется
* `vars` — массив всех переменных, объявленных в компоненте. Например, используется в [eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3). У каждого элемента есть несколько свойств:
	* `name` — имя переменной
	* `export_name` — имя переменной при экспорте (совпадает с `name`, если экспорт выполнен без использования конструкции `export...as`)
	* `injected` — равно `true`, если переменная была объявлена самим Svelte, а не в вашем коде
	* `module` — равно `true`, если переменная объявлена в блоке `<script context="module">`
	* `mutated` — равно `true`,  переменной назначались свойства внутри компонента
	* `reassigned` — равно `true`, если переменная переназначалась внутри компонента
	* `referenced` — `true` если значение используется в шаблоне
	* `referenced_from_script` равно `true` если значение используется в `<script>` вне контекста объявления
	* `writable` — равно `true`, если значение объявлено с помощью `let` или `var` (но не `const`, `class` или `function`)
* `stats` — объект, используемый командой разработчиков Svelte для диагностики компилятора. Не полагайтесь на него в своём коде!


<!--

```js
compiled: {
	// `map` is a v3 sourcemap with toString()/toUrl() methods
	js: { code: string, map: {...} },
	css: { code: string, map: {...} },
	ast: {...}, // ESTree-like syntax tree for the component, including HTML, CSS and JS
	warnings: Array<{
		code: string,
		message: string,
		filename: string,
		pos: number,
		start: { line: number, column: number },
		end: { line: number, column: number },
		frame: string,
		toString: () => string
	}>,
	vars: Array<{
		name: string,
		export_name: string,
		injected: boolean,
		module: boolean,
		mutated: boolean,
		reassigned: boolean,
		referenced: boolean,
		writable: boolean
	}>,
	stats: {
		timings: { [label]: number }
	}
} = svelte.compile(source: string, options?: {...})
```

-->


### `svelte.parse`

```js
ast: object = svelte.parse(
	source: string,
	options?: {
		filename?: string,
		customElement?: boolean
	}
)
```

---

Функция `parse` выполняет разбор компонента, возвращая только его абстрактное синтаксическое дерево. В отличие от компиляции с параметром `generate: false`, при этом не будет выполняться никакой проверки или иного анализа компонента, кроме самого разбора.


```js
const svelte = require('svelte/compiler');
const ast = svelte.parse(source, { filename: 'App.svelte' });
```


### `svelte.preprocess`

Сообществом поддерживается [несколько препроцессоров](https://github.com/sveltejs/integrations#preprocessors), которые позволяют использовать Svelte с такими инструментами, как TypeScript, PostCSS, SCSS и Less.

Вы можете написать свой собственный препроцессор, используя API `svelte.preprocess`.

```js
result: {
	code: string,
	dependencies: Array<string>
} = await svelte.preprocess(
	source: string,
	preprocessors: Array<{
		markup?: (input: { content: string, filename: string }) => Promise<{
			code: string,
			dependencies?: Array<string>
		}>,
		script?: (input: { content: string, markup: string, attributes: Record<string, string>, filename: string }) => Promise<{
			code: string,
			dependencies?: Array<string>
		}>,
		style?: (input: { content: string, markup: string, attributes: Record<string, string>, filename: string }) => Promise<{
			code: string,
			dependencies?: Array<string>
		}>
	}>,
	options?: {
		filename?: string
	}
)
```

---

Функция `preprocess` предоставляет удобные хуки для произвольного преобразования исходного кода компонента. Например, его можно использовать для преобразования блока `<style lang="sass">` в ванильный CSS.

Первый аргумент — это исходный код компонента. Второй — это массив *препроцессоров* `preprocessors` (или просто объект `preprocessor`, если нужен только один), где препроцессор — это объект с функциями `markup`,`script` и `style`, каждый из которых не является обязательным.

Каждая функция `markup`,`script` или `style` должна возвращать объект (или промис, который при выполнении возвращает объект) со свойством `code`, представляющим преобразованный исходный код, и необязательным массивом зависимостей `dependencies`.

Функция `markup` получает весь исходный текст компонента вместе с именем файла (`filename`) компонента, если он был указан в третьем аргументе.

> Функции препроцессоров также могут дополнительно возвращать объект `map` вместе с `code` и `dependencies`, где` map` — это карта исходников для отладки преобразованного кода. В текущих версиях Svelte этот объект игнорируется, но в будущих версиях Svelte сможет обрабатывать карты исходников от препроцессоров.

```js
const svelte = require('svelte/compiler');

const { code } = await svelte.preprocess(source, {
	markup: ({ content, filename }) => {
		return {
			code: content.replace(/foo/g, 'bar')
		};
	}
}, {
	filename: 'App.svelte'
});
```

---

Функции `script` и `style` получают содержимое блоков `<script>` и `<style>` соответственно (`content`), а также весь исходный текст компонента (`markup`). В дополнение к `filename` они получают объект атрибутов блока.

Если возвращается массив зависимостей `dependencies`, он будет также включен в результирующий объект. Он используется такими пакетами, как [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte) для отслеживания изменений  дополнительных файлов, в случае, если, например в теге `<style>` есть `@import`.

```js
const svelte = require('svelte/compiler');
const sass = require('node-sass');
const { dirname } = require('path');

const { code, dependencies } = await svelte.preprocess(source, {
	style: async ({ content, attributes, filename }) => {
		// обрабатываем только <style lang="sass">
		if (attributes.lang !== 'sass') return;

		const { css, stats } = await new Promise((resolve, reject) => sass.render({
			file: filename,
			data: content,
			includePaths: [
				dirname(filename),
			],
		}, (err, result) => {
			if (err) reject(err);
			else resolve(result);
		}));

		return {
			code: css.toString(),
			dependencies: stats.includedFiles
		};
	}
}, {
	filename: 'App.svelte'
});
```

---

Несколько препроцессоров могут быть использованы вместе. Выход первого становится входом для второго и так далее. Сначала запускаются функции `markup`, затем `script` и `style`.

```js
const svelte = require('svelte/compiler');

const { code } = await svelte.preprocess(source, [
	{
		markup: () => {
			console.log('это запустится первым');
		},
		script: () => {
			console.log('это запустится третьим');
		},
		style: () => {
			console.log('это запустится пятым');
		}
	},
	{
		markup: () => {
			console.log('это запустится вторым');
		},
		script: () => {
			console.log('это запустится четвертым');
		},
		style: () => {
			console.log('это запустится шестым');
		}
	}
], {
	filename: 'App.svelte'
});
```

### `svelte.walk`

```js
walk(ast: Node, {
	enter(node: Node, parent: Node, prop: string, index: number)?: void,
	leave(node: Node, parent: Node, prop: string, index: number)?: void
})
```

---

Функция `walk` обеспечивает способ обхода абстрактных синтаксических деревьев, сгенерированных парсером, используя встроенный в компилятор собственный экземпляр [estree-walker](https://github.com/Rich-Harris/estree-walker) ,

Метод `walk` принимает абстрактное синтаксическое дерево для обхода и объект с двумя необязательными методами: `enter` и `exit`. Для каждого узла дерева вызывается `enter` (если есть). Затем, если внутри `enter` не вызывается `this.skip()`, подобным образом обрабатываются дочерние узлы, затем вызывается метод `exit`.


```js
const svelte = require('svelte/compiler');
svelte.walk(ast, {
	enter(node, parent, prop, index) {
		do_something(node);
		if (should_skip_children(node)) {
			this.skip();
		}
	},
	leave(node, parent, prop, index) {
		do_something_else(node);
	}
});
```

### `svelte.VERSION`

---

Текущая версия Svelte, которая указана в файле package.json.

```js
const svelte = require('svelte/compiler');
console.log(`используется Svelte версии ${svelte.VERSION}`);
```
