---
title: События компонентов
---

Компоненты также могут отправлять события. Для этого они должны создать *диспетчер событий*. Отредактируйте файл `Inner.svelte`:

```html
<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'Привет!'
		});
	}
</script>
```

> `createEventDispatcher` должен вызываться при инициализации экземпляра компонента - вы не можете сделать это позже, например, внутри функции обратного вызова в `setTimeout`. Он привязвает `dispatch` к конкретному экземпляру компонента.