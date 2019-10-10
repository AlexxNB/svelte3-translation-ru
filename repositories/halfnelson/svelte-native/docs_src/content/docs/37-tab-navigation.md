---
title: Навигация по вкладками
---

### TabStrip

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_tab_navigation_tab_strip_.tabstrip">Описание класса</a></div>

Компонент TabStrip может применяться только внутри компонентов [`BottomNavigation`](docs#bottom-navigation) или [`Tabs`](docs#tabs). Он содержит набор элементов [`TabStripItem`](docs#tabstripitem), которые определяют конфигурацию вкладок.

```html
<tabStrip>
    <tabStripItem>
        <label text="Домой"></Label>
        <image src="font://&#xf015;" class="fas t-36"></image>
    </tabStripItem>
    <tabStripItem>
        <label text="Профиль"></Label>
        <image src="font://&#xf007;" class="fas t-36"></image>
    </tabStripItem>
</tabStrip>
```

#### Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `iosIconRenderingMode` | 	`"automatic", "alwaysOriginal", "alwaysTemplate"` | 	Возвращает или задаёт режим отрисовки иконок на iOS.
| `isIconSizeFixed` | 	`Boolean` | 	При установке в значение true иконка будет иметь фиксированный размер, соответствующий гайдлайну текущей платформы.the icon will have fixed size following the platform-specific design guidelines. По умолчанию:  true.

#### События

| Имя | Описание |
|------|-------------|
| `itemTap` | Вызывается, когда происходит тап по `TabStripItem`.


### TabStripItem

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_tab_navigation_tab_strip_item_.tabstripitem">Описание класса</a></div>


Элементы TabStripItem определяют отображение селектора вкладок внутри [`TabStrip`](docs#tabstrip). Они могут содержать теги [`Label`](docs#label) и/или [`Image`](docs#image).

```html
<tabStrip>
    <tabStripItem>
        <label text="Домой"></Label>
        <image src="font://&#xf015;" class="fas t-36"></image>
    </tabStripItem>
    ...
 </tabStrip>
```

#### Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `title` | `string` | Возвращает или задаёт заголовок вкладки.
| `iconSource` | `string` |	Возвращает или задаёт источник иконки для вкладки. Поддерживает локальные пути до изображения (~), ресурсы изображений (res://) и иконочные шрифты (font://)

#### События

| Имя | Описание |
|------|-------------|
| `tap` | Вызывается, когда происходит тап по `TabStripItem`.


### TabContentItem

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_tab_navigation_tab_content_item_.tabcontentitem">Описание класса</a></div>

`TabContentItem`  содержит контент, который будет показан при выборе соответствующей вкладки TabStripItem.

> **ВНИМАНИЕ:** На текущий момент, `TabContentItem` ожидает получить единственный дочерний элемент. В большинстве случаев, вам нужно будет обернуть контент в какой-либо макет.

```html
<tabContentitem>
    <stackLayout>
        <label>Привет из этой вкладки</label>
    </stackLayout>
</tabContentItem>
```

#### Свойства

Нет

#### События

Нет


### Bottom Navigation

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_tab_navigation_bottom_navigation_.bottomnavigation">Описание класса</a></div>


Компонент BottomNavigation является кроссплатформенной реализацией [Bottom Navigation UI из гайдлайнов Material Design](https://material.io/design/components/bottom-navigation.html#usage). Идеально подходит для случаев когда имеется от 3 до 5 вкладок, каждая из которых несет свою собственную функциональность.


Он может содержать в себе единственный [`TabStrip`](docs#tabstrip) (который содержит несколько TabStripItems), и несколько [`TabContentItem`](docs#tabcontentitem) (соответствующих каждому элементу из TabStripItem)

```html
<bottomNavigation bind:selectedIndex={selectedTab}>

    <!-- Bottom tab UI создается с помощью TabStrip (контейнер) и TabStripItem (для каждой вкладки)-->
    <tabStrip>
        <tabStripItem>
            <label text="Домой"></label>
            <image src="font://&#xf015;" class="fas t-36"></image>
        </tabStripItem>
        <tabStripItem class="special">
            <label text="Профиль"></label>
            <image src="font://&#xf007;" class="fas t-36"></image>
        </tabStripItem>
        <tabStripItem class="special">
            <label text="Поиск"></label>
            <image src="font://&#xf00e;" class="fas t-36"></image>
        </tabStripItem>
    </tabStrip>

    <!-- Количество компонентов TabContentItem должно соответствовать количеству компонентов TabStripItem -->
    <tabContentItem>
        <gridLayout>
            <label text="Домашняя страница" class="h2 text-center"></label>
        </gridLayout>
    </tabContentItem>
    <tabContentItem>
        <gridLayout>
            <label text="Страница профиля" class="h2 text-center"></label>
        </gridLayout>
    </tabContentItem>
    <tabContentItem>
        <gridLayout>
            <label text="Страница поиска" class="h2 text-center"></label>
        </gridLayout>
    </tabContentItem>

</bottomNavigation>
```

#### Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `selectedIndex` | `number` | Возвращает или задаёт индекс выбранной вкладки в BottomNavigation.

#### События

| Имя | Описание |
|------|-------------|
| `selectedIndexChanged` | Вызывается, когда изменяется свойство selectedIndex.
| `loaded` | Вызывается, когда представление будет загружено.
| `unloaded` | Вызывается, когда представление будет убрано.
| `layoutChanged` | Вызывается, когда границы макета представления изменяются из-за изменения макета.


#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`FrameLayout`](https://developer.android.com/reference/android/widget/FrameLayout)	| [`UITabViewController`](https://developer.apple.com/documentation/uikit/uitabbarcontroller?language=objc)


### Tabs

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_tab_navigation_bottom_navigation_.bottomnavigation">Описание класса</a></div>


Компонент Tabs является кроссплатформенной реализацией [Tabs UI из гайдлайнов Material Design](https://material.io/design/components/tabs.html#usage). Рекомендуется для навигации среднего уровня.

Он может содержать в себе единственный [`TabStrip`](docs#tabstrip) (который содержит несколько TabStripItems), и несколько [`TabContentItem`](docs#tabcontentitem) (соответствующих каждому элементу из TabStripItem)

В отличие от компонента [`Bottom Navigation`](docs#bottom-navigation), компонент Tabs сделан для вкладок общей функциональности и поддерживает переходы и жесты.


```html
<tabs bind:selectedIndex={selectedTab}>

    <!-- Bottom tab UI создается с помощью TabStrip (контейнер) и TabStripItem (для каждой вкладки)-->
    <tabStrip>
        <tabStripItem>
            <label text="Домой"></label>
            <image src="font://&#xf015;" class="fas t-36"></image>
        </tabStripItem>
        <tabStripItem class="special">
            <label text="Профиль"></label>
            <image src="font://&#xf007;" class="fas t-36"></image>
        </tabStripItem>
        <tabStripItem class="special">
            <label text="Поиск"></label>
            <image src="font://&#xf00e;" class="fas t-36"></image>
        </tabStripItem>
    </tabStrip>

    <!-- Количество компонентов TabContentItem должно соответствовать количеству компонентов TabStripItem -->
    <tabContentItem>
        <gridLayout>
            <label text="Домашняя страница" class="h2 text-center"></label>
        </gridLayout>
    </tabContentItem>
    <tabContentItem>
        <gridLayout>
            <label text="Страница профиля" class="h2 text-center"></label>
        </gridLayout>
    </tabContentItem>
    <tabContentItem>
        <gridLayout>
            <label text="Страница поиска" class="h2 text-center"></label>
        </gridLayout>
    </tabContentItem>

</tabs>
```

#### Свойства

| Имя | Тип | Описание |
|------|------|-------------|
| `selectedIndex` | `number` | Возвращает или задаёт индекс выбранной вкладки в BottomNavigation.
| `tabsPosition` | `"top", "bottom"` | Возвращает или задаёт позицию для Tabs. По умолчанию:  top

#### События

| Имя | Описание |
|------|-------------|
| `selectedIndexChanged` | Вызывается, когда изменяется свойство selectedIndex.
| `loaded` | Вызывается, когда представление будет загружено.
| `unloaded` | Вызывается, когда представление будет убрано.
| `layoutChanged` | Вызывается, когда границы макета представления изменяются из-за изменения макета.


#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`FrameLayout`](https://developer.android.com/reference/android/widget/FrameLayout)	| [`UITabViewController`](https://developer.apple.com/documentation/uikit/uitabbarcontroller?language=objc)