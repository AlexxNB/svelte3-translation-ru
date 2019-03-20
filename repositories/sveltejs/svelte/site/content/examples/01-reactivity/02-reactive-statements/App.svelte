<script>
	let count = 0;

	$: if (count >= 10) {
		alert(`count слишком велико!`);
		count = 9;
	}

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	{count === 0 ? 'Кликни по мне' : `Кликов: ${count}`}
</button>