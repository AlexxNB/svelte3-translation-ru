---
title: Начало работы
---

### Быстрый старт

#### Установите Nativescript

Svelte-Native работает поверх NativeScript. Чтобы установить NativeScript выполните:

```bash
$ npm install -g nativescript
```

Проверьте, что он установился, запустив команду `tns`:

![Success](/media/tns-success.png)


#### Установите мобильное приложение NativeScript Playground

Svelte-Native действительно является нативным, поэтому для его работы требуется мобильное устройство. Настройка сборки приложения под iOS или Android не очень простая процедура, поэтому мастера из Progress создали приложение NativeScript Playground. Это позволяет нам запускать код приложения Svelte-Native без необходимости сборки полноценного мобильного приложения.


[<img src="/media/app-store.png" alt="Скачать а App Store">](https://itunes.apple.com/us/app/nativescript-playground/id1263543946?mt=8&amp;ls=1)
[<img src="/media/google-play.png" alt="Скачать в Google Play">](https://play.google.com/store/apps/details?id=org.nativescript.play)

#### Создайте новое приложение Svelte-Native

Самый простой способ начать — использовать последнюю веерсию [шаблона приложения](https://github.com/halfnelson/svelte-native-template)

```bash
$ degit halfnelson/svelte-native-template myapp
```

Голое приложение svelte-native будет находится в папке `myapp`

#### Запустите приложение

Запустите приложение, которое вы только что создали:

```bash
$ cd myapp
$ tns preview
```

В терминале появится ASCII QR-код, который нужно будет отсканировать в приложении NativeScript Playground, которое вы установили ранее.

![Запущенное приложение](/media/quick-start-screenshot.png)


### Расширенная установка

Чтобы создавать приложения готовые к распространению, нужно настроить систему для локальной компиляции.

Svelte-Native работает поверх немодифицированной платформы NativeScript. Инструкции по установке для вашей операционной системы можно найти в [Руководстве по Native Script](https://docs.nativescript.org/start/quick-setup)

Проверить, что настройка среды сборки NativeScript была выполнена правильно, можно с помощью Nativescript команды doctor:

```bash
$  tns doctor
```

Когда все будет в порядке, вы можете выполнить полную компиляцию и запуск приложения следующим образом:

```bash
$ tns run android
```

или

```bash
$ tns run ios
```


