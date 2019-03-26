---
title: Панель действий
---

### ActionBar

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar">Описание класса</a></div>

`<actionBar>` — это UI компонент, который размещает панель инструментов вверху экрана. 

Этот компонент является абстракцией NativeScript для [app bar](https://developer.android.com/training/appbar/) в Android и [navigation bar](https://developer.apple.com/design/human-interface-guidelines/ios/bars/navigation-bars/) в iOS.


#### Использование заголовка

```html
<actionBar title="MyApp" />
```

#### Использование представления заголовка

```html
<actionBar>
  <stackLayout orientation="horizontal">
    <image src="res://icon" width="40" height="40" verticalAlignment="center" />
    <label text="NativeScript" fontSize="24" verticalAlignment="center" />
  </stackLayout>
</actionBar>
```

#### Установка иконки приложения для Android

```html
<actionBar title="My App" android.icon="res://icon" android.iconVisibility="always" />
```

#### Удаление границы

По умолчанию по низу `<actionBar>` рисуется граница. В дополнение к границе, на устройствах iOS также применяется фильтр полупрозрачности для `<actionBar>`.

Для того, чтобы убрать эту стилизацию, установите свойству `flat` значение `true`.

```html
<actionBar title="My App" flat="true" />
```

#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `title` | `String` | Возвращает или задаёт заголовок, отображаемый на панели.
| `android.icon` | `String` | Возвращает или задаёт иконку, которая будет отображена на Android устройствах.
| `android.iconVisibility` | `String` | Возвращает или задаёт видимость иконки на Android устройствах.
| `flat` | `boolean` | Удаляет границу на Android и убирает полупрозрачность на iOS. По умолчанию: `false`.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.Toolbar`](https://developer.android.com/reference/android/widget/Toolbar.html)	| [`UINavigationBar`](https://developer.apple.com/documentation/uikit/uinavigationbar)


### ActionItem

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem">Описание класса</a></div>

`<actionItem>` — UI компонент, который позволяет добавить кнопки на компонент панели действий `<actionBar>`.


#### Основное использование

```html
<actionBar title="My App">
  <actionItem on:tap="{onTapShare}"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_menu_share" android.position="actionBar" />
  <actionItem on:tap="onTapDelete"
    ios.systemIcon="16" ios.position="right"
    text="delete" android.position="popup" />
</actionBar>
```

#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `ios.systemIcon` | `Number` | Возвращает или задаёт иконку кнопки `ActionItem` для iOS. Значение должно быть числом из [Перечисление `UIBarButtonSystemItem`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIBarButtonItem_Class/#//apple_ref/c/tdef/UIBarButtonSystemItem).
| `android.systemIcon` | `String` | Возвращает или задаёт иконку кнопки `ActionItem` для Android. Значение должно быть именем [drawable-ресурса](http://androiddrawables.com).
| `ios.position` | `String` | Возвращает или задаёт позицию кнопки `ActionItem` на панели `ActionBar` для iOS.<br/>Допустимые значения: `left` или `right`.<br/>По умолчанию: `left`.
| `android.position` | `String` | Возвращает или задаёт позицию `ActionItem` на панели `ActionBar` для Android.<br/>Допустимые значения:<br/>`actionBar` (размещает кнопку в панели действий)<br/>`popup` (размещает кнопку в меню опций; отрисовывается как текст)<br/>`actionBarIfRoom` (размещает кнопку в панели действий `ActionBar` при наличии свободного пространства; иначе, размещает кнопку в меню опций)<br/>По умолчанию: `actionBar`.

#### События

| Имя | Описание |
|-----|----------|
| `tap`| Вызывается, когда пользователь тапает по `ActionItem`.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.Toolbar`](https://developer.android.com/reference/android/widget/Toolbar.html) | [`UINavigationItem`](https://developer.apple.com/documentation/uikit/uinavigationitem)


### NavigationButton

<div class="nsref"><a title="Документация NativeScript" href="https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton">Описание класса</a></div>

`<navigationButton>` — UI компонент, который является абстракцией для кнопки навигации в Android и кнопки 'Назад' в iOS.

Расширяет [`<actionItem>`](docs#actionitem).


```html
<actionBar title="My App">
  <navigationButton text="Go back" android.systemIcon="ic_menu_back" on:tap="{goBack}" />
</actionBar>
```

#### Свойства

| Имя | Тип | Описание |
|-----|-----|----------|
| `text` | `String` | (только iOS) Задаёт текст кнопки.
| `android.systemIcon` | `String` | (только Android) Задаёт иконку для кнопки. Можно указать любую системную иконку, чьё имя начинается с префикса `ic_`.  Полный список таких иконок можно посмотреть тут: [Android класс `R.drawable`](https://developer.android.com/reference/android/R.drawable.html).

#### События

| Имя | Описание |
|-----|----------|
| `tap`| Вызывается, когда пользователь тапает по `<NavigationButton>`.

#### Нативный компонент

| Android | iOS |
|---------|-----|
| [`android.widget.Toolbar`](https://developer.android.com/reference/android/widget/Toolbar.html) | [`UINavigationItem`](https://developer.apple.com/documentation/uikit/uinavigationitem)