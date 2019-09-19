---
title: Горячая перезагрузка модулей (HMR)
description: Эксперементируем с  HMR
pubdate: 2019-09-19
author: Halfnelson
authorURL: https://twitter.com/halfnelson_au/
---


Очень крутой разработчик [Rixo](https://github.com/rixo), из сообщества Svelte, реализовал предварительную поддержку горячей перезагрузки модулей в Svelte. Это краткое руководство о том, как настроить её в своем проекте Svelte Native.

## Начните с создания проекта Svelte Native

Используйте существующий или начните новый проект, как описано в статье [Начало работы](/blog/svelte-native-quick-start)

### Замените svelte-loader на форк от Rixo

Отредактируйте `package.json` и замените:

```js
    "svelte-loader": "github:halfnelson/svelte-loader#fix-virtual-purge"
```

на


```js
    "svelte-loader": "github:rixo/svelte-loader#hmr"
```

### Включите параметр HMR в Webpack

Отредактируйте `webpack.config.js` и замените: 

```js
   {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'svelte-loader',
                options: {
                    preprocess: svelteNativePreprocessor()
                }
            }
        ]
    }
```

на

```js
   {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'svelte-loader',
                options: {
                    preprocess: svelteNativePreprocessor(),
                    hotReload: true,
                    hotOptions: {
                        native: true
                    }
                }
            }
        ]
    }
```

### Проверьте работу

Теперь все должно работать. Запустите своё приложение командой: 

```js
tns run android
```

затем сделайте какую-либо правку в исходных файлах и следите за обновлением отображения.
![HMR в действии](/media/svelte-hmr-2.gif)



