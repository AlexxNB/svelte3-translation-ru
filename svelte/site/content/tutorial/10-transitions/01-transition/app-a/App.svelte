<script>
	let visible = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	показать
</label>

{#if visible}
	<p>
		Появляется и исчезает
	</p>
{/if}