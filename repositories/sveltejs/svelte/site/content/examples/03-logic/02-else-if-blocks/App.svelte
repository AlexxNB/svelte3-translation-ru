<script>
	let x = 7;
</script>

{#if x > 10}
	<p>{x} больше, чем 10</p>
{:else if 5 > x}
	<p>{x} меньше, чем 5</p>
{:else}
	<p>{x} между 5 и 10</p>
{/if}