---
title: Компоненты
---

### ActivityIndicator


<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_activity_indicator_.activityindicator">Описание класса</a></div>


`<activityIndicator>` — UI компонент, показывающий индикатор прогресса, сигнализирующий пользователю об операциях запущенных в фоне.


```html
<activityIndicator busy="{true}" on:busyChange="{{onBusyChanged}}" />
```

#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `busy` | `Boolean` | Возвращает или задаёт находится ли индикатор в активном состоянии. При значении `true`, индикатор отображается.

#### События

| Имя | Описание |
|-----|----------|
| `busyChange`| Вызывается, когда свойство `busy` изменяется.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar`](https://developer.android.com/reference/android/widget/ProgressBar.html)	| [`UIActivityIndicatorView`](https://developer.apple.com/documentation/uikit/uiactivityindicatorview)



### Button

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_button_.button">Описание класса</a></div>


`<button>` — UI компонент, который отображает кнопку, которая реагирует на жесты пользователя.

Для дополнительной информации по всем возможным жестам, смотрите [Официальную документацию NativeScript](https://docs.nativescript.org/ui/gestures).



```html
<button text="Button" on:tap="{onButtonTap}" />
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `text` | `String` | Задаёт текст на кнопке.
| `textWrap` | `Boolean` | Возвращает или задаёт нужно ли переносить текст на кнопке. Полезно при длинном тексте. По умолчанию:`false`.

#### События

| Имя | Описание |
|-----|----------|
| `tap` | Вызывается, когда пользователь тапает по кнопке.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.Button`](https://developer.android.com/reference/android/widget/Button.html) | [`UIButton`](https://developer.apple.com/documentation/uikit/uibutton)



### DatePicker

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_date_picker_.datepicker">Описание класса</a></div>




`<datePicker>` — UI компонент, который позволяет пользователю выбрать дату из заданного диапазона.


```html
<datePicker date="{someDate}" />
```

`<datePicker>` обеспечивает двухстороннюю привязку данных через директиву `bind`.

```html
<datePicker bind:date="{selectedDate}" />
```

См. также: [TimePicker](docs#timepicker).




#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `date` | `Date` | Возвращает или задаёт полную дату.
| `minDate` | `Date` | Возвращает или задаёт минимальную дату, которую можно выбрать.
| `maxDate` | `Date` | Возвращает или задаёт максимальную дату, которую можно выбрать.
| `day` | `Number` | Возвращает или задаёт день.
| `month` | `Number` | Возвращает или задаёт месяц.
| `year` | `Number` | Возвращает или задаёт год.

#### События

| Имя | Описание |
|-----|----------|
| `dateChange` | Вызывается, когда изменяется выбранная дата.

#### Нативный компонент

| Android |	iOS |
|---------|-----|
| [`android.widget.DatePicker`](https://developer.android.com/reference/android/widget/DatePicker.html) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker)



### Frame

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_frame_.frame">Описание класса</a></div>


`<frame>` — UI компонент, который используется для отображения элементов [`<page>`](docs#page). Любое приложене должно иметь хотя бы один элемент `<frame>`, обычно играющий роль корневого элемента. Svelte Native создаёт корневой фрейм за вас.

Если вам нужно создать несколько фреймов, вы можете сделать это, поместив их в Макет, например, если нужно, чтобы 2 фрейма были рядом друг с другом.

```html
<gridLayout columns="*, *">
  <frame col="0"/>
  <frame col="1"/>
</gridLayout>
```



Первый дочерний элемент фрейма становится его страницей по умолчанию. Эта страница отобразится перед какой-либо навигацией во фрейме.

```html
<frame>
  <page>
    <actionBar title="Заголовок страницы по умолчанию" />
    <gridLayout>
      <label text="Содержимое страницы по умолчанию" />
    </gridLayout>
  </page>
</frame>
```

В качестве страницы по умолчанию, можно использовать компонент Svelte, если его корневым элементом будет `page`.
```html
<frame>
  <Home />
