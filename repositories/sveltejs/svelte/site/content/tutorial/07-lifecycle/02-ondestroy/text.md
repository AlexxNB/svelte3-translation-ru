---
title: onDestroy
---

Для выполнения действий при уничтожении компонента используйте `onDestroy`.

Например, мы можем запустить функцию `setInterval`, когда наш компонент инициализируется, и затем вызвать `clearInterval`, когда таймер больше не нужен. Это помогает бороться с утечками памяти.

```html
<script>
	import { onDestroy } from 'svelte';

	let seconds = 0;
	const interval = setInterval(() => seconds += 1, 1000);

	onDestroy(() => clearInterval(interval));
</script>
```

Хоть функции жизненного цикла нужно вызывать только во время инициализации компонента, но не имеет значения, *откуда* они будут вызваны. Поэтому, при желании, мы можем вынести логику таймера в отдельную функцию в файле `utils.js` ...

```js
import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}
```

...и импортировать её в наш компонент:

```html
<script>
	import { onInterval } from './utils.js';

	let seconds = 0;
	onInterval(() => seconds += 1, 1000);
</script>
```
