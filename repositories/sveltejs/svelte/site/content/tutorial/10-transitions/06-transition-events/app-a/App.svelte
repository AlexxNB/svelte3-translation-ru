<script>
	import { fly } from 'svelte/transition';

	let visible = true;
	let status = 'ждём...';
</script>

<p>статус: {status}</p>

<label>
	<input type="checkbox" bind:checked={visible}>
	показать
</label>

{#if visible}
	<p transition:fly="{{ y: 200, duration: 2000 }}">
		Прилетает и улетает
	</p>
{/if}