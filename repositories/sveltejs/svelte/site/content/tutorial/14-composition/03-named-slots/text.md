---
title: Именованные слоты
---

В предыдущем примере у нас был только *слот по-умолчанию*, который напрямую отображает переданные элементы. Иногда требуется больше контроля над размещением содержимого в разметке, например, в нашем компоненте `<ContactCard>`. Тут нам могут помочь *именованные слоты*.

В `ContactCard.svelte` добавьте атрибут `name` в каждый слот:

```html
<article class="contact-card">
	<h2>
		<slot name="name">
			<span class="missing">Имя не указано</span>
		</slot>
	</h2>

	<div class="address">
		<slot name="address">
			<span class="missing">Адрес не указан</span>
		</slot>
	</div>

	<div class="email">
		<slot name="email">
			<span class="missing">E-Mail не указан</span>
		</slot>
	</div>
</article>
```

Затем добавьте элементы с соответствующими атрибутами `slot=" ... "` внутри компонента `<ContactCard>`:

```html
<ContactCard>
	<span slot="name">
		П. Шерман
	</span>

	<span slot="address">
		улица Валаби, д.42<br>
		Сидней
	</span>
</ContactCard>
```