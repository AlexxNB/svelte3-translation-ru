<script>
	import { fly } from 'svelte/transition';
	let visible = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	показать
</label>

{#if visible}
	<p transition:fly="{{ y: 200, duration: 2000 }}">
		Влетает и улетает
	</p>
{/if}