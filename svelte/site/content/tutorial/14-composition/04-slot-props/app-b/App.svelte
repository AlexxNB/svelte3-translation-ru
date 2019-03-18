<script>
	import Hoverable from './Hoverable.svelte';
</script>

<style>
	div {
		padding: 1em;
		margin: 0 0 1em 0;
		background-color: #eee;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}
</style>

<Hoverable let:hovering={active}>
	<div class:active>
		{#if active}
			<p>На меня навели.</p>
		{:else}
			<p>Наведи на меня!</p>
		{/if}
	</div>
</Hoverable>

<Hoverable let:hovering={active}>
	<div class:active>
		{#if active}
			<p>На меня навели.</p>
		{:else}
			<p>Наведи на меня!</p>
		{/if}
	</div>
</Hoverable>

<Hoverable let:hovering={active}>
	<div class:active>
		{#if active}
			<p>На меня навели.</p>
		{:else}
			<p>Наведи на меня!</p>
		{/if}
	</div>
</Hoverable>