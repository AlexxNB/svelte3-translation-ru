---
title: Синтаксис шаблонов
---

Вместо того, чтобы изобретать велосипед, шаблоны Svelte построены на фундаментах, которые уже выдержали испытание временем: HTML, CSS и JavaScript. Но есть пара дополнительных вещей, на которые мы сейчас посмотрим.


### Теги

Теги позволяют привязывать данные к шаблону. Когда дынные изменяются(например, при указании в консоли `component.a = 3`), структура DOM меняется автоматически. В шаблонах можно использовать любое JavaScript выражение и оно тоже будет автоматически обновляться:

```html
<!-- { title: 'Template tags' } -->
<p>{a} + {b} = {a + b}</p>
```

```json
/* { hidden: true } */
{
	"a": 1,
	"b": 2
}
```

Также можно использовать теги в атрибутах:

```html
<!-- { title: 'Tags in attributes' } -->
<h1 style="color: {color};">{color}</h1>
<p hidden={hideParagraph}>Этот параграф можно спрятать.</p>
```

```json
/* { hidden: true } */
{
	color: "steelblue",
	hideParagraph: false
}
```
[Логические атрибуты](https://www.w3.org/TR/html5/infrastructure.html#sec-boolean-attributes) вроде `hidden` будут опущены, если выражение в теге вернет false. Также атрибут будет убран, если значение в теге будет равно `undefined` или `null`.

### HTML
Обычные теги отрисовывают свои выражения как текст. Если необходимо, чтобы выраженеи в теге расценивалось как HTML разметка, обозначьте его специальным тегом `@html`:

```html
<!-- { title: 'Triple tags' } -->
<p>Этот HTML: {content}</p>
<p>Отрисуется так: {@html content}</p>
```

```json
/* { hidden: true } */
{
	content: "Немного <b>жирного</b> текста."
}
```

Как и в обычных тегах, здесь можно использовать любое JavaScript выражение и оно будет автоматически обновляться при изменении соответствующих данных.

> HTML **не очищается** перед его обработкой! Если вы отображаете пользовательский ввод, то несете ответственность за его первичную проверку. Невыполнение этого требования может привести к XSS атакам на ваше приложение.


### Блоки If

Можно отображать или не отображать часть вашего шаблона, поместив его в блок if.

```html
<!-- { repl: false } -->
{#if user.loggedIn}
	<a href="/logout">Выйти</a>
{/if}

{#if !user.loggedIn}
	<a href="/login">Войти</a>
{/if}
```

Блоки выше можно записать иначе при помощи блока `{:else}`:

```html
<!-- { repl: false } -->
{#if user.loggedIn}
	<a href="/logout">Выйти</a>
{:else}
	<a href="/login">Войти</a>
{/if}
```

Также можно использовать `{:elseif ...}`:

```html
<!--{ title: 'If, else and elseif' }-->
{#if x > 10}
	<p>{x} больше, чем 10</p>
{:elseif 5 > x}
	<p>{x} меньше, чем 5</p>
{:else}
	<p>{x} между 5-ю и 10-ю</p>
{/if}
```

```json
/* { hidden: true } */
{
	x: 7
}
```

### Блок Each

Перебор по спискам данных:

```html
<!--{ title: 'Each blocks' }-->
<h1>Котики с YouTube</h1>

<ul>
	{#each cats as cat}
		<li><a target="_blank" href={cat.video}>{cat.name}</a></li>
	{:else}
		<li>Нету котиков :(</li>
	{/each}
</ul>
```

```json
/* { hidden: true } */
{
	cats: [
		{
			name: "Keyboard Cat",
			video: "https://www.youtube.com/watch?v=J---aiyznGQ"
		},
		{
			name: "Maru",
			video: "https://www.youtube.com/watch?v=z_AbfPXTKms"
		},
		{
			name: "Henri The Existential Cat",
			video: "https://www.youtube.com/watch?v=OUtn3pvWmpg"
		}
	]
}
```

Блок `{:else}` срабатывает если лист окажется пустым.

Вы можете получить индекс текущего элемента при помощи конструкции *выражение* as *name*, *index*:

```html
<!--{ title: 'Each block indexes' }-->
<div class="grid">
	{#each rows as row, y}
		<div class="row">
			{#each columns as column, x}
				<code class="cell">
					{x + 1},{y + 1}:
					<strong>{row[column]}</strong>
				</code>
			{/each}
		</div>
	{/each}
</div>
```

```json
/* { hidden: true } */
{
	columns: ["foo", "bar", "baz"],
	rows: [
		{ foo: "a", bar: "b", baz: "c" },
		{ foo: "d", bar: "e", baz: "f" },
		{ foo: "g", bar: "h", baz: "i" }
	]
}
```

> По-умолчанию, при изменении списка  `a, b, c` на `a, c`, Svelte автоматически *удалит* третий блок и *изменит* второй с `b` на `c`, вместо удаления блока `b`. Если такое поведение вам не нужно используйте [each блок с ключом](guide#keyed-each-blocks).

Вы можете деструктуризировать элементы массива:

```html
<!--{ title: 'Each block destructuring' }-->
<h1>И снова котики на YouTube</h1>

<ul>
	{#each cats as {name, video} }
		<li><a target="_blank" href={video}>{name}</a></li>
	{/each}
</ul>
```

```json
/* { hidden: true } */
{
	cats: [
		{
			name: "Keyboard Cat",
			video: "https://www.youtube.com/watch?v=J---aiyznGQ"
		},
		{
			name: "Maru",
			video: "https://www.youtube.com/watch?v=z_AbfPXTKms"
		},
		{
			name: "Henri The Existential Cat",
			video: "https://www.youtube.com/watch?v=OUtn3pvWmpg"
		}
	]
}
```

### Блок Await

Вы можете воспроизвести три состояния объекта [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) — ожидание, выполнение и отклонено — при помощи блока `await`:

```html
<!--{ title: 'Await blocks' }-->
<script>
	const promise = new Promise(fulfil => {
		setTimeout(() => fulfil(42), 3000);
	});
</script>

{#await promise}
	<p>подождем...</p>
{:then answer}
	<p>ответ {answer}!</p>
{:catch error}
	<p>упс, это странно</p>
{/await}
```

Если выражение в блоке `{#await выражение}` *не является* объектом Promise, Svelte сразу перейдет к секции `then`.


### Директивы

Директивы позволяют добавить особые инструкции добавления [обработчиков событий](guide#event-handlers), [привязок](guide#bindings), [переходов](guide#transitions) и им подобных. Мы рассмотрим подробно каждую из них позднее в этом руководстве - а сейчас, просто запомните, что директивы можно распознать по символу `:`:

```html
<!--{ title: 'Element directives' }-->
<p>Count: {count}</p>
<button on:click="{() => count += 1}">+1</button>
```

```json
/* { hidden: true } */
{
	count: 0
}
```

> Технически, символ `:` используется для обозначения пространств имен в атрибутах HTML. Если такие атрибуты встретятся при сборке, то они *не будт* рассматриваться как директивы.


### Тег Debug

Для проверки данных в процессе их изменения и прохождения через ваше приложение используйте тег `{@debug ...}`:

```html
<!--{ title: 'Debug tags' }-->
<input bind:value={name}>

{@debug name}
<h1>Привет {name}!</h1>
```

```json
/* { hidden: true } */
{
	name: 'world'
}
```

При этом значение  `name` отобращится в логе при любом его изменении. Если у при этом открыты инструменты разработчика, изменение `name` приостановит выполнение программы и откроет консоль отладки.

Вы можете отслеживать несколько значений одновременно(`{@debug foo, bar, baz}`), или просто использовать тег `{@debug}` для остановки выполнения всякий раз, когда изменится окружающая разметка.

> Тег `@debug` работает только при сборке компилером с установленной опцией `dev: true`.
