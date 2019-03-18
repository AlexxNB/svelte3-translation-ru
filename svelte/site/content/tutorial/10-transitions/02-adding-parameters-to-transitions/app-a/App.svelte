<script>
	import { fade } from 'svelte/transition';
	let visible = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	показать
</label>

{#if visible}
	<p transition:fade>
		Появляется и исчезает
	</p>
{/if}