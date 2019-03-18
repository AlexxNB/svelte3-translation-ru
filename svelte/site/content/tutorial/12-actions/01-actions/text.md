---
title: Директива use
---

Действия по сути являются функциями жизненного цикла на уровне элементов. Они полезны для таких вещей, как:

* взаимодействие со сторонними библиотеками
* 'ленивая' загрузка изображений
* всплывающие подсказки
* добавление пользовательских обработчиков событий

В этом приложении мы хотим сделать, чтобы оранжевый блок был закреплен на месте, но его можно было 'подёргать'. У него есть обработчики событий для событий `panstart`,`panmove` и `panend`, но это не события DOM. Мы должны отправить их сами. Для начала, импортируйте функцию `pannable`...

```js
import { pannable } from './pannable.js';
```

...и добавьте её к элементу в директиве `use`:

```html
<div class="box"
	use:pannable
	on:panstart={handlePanStart}
	on:panmove={handlePanMove}
	on:panend={handlePanEnd}
	style="transform: translate({$coords.x}px,{$coords.y}px)"
></div>
```

Откройте файл `pannable.js`. Как и функции перехода, функция действия получает элемент `node` и некоторые необязательные параметры и возвращает объект действия. Этот объект должен иметь функцию `destroy`, которая вызывается, когда элемент убирается из DOM.

Мы хотим запустить событие `panstart`, когда пользователь зажимает кнопку мыши на блоке, события `panmove` (со свойствамми `dx` и `dy`, показывающими изменение положения), и событие `panend`, когда кнопка мыши будет отпущена. Одна из возможных реализаций выглядит так:

```js
export function pannable(node) {
	let x;
	let y;

	function handleMousedown(event) {
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panstart', {
			detail: { x, y }
		}));

		window.addEventListener('mousemove', handleMousemove);
		window.addEventListener('mouseup', handleMouseup);
	}

	function handleMousemove(event) {
		const dx = event.clientX - x;
		const dy = event.clientY - y;
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panmove', {
			detail: { x, y, dx, dy }
		}));
	}

	function handleMouseup(event) {
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panend', {
			detail: { x, y }
		}));

		window.removeEventListener('mousemove', handleMousemove);
		window.removeEventListener('mouseup', handleMouseup);
	}

	node.addEventListener('mousedown', handleMousedown);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
		}
	};
}
```

Допишите функцию `pannable` и попробуйте переместить блок мышью.

> Эта реализация просто для демонстрациии — правильное приложение также обрабатывало бы тач-события.

