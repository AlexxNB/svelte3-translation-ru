---
title: Пользовательские элементы
---

[Пользовательские элементы](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements) (или custom elements) являются новым веб-стандартом для создания элементов DOM, которые изолируют стили и поведение, во многом схожи с компонентами Svelte. Они также являются частью семейства спецификаций [веб-компонентов](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

> Большинству браузеров требуются [полифилы](https://www.webcomponents.org/polyfills) для поддержки пользовательских элементов. Подробнее можно узнать на сайте [caniuse.com](https://caniuse.com/#feat=custom-elementsv1).

Компоненты Svelte можно использовать в качестве пользовательских элементов, выполнив следующие действия:

1. Объявить тег имени `tag`. Его значение должно содержать дефис (`hello-world` в примере ниже)
2. Установить опцию `customElement: true` в конфигурации компилятора

```html
<!-- { filename: 'HelloWorld.html', repl: false } -->
<h1>Привет {name}!</h1>

<script>
	export default {
		tag: 'hello-world'
	};
</script>
```
Теперь при импорте этого файла будет зарегистрирован глобально доступный пользовательский элемент `<hello-world>`, который принимает свойство `name`:

```js
import './HelloWorld.html';
document.body.innerHTML = `<hello-world name="world"/>`;

const el = document.querySelector('hello-world');
el.name = 'everybody';
```

Перейдите на [svelte-custom-elements.surge.sh](http://svelte-custom-elements.surge.sh/) ([исходник тут](https://github.com/sveltejs/template-custom-element)) для более подробных примеров.

Скомпилированные пользовательские элементы по-прежнему являются полноценными компонентами Svelte и с ними можно работать как обычно:

```js
el.get().name === el.name; // true
el.set({ name: 'folks' }); // equivalent to el.name = 'folks'
```

Одним из важных отличий является метод полного *изолирования стилей* - с одной стороны Svelte предотвращает утечку *стилей компонентов* наружу, с другой - пользовательские элементы используют [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM), который  защищает стили *внутри* компонента.

### Использование `<slot>`

Как и обычные компоненты Svelte, пользовательские элементы могут использовать [slots](guide#composing-with-slot) для размещения дочерних элементов.

### Вызов событий

Вы можете отправлять события внутри пользовательских элементов для передачи данных:

```js
// внутри метода компонента
const event = new CustomEvent('message', {
	detail: 'Hello parent!',
	bubbles: true,
	cancelable: true,
	composed: true // позволяет событию преодолеть границу shadow DOM
});

this.dispatchEvent(event);
```

Другие части приложения могут прослушивать эти события при помощи `addEventListener`:

```js
const el = document.querySelector('hello-world');
el.addEventListener('message', event => {
	alert(event.detail);
});
```

> Обратите внимание на свойство `composed: true` у пользовательского события. Это позволяет пользовательскому событию DOM пересекать границу shadow DOM и войти в главное дерево DOM.

### Видимость свойств

Svelte самостоятельно определяет какие свойства имеет пользовательский объект, исходя из значений шаблона и вычисляемых свойств. Например, `name` в нашем примере `<hello-world>`. Но вы можете указать этот список свойств вручную, для того, чтобы явно указать, какие свойства являются 'видимыми' для остальной части вашего приложения:

```js
export default {
	tag: 'my-thing',
	props: ['foo', 'bar']
};
```

### Настройка компилятора

Ранее мы уже использовали `customElement: true` для указания компилятору Svelte, что необъодимо создать пользовательский элемент с использованием `tag` и (необязательно) `props`, объявленных внутри файла компонента.

Но `tag` и `props` можно передать прямо в компилятор:

```js
const { js } = svelte.compile(source, {
	customElement: {
		tag: 'overridden-tag-name',
		props: ['yar', 'boo']
	}
});
```

Эти параметры будут переопределять аналогичные настройки внутри компонента, если таковые имеются.

### Транспиляция

* Пользовательские элементы используют классы ES2015 (`MyThing extends HTMLElement`). Убедитесь, что вы не транспилируете код пользовательского элемента в ES5 и используете минимизатор с поддержкой ES2015, например [uglify-es](https://www.npmjs.com/package/uglify-es).

* Если вам необходима поддержка ES5, обязательно используйте плагин транспилера с поддержкой `Reflect.construct`, такой как [babel-plugin-transform-builtin-classes](https://github.com/WebReflection/babel-plugin-transform-builtin-classes), а также полифил, вроде [custom-elements-es5-adapterjs](https://github.com/webcomponents/webcomponentsjs#custom-elements-es5-adapterjs).
