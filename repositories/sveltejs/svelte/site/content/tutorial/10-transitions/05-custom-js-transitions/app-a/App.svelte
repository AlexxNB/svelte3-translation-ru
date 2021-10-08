<script>
	let visible = false;

	function typewriter(node, { speed = 50 }) {
		// тут должна быть реализация перехода

		return {

		};
	}
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	показать
</label>

{#if visible}
	<p transition:typewriter>
		Съешь же ещё этих мягких французских булок, да выпей чаю
	</p>
{/if}