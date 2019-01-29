---
title: Описание API
---

## TODO MAKE THIS CURRENT, INCLUDE svelte, svelte/store, ETC ETC

Как мы видели ранее, экземпляр компонента создается при помощи ключевого слова `new`:


```js
/* { filename: 'main.js' } */
import App from './App.html';

const component = new App({
	// `target` - единственный обязательный параметр. Это
    // DOM-элемент, к которому будет присоединен ваш компонент
	target: document.querySelector('main'),

	// `anchor` не обязателен.
	// Компонент вставляется непосредственно перед этим
	// элементом DOM, который должен быть потомком `target`
	anchor: document.querySelector('main #child'),

	// `props` не обязателен. Компонент также может иметь 
	// свойства по умолчанию - мы узнаем об этом позже.
	props: {
		questions: [
			'life',
			'the universe',
			'everything'
		],
		answer: 42
	}
});
```

Обычно вы взаимодействуете с компонентом, получая и устанавливая *свойства*:

```js
console.log(component.answer); // 42
component.answer = 420;
```

Каждый экземпляр компонента Svelte имеет три встроенных метода:


### component.$set(state)

Это обновляет состояние компонента новыми значениями свойств и вызывает обновление DOM. `state` должен быть простым старым объектом JavaScript (POJO). Любые свойства, *не* включенные в `state`, останутся такими, какими они были.

```js
component.set({
	questions: [
		'why is the sky blue?',
		'how do planes fly?',
		'where do babies come from?'
	],
	answer: 'ask your mother'
});
```


### component.get()

Возвращает текущее состояние компонента:

```js
const { questions, answer } = component.get();
console.log(answer); // 'ask your mother'
```

Этоn метод также передает значения [вычисляемых свойств](guide#computed-properties).

> Предыдущие версии Svelte позволяли вам указать имя свойства для получения определенного значения, но это было удалено в версии 2.

### component.on(eventName, callback)

Позволяет вам реагировать на *события*:

```js
const listener = component.on('thingHappened', event => {
	console.log(`A thing happened: ${event.thing}`);
});

// ниже по коду...
listener.cancel();
```

Каждый компонент имеет три встроенных события, соответствующих их [хукам жизненого цикла](guide#lifecycle-hooks):

```js
component.on('state', ({ changed, current, previous }) => {
	console.log('состояние изменилось', current);
});

component.on('update', ({ changed, current, previous }) => {
	console.log('DOM обновился после изменения состояния', current);
});

component.on('destroy', () => {
	console.log('этот компонент удаляется');
});
```


### component.fire(eventName, event)

Компаньон для `component.on(...)`:

```js
component.fire('thingHappened', {
	thing: 'this event was fired'
});
```

At first glance `component.on(...)` and `component.fire(...)` aren't particularly useful, but it'll become more so when we learn about [nested components](guide#nested-components) and [component events](guide#component-events).
На первый взгляд `component.on(...)` и `component.fire(...)` не приносят особенной пользы, но из польза станет очевидной, когда мы узнаем о [вложенных компонентах](guide#nested-components) и [событиях](guide#component-events).


### component.destroy()

Удаляет компонент из DOM и удаляет все созданные обработчики событий. Также вызывает событие `destroy`:

```js
component.on('destroy', () => {
	alert('goodbye!'); // так делать некрасиво
});

component.destroy();
```


### component.options

Параметры, используемые для создания экземпляра компонента, доступны в `component.options`.

```html
<!-- { title: 'component.options' } -->
Посмотри в консоль.

<script>
	export default {
		oncreate() {
			console.log(this.options);
		}
	};
</script>
```

Это свойство предоставляет доступ к стандартным параметрам, таким как `target` и `data`, но также может использоваться для доступа к любым другим пользовательским параметрам, которые вы можете задать при создании экземпляра компонента.


### component.root

Во [вложенных компонентах](guide#nested-components) каждый bp компонентов имеет свойство `root`. Это ссылка на экземпляр компонента самого верхнего уровня, то есть тот экземпляр, который был создан при помощи конструктора с помощью `new MyComponent({...})`. Обычно таковым является экземпляр компонента `<App>`.

> В более ранних версиях Svelte был метод `component.observe (...)`. Он был удален в версии 2 в пользу [хука жизненого цикла](guide#lifecycle-hooks) `onstate`, но он все еще доступен в библиотеке [svelte-extras](https://github.com/sveltejs/svelte-extras).