</frame>
```

```js
import Home from './Home.svelte'
```

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`org.nativescript.widgets.ContentLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/ContentLayout.java) | [`UINavigationController`](https://developer.apple.com/documentation/uikit/uinavigationcontroller)


### HtmlView

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_html_view_.htmlview">Описание класса</a></div>



`<htmlView>` — UI компонент, который отображает статический HTML контент.

См. также: [WebView](docs#webview).


```html
<htmlView html="<div><h1>HtmlView</h1></div>" />
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `html` | `String` | HTML разметка, которую нужно показать.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html) | [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview)


### Image

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_image_.image">Описание класса</a></div>



`<image>` — UI компонент, который показывает изображение из [ImageSource](https://docs.nativescript.org/api-reference/modules/_image_source_) или по URL.



В NativeScript символ `~` указывает на директорию где находится приложение.

```html
<image src="~/logo.png" stretch="none" />
```




Изображения могут загружаться из сети:

```html
<image src="https://svelte-native.technology/media/todoapp/todo-add-item.png" stretch="none" />
```



Изображения также могут извлекаться из директории App_Resources при помощи префикса `res://`.

```html
<image src="res://icon" stretch="none" />
```


NativeScript также поддерживает данные, закодированные в base64

```html
<image src="data:Image/png;base64,iVBORw..." stretch="none" />
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `src` | `String` или [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | Возвращает или задаёт источник изображения как URL или ImageSource.
|`imageSource` | [`ImageSource`](https://docs.nativescript.org/api-reference/modules/_image_source_) | Возвращает или задаёт ImageSource изображения.
| `tintColor` | `Color` | (свойство стиля) Задаёт цвет заглушки загружаемого изображения.
| `stretch` | `Stretch` | (свойство стиля) Возвращает или задаёт как изображение должно растягиваться в выделенном пространстве.<br/>Допустимые значения: `none`, `aspectFill`, `aspectFit` или `fill`.<br/>См. подробнее: [Stretch](https://docяs.nativescript.org/api-reference/modules/_ui_enums_.stretch). 
| `loadMode` | | Возвращает или задаёт метод загрузки изображений из локальной файловой системы.<br/>Допустимые значения: `sync` или `async`.<br/>По умолчанию: `async`.<br/>См. подробнее: [loadMode](https://docs.nativescript.org/api-reference/classes/_ui_image_.image#loadmode).

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.ImageView`](https://developer.android.com/reference/android/widget/ImageView.html) | [`UIImageView`](https://developer.apple.com/documentation/uikit/uiimageview)


### Label

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_label_.label">Описание класса</a></div>



`<label>` — UI компонент, который просто отображает метку с текстом.

> **ВАЖНО**: Компонент `<label>` совершенно **не** то же самое, что HTML тег `<label>`.



```html
<label text="Label" />
```



#### Стилизация текста

Если требуется стилизовать часть текста, можно использовать комбинацию элементтов [`FormattedString`](https://docs.nativescript.org/angular/ui/ng-ui-widgets/formatted-string) и [`Span`](https://docs.nativescript.org/api-reference/classes/_text_span_.span).

```html
<label textWrap="{true}">
  <formattedString>
    <span text="В этом тексте есть " />
    <span text="красная " style="color: red" />
    <span text="часть. " />
    <span text="Также, этот кусок написан курсивом, " fontStyle="italic" />
    <span text="а этот кусок жирный." fontWeight="bold" />
  </formattedString>
</label>
```

#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `text` | `String` | Возвращает или задаёт текст метки.
| `textWrap` | `Boolean` | Возвращает или задаёт нужно ли переносить текст.<br/>По умолчанию: `false`.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html) | [`UILabel`](https://developer.apple.com/documentation/uikit/uilabel)


### ListPicker

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker">Описание класса</a></div>



`<listPicker>` — UI компонент, который позволяет пользователю выбрать значение из предустановленного списка.



```html
<listPicker items="{listOfItems}" selectedIndex="0"
    on:selectedIndexChange="{selectedIndexChanged}" />
```

`<listPicker>` обеспечивает двухстороннюю привязку данных через директиву `bind`.

```html
<listPicker items="{listOfItems}" v-model="selectedItem" />
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `items` | `Array<string>` | Возвращает или задаёт элементы, которые будут отображены в списке для выбора.
| `selectedIndex` | `Number` | Возвращает или задаёт индекс выбранного элемента.

#### События

| Имя | Описание |
|-----|----------|
| `selectedIndexChange`| Вызывается, когда выбранное значение (индекс) изменяется.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.NumberPicker`](https://developer.android.com/reference/android/widget/NumberPicker.html) | [`UIPickerView`](https://developer.apple.com/documentation/uikit/uipickerview)


### ListView

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview">Описание класса</a></div>

`<listView>` — UI компонент, отображает элементы в списке с вертикальной прокруткой. Для настройки отображения элементов списка можно воспользоваться [компонентом `<Template>`](docs#template-component).

```html
<listView items="{listOfItems}" on:itemTap="{onItemTap}">
  <Template let:item>
    <!-- Shows the list item label in the default color and style. -->
    <!-- Показывает элемент списка 'label' с цветом и стилями по умолчанию. -->
    <label text="{item}" />
  </Template>
</listView>
<script>
    import { Template } from 'svelte-native/components'
    let listOfItems = ['one','two','three']
    function onItemTap(e) { console.log(e.item) }
</script>
```

`<listView>` не перебирает элементы списка, как обычный блок `each` в Svelte. Вместо этого? `<listView>` создаёт только необходимые представления для отображения на экране видимых в данный момент элементов и повторно использует представления, которые уже находятся вне экрана при прокрутке. Эта концепция называется _view recycling_ и обычно используется в мобильных приложениях для повышения производительности.

Вы можете использовать событие `itemTap`, которое предоставляет индекс выбранного элемента и сам элемент из списка.

```js
onItemTap(event) {
  console.log(event.index) //индекс элемента
  console.log(event.bindingContext) //экземпляр элемента
}
```

> **ПРИМЕЧАНИЕ** В отличие от выражений Svelte, компонент `listView` **не будет обновляться** если вы передадите ссылку на тот же объект, что уже есть в компоненте(например: `items.push('four'); list.items = items`). Но он **обновится** если передать ему ссылку на новый объект (например: `items = items.concat('four'); list.items = items`)

#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `items` | `Array<any>` | Массив элементов для отображения в `<listView>`.
| `separatorColor` | `Color` | Задаёт цвет линии разделителя. Чтобы скрыть разделитель, укажите значение `transparent`.

#### События

| Имя | Описание |
|-----|----------|
| `itemTap`| Вызывается, когда происходит тап по элементу в `<listView>`. Для доступа к выбранному элементу используйте `event.item`.


#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.ListView`](https://developer.android.com/reference/android/widget/ListView.html) | [`UITableView`](https://developer.apple.com/documentation/uikit/uitableview)


### Page

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_page_.page">Описание класса</a></div>



`<page>` — UI компонент страницы, которая представляет собой экран приложения. Приложения NativeScript обычно состоят из одной или нескольких страниц `<page>`, которые могут содержать в себе [`<actionBar>`](docs#actionbar) и другие UI компоненты.



```html
<page>
  <actionBar title="Моё приложение" />
  <gridLayout>
    <label text="Мой контент"/>
  </gridLayout>
</page>
```

#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `actionBarHidden` | `Boolean` | Показывает или прячет панель действий `<actionBar>`.<br/>По умолчанию: `false`.
| `backgroundSpanUnderStatusBar` | `Boolean` | Возвращает или задаёт должен ли фон страницы распространяется также и под строку состояния.<br/>По умолчанию: `false`.
| `androidStatusBarBackground` | `Color` | (только Android) Возвращает или задаёт цвет статусной строки на устройствах Android.
| `enableSwipeBackNavigation` | `Boolean` | (только iOS) Возвращает или задаёт можно ли со страницы вернуться свайпом возврата на предыдущий экран в iOS.<br/>По умолчанию: `true`.
| `statusBarStyle` | `String` | Возвращает или задаёт стиль статусной строки.<br/>Допустимые значения:<br/>`light`,<br/>`dark`.

#### События

| Имя | Описание |
|-----|----------|
| `navigatedFrom` | Вызывается после того, как пользователь ушёл с текущей страницы.
| `navigatedTo` | Вызывается после того, как пользователь зашёл на текущую страницу.
| `navigatingFrom` | Вызывается перед тем, как пользователь уйдёт с текущей страницы.
| `navigatingTo` | Вызывается перед тем, как пользователь зайдёт на текущую страницу.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`org.nativescript.widgets.GridLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/GridLayout.java) | [`UIViewController`](https://developer.apple.com/documentation/uikit/uiviewcontroller)


### Progress

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_progress_.progress">Описание класса</a></div>



`<progress>` — UI компонент, отображающий полосу для индикации прогресса какой-либо задачи.

См. также: [ActivityIndicator](docs#activityindicator).


```html
<progress value="{currentProgress}" />
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `value` | `Number` | Возвращает или задаёт текущее значение прогресса. Должно быть в диапазоне между 0 и `maxValue`.
| `maxValue` | `Number` | Возвращает или задаёт максимальное значение для индикатора прогресса.<br/>По умолчанию: `100`.

#### События

| Имя | Описание |
|-----|----------|
| `valueChange` | Вызывается, когда изменяется свойство `value`.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.ProgressBar` (indeterminate = false)](https://developer.android.com/reference/android/widget/ProgressBar.html) | [`UIProgressView`](https://developer.apple.com/documentation/uikit/uiprogressview)


### ScrollView

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview">Описание класса</a></div>



`<scrollView>` — UI компонент, отображающий содержимое в области с прокруткой. Контент может прокручиваться как по вертикали, так и по горизонтали.



```html
<scrollView orientation="horizontal">
  <stackLayout orientation="horizontal">
    <label text="этот" />
    <label text="текст" />
    <label text="при необходимости" />
    <label text="может прокручиваться" />
    <label text="по горизонтали" />
  </stackLayout>
</scrollView>
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `orientation` | `String` | Возвращает или задаёт направление в котором контент может быть прокручен: `horizontal` или `vertical`.<br/>По умолчанию: `vertical`.
| `scrollBarIndicatorVisible` | `Boolean` | Указывает отображать ли полосу прокрутки.<br/>По умолчанию: `true`.

#### События

| Имя | Описание |
|-----|----------|
| `scroll` | Вызывается, когда происходит прокрутка.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.view`](https://developer.android.com/reference/android/view/View.html) | [`UIScrollView`](https://developer.apple.com/documentation/uikit/uiscrollview)


### SearchBar

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_search_bar_.searchbar">Описание класса</a></div>



`<searchBar>` — UI компонент, для организации пользовательского интерфейса для ввода поисковых запросов и отправки их соответствующим обработчикам.



```html
<searchBar hint="Найти" text="{searchPhrase}" on:textChange="{onTextChanged}" on:submit="{onSubmit}" />
```

`<searchBar>` обеспечивает двухстороннюю привязку данных через директиву `bind`.

```html
<searchBar v-model="searchQuery" />
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `hint` | `String` | Возвращает или задаёт подсказку для пустой строки поиска.
| `text` | `String` | Возвращает или задаёт значение поискового запроса.
| `textFieldBackgroundColor` | `Color` | Возвращает или задаёт цвет фона поисковой строки.
| `textFieldHintColor` | `Color` | Возвращает или задаёт цвет текста подсказки.

#### События

| Имя | Описание |
|-----|----------|
| `textChange` | Вызывается при изменении текста.
| `submit` | Вызывается при отправке поискового запроса.
| `clear` | Вызывается, когда строка ввода очищается кнопкой **X**.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.SearchView`](https://developer.android.com/reference/android/widget/SearchView.html)	| [`UISearchBar`](https://developer.apple.com/documentation/uikit/uisearchbar)


### SegmentedBar

<div class="nsref"><a title="Документация NativeScript" href="http://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_.html">Описание класса</a></div>



`<segmentedBar>` — UI компонент, который отображает набор кнопок для раздельного выбора. Может отображать текст или изображения.

Отличия от `<tabView>`:
* Позиция `<segmentedBar>` не является фиксированной. 
* Вы можете стилизовать и разместить его в нужном месте страницы или любого другого элемента, вроде меню приложения.
* Необходимо вручную обрабатывать выбор кнопки и отображать запрашиваемое содержимое.


```html
<segmentedBar>
  <segmentedBarItem title="Первый" />
  <segmentedBarItem title="Второй" />
  <segmentedBarItem title="Третий" />
</segmentedBar>
```

```html
<segmentedBar items="{listOfItems}" selectedIndex="0"
    on:selectedIndexChange="{onSelectedIndexChange}" />
```

`<segmentedBar>` обеспечивает двухстороннюю привязку данных через директиву `bind`.

```html
<segmentedBar items="{listOfItems}" v-model="selectedItem" />
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `items` | `Array<segmentedBarItem>` | Массив элементов для отображения. Представляет собой текст для кнопок или иконки.<br/>Массив должен быть создан ранее. 
| `selectedIndex` | `Number` | Возвращает или задаёт выбранного элемента.
| `selectedBackgroundColor` | `Color` | (свойство стиля) Возвращает или задаёт цвет фона выбранного элемента, для указания цвета фона всего компонента используйте свойство `backgroundColor`.

#### События

| Имя | Описание |
|-----|----------|
| `selectedIndexChange`| Вызывается, когда происходит тап по элементу.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.TabHost`](https://developer.android.com/reference/android/widget/TabHost.html) | [`UISegmentedControl`](https://developer.apple.com/documentation/uikit/uisegmentedcontrol)


### Slider

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_slider_.slider">Описание класса</a></div>




`<slider>` — UI компонент, который представляет собой ползунок для выбора значения из определенного числового диапазона.



```html
<slider value="80" on:valueChange="{onValueChanged}" />
```

`<slider>` обеспечивает двухстороннюю привязку данных через директиву `bind`.

```html
<slider v-model="value" />
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `value` | `Number` | Возвращает или задаёт текущее выбранное значение.<br/>По умолчанию: `0`.
| `minValue` | `Number` | Возвращает или задаёт минимальное значение ползунка.<br/>По умолчанию: `0`.
| `maxValue` | `Number` | Возвращает или задаёт максимальное значение ползунка.<br/>По умолчанию: `100`.

#### События

| Имя | Описание |
|-----|----------|
| `valueChange`| Вызывается, при изменении значения ползунка

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.SeekBar`](https://developer.android.com/reference/android/widget/SeekBar.html) | [`UISlider`](https://developer.apple.com/documentation/uikit/uislider)


### Switch

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_switch_.switch">Описание класса</a></div>



`<switch>` — UI компонент, который представляет собой переключатель с двумя состояниями.

Состояние по умолчанию равно `false` или ВЫКЛЮЧЕНО.



```html
<switch checked="{true}" />
```

`<switch>` обеспечивает двухстороннюю привязку данных через директиву `bind`.

```html
<switch v-model="itemEnabled" />
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `checked` | `Boolean` | Возвращает или задаёт состояние переключателя.<br/>По умолчанию: `false`.

#### События

| Имя | Описание |
|-----|----------|
| `checkedChange`| Вызывается при изменении состояния переключателя.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.Switch`](https://developer.android.com/reference/android/widget/Switch.html) | [`UISwitch`](https://developer.apple.com/documentation/uikit/uiswitch)


### TabView

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview">Описание класса</a></div>



`<tabView>` компонент навигации, который отображает контент, сгруппированный по вкладкам, и позволяет пользователям переключаться между ними.



```html
<tabView selectedIndex="{selectedIndex}" on:selectedIndexChange="{indexChange}">
  <tabViewItem title="Вкладка 1">
    <label text="Содержимое первой вкладки" />
  </tabViewItem>
  <tabViewItem title="Вкладка 2">
    <label text="Содержимое второй вкладки" />
  </tabViewItem>
</tabView>
```

```js
function indexChange(args) {
    let newIndex = args.value
    console.log('Индекс выбранной вкладки: ' + newIndex)
}
```

> **ПРИМЕЧАНИЕ** В настоящее время, элемент `TabViewItem` ожидает, что у него будет единственный дочерний элемент. В большинстве случаев, контент внутри вкладки оборачивается в один из Макетов.



#### Добавление иконок на вкладки

```html
<tabView selectedIndex="{selectedIndex}" iosIconRenderingMode="alwaysOriginal">
  <tabViewItem title="Вкладка 1" iconSource="~/images/icon.png">
    <label text="Содержимое первой вкладки" />
  </tabViewItem>
  <tabViewItem title="Вкладка 2" iconSource="~/images/icon.png">
    <label text="Содержимое второй вкладки" />
  </tabViewItem>
</tabView>
```

> **ПРИМЕЧАНИЕ** В большинстве случаев лучше использовать изображения вместо иконочных шрифтов. Юолее подробно о работе с иконками читайте в [Работа с изображениями из папки ресурсов](https://docs.nativescript.org/ui/image-resources).


#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `selectedIndex` | `Number` | Возвращает или задаёт индекс выбранной вкладки. По умолчанию `0`.
| `tabTextColor` | `Color` | (свойство стиля) Возвращает или задаёт цвет текста на вкладках.
| `tabBackgroundColor` | `Color` | (свойство стиля) Возвращает или задаёт цвет фона вкладок.
| `selectedTabTextColor` | `Color` | (свойство стиля) Возвращает или задаёт цвет текста выбранной вкладки.
| `androidTabsPosition` | `String` | Устанавливает позицию вкладок на Android устройствах<br/>Допустимые значения: `top` или `bottom`.

#### События

| Имя | Описание |
|-----|----------|
| `selectedIndexChange` | Вызывается при смене текущей вкладки и содержит свойство `value` с индексом выбранного `<tabViewItem>`.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.support.v4.view.ViewPager`](https://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [`UITabBarController`](https://developer.apple.com/documentation/uikit/uitabbarcontroller)


### TextField

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/modules/_ui_text_field_">Описание класса</a></div>




`<textField>` компонент для создания однострочного редактируемого текстового поля.

`<textField>` расширяет [`TextBase`](https://docs.nativescript.org/api-reference/classes/_ui_text_base_.textbase) и [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase), предоставляя дополнительные свойства и события.



```html
<textField text="{textFieldValue}" hint="Введите текст..." />
```

`<textField>` обеспечивает двухстороннюю привязку данных через директиву `bind`.

```html
<textField bind:text="{textFieldValue}" />
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `text` | `String` | Возвращает или задаёт значение текстового поля.
| `hint` | `String` | Возвращает или задаёт текст подсказки при пустом поле.
| `editable` | `Boolean` | Когда равно `true`, пользователь может редактировать текст в поле.
| `maxLength` | `Number` | Ограничивает количество вводимых символов.
| `secure` | `Boolean` | При значении `true` прячет за маской вводимый текст. Используйте это свойство при создании полей ввода паролей.<br/>По умолчанию: `false`.
| `keyboardType` | `KeyboardType` | Указывает, что требуется использовать определённый тип клавиатуры, чтобы облегчить ввод.<br/>Допустимые значения: `datetime`, `phone`, `number`, `url` или `email`.
| `returnKeyType` | `ReturnKeyType` | Возвращает или задаёт тип клавиши ввода.<br/>Допустимые значения: `done`, `next`, `go`, `search` или `send`.
| `autocorrect` | `Boolean` | Включает или отключает автокоррекцию.

#### События

| Имя | Описание |
|-----|----------|
| `textChange` | Вызывается при изменении текста.
| `returnPress` | Вызывается при нажатии клавиши ввода.
| `focus` | Вызывается, когда поле получает фокус.
| `blur` | Вызывается, когда поле теряет фокус.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextField`](https://developer.apple.com/documentation/uikit/uitextfield)


### TextView

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview">Описание класса</a></div>



`<textView>` — UI компонент, который отображает многострочную область текста, доступного для редактирования или только для чтения. Используйте его, когда надо дать пользователю возможность набирать большие тексты в вашем приложении или для показа длинных многострочных текстов на экране.

`<textView>` расширяет [`TextBase`](https://docs.nativescript.org/api-reference/classes/_ui_text_base_.textbase) и [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase), предоставляя дополнительные свойства и события.



```html
<textView text="Много...\n...строчный\nТекст" />
```

`<textView>` обеспечивает двухстороннюю привязку данных через директиву `bind`.

```html
<textView bind:text="{textViewValue}" />
```



#### Отображение текста с различными стилями

Для применения различных стилей в тексте внутри элемента `<textView>` можно использовать элемент `<formattedString>`

```html
<textView editable="{false}">
  <formattedString>
    <span text="Вы можете использовать различное форматирование: " />
    <span text="жирный, " fontWeight="Bold" />
    <span text="курсив " fontStyle="Italic" />
    <span text="и " />
    <span text="подчеркивание." textDecoration="Underline" />
  </formattedString>
</textView>
```

#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `text` | `String` | Возвращает или задаёт текст для компонента.
| `hint` | `String` | Возвращает или задаёт подсказку для пустого поля, доступного для редактирования.
| `editable` | `Boolean` | Когда равно `true`, пользователь может редактировать текст в поле.
| `maxLength` | `Number` | Ограничивает количество вводимых символов.
| `keyboardType` | `KeyboardType` | Указывает, что требуется использовать определённый тип клавиатуры, чтобы облегчить ввод.<br/>Допустимые значения: `datetime`, `phone`, `number`, `url` или `email`.
| `returnKeyType` | `ReturnKeyType` | Возвращает или задаёт тип клавиши ввода. Поддерживается только в iOS<br/>Допустимые значения: `done`, `next`, `go`, `search` или `send`.
| `autocorrect` | `Boolean` | Включает или отключает автокоррекцию.

#### События

| Имя | Описание |
|-----|----------|
| `textChange` | Вызывается при изменении текста.
| `returnPress` | Вызывается при нажатии клавиши ввода.
| `focus` | Вызывается, когда поле получает фокус.
| `blur` | Вызывается, когда поле теряет фокус.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview)


### TimePicker

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_time_picker_.timepicker">Описание класса</a></div>



`<timePicker>` — UI компонент, который позволяет пользователю выбрать время. 

См. также: [DatePicker](docs#datepicker).



```html
<timePicker hour="{selectedHour}" minute="{selectedMinute}" />
```


`<timePicker>` обеспечивает двухстороннюю привязку данных через директиву `bind`.

```html
<timePicker bind:time="{selectedTime}" />
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `hour` | `Number` | Возвращает или задаёт час.
| `minute` | `Number` | Возвращает или задаёт минуту.
| `time` | `Date` | Возвращает или задаёт выбранное время.
| `minHour` | `Number` | Возвращает или задаёт минимально возможный час.
| `maxHour` | `Number` | Возвращает или задаёт максимально возможный час.
| `minMinute` | `Number` | Возвращает или задаёт минимально возможную минуту.
| `maxMinute` | `Number` | Возвращает или задаёт максимально возможную минуту.
| `minuteInterval` | `Number` | Возвращает или задаёт интервал между минутами, которые можно выбрать. Например: 5 или 15 минут.<br/>По умолчанию: `1`.

#### События

| Имя | Описание |
|-----|----------|
| `timeChange` | Вызывается, когда изменяется выбранное время.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.TimePicker`](https://developer.android.com/reference/android/widget/TimePicker) | [`UIDatePicker`](https://developer.apple.com/documentation/uikit/uidatepicker)


### WebView

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_web_view_.webview">Описание класса</a></div>



`<webView>` — UI компонент, который позволяет отображать web-содержимое в вашем приложении. Вы может получить и показать содержимое по URL адресу или из локального HTML файла. Также можно отобразить просто статический HTML контент.


См. также: [HtmlView](docs#htmlview).



```html
<webView src="http://svelte-native.technology/" />

<webView src="~/html/index.html" />

<webView src="<div><h1>Немного HTML кода</h1></div>" />
```



#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `src` | `String` | Возвращает или задаёт отображаемое содержимое.<br/>Допустимые значения: URL адрес, путь к локальному HTML файлу или строка HTML кода.

#### События

| Имя | Описание |
|-----|----------|
| `loadStarted`| Вызывается, когда страница начинает загружаться в `<webView>`.
| `loadFinished`| Вызывается, когда страница полностью загрузилась в `<webView>`.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.webkit.WebView`](https://developer.android.com/reference/android/webkit/WebView) | [`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview)