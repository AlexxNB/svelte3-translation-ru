<script>
	let big = false;
</script>

<style>
	.big {
		font-size: 4em;
	}
</style>

<label>
	<input type=checkbox bind:checked={big}>
	большой
</label>

<div class:big={big}>
	какой-то {big ? 'большой' : 'маленький'} текст
</div>