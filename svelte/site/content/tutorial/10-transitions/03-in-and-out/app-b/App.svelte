<script>
	import { fade, fly } from 'svelte/transition';
	let visible = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	показать
</label>

{#if visible}
	<p in:fly="{{ y: 200, duration: 2000 }}" out:fade>
		Влетает, исчезает
	</p>
{/if}