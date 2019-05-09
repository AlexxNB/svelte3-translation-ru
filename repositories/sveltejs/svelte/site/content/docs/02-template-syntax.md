---
title: Синтаксис шаблонов
---


### Теги

---

Тег в нижнем регистре, например `<div>` — это обычный HTML элемент. Тег, написанный с большой буквы, такой как `<Widget>`, обозначает *компонент*.

```html
<script>
	import Widget from './Widget.svelte';
</script>

<div>
	<Widget/>
</div>
```


### Атрибуты

---


По умолчанию атрибуты работают точно так же, как их HTML-аналоги.

```html
<div class="foo">
	<button disabled>ненажимаемая кнопка</button>
</div>
```

---

Как и в HTML, значения могут быть указаны без кавычек.

```html
<input type=checkbox>
```

---

Значения атрибута могут содержать выражения JavaScript.

```html
<a href="page/{p}">страница {p}</a>
```

---

Или они *целиком* могут быть выражениями JavaScript.

```html
<button disabled={!clickable}>...</button>
```

---

Выражение может содержать символы, которые могут вызвать проблемы при подсветке синтаксиса в обычном HTML, поэтому допускается использование значения в кавычках. Кавычки не влияют на то, как анализируется значение:

```html
<button disabled="{number !== 42}">...</button>
```

---

Когда имя и значение атрибута совпадают (`name = {name}`) — их можно заменить на `{name}`.

```html
<!-- Эти строки эквивалентны -->
<button disabled={disabled}>...</button>
<button {disabled}>...</button>
```

---

*Развёртка атрибутов* позволяет передать компоненту сразу несколько атрибутов или свойств.

Элемент или компонент может иметь сразу несколько таких развёрток вперемешку с обычными атрибутами.

```html
<Widget {...things}/>
```


### Текстовые выражения

```sv
{выражение}
```

---

Текст также может содержать JavaScript-выражения:

```html
<h1>Привет, {name}!</h1>
<p>{a} + {b} = {a + b}.</p>
```


### HTML выражения

```sv
{@html выражение}
```

---

В текстовых выражениях, символы вроде `<` и `>` экранируются. В HTML выражениях — нет.

>Svelte не очищает HTML код перед его обработкой! Если данные приходят из ненадёжного источника, необходимо их проверить. В противном случае, вы подвергаете пользователей возможным XSS-атакам.

```html
<div class="blog-post">
	<h1>{post.title}</h1>
	{@html post.content}
</div>
```


### Блоки If

```sv
{#if выражение}...{/if}
```
```sv
{#if выражение}...{:else if выражение}...{/if}
```
```sv
{#if выражение}...{:else}...{/if}
```

---

Для отображения содержимого при выполнении какого-либо условия, нужно добавить его в блок `if`.

```html
{#if answer === 42}
	<p>а какой был вопрос?</p>
{/if}
```

---

Дополнительные условия могут быть добавлены с помощью `{:else if выражение}`, а блок альтернативной разметки помещен после `{:else}`.

```html
{#if porridge.temperature > 35}
	<p>слишком горячая!</p>
{:else if 25 > porridge.temperature}
	<p>слишком холодная!</p>
{:else}
	<p>то, что надо!</p>
{/if}
```


### Блоки Each

```sv
{#each выражение as имя}...{/each}
```
```sv
{#each выражение as имя, индекс}...{/each}
```
```sv
{#each выражение as имя, индекс (ключ)}...{/each}
```
```sv
{#each выражение as имя}...{:else}...{/each}
```

---

Перебор списков значений может быть выполнен блоком `each`.

```html
<h1>Список покупок</h1>
<ul>
	{#each items as item}
		<li>{item.name} x {item.qty}</li>
	{/each}
</ul>
```

---

Блок `each` также может отдавать *индекс* элемента, аналогично второму аргументу callback-функции в `array.map(...)`:

```html
{#each items as item, i}
	<li>{i + 1}: {item.name} x {item.qty}</li>
{/each}
```

---

Если указать параметр *ключ*, который однозначно идентифицирует каждый элемент списка, то при изменении данных Svelte будет использовать его для изменения списка в нужном месте, а не просто удалять и добавлять элементы в конец массива. Ключом может быть любой объект, но рекомендуется использовать строки и числа, поскольку они позволяют сохранять уникальность при изменении самих объектов.

```html
{#each items as item, i (item.id)}
	<li>{i + 1}: {item.name} x {item.qty}</li>
{/each}
```

---

