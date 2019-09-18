<script>
	// `current` обновляется при изменении значения свойства...
	export let current;

	// ...а `initial` фиксируется при инициализации
	const initial = value;
</script>

<p>
	<span style="background-color: {initial}">начальный</span>
	<span style="background-color: {current}">текущий</span>
</p>

<style>
	span {
		display: inline-block;
		padding: 0.2em 0.5em;
		margin: 0 0.2em 0.2em 0;
		width: 4em;
		text-align: center;
		border-radius: 0.2em;
		color: white;
	}
</style>