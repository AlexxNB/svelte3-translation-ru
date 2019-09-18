---
title: Настройка редактора кода
description: Инструкция по конфигурации линтера и подсветки синтаксиса
author: Rich Harris
authorURL: https://twitter.com/Rich_Harris
draft: true
---

*Coming soon* This post will walk you through setting up your editor so that recognises Svelte files:

* eslint-plugin-svelte3
* svelte-vscode
* associating .svelte files with HTML in VSCode, Sublime, Atom, etc etc etc

## Vim/Neovim

Для проверки всех `*.svelte` файлов как HTML файлов, добавьте следующую строку в файл `init.vim`:

```bash
au! BufNewFile,BufRead *.svelte set ft=html
```

ЧТобы временно включить подсветку синтаксиса HTML для текущего буфера используйте:

```bash
:set ft=html
```

Для того чтобы прописать тип для конкретного файла, используйте [modeline](https://vim.fandom.com/wiki/Modeline_magic):

```bash
<!-- vim: set ft=html :-->
```
