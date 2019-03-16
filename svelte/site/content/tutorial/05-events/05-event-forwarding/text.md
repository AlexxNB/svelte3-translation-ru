---
title: Проброс событий
---

В отличие от событий DOM, события компонентов не *всплывают* через иерархию компонентов. Если нужно словить событие из какого-либо глубоко вложенного компонента, промежуточные компоненты должны *пробросить* событие.

У нас есть такие же `App.svelte` и `Inner.svelte`, что и в [предыдщем уроке](tutorial/component-events), плюс к ним добавился компонент `Outer.svelte`, который содержит `<Inner/>`.

Один из способов передать событие через все компоненты — добавить `createEventDispatcher` в `Outer.svelte`, прослушать событие `message` и создать для него обработчик:

```html
<script>
	import Inner from './Inner.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function forward(event) {
		dispatch('message', event.detail);
	}
</script>

<Inner on:message={forward}/>
``` 

Многовато кода, но в Svelte есть сокращенный вариант на такой случай — директива события `on:message` без значения осущетвляет проброс всех событий `message` вышестоящим компонентам.

```html
<script>
	import Inner from './Inner.svelte';
</script>

<Inner on:message/>
```