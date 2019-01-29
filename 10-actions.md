---
title: Действия
---


### Действия

Действия позволяют добавить элементам дополнительную функциональность. Они представляют собой функцию, возвращающую объект с методами жизненного цикла `update` и `destroy`, которая будет вызвана,когда соответствующий элемент будет добавлен в DOM.

Обычно Действия используют для вещей такого рода:

* всплывающие подсказки
* 'ленивая' загрузка изображений при скролле, например: `<img use:lazyload data-src='giant-photo.jpg'/>`
* перхват кликов по ссылкам для вашего клиентского роутера
* добавление перетаскивания элементов

```html
<!-- { title: 'Actions' } -->
<button on:click={toggleLanguage} use:tooltip={translations[language].tooltip}>
	{language}
</button>

<script>
	export default {
		actions: {
			tooltip(node, text) {
				const tooltip = document.createElement('div');
				tooltip.textContent = text;

				Object.assign(tooltip.style, {
					position: 'absolute',
					background: 'black',
					color: 'white',
					padding: '0.5em 1em',
					fontSize: '12px',
					pointerEvents: 'none',
					transform: 'translate(5px, -50%)',
					borderRadius: '2px',
					transition: 'opacity 0.4s'
				});

				function position() {
					const { top, right, bottom } = node.getBoundingClientRect();
					tooltip.style.top = `${(top + bottom) / 2}px`;
					tooltip.style.left = `${right}px`;
				}

				function append() {
					document.body.appendChild(tooltip);
					tooltip.style.opacity = 0;
					setTimeout(() => tooltip.style.opacity = 1);
					position();
				}

				function remove() {
					tooltip.remove();
				}

				node.addEventListener('mouseenter', append);
				node.addEventListener('mouseleave', remove);

				return {
					update(text) {
						tooltip.textContent = text;
						position();
					},

					destroy() {
						tooltip.remove();
						node.removeEventListener('mouseenter', append);
						node.removeEventListener('mouseleave', remove);
					}
				}
			}
		},

		methods: {
			toggleLanguage() {
				const { language } = this.get();

				this.set({
					language: language === 'russian' ? 'latin' : 'russian'
				});
			}
		}
	};
</script>
```

```json
/* { hidden: true } */
{
	language: "russian",
	translations: {
		russian: {
			tooltip: "Переключить язык",
		},
		latin: {
			tooltip: "Itchsway Anguageslay",
		},
	}
}
```