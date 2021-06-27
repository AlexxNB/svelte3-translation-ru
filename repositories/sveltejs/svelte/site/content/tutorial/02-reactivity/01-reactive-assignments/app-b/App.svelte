<script>
	let count = 0;

	function incrementCount() {
		count += 1;
	}
</script>

<button on:click={incrementCount}>
	{count === 0 ? 'Кликни по мне' : `Кликов: ${count}`}
</button>
