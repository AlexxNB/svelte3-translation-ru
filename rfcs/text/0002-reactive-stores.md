- Start Date: 2018-11-10
- RFC PR: [#5](https://github.com/sveltejs/rfcs/pull/5)
- Svelte Issue: (leave this empty)

# Реактивные хранилища

## Резюме

В этом RFC предлагается замена существующего класса [Store](https://svelte.technology/guide#state-management), которая удовлетворяет следующим целям:

* Работает с дизайном компонента Svelte 3, описанным в [RFC 1](https://github.com/sveltejs/rfcs/pull/4)
* Позволяет любому компоненту подписываться на несколько источников данных вне дерева компонентов, а не на одно большое хранилище уровня приложения.
* Дружественно к проверке типов
* Адаптируется к существующим системам управления состоянием, таким как [Redux](https://redux.js.org/) или [TC39 Observables](https://github.com/tc39/proposal-observable), но не требует их
* Краткий синтаксис, который сокращает количество необходимого кода


## Мотивация

В Svelte 1 мы представили класс `Store`, который предоставляет простое решение для управления состоянием на уровне приложения с API-интерфейсом, который отражает интерфейс отдельных компонентов - `get`, `set`, `on`, `fire` и т.п. Хранилище может быть присоединено к дереву компонентов (или поддереву), после чего оно становится доступным в хуках жизненного цикла и методах как `this.store`, а в шаблонах - с помощью префикса `$` для нужных идентификаторов. После этого Svelte сможет подписаться на изменения данных уровня приложения с разумной детализацией и без лишнего кода.

В Svelte 2 поддержка Store включена по умолчанию.

Этот подход работает достаточно хорошо, но имеет некоторые недостатки:

* Он не позволяет назначать пространства имен или иметь вложенность; хранилище превращается просто в мешок с кучей значений
* Из-за удобства автоматического подключения хранилища к компонентам в него начинают сваливать вещи, которые не связаны исключительно с состоянием приложения, вроде методов `login` и `logout`
* Запись сложных свойств (`foo.bar.baz` и т.п.) выглядит громоздкой
* Поддержка TypeScript практически отсутствует
* Создание производных('вычисляемых') значений требует необычного API
* Работа с существующими системами управления состоянием не так хороша, как должна быть

Большая часть причины дизайна оригинального хранилища - например, факт, что оно автоматически присоединяется к компонентам - заключается в том, что стоимость использования импортированных объектов в Svelte 1 и 2 неоправданно высока. В Svelte 3, согласно [RFC 1](https://github.com/sveltejs/rfcs/pull/4), эта стоимость будет значительно снижена. Поэтому мы можем искать альтернативы без вышеупомянутых недостатков.


## Подробнее о дизайне

По сути, сдвиг происходит от одного единственного наблюдаемого хранилища значений к множеству наблюдаемых значений в хранилище. Вместо этого...

```js
export default new Store({
  user: {
    firstname: 'Fozzie',
    lastname: 'Bear'
  },
  volume: 0.5
});
```

...теперь мы создаем новое хранилище значений `writeable`:

```js
export const user = writable({
  firstname: 'Fozzie',
  lastname: 'Bear'
});

export const volume = writable(0.5);
```

Заинтересованные стороны могут читать (и писать) `user`, не заботясь о `volume`, и наоборот:

```js
import { volume } from './stores.js';

const audio = document.querySelector('audio');

const unsubscribe = volume.subscribe(value => {
  audio.volume = value;
});
```

Внутри разметки компонента удобное сокращение устанавливает необходимые подписки (и отменяет подписку при уничтожении компонента) - префикс `$`:

```html
<script>
  import { user } from './stores.js';
</script>

<h1>Hello {$user.firstname}!</h1>
```

Это скомпилирует что-то вроде следующего:

```js
import { onDestroy } from 'svelte';
import { user } from './stores.js';

function init($$self, $$invalidate) {
  let $user;
  onDestroy(user.subscribe(value => {
    $user = value;
    $$invalidate('$user', $user);
  }));

  $$self.get = () => ({ $user });
}
```


### API хранилища

Хранилище *должно* иметь метод `subscribe`, и оно также может иметь дополнительные методы, такие как `set` и `update`, если оно не только для чтения:

```js
const number = writable(1);

const unsubscribe = number.subscribe(value => {
  console.log(`value is ${value}`); // сразу выводит 1
});

number.set(2); // выводит 2

const incr = n => n + 1;
number.update(incr); // выводит 3

unsubscribe();
number.set(4); // ничего не выводит, т.к. мы отписались
```

Пример реализации этого API:

```js
function writable(value) {
  const subscribers = [];

  function set(newValue) {
    if (newValue === value) return;
    value = newValue;
    subscribers.forEach(s => s[1]());
    subscribers.forEach(s => s[0](value));
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.push(subscriber);
    run(value);

    return () => {
      const index = subscribers.indexOf(subscriber);
      if (index !== -1) subscribers.splice(index, 1);
    };
  }

  return { set, update, subscribe };
}
```


### Хранилища только для чтения

Хранилища доступные только для чтения создаются функцией `readable`:

```js
const unsubscribe = mousePosition.subscribe(pos => {
  if (pos) console.log(pos.x, pos.y);
});

mousePosition.set({ x: 100, y: 100 }); // Ошибка: mousePosition.set is not a function
```

Пример реализации:

```js
function readable(start, value) {
  const subscribers = [];
  let stop;

  function set(newValue) {
    if (newValue === value) return;
    value = newValue;
    subscribers.forEach(s => s[1]());
    subscribers.forEach(s => s[0](value));
  }

  return {
    subscribe(run, invalidate = noop) {
      if (subscribers.length === 0) {
        stop = start(set);
      }

      const subscriber = [run, invalidate];
      subscribers.push(subscriber);
      run(value);

      return function() {
        const index = subscribers.indexOf(subscriber);
        if (index !== -1) subscribers.splice(index, 1);

        if (subscribers.length === 0) {
          stop && stop();
          stop = null;
        }
      };
    }
  };
}

const mousePosition = readable(function start(set) {
  function handler(event) {
    set({
      x: event.clientX,
      y: event.clientY
    });
  }

  document.addEventListener('mousemove', handler);
  return function stop() {
    document.removeEventListener('mousemove', handler);
  }
});
```

### Производные хранилища

Хранилище может быть производным от других хранилищ с помощью `derive`:

```js
const a = writable(1);
const b = writable(2);
const c = writable(3);

const total = derive([a, b, c], ([a, b, c]) => a + b + c);

total.subscribe(value => {
  console.log(`total is ${value}`); // выведет 'total is 6'
});

c.set(4); // выведет 'total is 7'
```

Пример реализации:

```js
function derive(stores, fn) {
  const single = !Array.isArray(stores);
  if (single) stores = [stores];

  const auto = fn.length === 1;
  let value = {};

  return readable(set => {
    let inited = false;
    const values = [];

    let pending = 0;

    const sync = () => {
      if (pending) return;
      const result = fn(single ? values[0] : values, set);
      if (auto && (value !== (value = result))) set(result);
    }

    const unsubscribers = stores.map((store, i) => store.subscribe(
      value => {
        values[i] = value;
        pending &= ~(1 << i);
        if (inited) sync();
      },
      () => {
        pending |= (1 << i);
      })
    );

    inited = true;
    sync();

    return function stop() {
      run_all(unsubscribers);
    };
  });
}
```

> В приведенном выше примере `total` пересчитывается немедленно, всякий раз когда присваиваются значения `a`, `b` или `c`. В некоторых ситуациях это нежелательно; Вы хотите иметь возможность устанавливать значения `a`, `b` *и* `c` без повторного вычисления `total` до тех пор, пока не закончите все нужные присваивания. Это можно сделать, поместив `set(fn(...values))` в микрозадачу, но у этого тоже есть недостатки. (Конечно, это может быть оставлено на усмотрение пользователя.) Является ли это фатальным недостатком в предлагаемом дизайне - следует ли нам стремиться обновлению хранилища когда потребуется его вызов, вместо его обновления на основании обновления входящих в него частей? Или и так сойдет?

Производные хранилища по своей природе также доступны только для чтения. Их можно использовать, например, для фильтрации элементов в списке задач:
.
```html
<script>
  import { writable, derive } from 'svelte/store.js';
  import { todos } from './stores.js';

  const hideDone = writable(false);

  const filtered = derive([todos, hideDone], (todos, hideDone) => todos.filter(todo => {
    return hideDone ? !todo.done : true;
  }));
</script>

<label>
  <input type=checkbox checked={$hideDone} on:change="{e => hideDone.set(e.target.checked)}">
  hide done
</label>

{#each $filtered as todo}
  <p class="{todo.done ? 'faded' : ''}">{todo.description}</p>
{/each}
```


### Соотношение с TC39 Observables

В самом JavaScript есть [предложение уровня stage 1 для объекта Observable](https://github.com/tc39/proposal-observable).

Карты на стол: я лично не фанат объекта Observable. Мне кажется, что он сбивает с толку и с ним неудобно работать. Но есть и конкретные причины, почему, по моему мнению, он не являются хорошим общим решением для представления реактивных значений в компоненте:

* Он представляет не одно значение, изменяющееся со временем, а скорее поток отдельных значений. Это тонкое, но важное различие
* Два разных подписчика на один и тот же Observable могут получать разные значения (!). Тогда как в UI, нам нужно, чтобы две ссылки на одно и то же значение гарантированно были согласованными.
* Observable могут стать 'завершенными', но декларативные компоненты (в Svelte и других фреймворках) сознательно не имеют понятия времени. Две эти вещи несовместимы
* Они имеют семантику обработки ошибок, которая очень часто избыточна (например, какая ошибка может возникнуть при наблюдении за положением мыши?). В случае, когда они не являются избыточными (например, когда данные поступают по сети), ошибки, возможно, лучше всего обрабатывать отдельно, поскольку цель состоит в том, чтобы просто представить значение в шаблоне компонента

Конечно, некоторые Observables *подходят* для представления реактивных значений в шаблоне, и их можно легко адаптировать для работы с нашим дизайном:
```js
function adaptor(observable) {
  return {
    subscribe(fn) {
      const subscriber = observable.subscribe({
        next: fn
      });

      return subscriber.unsubscribe;
    }
  }
}

const observable = Observable.of('red', 'green', 'blue');
const store = adaptor(observable);

const unsubscribe = store.subscribe(color => {
  console.log(color); // выведет red, потом green, потом blue
});
```


### Примеры использования с существующими библиотеками управления состоянием

Если обобщить, тот же метод будет работать и с существующими библиотеками управления состоянием, если они предоставляют необходимые возможности для наблюдения за изменениями. (Правда мне показалось, что это сложно сделать с MobX, но, возможно, я просто недостаточно знаком с этой библиотекой - хотел бы получить комменатрии по этому вопросу)

#### Redux

```js
// src/redux.js
import { createStore } from 'redux';

export const reduxStore = createStore((state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
});

function adaptor(reduxStore) {
  return {
    subscribe(fn) {
      return reduxStore.subscribe(() => {
        fn(reduxStore.getState());
      });
    }
  };
}

export const store = adaptor(reduxStore);
```

```html
<!-- src/Counter.html -->
<script>
  import { reduxStore, store } from './redux.js';
</script>

<button on:click="{() => reduxStore.dispatch({ type: 'INCREMENT' })}">
  Clicks: {$store}
</button>
```


#### Immer

```js
import { writable } from 'svelte/store.js';
import { produce } from 'immer';

function immerObservable(data) {
  const store = writable(data);

  function update(fn) {
    store.update(state => produce(state, fn));
  }

  return {
    update,
    subscribe: store.subscribe
  };
}

const todos = immerObservable([
  { done: false, description: 'walk the dog' },
  { done: false, description: 'mow the lawn' },
  { done: false, description: 'do the laundry' }
]);

todos.update(draft => {
  draft[0].done = true;
});
```


#### Shiz

```js
import { readable } from 'svelte/store.js';
import { value, computed } from 'shiz';

const a = value(1);
const b = computed([a], ([a]) => a * 2);

function shizObservable(shiz) {
  return readable(function start(set) {
    return shiz.on('change', () => {
      set(shiz.get());
    });
  }, shiz.get());
}

const store = shizObservable(b);

const unsubscribe = store.subscribe(value => {
  console.log(value); // выведет 2
});

a.set(2); // выведет 4
```


### Использование с Sapper

В настоящее время `Store` имеет особый подход в приложениях [Sapper](https://sapper.svelte.technology). Экземпляр хранилища может быть создан для каждого запроса, например, чтобы сложить в него пользовательские данные. Это хранилище присоединяется к дереву компонентов во время рендеринга, что позволяет выполнять `<span>{$user.name}</span>` на сервере; затем эти данные передаются в хранилище на стороне клиента.

Важно, чтобы эта функциональность была сохранена. Я еще не уверен в том, как лучше всего этого достичь. Наиболее многообещающее предложение заключается в том, что вместо этого мы будем использовать обычные свойства, переданные в компонент верхнего уровня. (В некоторых случаях это будет более эргономично, поскольку пользователь больше не будет отвечать за настройку клиентской части хранилища.)

> Потенциальные крайние случаи для обсуждения:
> * Что произойдет, если один подписчик иницирует удаление другого подписчика (например, это приведет к уничтожению всего поддерева компонента)?
> * Является ли `$user.name` неоднозначным (т.е. является ли весь `user` хранилищем, или только `user.name`?), И если да, то как мы можем устранить эту неоднозначность?
> * Что произойдет, если вдруг будет объявлена переменная `$user` в области видимости хранилища `user`? Просто не подписываться?


## Как мы будем этому учить

Как и в RFC 1, очень важно, чтобы данные предложения было представлены с достаточным количеством демонстраций того, как работает префикс `$`, с точки зрения сгенерированного кода.

Возможно понять новое хранилище будет проще, чем существуюшее сейчас, поскольку оно связано исключительно с данными и позволяет избежать 'магии' автоматического присоединения хранилища.


## Недостатки

Как и RFC 1, это 'ломающее' изменение, впрочем RFC 1 все равно сломает существующие хранилища. Основная причина не принимать данное предложение состоит в том, что префикс `$` является слишком магическим, хотя я считаю, что удобство перевешивает умеренность кривой обучения.

Другим потенциальным недостатком является то, что все, что использует хранилище (кроме разметки), должно *само* стать реактивным хранилищем; это [красные функции](http://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/). Но эта проблема, по-видимому, является фундаментальной, а не неизбежным следствием подхода, который мы выбрали.

> [RFC 3](https://github.com/sveltejs/rfcs/blob/reactive-declarations/text/0003-reactive-declarations.md) представляет некторое решение этой проблемы


## Альтернативы

* Существующее хранилище (но только в корневом компоненте; в новом дизайне нет возможности добавить хранилища на более низких уровнях)
* Использование существующей библиотеки управления состоянием (и ее навязываний)
* Использование TC39 Observables
* Не иметь вообще какой-либо поддержки хранилища реактивных значений и использование исключительно механизма реактивных присваиваний


## Нерешенные вопросы

* Вопрос с Sapper
* Точная механика того, как будет работать проверка типов
