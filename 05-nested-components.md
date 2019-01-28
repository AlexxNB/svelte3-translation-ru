---
title: Вложенные компоненты
---

Кроме обычных HTML элементов (и блоков вроде `if` и `each`) компоненты Svelte могут содержать и *другие* компоненты Svelte.

```html
<!-- { title: 'Nested components' } -->
<script>
	import Widget from './Widget.html';
</script>

<div class='widget-container'>
	<Widget answer={42}/>
</div>
```

```html
<!--{ filename: 'Widget.html' }-->
<p>Я вложенный компонент. Ответ на все вопросы - {answer}</p>
```

По сути этот пример схож с примером ниже...

```js
import Widget from './Widget.html';

const widget = new Widget({
	target: document.querySelector('.widget-container'),
	props: {
		answer: 42
	}
});
```

... за исключением того, что Svelte позаботится об удалении дочернего компонента при уничтожении родительского. А также Svelte осуществляет синхронизацию свойств в случае их изменений.

> Имена компонентов должны начинаться с заглавной буквы в соответствии с общепринятой практикой JavaScript об именовании конструкторов объектов. Кроме того, это позволяет быстро отличить компоненты от обычных элементов в вашем шаблоне.


### Свойства

Свойства - это средство передачи данных от родительского компонента к дочернему. В этом они схожи с атрибутами обычных HTML элементов. Как и в случае атрибутов, значения свойств могут содержать любое допустимое выражение JavaScript.

Часто имя свойства может совпадать со своим значением, и в этом случае мы можем использовать сокращенную запись:

```html
<!-- { repl: false } -->
<!-- эти строки эквивалентны -->
<Widget foo={foo}/>
<Widget {foo}/>
```
> Обратите внимание, что передача свойств является *односторонней* - чтобы получить данные из дочернего компонента в родительский, используйте [привязки](guide#bindings).


### Использование `<slot>`

Компонент может содержать элемент `<slot></slot>`, который позволяет родительскому компоненту внедрять содержимое:

```html
<!-- { title: 'Using <slot>' } -->
<script>
	import Box from './Box.html';
</script>

<Box>
	<h2>Привет!</h2>
	<p>Это элемент box. Тут может быть все что угодно.</p>
</Box>
```

```html
<!--{ filename: 'Box.html' }-->
<style>
	.box {
		border: 2px solid black;
		padding: 0.5em;
	}
</style>

<div class="box">
	<slot><!-- содержимое появится тут --></slot>
</div>
```

Элемент `<slot>` позволяет задать 'запасной контент', который отобразится, если для компонента не передано никакого содержимого:

```html
<!-- { title: 'Default slot content' } -->
<script>
	import Box from './Box.html';
</script>

<Box></Box>
```

```html
<!--{ filename: 'Box.html' }-->
<style>
	.box {
		border: 2px solid black;
		padding: 0.5em;
	}

	.fallback {
		color: #999;
	}
</style>

<div class="box">
	<slot>
		<p class="fallback">элемент box пуст!</p>
	</slot>
</div>
```

Кроме того, можно создавать *именованные* слоты. Любые элементы с указанным атрибутом `slot` заполнят собой соответствующие слоты:

```html
<!-- { title: 'Named slots' } -->
<script>
	import ContactCard from './ContactCard.html';
</script>

<ContactCard>
	<span slot="name">П.Иванов</span>
	<span slot="address">ул.Ленина, д.1</span>
</ContactCard>
```

```html
<!--{ filename: 'ContactCard.html' }-->
<style>
	.contact-card {
		border: 2px solid black;
		padding: 0.5em;
	}
</style>

<div class="contact-card">
	<h2><slot name="name"></slot></h2>
	<slot name="address">Адрес не указан</slot>
	<br>
	<slot name="email">E-Mail не указан</slot>
</div>
```