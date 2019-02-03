---
title: Классы
---

Как и любой другой атрибут, `class` можно назначить с использованием обычного JavaScript выражения. Предположим, у нас есть класс `active`, который мы хотим применить к элементу, когда `isActive` имеет значение 'true':

```html
<!-- { title: 'Dynamic classes using ternaries' } -->
<script>
	let isActive = false;
</script>

<style>
	.active {
		color: red;
	}
</style>

<h1 class="{isActive ? 'active' : ''}">красный, если активировано</h1>

<label>
	<input type=checkbox bind:checked={isActive}> активировать
</label>
```

Но этот пример довольно многословен, поэтому существует директива `class:`, которая предлагает более простой способ сделать то же самое:

```html
<!-- { title: 'Dynamic classes using directives' } -->
<script>
	let isActive = false;
</script>

<style>
	.active {
		color: red;
	}
</style>

-<h1 class="{isActive ? 'active' : ''}">красный, если активировано</h1>
+<h1 class:active={isActive}>красный, если активировано</h1>

<label>
	<input type=checkbox bind:checked={isActive}> активировать
</label>
```

Как и в любой директиве, здесь можно использовать любое JavaScript выражение. Если имя переменной соответствует имени класса, вы можете использовать сокращение:

```html
<!-- { title: 'Dynamic classes using directives' } -->
<script>
-	let isActive = false;
+	let active = false;
</script>

<style>
	.active {
		color: red;
	}
</style>

-<h1 class:active={isActive}>красный, если активировано</h1>
+<h1 class:active>красный, если активировано</h1>

<label>
-	<input type=checkbox bind:checked={isActive}> активировать
+	<input type=checkbox bind:checked={active}> активировать
</label>
```