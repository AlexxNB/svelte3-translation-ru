---
title: onDestroy
---

Для выполнения действий при уничтожении компонента используйте `onDestroy`.

Например, мы можем запустить функцию `setInterval`, когда наш компонент
инициализируется, и затем вызвать `clearInterval`, когда таймер больше не нужен.
Это помогает бороться с утечками памяти.

```html
<script>
	import { onDestroy } from 'svelte';

	let counter = 0;
 	const interval = setInterval(() => counter += 1, 1000);

	onDestroy(() => clearInterval(interval));
</script>
```

Хоть функции жизненного цикла нужно вызывать только во время инициализации
компонента, но не имеет значения, _откуда_ они будут вызваны. Поэтому, при
желании, мы можем вынести логику таймера в отдельную функцию в файле `utils.js`
...

```js
import { onDestroy } from "svelte";

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

	let counter = 0;
 	onInterval(() => counter += 1, 1000);
</script>
```

Откройте и закройте таймер несколько раз и убедитесь, что счетчик продолжает
тикать, а загрузка процессора увеличивается. Это связано с утечкой памяти, так
как предыдущие таймеры не удаляются. Не забудьте обновить страницу перед
решением примера.
