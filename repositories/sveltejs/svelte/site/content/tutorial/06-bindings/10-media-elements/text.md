---
title: Медиа-элементы
---

Элементы `<audio>` и `<video>` имеют несколько свойств, к которым можно привязаться. Этот пример демонстрирует некоторые из них.

После строки №63 добавьте привязки к `currentTime={time}`, `duration` и `paused`:

```html
<video
	poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
	src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
	on:mousemove={handleMove}
	on:touchmove|preventDefault={handleMove}
	on:mousedown={handleMousedown}
	on:mouseup={handleMouseup}
	bind:currentTime={time}
	bind:duration
	bind:paused>
	<track kind="captions">
</video>
```

> Как вы помните, `bind:duration` то же самое, что и `bind:duration={duration}`

Теперь, когда вы запустите видео, `time`, `duration` и `paused` будут постоянно обновляться. Это означает, что мы можем использовать их для создания нестандартных элементов управления.

> Обычно для получения значения `currentTime`, используют отслеживание событий
> `timeupdate`. Но эти события запускаются слишком редко, что приводит к
> дёрганому интерфейсу. Svelte работает лучше — он проверяет `currentTime`,
> используя `requestAnimationFrame`.

Вот все возможные привязки для `<audio>` и `<video>` — шесть _только для чтения_...

- `duration` (только для чтения) — общая продолжительность, в секундах
- `buffered` (только для чтения) — массив объектов `{start, end}`
- `seekable` (только для чтения) — то же самое
- `played` (только для чтения) — то же самое
- `seeking` (только для чтения) — выполняется ли перемотка
- `ended` (только для чтения) — окончилось ли воспроизведение

...и пять _двусторонних_ привязок:

- `currentTime` — текущая позиция проигрывания, в секундах
- `playbackRate` — скорость воспроизведения, где `1` обычная скорость
- `paused` — остановлено проигрывание или нет
- `volume` — громкость, значение между 0 и 1
- `muted` — логическое значение, указывающее приглушен ли звук

Для видео также доступны привязки для чтения ширины `videoWidth` и высоты `videoHeight`.
