---
title: Диалоги
---

### ActionDialog

<div class="nsref"><a title="Документация NativeScript " href="https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#action">Описание класса</a></div>

Метод `action()` отображает список опций, которые можно выбрать, и кнопку отмены. Используйте его, чтобы дать пользователю возможность выбрать один из предложенных вариантов или отказаться от выбора.

Метод является частью [модуля `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

#### Основное использование

```js
import { action } from 'tns-core-modules/ui/dialogs'

action("Ваше сообщение", "Текст кнопки отмены", ["Опция 1", "Опция 2"])
  .then(result => {
    console.log(result);
  });
```




### AlertDialog

<div class="nsref"><a title="Документация NativeScript " href="https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#alert">Описание класса</a></div>

Метод `alert()` показывает сообщение и кнопку OK. Используйте его для показа пользователю информации или уведомлений, которые не требуют от него каких-либо действий.

Метод является частью [модуля `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

#### Основное использование

```js
import { alert } from 'tns-core-modules/ui/dialogs'

alert('Ваше сообщение')
  .then(() => {
    console.log("Окно диалога закрыто.");
  });
```

#### Параметры диалога

```js
alert({
  title: "Заголовок окна",
  message: "Ваше сообщение",
  okButtonText: "Текст кнопки"
}).then(() => {
  console.log("Окно диалога закрыто.");
});
```




### ConfirmDialog

<div class="nsref"><a title="Документация NativeScript " href="https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#confirm">Описание класса</a></div>

Метод `confirm()` показывает сообщение, требующее подтверждения, с кнопками ОК и Отмена.

Метод является частью [модуля `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

#### Основное использование

```js

import { confirm } from 'tns-core-modules/ui/dialogs'

confirm('Ваше сообщение')
  .then(result => {
    console.log(result);
  });
```

#### Параметры диалога

```js
confirm({
  title: "Заголовок окна",
  message: "Ваше сообщение",
  okButtonText: "Текст кнопки ОК",
  cancelButtonText: "Текст кнопки отмены"
}).then(result => {
  console.log(result);
});
```




### LoginDialog

<div class="nsref"><a title="Документация NativeScript " href="https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#login">Описание класса</a></div>

Метод `login()` показывает диалог с полями для ввода учётных данных.

Метод является частью [модуля `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).

#### Основное использование


```js
import { login } from 'tns-core-modules/ui/dialogs'

login("Ваше сообщение", "Значение поля логина", "Значение поля пароля").then(result => {
  console.log(`Данные из диалога: ${result.result}, логин: ${result.userName}, пароль: ${result.password}`);
});
```

#### Параметры диалога

```js
login({
  title: "Заголовок окна",
  message: "Ваше сообщение",
  okButtonText: "Текст кнопки ОК",
  cancelButtonText: "Текст кнопки отмены",
  userName: "Значение поля логина",
  password: "Значение поля пароля"
}).then(result => {
  console.log(`Данные из диалога: ${result.result}, логин: ${result.userName}, пароль: ${result.password}`);
});
```




### PromptDialog

<div class="nsref"><a title="Документация NativeScript " href="https://docs.nativescript.org/api-reference/modules/_ui_dialogs_#prompt">Описание класса</a></div>



Метод `prompt()`, который открывает диалоговое окно со строкой ввода текста.

Метод является частью [модуля `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_).



#### Основное использование


```js
prompt('Ваше сообщение пользователю', 'Значение по умолчанию')
.then(result => {
  console.log(`Данные из диалога: ${result.result}, текст: ${result.text}`)
})
```

#### Параметры диалога

```js
import { prompt } from 'tns-core-modules/ui/dialogs'

prompt({
  title: "Заголовок окна",
  message: "YВаше сообщение",
  okButtonText: "Текст кнопки ОК",
  cancelButtonText: "Текст кнопки отмены",
  defaultText: "Текст по умолчанию",
}).then(result => {
  console.log(`Данные из диалога: ${result.result}, текст: ${result.text}`)
});
```

#### Настройка поля ввода текста

Вы можете настроить тип поля ввода при помощи `inputType`. Можно выбрать между простым текстом (`text`), адресом электронной почты(`email`) и скрытым паролем (`password`).

```js
inputType: inputType.text
inputType: inputType.email
inputType: inputType.password
```

#### Example

```js
import { inputType } from 'tns-core-modules/ui/dialogs'

prompt({
  title: "Запрос E-Mail",
  message: "Сообщите ваш E-Mail:",
  okButtonText: "OK",
  cancelButtonText: "Отмена",
  defaultText: "name@domain.com",
  inputType: dialogs.inputType.email
}).then(result => {
  console.log(`Данные из диалога: ${result.result}, текст: ${result.text}`)
});
```


