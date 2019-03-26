---
title: Навигация/Маршруты
---

Так как Svelte Native — это тонкая прослойка между Svelte и NativeScript. Лучше всего, если вы ознакомитесь с основной концепцией [маршрутизации в NativeScript](https://docs.nativescript.org/core-concepts/navigation)

Маршрутизация в Svelte Native устроена очень похожим образом. Модуль `svelte-native` предоставляет следующие функции:

### navigate

Укажите страницу назначения в обязательной опции `page`, которая принимает экземпляр компонента `Svelte`.

```html
<!--{ filename: 'App.svelte' }-->
<page>
    <actionBar title="Master" />
    <stackLayout>
        <button text="To Details directly" on:tap="{ () => navigate({ page: Detail }) }" />
    </stackLayout>
</page>

<script>
    import Detail from './Detail.svelte'
    import { navigate } from 'svelte-native'
</script>
```

#### Передача свойств в компонент

Вы можете передать свойства, требуемые компонентом Svelte, используя опцию `props`.

```html
<!--{ filename: 'App.svelte' }-->
<page>
    <actionBar title="Master" />
    <stackLayout>
        <button text="To Details directly" on:tap="{showDetailWithProps}" />
    </stackLayout>
</page>

<script>
    import Detail from './Detail.svelte'
    import { navigate } from 'svelte-native'

    function showDetailWithProps() {
        navigate({ 
            page: Detail,
            props: { message: "Hello from master" }
        });
    }
</script>
```

#### Указание фрейма

Каждый элемент `<frame>` имеет свой собственный стек навигации. Если вы используете несколько фреймов, вы можете явно указать, в каком фрейме должна происходить навигация. Например, такая необходимость может возникнуть в ситуации, когда есть приложение с кнопкой на боковой панели, которая сменяет страницу в основной области. Это можно сделать, добавив опцию `frame`:

```js
navigate({ 
    page: Detail,
    frame: '<id, ссылка или экземпляр>'
});
```

Значениями параметра `frame` могут быть:
* идентификатор `id` компонента `<frame>` (например: `<frame id="main-frame">`)
* ссылка на элемент `<frame>` (например: `<frame bind:this="{mainFrame}">`)
* экземпляр объекта NativeScript `Frame`.

Если фрейм не указан, навигация будет выполняться в [самом верхнем](https://docs.nativescript.org/api-reference/modules/_ui_frame_#topmost) фрейме.

#### Другие опции

Для получения дополнительной информации об опциях, которые вы можете передать, см. раздел [NavigationEntry](https://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry).


### goBack

Для перехода на предыдущую страницу, используйте функцию `goBack`.

```html
<!--{filename: 'App.svelte'}-->
<page>
  <actionBar title="Detail"/>
  <stackLayout>
    <button text="Back to Master" on:tap="{goBack}" />
  </stackLayout>
</page>

<script>
import { goBack } from 'svelte-native'
</script>
```

Чтобы переход назад произошел в другом фрейме, передайте ссылку или идентификатор кадра в опцию `frame`.

```js
  goBack({frame: 'sub-nav-frame'})
```

`goBack` по умолчанию возвращается на предыдущую страницу, но вы можете вернуться сразу на несколько страниц назад, если укажите в опциях ссылку на страницу `page`.

```js
  goBack({to: options_page_ref})
```

### showModal

Для отображения страницы или компонента в модальном окне используйте функцию `showModal`. Укажите страницу, которую нужно открыть опцией `page`, а свойства передайте в `props` (как в [navigate](#navigate)).

```html
<!--{ filename: 'App.svelte'} -->
<page>
   <actionBar title="Master" />
   <stackLayout>
     <button text="Open Modal" on:tap="{launchModal}" />
   </stackLayout>
</page>


<script>
    import DetailPage from './DetailPage.svelte'
    import { showModal } from 'svelte-native'
    function launchModal() {
        showModal({ page: DetailPage, props: { msg: 'hi' } })
    }
</script>
```

```html
<!--{filename: "DetailPage.svelte" }-->
<frame id="detail-page-frame">
  <page>
    
  </page>
</frame>
```

Другие доступные параметры напрямую соответствуют параметрам в [ShowModalOptions](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_base_.showmodaloptions) и передаются в базовый метод NativeScript showModal.

Функция `showModal` возвращает промис, который выполняется, когда что-либо возвращается функцией `closeModal`.

> **ПРИМИЧАНИЕ** Модальное окно открывается в новом контексте навигации. Если вам требуется совершить навигацию в приложении из модального окна или показать панель действий, вам нужно будет обернуть целевую страницу в элемент `frame`. Если вам не нужна какая-либо навигация, то в этом нет необходимости.


### closeModal

Функция `closeModal` закрывает текущее модальное окно и опционально возвращает значение туда, откуда была вызвана функция `showModal` в виде результата промиса.

```html
<!--{ filename: 'App.svelte'} -->
<page>
   <actionBar title="Master" />
   <stackLayout>
     <button text="Open Modal" on:tap="{launchModal}" />
     <label text="{modalResult}" />
   </stackLayout>
</page>
<script>
    import DetailPage from './DetailPage.svelte'
    import { showModal } from 'svelte-native'

    let modalResult = "Waiting for modal"
    async function launchModal() {
        let result = await showModal({ page: DetailPage, props: { msg: 'hi' } })
        modalResult = `got result: ${result}`
    }
</script>
```

```html
<!--{filename: "DetailPage.svelte" }-->
<frame id="detail-page-frame">
  <page>
    <button text="Close me" on:tap="{ () => closeModal('hi from modal') }" />
  </page>
</frame>
<script>
  import { closeModal } from 'svelte-native'
</script>
```



