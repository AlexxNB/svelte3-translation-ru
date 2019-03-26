---
title: Макеты
---

### AbsoluteLayout

Контейнер `<absoluteLayout>` является простейшим контейнером макета в NativeScript.

`<absoluteLayout>` имеет следующее поведение:

* Использует пару абсолютных left/top координат для позиционирования вложенных элементов.
* Не применяет никаких ограничений макета для своих дочерних элементов.
* Изменяет размеры своих потомков во время выполнения, когда его размер изменяется.

#### Примеры

#### Макет сетки

В следующем примере создается простая сетка. Для получения дополнительной информации о создании макетов сетки см. [GridLayout](/docs#GridLayout).

```html
<absoluteLayout backgroundColor="#3c495e">
  <label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#4383b8"/>
  <label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#4383b8"/>
  <label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#4383b8"/>
  <label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#4383b8"/>
</absoluteLayout>
```
<img width=320 src="/media/docs/layouts/absolute_layout_grid.svg" />

#### Перекрывающиеся элементы

В следующем примере создается группа перекрывающихся элементов.

```html
<absoluteLayout backgroundColor="#3c495e">
  <label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#286290"/>
  <label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#4383b8"/>
</absoluteLayout>
```
<img width=320 src="/media/docs/layouts/absolute_layout_overlap.svg" />

#### Свойства дочерних элементов

У вложенных напрямую в `<absoluteLayout>` элементов, появляются дополнительные свойства:

| Имя | Тип | Описание |
|-----|-----|----------|
| `top` | `Number` | Получает или задаёт расстояние в пикселях между верхним краем дочернего элемента и верхним краем его родительского элемента.
| `left` | `Number` | Получает или задаёт расстояние в пикселях между левым краем дочернего элемента и левым краем его родительского элемента.

### DockLayout

`<DockLayout>` — это контейнер макета, который позволяет закреплять дочерние элементы по бокам или по центру макета.

`<DockLayout>` имеет следующее поведение:

* Использует свойство `dock`, чтобы прикрепить свои дочерние элементы к` left`, `right`,` top`, `bottom` или центру макета. <br/> Чтобы прикрепить дочерний элемент к центру, он должен быть **последним потомком** контейнера, и вы должны установить значение `true` для свойства `stretchLastChild` родительского элемента.
* Применяет ограничения макета для своих дочерних элементов.
* Изменяет размеры своих потомков во время выполнения, когда его размер изменяется.

#### Примеры

#### Прикрепление ко всем сторонам без растягивания последнего потомка

В следующем примере создается рамкообразный макет, состоящий из 4 элементов, расположенных по 4 краям экрана.

```html
<dockLayout stretchLastChild="false" backgroundColor="#3c495e">
  <label text="left" dock="left" width="40" backgroundColor="#4383b8"/>
  <label text="top" dock="top" height="40" backgroundColor="#286290"/>
  <label text="right" dock="right" width="40" backgroundColor="#4383b8"/>
  <label text="bottom" dock="bottom" height="40" backgroundColor="#286290"/>
</dockLayout>
```
<img width=320 src="/media/docs/layouts/dock_layout_no_stretch.svg" />

#### Прикрепление ко всем сторонам и растягивание последнего потомка

В следующем примере показано, как `stretchLastChild` влияет на расположение дочерних элементов в контейнере `DockLayout`. Последний дочерний элемент (`bottom`) растягивается, чтобы занять все оставшееся пространство после размещения первых трех элементов.

```html
<dockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <label text="left" dock="left" width="40" backgroundColor="#4383b8"/>
  <label text="top" dock="top" height="40" backgroundColor="#286290"/>
  <label text="right" dock="right" width="40" backgroundColor="#4383b8"/>
  <label text="bottom" dock="bottom" backgroundColor="#1c486b"/>
</dockLayout>
```
<img width=320 src="/media/docs/layouts/dock_layout_stretch.svg" />

#### Прикрепление ко всем сторонам и к центру

В следующем примере создается `<dockLayout>` из 5 элементов. Первые четыре окружают рамкой центральный элемент.

```html
<dockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <label text="left" dock="left" width="40" backgroundColor="#4383b8"/>
  <label text="top" dock="top" height="40" backgroundColor="#286290"/>
  <label text="right" dock="right" width="40" backgroundColor="#4383b8"/>
  <label text="bottom" dock="bottom" height="40" backgroundColor="#286290"/>
  <label text="center" backgroundColor="#1c486b" />
</dockLayout>
```
<img width=320 src="/media/docs/layouts/dock_layout_all_sides_and_stretch.svg" />

#### Прикрепление нескольких элементов к одной и той же стороне

В следующем примере создается строка из 4 элементов, которые растягиваются по всей высоте и ширине экрана.

```html
<dockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <label text="left 1" dock="left" width="40" backgroundColor="#4383b8"/>
  <label text="left 2" dock="left" width="40" backgroundColor="#286290"/>
  <label text="left 3" dock="left" width="40" backgroundColor="#1c486b"/>
  <label text="last child" backgroundColor="#4383b8"/>
</dockLayout>
```
<img width=320 src="/media/docs/layouts/dock_layout_multiple_on_same_side.svg" />

#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `stretchLastChild` | `Boolean` | Включает или отключает растяжение последнего дочернего элемента до заполнения незанятого пространства.

#### Свойства дочерних элементов

У вложенных напрямую в `<DockLayout>` элементов, появляются дополнительные свойства:

| Имя | Тип | Описание |
|-----|-----|----------|
| `dock` | `String` | Указывает, к какой стороне прикрепить элемент. <br/> Допустимые значения: `top`, `right`, `bottom` или `left`.

### FlexboxLayout


`<FlexboxLayout>` является контейнером макета, который обеспечивает примерную реализацию [CSS Flexbox](https://developer.mozilla.org/ru-RU/docs/Learn/CSS/CSS_layout/Flexbox). Этот макет позволяет расположить дочерние компоненты как по горизонтали, так и по вертикали.

#### Примеры

#### Flex-макет по умолчанию

В следующем примере создается строка из трех элементов одинакового размера, которые растягиваются на всю высоту экрана.
```html
<flexboxLayout backgroundColor="#3c495e">
  <label text="first" width="70" backgroundColor="#4383b8"/>
  <label text="second" width="70" backgroundColor="#1c486b"/>
  <label text="third" width="70" backgroundColor="#286290"/>
</flexboxLayout>
```
<img width=320 src="/media/docs/layouts/flexbox_layout_row_stretch.svg" />

#### Flex-макет столбцом

В следующем примере создается столбец из трех элементов одинакового размера, которые растягиваются на всю ширину экрана.
```html
<flexboxLayout flexDirection="column" backgroundColor="#3c495e">
  <label text="first" height="70" backgroundColor="#4383b8"/>
  <label text="second" height="70" backgroundColor="#1c486b"/>
  <label text="third" height="70" backgroundColor="#286290"/>
</flexboxLayout>
```
<img width=320 src="/media/docs/layouts/flexbox_layout_column_stretch.svg" />

#### Flex-макет строкой с элементами, выровненными по `flex-start`

В следующем примере создается строка из трех элементов, размещенных в верхней части экрана. Элементы размещаются в том порядке, в котором они были объявлены.

```html
<flexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <label text="first" width="70" height="70" backgroundColor="#4383b8"/>
  <label text="second" width="70" height="70" backgroundColor="#1c486b"/>
  <label text="third" width="70" height="70" backgroundColor="#286290"/>
</flexboxLayout>
```
<img width=320 src="/media/docs/layouts/flexbox_layout_row_flex-start.svg" />

#### Flex-макет строкой с заданным порядком

В следующем примере создается строка из трех элементов, размещенных в верхней части экрана. Элементы размещаются в указанном порядке.

```html
<flexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <label text="first" order="2" width="70" height="70" backgroundColor="#4383b8"/>
  <label text="second" order="3" width="70" height="70" backgroundColor="#1c486b"/>
  <label text="third" order="1" width="70" height="70" backgroundColor="#286290"/>
</flexboxLayout>
```
<img width=320 src="/media/docs/layouts/flexbox_layout_row_custom_order.svg" />

#### Flex-макет строкой с переносом

В следующем примере создаются четыре элемента с включенным переносом строк. Когда в строке заканчивается свободное место, контейнер переносит последний элемент на новую строку.

```html
<flexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
  <label text="first" width="30%" backgroundColor="#4383b8"/>
  <label text="second" width="30%" backgroundColor="#1c486b"/>
  <label text="third" width="30%" backgroundColor="#286290"/>
  <label text="fourth" width="30%" backgroundColor="#286290"/>
</flexboxLayout>
```
<img width=320 src="/media/docs/layouts/flexbox_layout_wrap.svg" />

#### Flex-макет столбцом с элементами в обратном порядке и разным значением свойства `alignSelf`

В следующем примере показано, как использовать:

* `flexDirection` для размещения элементов в столбце, начиная снизу.
* `justifyContent` для создания равного расстояния между вертикально расположенными элементами.
* `alignSelf` для изменения положения элементов относительно главной оси.

```html
<flexboxLayout flexDirection="column-reverse"
               justifyContent="space-around" backgroundColor="#3c495e">
  <label text="first" height="70" backgroundColor="#4383b8"/>
  <label text="second" alignSelf="center" width="70" height="70" backgroundColor="#1c486b"/>
  <label text="third\nflex-end" alignSelf="flex-end" width="70" height="70" backgroundColor="#286290"/>
  <label text="fourth" height="70" backgroundColor="#286290"/>
</flexboxLayout>
```
<img width=320 src="/media/docs/layouts/flexbox_layout_column_reverse_space_around_align_self.svg" />

#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
`flexDirection` | `String` | Задаёт направление размещения дочерних элементов в flexbox-контейнере .<br/>Допустимые значения:<br/>`row` (горизонтально, слева направо),<br/>`row-reverse` (горизонтально, справа налево),<br/>`column` (вертикально, сверху вниз),<br/>`column-reverse` (вертикально, снизу вверх).<br/>По умолчанию: `row`.
`flexWrap` | `String` | Устанавливает, должны ли дочерние элементы оставаться в одной строке или могут переносится на несколько строк. Если задано несколько строк, также указывает поперечную ось, по которой будут появляться новые строки.<br/>Допустимые значения:<br/>`nowrap` (единственная строка, которая может выйти за рамки контейнера),<br/>`wrap` (перенос строк, направление по `flexDirection`)<br/>`wrap-reverse` (перенос строк, направление обратное `flexDirection`).<br/>По умолчанию: `nowrap`.
`justifyContent` | `String` | Задаёт выравнивание дочерних элементов *вдоль* главной оси. Может использоваться для равномерного распределения нерастянутых элементов по оси. Также используется для управления выравниванием элементов, когда они выходят за рамки строки.<br/>Допустимые значения:<br/>`flex-start` (элементы прижимаются к началу контейнера),<br/>`flex-end` (элементы прижимаются к концу контейнера),<br/>`center` (элементы выравниваются по центру контейнера),<br/>`space-between` (элементы равномерно распределены по линии; первый элемент находится в начале контейнера, последний элемент в конце контейнера)<br/>`space-around` (элементы равномерно распределены по линии с равным пространством вокруг них).<br/>По умолчанию: `flex-start`.
`alignItems` | `String` | (только Android) Задаёт выравнивание дочерних элемент вдоль поперечной оси текущей линии. Работает как `justifyContent`, только для поперечной оси.<br/>Допустимые значения:<br/>`flex-start` (поперечное начало элементов размещается на поперечном начале линии),<br/>`flex-end` (поперечный конец элементов размещается на поперечном конце линии),<br/>`center` (элементы центрируются относительно поперечной оси),<br/>`baseline` (базовая линия всех элементов выравнивается),<br/>`stretch` (элементы растягиваются по всей поперечной оси контейнера с учётом свойств `min-width` и `max-width`).<br/>По умолчанию: `stretch`.
`alignContent` | `String` | Задаёт выравнивание линий внутри контейнера на поперечной оси, подобно тому, как `justifyContent` выравнивает отдельные элементы в пределах главной оси.<br/> Это свойство не имеет никакого действия, если имеется только одна линия.<br/>Допустимые значения:<br/>`flex-start` (линии прижимаются к началу контейнера),<br/>`flex-end` (линии прижимаются к концу контейнера),<br/>`center` (линии выравниваются по центру контейнера),<br/>`space-between` (линии равномерно распределены; первая линия находится в начале контейнера, последняя линия в конце контейнера),<br/>`space-around` (линии равномерно распределены по линии с равным пространством вокруг них),<br/>`stretch` (линии растягиваются на всё свободное пространство).<br/>По умолчанию: `stretch`.

#### Свойства дочерних элементов

У вложенных напрямую в `<FlexboxLayout>` элементов, появляются дополнительные свойства:

| Имя | Тип | Описание |
|-----|-----|----------|
`order` | `Number` | Задаёт порядок отображения элемента относительно других элементов.
`flexGrow` | `Number` | Указывает, что элемент может увеличиваться. Задаёт коэффициент размера элемента, относительно других элементов. 
`flexShrink` | `Number` | Указывает, что элемент может сжиматься, когда в линии заканчивается свободное место. Устанавливает, насколько элемент будет уменьшен пропорционально остальным дочерним элементам в контейнере. Если не указано, его значение равно `1`.
`alignSelf` | `String` | (только Android) Переписывает значение свойства `alignItems` только для этого элемента.<br/>Допустимые значения:<br/>`flex-start` (поперечное начало элемента размещается на поперечном начале линии),<br/>`flex-end` (поперечный конец элемента размещается на поперечном конце линии),<br/>`center` (элемент центрируется относительно поперечной оси),<br/>`baseline` (выравнивается по базовой линии),<br/>`stretch` (элемент растягиваются по всей поперечной оси контейнера с учётом свойств `min-width` и `max-width`).<br/>По умолчанию: `stretch`.
`flexWrapBefore` | `Boolean` | При значении `true`, заставляет элемент переместится на новую линию. Это свойство не является частю официальной спецификации Flexbox.<br/>По умолчанию: `false`.

### GridLayout

`<GridLayout>` является контейнером макета, который позволяет упорядочивать дочерние элементы в виде таблицы.

Сетка состоит из строк, столбцов и ячеек. Ячейка может занимать одну или несколько строк и один или несколько столбцов. Она может содержать несколько дочерних элементов, которые могут занимать несколько строк и столбцов и даже перекрывать друг друга.

По умолчанию `<GridLayout>` имеет один столбец и одну строку. Вы можете добавлять столбцы и строки, настраивая свойства `columns` и `rows`. В этих свойствах нужно установить количество столбцов и строк, а также их ширину и высоту. Количество столбцов задаётся, перечислением их ширины через запятую. Количество строк задаётся, перечислением их высоты через запятую.

Вы можете установить фиксированный размер для ширины столбца и высоты строки, либо сделать их 'резиновыми':

* **число:** Фиксированный размер.
* **auto:** Делает столбец таким же по ширине, как его самый широкий дочерний элемент, или делает ряд таким же по высоте, как его самый высокий дочерний элемент.
* **\*:** Занимает столько места, сколько останется после заполнения всех столбцов или строк с фиксированным или `auto` размером.


#### Примеры

#### Макет сетки с фиксированным размером

В следующем примере создается простая сетка 2-на-2 с фиксированными шириной столбцов и высотой строк.

```html
<gridLayout columns="115, 115" rows="115, 115">
  <label text="0,0" row="0" col="0" backgroundColor="#4383b8"/>
  <label text="0,1" row="0" col="1" backgroundColor="#1c486b"/>
  <label text="1,0" row="1" col="0" backgroundColor="#286290"/>
  <label text="1,1" row="1" col="1" backgroundColor="#4383b8"/>
</gridLayout>
```
<img width=320 src="/media/docs/layouts/grid_layout.svg" />

#### Макет сетки с резиновым размером

В следующем примере создается сетка с адаптивным дизайном, где пространство распределяется пропорционально значениям со звёздочкой.

```html
<gridLayout columns="*, 2*" rows="2*, 3*" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#4383b8"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c486b"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#286290"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#4383b8"/>
</gridLayout>
```
<img width=320 src="/media/docs/layouts/grid_layout_star_sizing.svg" />

#### Макет сетки с фиксированным и auto размером

В следующем примере создается сетка с одним столбцом фиксированной ширины и одним столбцом ширины `auto`. Строки имеют фиксированную высоту.
```html
<gridLayout columns="80, auto" rows="80, 80" backgroundColor="#3c495e">
  <label text="0,0" row="0" col="0" backgroundColor="#4383b8"/>
  <label text="0,1" row="0" col="1" backgroundColor="#1c486b"/>
  <label text="1,0" row="1" col="0" backgroundColor="#286290"/>
  <label text="1,1" row="1" col="1" backgroundColor="#4383b8"/>
</gridLayout>
```
<img width=320 src="/media/docs/layouts/grid_layout_fixed_auto.svg" />

#### Макет сетки со смешанными размерами и объединенными ячейками

В следующем примере создается сложная сетка с адаптивным дизайном, смешанными настройками ширины и высоты и несколькими объединенными ячейками.

```html
<gridLayout columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
  <label text="0,0" row="0" col="0" backgroundColor="#4383b8"/>
  <label text="0,1" row="0" col="1" colSpan="2" backgroundColor="#1c486b"/>
  <label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#286290"/>
  <label text="1,1" row="1" col="1" backgroundColor="#4383b8"/>
  <label text="1,2" row="1" col="2" backgroundColor="#286290"/>
  <label text="2,1" row="2" col="1" backgroundColor="#1c486b"/>
  <label text="2,2" row="2" col="2" backgroundColor="#4383b8"/>
</gridLayout>
```
<img width=320 src="/media/docs/layouts/grid_layout_complex.svg" />


#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
`columns` | `String` | Строковое значение, описывающее ширину столбцов через запятую.<br/>Допустимые значения: число, `auto` или `*`.<br/>Число указывает абсолютную ширину столбца. `auto` задаёт ширину по ширине самого широкого потомка. `*` указывает, что нужно занять всё свободное пространство по горизонтали, которое пропорционально делится между всеми колонками со звёздочкой. Вы можете задать ширину колонок, например так — `3*` и `5*`, чтобы разделить пространство в пропорции 3 к 5.
`rows` | `String` | Строковое значение, описывающее высоту строк через запятую.<br/>Допустимые значения: число, `auto` или `*`.<br/>Число указывает абсолютную высоту строки. `auto` задаёт высоту по высоте самого высокого потомка. `*` указывает, что нужно занять всё свободное пространство по вертикали, которое пропорционально делится между всеми строками со звёздочкой. Вы можете задать высоту строк, например так — `3*` и `5*`, чтобы разделить пространство в пропорции 3 к 5.


#### Свойства дочерних элементов

У вложенных напрямую в `<GridLayout>` элементов, появляются дополнительные свойства:

| Имя | Тип | Описание |
|-----|-----|----------|
`row` | `Number` | Указывает строку для данного элемента. Вместе со свойством `col`, задаёт координаты ячейки для элемента.<br/>Нумерация строк начинается с `0`.
`col` | `Number` | Указывает столбец для данного элемента. Вместе со свойством `row` задаёт координаты ячейки для элемента.<br/>Нумерация столбцов начинается с `0`.
`rowSpan` | `Number` | Определяет количество строк, которые необходимо объединить.
`colSpan` | `Number` | Определяет количество столбцов, которые необходимо объединить.


### StackLayout


`<stackLayout>` является контейнером макетов, который позволяет укладывать вложенные элементы по вертикали (по умолчанию) или по горизонтали.

#### Примеры

#### Укладка по умолчанию

В следующем примере создается вертикальная раскладка из 3 элементов одинакового размера. Элементы растягиваются на всю ширину экрана. Элементы размещаются в том порядке, в котором они были объявлены.

```html
<stackLayout backgroundColor="#3c495e">
  <label text="first" height="70" backgroundColor="#4383b8"/>
  <label text="second" height="70" backgroundColor="#286290"/>
  <label text="third" height="70" backgroundColor="#1c486b"/>
</stackLayout>
```
<img width=320 src="/media/docs/layouts/stack_layout_vertical.svg" />

#### Укладка по вертикали

В следующем примере создается горизонтальная раскладка из 3 элементов одинакового размера. Элементы растягиваются на всю высоту экрана. Элементы размещаются в том порядке, в котором они были объявлены.

```html
<stackLayout orientation="horizontal" backgroundColor="#3c495e">
  <label text="first" width="70" backgroundColor="#4383b8"/>
  <label text="second" width="70" backgroundColor="#286290"/>
  <label text="third" width="70" backgroundColor="#1c486b"/>
</stackLayout>
```
<img width=320 src="/media/docs/layouts/stack_layout_horizontal.svg" />

#### Вертикальная укладка с элементами выровненными по горизонтали

В следующем примере создается диагональная раскладка по вертикали элементов с адаптивными размерами.
```html
<stackLayout backgroundColor="#3c495e">
  <label text="left" horizontalAlignment="left"
         width="33%" height="70" backgroundColor="#4383b8"/>
  <label text="center" horizontalAlignment="center"
         width="33%" height="70" backgroundColor="#286290"/>
  <label text="right" horizontalAlignment="right"
         width="33%" height="70" backgroundColor="#1c486b"/>
  <label text="stretch" horizontalAlignment="stretch"
         height="70" backgroundColor="#4383b8"/>
</stackLayout>
```
<img width=320 src="/media/docs/layouts/stack_layout_vertical_align_children.svg" />

#### Горизонтальная укладка с элементами выровненными по вертикали

В следующем примере создается диагональная раскладка по горизонтали элементов с адаптивными размерами.

```html
<stackLayout orientation="horizontal" backgroundColor="#3c495e">
  <label text="top" verticalAlignment="top"
         width="70" height="33%" backgroundColor="#4383b8"/>
  <label text="center" verticalAlignment="center"
         width="70" height="33%" backgroundColor="#286290"/>
  <label text="bottom" verticalAlignment="bottom"
         width="70" height="33%" backgroundColor="#1c486b"/>
  <label text="stretch" verticalAlignment="stretch"
         width="70" backgroundColor="#4383b8"/>
</stackLayout>
```
<img width=320 src="/media/docs/layouts/stack_layout_horizontal_align_children.svg" />

#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
`orientation` | `String` | Задаёт направление раскладки<br/>Допустимые значения: `vertical` и `horizontal`.<br/>По умолчанию: `vertical`.

### WrapLayout

`<WrapLayout>` - это контейнер макетов, который позволяет позиционировать элементы в строках или столбцах на основе свойства `direction`. Когда пространство заполняется элементами, контейнер автоматически переносит следующие элементы в новую строку или столбец.

#### Примеры

#### Размещение по умолчанию

В следующем примере создается строка элементов одинакового размера. Когда в строке заканчивается свободное место, контейнер переносит последний элемент в новую строку.

```html
<wrapLayout backgroundColor="#3c495e">
  <label text="first" width="30%" height="30%" backgroundColor="#4383b8"/>
  <label text="second" width="30%" height="30%" backgroundColor="#1c486b"/>
  <label text="third" width="30%" height="30%" backgroundColor="#286290"/>
  <label text="fourth" width="30%" height="30%" backgroundColor="#286290"/>
</wrapLayout>
```

<img width=320 src="/media/docs/layouts/wrap_layout_horizontal.svg" />

#### Размещение в колонках

В следующем примере создается столбец элементов одинакового размера. Когда в строке заканчивается свободное место, контейнер переносит последний элемент в новый столбец.

```html
<wrapLayout orientation="vertical" backgroundColor="#3c495e">
  <label text="first" width="30%" height="30%" backgroundColor="#4383b8"/>
  <label text="second" width="30%" height="30%" backgroundColor="#1c486b"/>
  <label text="third" width="30%" height="30%" backgroundColor="#286290"/>
  <label text="fourth" width="30%" height="30%" backgroundColor="#286290"/>
</wrapLayout>
```

<img width=320 src="/media/docs/layouts/wrap_layout_vertical.svg" />

#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
`orientation` | `String` | Определяет направление укладки элементов.<br/>Допустимые значения: `horizontal` (упорядочивает элементы в строки) и `vertical` (упорядочивает элементы в колонки).<br/>По умолчанию: `horizontal`.
`itemWidth` | `Number` | Устанавливает ширину каждого дочернего элемента.<br/>По умолчанию: `Number.NaN`, т.е. ширина не ограничивается
`itemHeight` | `Number` | Устанавливает высоту каждого дочернего элемента.<br/>По умолчанию: `Number.NaN`, т.е. высота не ограничивается
