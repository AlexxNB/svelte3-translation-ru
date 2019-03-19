---
title: <svelte:component>
---

Можно добавить в разметку полностью замененяемый компонент при помощи `<svelte:component>`. Вместо последовательности блоков `if`...

```html
{#if selected.color === 'red'}
	<RedThing/>
{:else if selected.color === 'green'}
	<GreenThing/>
{:else if selected.color === 'blue'}
	<BlueThing/>
{/if}
```

...у нас может быть всего лишь один динамический компонент:

```html
<svelte:component this={selected.component}/>
```

Значение `this` может быть либо конструктором компонента, либо `false` — и тогда вообще никакой компонент не будет отрисован.