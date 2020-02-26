---
title: Блок each
---

Если вам нужно перебрать какие-либо списки данных, используйте блок `each`:

```html
<ul>
	{#each cats as cat}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
			{cat.name}
		</a></li>
	{/each}
</ul>
```

> Аргумент (в данном случае `cats`) может быть любым массивом или ему подобным объектом, у которого есть свойство `length`. Также можно просто пройтись по списку элементов `each [элемент1, элемент2, ...]`.

Вы можете получить текущий *индекс* элемента в качестве второго аргумента:

```html
{#each cats as cat, i}
	<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
		{i + 1}: {cat.name}
	</a></li>
{/each}
```

По желанию, можно применить *деструктуризацию* — `each cats as { id, name }` — и заменить `cat.id` и `cat.name` просто на `id` и `name`.
