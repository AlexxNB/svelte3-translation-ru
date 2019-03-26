---
title: Утилиты
---

### Компонент Template

Svelte-компонент `<Template>` позволяет определить разметку, которая будет повторно использоваться, в качестве шаблона. На данный момент он используется для отрисовки пунктов в компоненте `<listView>`.

#### Простое использование

```html
<page>
  <listView items="{items}">
    <Template let:item={i}>
      <label text="{i}" />
    </Template>
  </listView>
</page>
<script>
  import { Template } from 'svelte-native/components'
  let items = ['one', 'two', 'three']
</script>
```

> **ПРИМЕЧАНИЕ** Элемент `<Template>` пишется с заглавной буквы `T` и импортируется из` svelte-native/components` потому, что это компонент Svelte, а не элемент NativeScript.

#### Расширенное использование

Вы можете использовать `Template` для реализации пользовательских элементов NativeScript, для которых требуется шаблон или несколько шаблонов.

Когда `Template` рендерится в Svelte, на выходе получается специальный элемент DOM с именем `template`, у которого есть атрибут `component`. Реализации элементов NativeScript, такие как `listView`, ищут внутри себя элементы `template` и используют компонент для создания и отображения содержимого шаблона.

Любые дополнительные свойства, добавленные в компонент `Template`, передаются дальше и добавляются в DOM элемент `template`.

Для конкретного примера этого шаблона см. [исходник элемента listView](https://github.com/halfnelson/svelte-native/blob/master/src/dom/native/ListViewElement.ts#L50).

### Элемент свойства

Некоторые элементы управления NativeScript имеют свойства, значениями которых должны являться представления NativeScript. Чтобы иметь возможность указывать представления непосредственно в разметке, Svelte Native вводит понятие *элемент свойства*. Этот элемент работает так же, как аналогичное свойство из основной документации NativeScript, т.е. присваивает указанному свойству родительского представления значение первого дочернего элемента внутри этого элемента. Имя тега - это имя родительского элемента, за которым через точку следует имя нужного свойства. Например, `<page.actionbar>` установит свойство `actionbar` родительского элемента `page`.

#### Пример

Компонент `<radSideDrawer>` является частью [Progress NativeScript UI](https://docs.nativescript.org/ui/professional-ui-components/SideDrawer/getting-started).

Компонент `<radSideDrawer>` требует, чтобы свойствам `drawerContent` и `mainContent` были присвоены соответствующие экземпляры представлений `View`. Используя *элемент свойства*, вы можете сделать это с помощью всего нескольких строк кода:

```html
<radSideDrawer>
  <radSideDrawer.drawerContent>
    <stackLayout />
  </radSideDrawer.drawerContent>
  <radSideDrawer.mainContent>
    <stackLayout />
  </radSideDrawer.mainContent>
</radSideDrawer>
```

Без элементов свойств вам нужно пройти утомительный и подверженный ошибкам путь:

```html
<radSideDrawer bind:this="{drawer}">
  <stackLayout bind:this="{drawerContent}" />
  <stackLayout bind:this="{mainContent}" />
</radSideDrawer>
```

```js
  import { onMount } from 'svelte'

  let drawer
  let drawerContent
  let mainContent

  onMount(() => {
    drawer.nativeView.mainContent = mainContent.nativeView
    drawer.nativeView.drawerContent = drawerContent.nativeView
  })
```