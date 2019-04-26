---
title: Элементы Audio и Video
---

Элементы `<audio>` и `<video>` имеют несколько свойств, к которыми можно привязаться. Этот пример демонстрирует некоторые из них.

После строки №116 добавьте привязки к `currentTime={time}`, `duration` и `paused`:

```html
<video
	poster="https://svelte-assets.surge.sh/caminandes-llamigos.jpg"
	src="https://svelte-assets.surge.sh/caminandes-llamigos.mp4"
	on:mousemove={handleMousemove}
	on:mousedown={handleMousedown}
	bind:currentTime={time}
	bind:duration
	bind:paused
></video>
```

> Как вы помните, `bind:duration` то же самое, что и `bind:duration={duration}`

Теперь, когда вы запустите видео, `time`, `duration` и` paused` будут постоянно обновляться. Это означает, что мы можем использовать их для создания нестандартных элементов управления.

> Обычно для получения значения `currentTime`, используют отслеживание событий `timeupdate`. Но эти события запускаются слишком редко, что приводит к дерганному интерфейсу. Svelte работает лучше - он проверяет `currentTime`, используя `requestAnimationFrame`.

Вот все возможные привязки для `<audio>` и `<video>` — четыре *только для чтения*...

* `duration` (только для чтения) — общая продолжительность, в секундах
* `buffered` (только для чтения) — массив объектов `{start, end}`
* `seekable` (только для чтения) — то же самое
* `played` (только для чтения) — то же самое

...и четыре *двусторонние* привязки:

* `currentTime` — текущая позиция проигрывания, в секундах
* `playbackRate` — как быстро играть видео, где `1` обычная скорость
* `paused` — остановлено проигрывание или нет
* `volume` — громкость, значение между 0 и 1