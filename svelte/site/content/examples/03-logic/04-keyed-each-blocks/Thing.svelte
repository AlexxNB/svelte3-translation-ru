<script>
	// `value` обновляется при изменении значения свойства...
	export let value;

	// ...а `valueAtStart` фиксируется при инициализации
	const valueAtStart = value;
</script>

<p>{valueAtStart} / {value}</p>