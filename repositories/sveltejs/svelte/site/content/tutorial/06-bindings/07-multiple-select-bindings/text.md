---
title: Списки с множественным выбором
---

Список может иметь атрибут `multiple`, в этом случае он будет возвращать выбранные значения в виде массива.

Вернёмся к нашему [примеру с мороженым](tutorial/group-inputs), тут мы можем заменить чекбоксы на элемент `<select multiple>`:

```html
<h2>Вкусы</h2>

<select multiple bind:value={flavours}>
	{#each menu as flavour}
		<option value={flavour}>
			{flavour}
		</option>
	{/each}
</select>
```
> Нажмите и удерживайте кнопку `control` (`command` в MacOS) для выбора нескольких вариантов.