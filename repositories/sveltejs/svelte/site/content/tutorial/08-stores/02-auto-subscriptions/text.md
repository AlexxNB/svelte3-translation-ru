---
title: Автоподписки
---

Приложение из предыдущего урока работает, но есть небольшая ошибка — функция `unsubscribe`, которая *отписывает* нас от слежки за хранилищем, никогда не вызывается. Если компонент будет постоянно создаваться и уничтожаться, это приведет к *утечке памяти*.

Можно использовать [функцию жизненного цикла](tutorial/ondestroy) `onDestroy`:

```html
<script>
	import { onDestroy } from 'svelte';
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let count_value;

	const unsubscribe = count.subscribe(value => {
		count_value = value;
	});

	onDestroy(unsubscribe);
</script>

<h1>Счётчик равен {count_value}</h1>
```

Выглядит слегка перегружено, особенно если в компоненте есть подписки сразу на несколько хранилищ. К счастью, у Svelte есть хитрость — можно сразу получить значение из хранилища, используя префикс `$` перед именем этого хранилища:

```html
<script>
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';
</script>

<h1>Счётчик равен {$count}</h1>
```

> Автоподписка работает только с переменными хранилищ, которые были объявлены (или импортированы) в верхнем уровне кода компонента.

При этом `$count` можно использовать не только внутри разметки, но и в любом месте внутри блока `<script>`, например, в обработчиках событий или реактивных объявлениях.

> Предполагается, что любое имя, начинающееся с `$`, ссылается на значение хранилища. Это зарезервированный символ — Svelte не позволит вам объявлять переменные с префиксом `$`.