При желании можно использовать деструктуризацию в блоках `each`:

```html
{#each items as { id, name, qty }, i (id)}
	<li>{i + 1}: {name} x {qty}</li>
{/each}
```

---

Блок `each` тоже может иметь блок `{:else}`, который будет отрисовываться, если переданный список окажется пустым.

```html
{#each todos as todo}
	<p>{todo.text}</p>
{:else}
	<p>Нет задач!</p>
{/each}
```


### Блоки Await

```sv
{#await выражение}...{:then имя}...{:catch имя}...{/await}
```
```sv
{#await выражение}...{:then имя}...{/await}
```
```sv
{#await выражение then имя}...{/await}
```

---

Блоки `await` позволяют обрабатывать три возможных состояния промисов  — ожидание, выполнение или отклонение.
```html
{#await promise}
	<!-- промис в состоянии ожидания -->
	<p>Ждём пока промис выполнится...</p>
{:then value}
	<!-- промис выполнился -->
	<p>Значение равно {value}</p>
{:catch error}
	<!-- промис отклонён -->
	<p>Что-то пошло не так: {error.message}</p>
{/await}
```

---

Блок `catch` может быть опущен, если не нужно ничего отрисовывать, при отклонении промиса (или это вообще невозможно).

```html
{#await promise}
	<!-- промис в состоянии ожидания -->
	<p>Ждём пока промис выполнится...</p>
{:then value}
	<!-- промис выполнился -->
	<p>Значение равно {value}</p>
{/await}
```

---

Если состояние ожидания промиса не требует информирования, можно также опустить и первый блок.

```html
{#await promise then value}
	<p>Значение равно {value}</p>
{/await}
```


### События DOM

```sv
on:событие={обработчик}
```
```sv
on:событие|модификаторы={обработчик}
```

---

Используйте директиву `on:` для обработки событий в DOM.

```html
<script>
	let count = 0;

	function handleClick(event) {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	счётчик: {count}
</button>
```

---

Можно задать обработчики непосредственно на месте, без какой-либо потери производительности.  Как и у атрибутов, значения директив могут быть заключены в кавычки для совместимости с подсветкой синтаксиса.

```html
<button on:click="{() => count += 1}">
	счётчик: {count}
</button>
```

---

*Модификаторы* событий DOM добавляются после символа `|`.

Доступны следующие модификаторы:

* `preventDefault` — вызывает `event.preventDefault()` перед запуском обработчика. Полезно, в том числе для обработки форм на клиентской стороне.
* `stopPropagation` — вызывает `event.stopPropagation()`, предотвращает распространение события до следующих элементов.
* `passive` — улучшает производительность прокрутки при тач-событиях или при прокрутке колёсиком мышки (Svelte добавит этот модификатор автоматически там, где это безопасно).
* `capture` — вызывает событие в режиме *capture* вместо *bubbling*.
* `once` — удаляет обработчик события после первого вызова.


Модификаторы можно соединять в цепочку, например `on:click|once|capture={...}`.

```html
<form on:submit|preventDefault={handleSubmit}>
	<!-- стандартная обработка события `submit` предотвращена,
	     поэтому страница не перезагрузится -->
</form>
```

---

Если директива `on:` используется без значения, то компонент будет *пробрасывать* событие. Таким образом можно обрабатывать события из глубоко вложенных компонентов.

```html
<button on:click>
	Так событие клика по кнопке сможет выйти за пределы компонента
</button>
```


### События компонента

```sv
on:событие={обработчик}
```

---

