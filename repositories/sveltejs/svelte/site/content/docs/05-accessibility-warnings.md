---
title: Предупреждения a11y
---

Доступность (сокращенно a11y) не всегда легко получить правильно, но Svelte поможет, предупредив вас, если вы напишете недоступную разметку. Однако имейте в виду, что многие проблемы с доступностью могут быть выявлены только во время выполнения с помощью других автоматизированных инструментов и путем ручного тестирования вашего приложения.

Вот список проверок доступности, которые Svelte сделает за вас.

---

### `a11y-accesskey`

Не применять `accesskey` к элементу. Клавиши доступа - это атрибуты HTML, которые позволяют веб-разработчикам назначать сочетания клавиш элементам. Несоответствия между сочетаниями клавиш и командами клавиатуры, используемыми только пользователями программы чтения с экрана и клавиатуры, создают осложнения доступности, поэтому во избежание этого не следует использовать клавиши доступа.

```sv
<!-- A11y: Avoid using accesskey -->
<div accessKey='z'></div>
```

---

### `a11y-aria-attributes`

Некоторые зарезервированные элементы DOM не поддерживают роли, состояния и свойства ARIA. Это часто происходит потому, что они не видны, например, `meta`, `html`, `script`, `style`. Это правило обеспечивает, чтобы эти элементы DOM не содержали реквизита `aria-*`.

```sv
<!-- A11y: <meta> should not have aria-* attributes -->
<meta aria-hidden="false">
```

---

### `a11y-autofocus`

Сделайте так, чтобы `autofocus` не использовался для элементов. Элементы автофокусировки могут вызвать проблемы с удобством использования как для зрячих, так и для незрячих пользователей.

```sv
<!-- A11y: Avoid using autofocus -->
<input autofocus>
```

---

### `a11y-distracting-elements`

Обеспечивает отсутствие отвлекающих элементов. Элементы, которые отвлекающие внимание, могут вызвать проблемы с доступом у пользователей с ослабленным зрением. Такие элементы, скорее всего, устарели, и их следует избегать.

Следующие элементы визуально отвлекают: `<quee>` и `<blink>`.

```sv
<!-- A11y: Avoid <marquee> elements -->
<marquee />
```

---

### `a11y-hidden`

Некоторые элементы DOM полезны для навигации по программам чтения с экрана и не должны быть скрыты.

```sv
<!-- A11y: <h2> element should not be hidden -->
<h2 aria-hidden="true">невидимый заголовок</h2>
```

---

### `a11y-img-redundant-alt`

Атрибут img alt не должен содержать слова image, picture или photo. Программы чтения с экрана уже объявляют элементы `img` в качестве изображения. Нет необходимости использовать такие слова, как _image_, _photo_ и/или _picture_.

```sv
<img src="foo" alt="Foo eating a sandwich." />

<!-- aria-hidden, won't be announced by screen reader -->
<img src="bar" aria-hidden="true" alt="Picture of me taking a photo of an image" />

<!-- A11y: Screenreaders already announce <img> elements as an image. -->
<img src="foo" alt="Photo of foo being weird." />

<!-- A11y: Screenreaders already announce <img> elements as an image. -->
<img src="bar" alt="Image of me at a bar!" />

<!-- A11y: Screenreaders already announce <img> elements as an image. -->
<img src="foo" alt="Picture of baz fixing a bug." />
```

---

### `a11y-invalid-attribute`

Убедитесь, что атрибут доступности имеет допустимое значение. Например, `href` не должен быть пустым, `'#'` или `javascript:`.

```sv
<!-- A11y: '' is not a valid href attribute -->
<a href=''>invalid</a>
```

---

### `a11y-label-has-associated-control`

Убидитесь, что тег `<label>` имеет текстовую метку и связанный с ней элемент управления.

Существует два поддерживаемых способа связать метку с элементом управления:

- Обертывание элемента управления в тег `<label>`.
- Добавление `for` к тегу `<label>` и присвоение ему идентификатора DOM, который указывает на элемент `<input>` на странице.

```sv
<label for="id">B</label>

<label>C <input type="text" /></label>

<!-- A11y: A form label must be associated with a control. -->
<label>A</label>
```

---

### `a11y-media-has-caption`

Предоставление субтитров для мультимедиа очень важно для глухих пользователей. Субтитры должны представлять собой транскрипцию или перевод диалога, звуковых эффектов, соответствующих музыкальных реплик и другой соответствующей звуковой информации. Это важно не только для доступности, но также может быть полезно для всех пользователей в случае, если носитель недоступен (аналогично тексту `alt` на изображении, когда изображение не может загрузить).

