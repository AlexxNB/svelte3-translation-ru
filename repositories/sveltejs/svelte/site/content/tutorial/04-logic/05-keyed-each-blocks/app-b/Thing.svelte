<script>
	// `current` обновляется при изменении значения свойства...
	const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚',
	};

	// `name` обновляется при изменении значения свойства...
	export let name;

	// ...а переменная `emoji` фиксируется при инициализации компонента
	const emoji = emojis[name];
</script>

<p>
	<span>Смайлик для {name}: {emoji}</span>
</p>

<style>
	p {
		margin: 0.8em 0;
	}
	span {
		display: inline-block;
		padding: 0.2em 1em 0.3em;
		background-color: #ffdfd3;
	}
</style>
