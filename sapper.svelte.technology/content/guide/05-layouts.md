---
title: Макеты
---

До сих пор мы рассматривали страницы как полностью автономные компоненты - при переходе между страницами существующий компонент уничтожался, а новый занимал его место.

Но во многих приложениях есть элементы, которые должны быть видны на *каждой* странице, такие как навигация или подвал. Вместо того, чтобы повторять их на каждой странице, мы можем использовать компоненты *макета*.

Чтобы создать компонент макета, который будет применяться к каждой странице приложения, создайте файл с именем `src/routes/_layout.html`. По умолчанию компонент макета (такой же использует Sapper, если вы не сделали свой) выглядит следующим образом...

```html
<svelte:component this={child.component} {...child.props}/>
```

... но мы можем добавить любую разметку, стили и поведение, которые мы хотим. Например, давайте добавим панель навигациии:

```html
<!-- src/routes/_layout.html -->
<nav>
	<a href=".">Главная</a>
	<a href="about">О сайте</a>
	<a href="settings">Настройки</a>
</nav>

<svelte:component this={child.component} {...child.props}/>
```

Sapper вычисляет свойство `child` на основе того, на какую страницу перешел пользователь. Если мы создадим страницы для `/`, `/about` и`/settings`...

```html
<!-- src/routes/index.html -->
<h1>Главная</h1>
```

```html
<!-- src/routes/about.html -->
<h1>О сайте</h1>
```

```html
<!-- src/routes/settings.html -->
<h1>Настройки</h1>
```
...навигация всегда будет видна, и переход между тремя страницами приведет только к замене содержимого элемента `<h1>`.

### Вложенные маршруты

Предположим, что у нас не просто одна страница `/settings`, а есть и вложенные страницы, вроде `/settings/profile` и `/settings/notifications` с общим подменю (для реального примера см. [github.com/settings](https://github.com/settings)).

Мы можем создать макет, который применяется только к страницам, расположенным ниже `/settings` (при этом останется и корневой макет с навигацией):

```html
<!-- src/routes/settings/_layout.html -->
<h1>Настройки</h1>

<div class="submenu">
	<a href="settings/profile">Профиль</a>
	<a href="settings/notifications">Уведомления</a>
</div>

<svelte:component this={child.component} {...child.props}/>
```

В дополнение к `child.component` и `child.props`, есть свойство `child.segment`, которое может быть полезно для стилизации:

```diff
<div class="submenu">
-	<a href="settings/profile">Профиль</a>
-	<a href="settings/notifications">Уведомления</a>
+	<a
+		class={child.segment === "profile" ? "selected" : ""}
+		href="settings/profile"
+	>Профиль</a>
+
+	<a
+		class={child.segment === "notifications" ? "selected" : ""}
+		href="settings/notifications"
+	>Уведомления</a>
</div>
```


### Прелоадинг

Как и компоненты страницы, компоненты макета могут использовать `preload`:

```html
<!-- src/routes/foo/_layout.html -->
<svelte:component
	this={child.component}
	someData={thingAllChildComponentsWillNeed}
	{...child.props}
/>

<script>
	export default {
		async preload() {
			return {
				// штуки, которые нужны всем дочерним компонентам
				thingAllChildComponentsWillNeed: await loadSomeData()
			};
		}
	};
</script>
```