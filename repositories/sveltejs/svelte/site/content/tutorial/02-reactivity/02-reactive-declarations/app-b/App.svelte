<script>
	let count = 0;
	$: doubled = count * 2;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	{count === 0 ? 'Кликни по мне' : `Кликов: ${count}`}
</button>

<p>Удвоим {count} и получим {doubled}</p>