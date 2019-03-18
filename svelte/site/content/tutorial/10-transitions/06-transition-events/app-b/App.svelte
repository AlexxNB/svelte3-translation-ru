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
	<p
		transition:fly="{{ y: 200, duration: 2000 }}"
		on:introstart="{() => status = 'начало появления'}"
		on:outrostart="{() => status = 'начало исчезновения'}"
		on:introend="{() => status = 'конец появления'}"
		on:outroend="{() => status = 'конец исчезновения'}"
	>
		Прилетает и улетает
	</p>
{/if}