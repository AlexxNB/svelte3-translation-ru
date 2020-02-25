<script>
	function handleClick() {
		alert('только одно оповещение')
	}
</script>

<button on:click|once={handleClick}>
	Нажми меня
</button>
