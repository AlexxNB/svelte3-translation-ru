---
title: События
---

В большинстве приложений вам нужно будет реагировать на действия пользователя. В Svelte это делается с помощью директивы `on:[event]`.

### События элемента

Использование на элементе директивы `on:click={handler}` эквивалентно вызову `element.addEventListener('click', handler)`. Когда элемент удаляется, Svelte автоматически вызывает `removeEventListener`.

```html
<!-- { title: 'Inline event handlers' } -->
<p>Счетчик: {count}</p>
<button on:click="{() => count += 1}">+1</button>
```

```json
/* { hidden: true } */
{
	count: 0
}
```

Для более сложных действий вы, вероятно, захотите объявить обработчик события в блоке `<script>`:

```html
<!-- { title: 'Event handlers' } -->
<script>
	let count = 0;

	function incrementOrDecrement(event) {
		const d = event.shiftKey
			? -1
			: +1;

		count += d;
	}
</script>

<p>Счетчик: {count}</p>
<button on:click={incrementOrDecrement}>обновить</button>
```

```json
/* { hidden: true } */
{
	count: 0
}
```


### Модификаторы обработчиков событий

Вы всегда можете вызвать методы вроде `event.stopPropagation` напрямую...

```html
<!-- { repl: false } -->
<div on:click="{e => e.stopPropagation()}">...</div>
```

... но это становится неудобным, когда нужно совместить их с какими-то другими действиями:

```html
<!-- { repl: false } -->
<script>
	let foo = false;

	function toggleFoo(event) {
		event.stopPropagation();
		event.preventDefault();
		foo = !foo;
	}
</script>

<div on:click={toggleFoo}>...</div>
```
Для таких случаев в Svelte можно использовать *модификаторы событий*:

- [`preventDefault`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [`stopPropagation`](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
- [`passive`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters) — улучшает производительность прокрутки при тач-событиях или при скролле колесиком мышки (Svelte добавит этот модификатор автоматически там, где это безопасно)
- [`once`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters) — удаляет слушателя события после первого вызова
- [`capture`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameter)

> `passive` и `once` не имплементированы в режиме `legacy`

Для примера выше можно использовать сразу несколько модификаторов и при этом отпадет необходимость использовать отдельный обработчик событий:

```html
<!-- { repl: false } -->
<div on:click|stopPropagation|preventDefault="{() => foo = !foo}">...</div>
```


### События компонентов

События являются лучшим способом для общения [вложенных компонентов](guide#nested-components) со своими родителями. Давайте вернемся к нашему более раннему примеру и превратим его в компонент `<CategoryChooser>`:

```html
<!-- { filename: 'CategoryChooser.html', repl: false } -->
<p>Выбрать категорию:</p>

{#each categories as category}
	<button on:click="fire('select', { category })">Выбрать {category}</button>
{/each}

<script>
	export default {
		data() {
			return {
				categories: [
					'звери',
					'овощи',
					'камни'
				]
			}
		}
	};
</script>
```

Когда пользователь нажимает одну из кнопок, компонент запускает событие `select`, где объект `event` имеет свойство `category` с соответствующим значением. Любой родительский компонент, который содержит в себе компонент `<CategoryChooser>`, может прослушивать его события следующим образом:

```html
<!--{ title: 'Component events' }-->
<CategoryChooser on:select="playTwentyQuestions(event.category)"/>

<script>
	import CategoryChooser from './CategoryChooser.html';

	export default {
		components: {
			CategoryChooser
		},

		methods: {
			playTwentyQuestions(category) {
				alert(`Отлично! Вы выбрали ${category}`);
			}
		}
	};
</script>
```

```html
<!--{ filename: 'CategoryChooser.html', hidden: true }-->
<p>Выбрать категорию:</p>

{#each categories as category}
	<button on:click="fire('select', { category })">Выбрать {category}</button>
{/each}

<script>
	export default {
		data() {
			return {
				categories: [
					'звери',
					'овощи',
					'камни'
				]
			}
		}
	};
</script>
```
Точно так же, как в обработчике события элемента `this` ссылается на сам элемент, в обработчике события компонента `this` ссылается на компонент, инициирующий данное событие.

Можно использовать сокращеную запись для прослушивания события в компоненте и перезапуска в нем этого же события без изменений.

```html
<!-- { repl: false } -->
<!-- эти строки эквивалентны -->
<Widget on:foo="fire('foo', event)"/>
<Widget on:foo/>
```

Поскольку события компонентов не могут распространяться по вложенным компонентам так же, как события в DOM, то такой способ можно использовать для передачи событий через промежуточные компоненты к родительским. Такая же сокращенная запись применяется и к событиям обычных элементов (`on:click` эквивалентно `on:click="fire('click', event)"`).