Компоненты могут отправлять события, используя диспетчер событий [createEventDispatcher](docs#createEventDispatcher) или пробрасывая события DOM. Обработка событий компонента выглядит так же, как обработка событий DOM.

```html
<SomeComponent on:whatever={handler}/>
```

---

As with DOM events, if the `on:` directive is used without a value, the component will *forward* the event, meaning that a consumer of the component can listen for it.

Если директива `on:` используется без значения, то компонент будет *пробрасывать* событие выше, как и в аналогичном случае с событиями DOM. Событие станет доступно для прослушивания в родительском компоненте.

```html
<SomeComponent on:whatever/>
```


### Привязки к элементам

```sv
bind:свойство={переменная}
```
```sv
bind:group={переменная}
```
```sv
bind:this={DOM-элемент}
```

---

Данные обычно передаются от родительского элемента к потомкам. Директива `bind:` позволяет передавать данные в другую сторону, от дочернего элемента в родительский. Большинство привязок соотносятся с конкретными элементами.

Простейшие привязки просто передают значение свойства элемента, например, `input.value`.

```html
<input bind:value={name}>
<textarea bind:value={text}></textarea>

<input type="checkbox" bind:checked={yes}>
```

---

Если имя свойства и значения одинаковые, можно использовать сокращение.

```html
<!-- Эти строки эквивалентны -->
<input bind:value={value}>
<input bind:value>
```

---

Значения из числовых `input` элементов автоматически приводятся к нужному типу. В структуре DOM значение свойства `input.value` таких элементов будет являться строкой, но Svelte будет рассматривать его как число. Если значение `input` пустое или недействительное (в случае `type="number"`), оно будет равно `undefined`.

```html
<input type="number" bind:value={num}>
<input type="range" bind:value={num}>
```

#### Привязка к группе элементов

---

Элементы `input`, которые работают вместе, могут использовать привязку `bind:group`.

```html
<script>
	let tortilla = 'Plain';
	let fillings = [];
</script>

<!-- сгруппированные радиокнопки являются взаимоисключающими -->
<input type="radio" bind:group={tortilla} value="Plain">
<input type="radio" bind:group={tortilla} value="Whole wheat">
<input type="radio" bind:group={tortilla} value="Spinach">

<!-- сгруппированные чекбоксы образуют массив своих значений -->
<input type="checkbox" bind:group={fillings} value="Rice">
<input type="checkbox" bind:group={fillings} value="Beans">
<input type="checkbox" bind:group={fillings} value="Cheese">
<input type="checkbox" bind:group={fillings} value="Guac (extra)">
```

#### Привязка к значению `<select>`

---

Привязка значения `<select>` соответствует свойству `value` в выбранном `<option>`, которое может быть абсолютно любым значением, а не только строкой, как это обычно бывает в DOM.

```html
<select bind:value={selected}>
	<option value={a}>a</option>
	<option value={b}>b</option>
	<option value={c}>c</option>
</select>
```

---

Элемент `<select multiple>` ведет себя аналогично группе чекбоксов.


```html
<select multiple bind:value={fillings}>
	<option value="Rice">Rice</option>
	<option value="Beans">Beans</option>
	<option value="Cheese">Cheese</option>
	<option value="Guac (extra)">Guac (extra)</option>
</select>
```

---

Когда значение `<option>` соответствует его текстовому содержимому, атрибут может быть опущен.

```html
<select multiple bind:value={fillings}>
	<option>Rice</option>
	<option>Beans</option>
	<option>Cheese</option>
	<option>Guac (extra)</option>
</select>
```


#### Привязка к медиа-элементам

---

Медиа-элементы (`<audio>` и `<video>`) имеют свой собственный набор привязок — четыре *только для чтения* ...

* `duration` (только для чтения) — общая продолжительность, в секундах
* `buffered` (только для чтения) — буфер, массив объектов `{start, end}`
* `seekable` (только для чтения) — доступное для перемотки, то же самое
* `played` (только для чтения) — уже проиграно, то же самое

... и три двусторонние привязки:
* `currentTime` — текущая позиция проигрывания, в секундах
* `paused` — остановлено проигрывание или нет
* `volume` — громкость, значение между 0 и 1


```html
<video
	src={clip}
	bind:duration
	bind:buffered
	bind:seekable
	bind:played
	bind:currentTime
	bind:paused
	bind:volume
></video>
```

#### Привязка к блочным элементам

---

У блочных элементов есть 4 привязки, доступных только для чтения. Они рассчитываются с использованием метода, аналогичного [этому](http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/):

* `clientWidth`
* `clientHeight`
* `offsetWidth`
* `offsetHeight`

```html
<div
	bind:offsetWidth={width}
	bind:offsetHeight={height}
>
	<Chart {width} {height}/>
</div>
```

#### Привязка к элементу DOM

---

Для получения ссылки на сам элемент в DOM, используйте `bind:this`.

```html
<script>
	import { onMount } from 'svelte';

	let canvasElement;

	onMount(() => {
		const ctx = canvasElement.getContext('2d');
		drawStuff(ctx);
	});
</script>

<canvas bind:this={canvasElement}></canvas>
```


### Привязки компонентов

* `bind:свойство={переменная}`
* `bind:this={экземпляр_компонента}`

---

Аналогичным способом можно привязываться к свойствам компонентов.

```html
<Keypad bind:value={pin}/>
```

---

Компоненты также поддерживают привязку `bind:this`, позволяющую взаимодействовать с экземпляром компонента в коде.

> Обратите внимание, что мы можем сделать `{cart.empty}` вместо `{() => cart.empty()}`, так как методы компонента являются замыканиями. Вам не нужно беспокоиться о значении `this` при их вызове.

```html
<ShoppingCart bind:this={cart}/>

<button on:click={cart.empty}>
	Очистить корзину
</button>
```


### Классы

```sv
class:имя={значение}
```
```sv
class:имя
```

---

Директива `class:` обеспечивает простой способ управления классами элемента.

```html
<!-- Эти строки эквивалентны -->
<div class="{active ? 'active' : ''}">...</div>
<div class:active={active}>...</div>

<!-- Сокращение, при одинаковых имени и значении -->
<div class:active>...</div>

<!-- можно использовать сразу несколько переключателей классов -->
<div class:active class:inactive={!active} class:isAdmin>...</div>
```


### Действия

```sv
use:действие
```
```sv
use:действие={параметры}
```

```js
action = (node: HTMLElement, parameters: any) => {
	update?: (parameters: any) => void,
	destroy?: () => void
}
```

---

Действия — это функции, которые вызываются при создании элемента. Они могут возвращать объект с методом `destroy`, который вызывается, когда этот элемент удаляется из DOM.

```html
<script>
	function foo(node) {
		// при добавлении элемента в DOM
		// node — ссылка на элемент в DOM

		return {
			destroy() {
				// при удалении элемента из DOM
			}
		};
	}
</script>

<div use:foo></div>
```

---

Действие может иметь параметры. Если возвращаемый объект имеет метод `update`, он будет вызываться всякий раз, когда эти параметры изменяются, сразу же после изменения разметки.

> Не беспокойтесь о том, что мы объявляем функцию `foo` в каждом экземпляре компонента — Svelte выведет из контекста компонента любые функции, которые не зависят от его локального состояния.

```html
<script>
	export let bar;

	function foo(node, bar) {
		// при добавлении элемента в DOM
		// node — ссылка на элемент в DOM

		return {
			update(bar) {
				// при изменении значения параметра `bar`
			},

			destroy() {
				// при удалении элемента из DOM
			}
		};
	}
</script>

<div use:foo={bar}></div>
```


### Переходы

```sv
transition:имя
```
```sv
transition:имя={параметры}
```
```sv
transition:имя|local
```
```sv
transition:имя|local={параметры}
```
```sv
in:имя
```
```sv
in:имя={параметры}
```
```sv
in:имя|local
```
```sv
in:имя|local={параметры}
```
```sv
out:имя
```
```sv
out:имя={параметры}
```
```sv
out:имя|local
```
```sv
out:имя|local={параметры}
```

```js
transition = (node: HTMLElement, params: any) => {
	delay?: number,
	duration?: number,
	easing?: (t: number) => number,
	css?: (t: number, u: number) => string,
	tick?: (t: number, u: number) => void
}
```

---

Переход инициируется добавлением или удалением элемента из DOM в результате изменения состояния приложения. Переходы не запускаются при самом первом монтировании компонента, только при последующих обновлениях.

Элементы внутри *исчезающего* блока будут храниться в DOM до тех пор, пока не будут выполнены все запущенные переходы.

Директива `transition:` указывает на то, что переход является *обратимым*. Т.е. он может в любой момент начать проигрываться в обратную сторону.

```html
{#if visible}
	<div transition:fade>
		появляется и исчезает
	</div>
{/if}
```

---

Директивы `in:` и `out:` не являются *обратимыми*. При исчезновении элемента, если переход появления ещё не закончился, он будет проигрываться дальше, но уже вместе с переходом исчезновения. Если исчезновение элемента, было прервано, то переходы будут запущены заново.

```html
{#if visible}
	<div in:fly out:fade>
		влетает, исчезает
	</div>
{/if}
```

#### Параметры перехода

---

Как и действия, переходы могут иметь параметры.

(Двойные фигурные скобки `{{...}}` не являются особым синтаксисом; это просто литерал объекта внутри тега выражения)

```html
{#if visible}
	<div transition:fade="{{ duration: 2000 }}">
		Влетает, исчезает. По 2 секунды на каждый переход
	</div>
{/if}
```

#### Пользовательские переходы

---

Переходы могут использовать пользовательские функции. Если возвращённый объект имеет функцию `css`, Svelte создаст CSS-анимацию, которая воспроизводится на элементе.

Аргумент `t`, передаваемый в функцию `css`, представляет собой значение между `0` и `1` после применения функции плавности `easing`. Переходы *появления* выполняются от `0` до` 1`, переходы *исчезновения* выполняются от `1` до `0` — другими словами, `1` - это естественное состояние элемента, как если бы переход не применялся. Аргумент `u` равен `1 - t`.

Функция вызывается множество раз с разными аргументами `t` и `u` *до начала* перехода.

```html
<script>
	import { elasticOut } from 'svelte/easing';

	export let visible;

	function whoosh(node, params) {
		const existingTransform = getComputedStyle(node).transform.replace('none', '');

		return {
			delay: params.delay || 0,
			duration: params.duration || 400,
			easing: params.easing || elasticOut,
			css: (t, u) => `transform: ${existingTransform} scale(${t})`
		};
	}
</script>

{#if visible}
	<div in:whoosh>
		whooshes
	</div>
{/if}
```

---

Пользовательская функция перехода также может возвращать функцию `tick`, которая вызывается *во время* перехода с теми же аргументами` t` и `u`.

> Если возможно использовать `css` вместо` tick`, используйте — CSS-анимация может запускаться вне основного потока, предотвращая лаги на медленных устройствах.

```html
<script>
	export let visible = false;

	function typewriter(node, { speed = 50 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === 3
		);

		if (!valid) return {};

		const text = node.textContent;
		const duration = text.length * speed;

		return {
			duration,
			tick: (t, u) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

{#if visible}
	<p in:typewriter="{{ speed: 20 }}">
		Съешь ещё этих мягких французских булок, да выпей же чаю
	</p>
{/if}
```

Если переход возвращает функцию вместо объекта перехода, то она будет вызвана в следующей микрозадаче. Это позволяет координировать несколько переходов, что дает возможность запускать [перекрёстные переходы](tutorial/deferred-transitions).

#### События переходов

---

Элемент, который имеет переходы, в дополнение к стандартным событиям DOM может запускать ещё и такие события:

* `introstart`
* `introend`
* `outrostart`
* `outroend`

```html
{#if visible}
	<p
		transition:fly="{{ y: 200, duration: 2000 }}"
		on:introstart="{() => status = 'начало появления'}"
		on:outrostart="{() => status = 'начало исчезновения'}"
		on:introend="{() => status = 'конец появления'}"
		on:outroend="{() => status = 'конец исчезновения'}"
	>
		Прилетает и улетает
	</p>
{/if}
```

---

Локальные переходы воспроизводятся только когда создается или убирается конкретный блок, к которому они прикреплены, а *не* его родительские блоки.

```html
{#if x}
	{#if y}
		<p transition:fade>
			проигрывается когда изменяются 'x' или 'y'
		</p>

		<p transition:fade|local>
			проигрывается только когда изменяется 'y'
		</p>
	{/if}
{/if}
```


### Анимации

TODO I can't remember how any of this works


### Слоты

```sv
<slot><!-- содержимое по умолчанию --></slot>
```
```sv
<slot name="x"><!-- содержимое по умолчанию --></slot>
```
```sv
<slot свойство={значениие}></slot>
```

---

Как и любой HTML-элемент, компоненты могут иметь вложенные элементы.

Вложенное содержимое размещается в компоненте при помощи элемента `<slot>`, который также может содержать содержимое по умолчанию, которое отображается, если в компонент не было предано никакого содержимого.

```html
<!-- App.svelte -->
<Widget>
	<p>вложенный элемент</p>
</Widget>

<!-- Widget.svelte -->
<div>
	<slot>
		это отобразится, если использовать просто '<Widget/>'
	</slot>
</div>
```

---

Именованные слоты позволяют указать конкретные области. Они тоже могут иметь запасное содержимое по умолчанию.

```html
<!-- App.svelte -->
<Widget>
	<h1 slot="header">Привет</h1>
	<p slot="footer">Все права (c) 2019 Svelte Industries</p>
</Widget>

<!-- Widget.svelte -->
<div>
	<slot name="header">Заголовок не предоставлен</slot>
	<p>Любое содержимое между заголовком и футером</p>
	<slot name="footer"></slot>
</div>
```

---


Слоты могут быть отрисованы ноль или более раз и могут передавать значения *обратно* родителю через свои свойства. Родитель может получить эти значения от слота при помощи директивы `let:`.

Обычные правила сокращения работают и тут — `let:item` то же самое, что и `let:item={item}`, а `<slot {item}>` эквивалентно `<slot item={item}>`.

```html
<!-- App.svelte -->
<FancyList {items} let:item={item}>
	<div>{item.text}</div>
</FancyList>

<!-- FancyList.svelte -->
<ul>
	{#each items as item}
		<li class="fancy">
			<slot item={item}></slot>
		</li>
	{/each}
</ul>
```

---

Именованные слоты также могут предоставлять значения. Директива `let:` указывается на элементе с атрибутом `slot`.

```html
<!-- App.svelte -->
<FancyList {items}>
	<div slot="item" let:item={item}>{item.text}</div>
	<p slot="footer">Все права (c) 2019 Svelte Industries</p>
</FancyList>

<!-- FancyList.svelte -->
<ul>
	{#each items as item}
		<li class="fancy">
			<slot name="item" item={item}></slot>
		</li>
	{/each}
</ul>

<slot name="footer"></slot>
```


### &lt;svelte:self&gt;

---

Элемент `<svelte: self>` позволяет компоненту включать самого себя себя рекурсивно.

Он не может отображаться на верхнем уровне разметки, а должен быть помещён внутри блока `if` или `each`, чтобы избежать бесконечного цикла.

```html
<script>
	export let count;
</script>

{#if count > 0}
	<p>Отсчёт... {count}</p>
	<svelte:self count="{count - 1}"/>
{:else}
	<p>Поехали!</p>
{/if}
```

### &lt;svelte:component&gt;

```sv
<svelte:component this={выражение}>
```

---

Элемент `<svelte:component>` отрисовывает компонент динамически, используя конструктор компонента, переданный в свойстве`this`. Когда значение свойства изменяется, компонент уничтожается и создается заново.

Если выражение в свойстве `this` ложное, компонент не отрисовывается.

```html
<svelte:component this={currentSelection.component} foo={bar}/>
```


### &lt;svelte:window&gt;

```sv
<svelte:window on:событие={обработчик}/>
```
```sv
<svelte:window bind:свойство={значение}/>
```

---

Элемент `<svelte:window>` позволяет добавлять обработчики событий к объекту `window`, не беспокоясь об их удалении при уничтожении компонента или проверять существование `window` при рендеринге на стороне сервера.

```html
<script>
	function handleKeydown(event) {
		alert(`нажата клавиша ${event.key}`);
	}
</script>

<svelte:window on:keydown={handleKeydown}/>
```

---

Также можно сделать привязку к следующим свойствам:

* `innerWidth`
* `innerHeight`
* `outerWidth`
* `outerHeight`
* `scrollX`
* `scrollY`
* `online` — сокращение для window.navigator.onLine

Все свойства, кроме `scrollX` и `scrollY` доступны только для чтения.

```html
<svelte:window bind:scrollY={y}/>
```


### &lt;svelte:body&gt;

```sv
<svelte:body on:событие={обработчик}/>
```

---

Как и в случае с `<svelte:window>`, этот элемент позволяет добавлять обработчики событий к `document.body`, например к `mouseenter` и` mouseleave`, которые не запускаются в `window`.

```html
<svelte:body
	on:mouseenter={handleMouseenter}
	on:mouseleave={handleMouseleave}
/>
```


### &lt;svelte:head&gt;

```sv
<svelte:head>
```

---

Этот элемент позволяет вставлять элементы в `document.head`. При рендеринге на стороне сервера содержимое `head` предоставляется отдельно от основного содержимого `html`.

```html
<svelte:head>
	<link rel="stylesheet" href="tutorial/dark-theme.css">
</svelte:head>
```


### &lt;svelte:options&gt;

```sv
<svelte:options параметр={значение}>
```

---

Элемент `<svelte:options>` позволяет установить определенные параметры для компилятора для каждого отдельного компонента. Подробнее о параметрах компилятора можно узнать в разделе про функцию [compile](docs#svelte_compile). Параметры, которые можно установить:

* `immutable={true}` — установите, если вы нигде не используете изменяемые данные — тогда компилятор сможет выполнять более простые проверки равенства объектов для определения их изменения
* `immutable={false}` — по умолчанию. Svelte будет проверять изменение объектов обычным способом
* `accessors={true}` — добавляет сеттеры и геттеры для свойств компонента
* `accessors={false}` — по умолчанию, аксессоры не добавляются
* `namespace="..."` — пространство имен, где компонент будет использован (обычно нужно "svg")
* `tag="..."` — имя, которое используется при компиляции компонента в пользовательский элемент


```html
<svelte:options tag="my-custom-element"/>
```
