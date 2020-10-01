---
question: Что с поддержкой TypeScript?
---

Нужно установить [препроцессор](https://github.com/sveltejs/svelte-preprocess). Также вы можете использовать проверку типов из командной строки при помощи [svelte-check](https://www.npmjs.com/package/svelte-check).

Для объявления типа реактивной переменной в шаблоне Svelte используйте следующий синтаксис:
```
let x: number;
$: x = count + 1;
```

Для импорта типа или интерфейса обязательно используйте [модификатор `type`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export)

```
import type { SomeInterface } from './SomeFile';
```

Использовать модификатор `type` необходимо, поскольку `svelte-preprocess` не может знать импортируете ли вы тип или значение — он просто обрабатывает один файл за раз и ничего не знает о других файлах, поэтому не может безопасно убрать импорты, которые содержать только типы если в них нет модификатора.
