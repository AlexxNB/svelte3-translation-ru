---
title: Настройка редактора кода
description: Инструкция по конфигурации линтера и подсветки синтаксиса
author: Rich Harris
authorURL: https://twitter.com/Rich_Harris
draft: true
---

*__Coming soon__*

 This post will walk you through setting up your editor so that recognises Svelte files:

* eslint-plugin-svelte3
* svelte-vscode
* associating .svelte files with HTML in VSCode, Sublime, etc.

## Atom

Чтобы файлы `.svelte` воспринимались как HTML,  в меню выберите *__Правка → Настройки__* и добавьте следующие две строки в  раздел `core`:

```cson
"*":
  core:
    …
    customFileTypes:
	    "text.html.basic": [
        "svelte"
      ]
```

## Vim/Neovim

Для проверки всех `*.svelte` файлов как HTML файлов, добавьте следующую строку в файл `init.vim`:

```
au! BufNewFile,BufRead *.svelte set ft=html
```

Чтобы временно включить подсветку синтаксиса HTML для текущего буфера используйте:

```
:set ft=html
```

Для того чтобы прописать тип для конкретного файла, используйте [modeline](https://vim.fandom.com/wiki/Modeline_magic):

```
<!-- vim: set ft=html :-->
```

## Visual Studio Code

Чтобы файлы `*.svelte` воспринимались как HTML, добавьте следуюшие строки в файл `settings.json`:

```cson
  "files.associations": {
    "*.svelte": "html"
  }
```

## JetBrains WebStorm

Чтобы в WebStorm файлы `*.svelte` воспринимались как HTML, необходимо создать новую ассоциацию для файлового типа. Перейдите на [сайт JetBrains](https://www.jetbrains.com/help/webstorm/creating-and-registering-file-types.html), чтобы узнать как это сделать.

## Sublime Text 3

Откройте любой файл `.svelte`.

Выберите пункт меню *__View → Syntax → Open all with current extension as... → HTML__*.