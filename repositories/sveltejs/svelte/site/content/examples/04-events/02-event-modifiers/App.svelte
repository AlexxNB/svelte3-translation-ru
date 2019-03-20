<script>
	function handleClick() {
		alert('только одно предупреждение')
	}
</script>

<button on:click|once={handleClick}>
	Нажми меня
</button>