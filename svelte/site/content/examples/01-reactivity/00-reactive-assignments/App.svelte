<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	{count === 0 ? 'Кликни по мне' : `Кликов: ${count}`}
</button>