---
title: <svelte:fragment>
---

Элемент `<svelte:fragment>` позволяет размещать контент в именованных слотах не оборачивая его в дополнительный элемент DOM. Это сохраняет структуру макета вашего документа.

В этом примере обратите внимание, как мы применили макет `flex` с отступом в `1em` к элементу с классом `.box`.

```sv
<!-- Box.svelte -->
<style>
    .box {		
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>

<div class="box">
    <slot name="header">Заголовок не задан</slot>
        <p>Любое содержимое между заголовком и футером</p>
    <slot name="footer"></slot>
</div>
```

Однако содержимое нижнего колонтитула не разнесено в соответствии с этим правилом, потому что при его переносе в div создается новый поток макета.

Мы можем решить эту проблему, заменив `<div slot="footer">` в компоненте `App` на `<svelte:fragment>`:

```sv
<svelte:fragment slot="footer">
    <p>Все права защищены.</p>
    <p>Копирайт (c) 2019 Svelte Industries</p>
</svelte:fragment>
```