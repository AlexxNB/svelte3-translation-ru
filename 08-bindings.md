---
title: Привязки
---


### Привязки

Как мы уже узнали, данные могут передаваться элементам и компонентам при помощи атрибутов и [свойств](guide#props). Но порой, нам нужно получить данные *обратно*. Для этого мы будем использовать привязки.


#### Привязки компонентов

Привязки компонентов синхронизируют значения между родителем и дочерним компонентом:

```html
<!-- { repl: false } -->
<Widget bind:childValue=parentValue/>
```

Когда `childValue` изменится в дочернем компоненте, `parentValue` будет обновлен в родительском. И наоборот.

Если имена значений одинаковые, можно сократить запись:

```html
<!-- { repl: false } -->
<Widget bind:value/>
```

> Используйте привязки компонентов разумно. Они могут сэкономить вам много лишнего, но при этом затруднят понимание потоков данных в вашем приложении.


#### Привязки элементов

Привязки элементов позволяют легко реагировать на взаимодействиие с пользователем:

```html
<!-- { title: 'Element bindings' } -->
<h1>Привет {name}!</h1>
<input bind:value={name}>
```

```json
/* { hidden: true } */
{
	name: 'world'
}
```

Некоторые привязки *односторонние*, т.е. значения доступны только для чтения. Но большинство из них *двусторонние* -изменение данных из программным приведет к обновлению DOM. Доступны следующие привязки:

| Имя                                                            | Применяется к                                   | Тип                 |
|-----------------------------------------------------------------|----------------------------------------------|----------------------|
| `value`                                                         | `<input>` `<textarea>` `<select>`            | <span>Двусторонняя</span> |
| `checked` `indeterminate`                                       | `<input type=checkbox>`                      | <span>Двусторонняя</span> |
| `group` (см.примечание)                                              | `<input type=checkbox>` `<input type=radio>` | <span>Двусторонняя</span> |
| `currentTime` `paused` `played` `volume`                        | `<audio>` `<video>`                          | <span>Двусторонняя</span> |
| `buffered` `duration` `seekable`                                | `<audio>` `<video>`                          | <span>Односторонняя</span> |
| `offsetWidth` `offsetHeight` `clientWidth` `clientHeight`       | Все элементы типа block                | <span>Односторонняя</span> |
| `scrollX` `scrollY`                                             | `<svelte:window>`                            | <span>Двусторонняя</span> |
| `online` `innerWidth` `innerHeight` `outerWidth` `outerHeight`  | `<svelte:window>`                            | <span>Односторонняя</span> |

> Привязка 'group' позволяет узнать текущее значение [группы радиокнопок](repl?demo=binding-input-radio) или все выбранные значения в [наборе чекбоксов](repl?demo=binding-input-checkbox-group).

Вот полный пример использования двухсторонних привязок с формой:

```html
<!-- { title: 'Form bindings' } -->
<form on:submit="handleSubmit(event)">
	<input bind:value=name type=text>
	<button type=submit>Скажи привет</button>
</form>

<script>
	export default {
		methods: {
			handleSubmit(event) {
				// предотвращаем перезагрузку страницы
				event.preventDefault();

				const { name } = this.get();
				alert(`Привет ${name}!`);
			}
		}
	};
</script>
```

```json
/* { hidden: true } */
{
	name: "world"
}
```

> 'двусторонние' привязки позволяют вам обновлять значение во вложенном свойстве, как показано в [этом примере с чекбоксом](repl?demo=binding-input-checkbox)..


### bind:this

Для всех элементов и компонентов существует специальная привязка - `this`. Она позволяет передать ссылку на текущий узел DOM или экземпляр компонента, чтобы вы смогли взаимодействовать с ним в программе:

```html
<!-- { title: 'Refs' } -->
<canvas bind:this={canvas} width={200} height={200}></canvas>

<script>
	import { onMount } from 'svelte';
	import createRenderer from './createRenderer.js';

	let canvas;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		const renderer = createRenderer(canvas, ctx);

		// перестать прерисовывать canvas когда
		// компонент будет убран
		return renderer.stop;
	});
</script>
```

```js
/* { filename: 'createRenderer.js', hidden: true } */
export default function createRenderer(canvas, ctx) {
	let running = true;
	loop();

	return {
		stop: () => {
			running = false;
		}
	};

	function loop() {
		if (!running) return;
		requestAnimationFrame(loop);

		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

		for (let p = 0; p < imageData.data.length; p += 4) {
			const i = p / 4;
			const x = i % canvas.width;
			const y = i / canvas.height >>> 0;

			const t = window.performance.now();

			const r = 64 + (128 * x / canvas.width) + (64 * Math.sin(t / 1000));
			const g = 64 + (128 * y / canvas.height) + (64 * Math.cos(t / 1000));
			const b = 128;

			imageData.data[p + 0] = r;
			imageData.data[p + 1] = g;
			imageData.data[p + 2] = b;
			imageData.data[p + 3] = 255;
		}

		ctx.putImageData(imageData, 0, 0);
	}
}
```