Подписи должны содержать всю важную и актуальную информацию для понимания соответствующих типов медиа. Это может означать, что подписи не являются отображением 1:1 диалога в медиа-контенте. Однако для видеокомпонентов с атрибутом «без звука» подписи не требуются.

```sv
<video><track kind="captions"/></video>

<audio muted></audio>

<!-- A11y: Media elements must have a <track kind=\"captions\"> -->
<video></video>

<!-- A11y: Media elements must have a <track kind=\"captions\"> -->
<video><track /></video>
```

---

### `a11y-misplaced-role`

Некоторые зарезервированные элементы DOM не поддерживают роли, состояния и свойства ARIA. Это часто происходит потому, что они не видны, например, `meta`, `html`, `script`, `style`. Это правило обеспечивает, чтобы эти элементы DOM не содержали реквизитов `role`.

```sv
<!-- A11y: <meta> should not have role attribute -->
<meta role="tooltip">
```

---

### `a11y-misplaced-scope`

Атрибут scope следует использовать только для элементов `<th>`.

```sv
<!-- A11y: The scope attribute should only be used with <th> elements -->
<div scope="row" />
```

---

### `a11y-missing-attribute`

Убедитесь, чтобы этот элемент имел необходимый атрибут доступности. Это включает в себя следующие проверки:

- `<a>` должен иметь href (если только это не тег [fragment-defining](https://github.com/sveltejs/svelte/issues/4697))
- `<область>` должна иметь alt, aria-label или aria-labeledby
- `<html>` должен иметь lang
- `<iframe>` должен иметь title
- `<img>` должен иметь alt
- `<объект>` должен иметь заголовок, aria-label или aria-labelledby
- `<input type="image">` должен иметь alt, aria-label или aria-labelledby

```sv
<!-- A11y: <input type=\"image\"> element should have an alt, aria-label or aria-labelledby attribute -->
<input type="image">

<!-- A11y: <html> element should have a lang attribute -->
<html></html>

<!-- A11y: <a> element should have an href attribute -->
<a>text</a>
```

---

### `a11y-missing-content`

Убедитесь, чтобы элементы заголовка (`h1`, `h2` и т. д.) и якоря имели контент и чтобы контент был доступен для программ чтения с экрана

```sv
<!-- A11y: <a> element should have child content -->
<a href='/foo'></a>

<!-- A11y: <h1> element should have child content -->
<h1></h1>
```

---

### `a11y-mouse-events-have-key-events`

Убедитесь, чтобы `on:mouseover` и `on:mouseout` сопровождались `on:focus` и `on:blur`, соответственно. Это помогает гарантировать, что любая функциональность, вызванная этими событиями мыши, также доступна пользователям клавиатуры.

```sv
<!-- A11y: on:mouseover must be accompanied by on:focus -->
<div on:mouseover={handleMouseover} />

<!-- A11y: on:mouseout must be accompanied by on:blur -->
<div on:mouseout={handleMouseout} />
```

---

### `a11y-positive-tabindex`

Избегайте положительных значений свойств `tabindex`. Это выведет элементы из ожидаемого порядка табуляции, создавая запутанный опыт для пользователей клавиатуры.

```sv
<!-- A11y: avoid tabindex values above zero -->
<div tabindex='1'/>
```

---

### `a11y-structure`

Убедитесь, чтобы определенные элементы DOM имели правильную структуру.

```sv
<!-- A11y: <figcaption> must be an immediate child of <figure> -->
<div>
<figcaption>Image caption</figcaption>
</div>
```

---

### `a11y-unknown-aria-attribute`

Использовать только известные атрибуты ARIA. Это основано на [WAI-ARIA States and Properties spec](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties).

```sv
<!-- A11y: Unknown aria attribute 'aria-labeledby' (did you mean 'labelledby'?) -->
<input type="image" aria-labeledby="foo">
```

---

### `a11y-unknown-role`

Элементы с ролями ARIA должны использовать допустимую, неабстрактную роль ARIA. Ссылка на определения ролей находится на сайте [WAI-ARIA](https://www.w3.org/TR/wai-aria/#role_definitions).

```sv
<!-- A11y: Unknown role 'toooltip' (did you mean 'tooltip'?) -->
<div role="toooltip"></div>
```