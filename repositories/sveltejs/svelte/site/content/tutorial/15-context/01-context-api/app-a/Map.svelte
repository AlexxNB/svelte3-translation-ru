<script>
	import { onDestroy } from 'svelte';
	import { mapbox } from './mapbox.js';

	// установите контекст здесь...

	export let lat;
	export let lon;
	export let zoom;

	let container;
	let map;

	function load() {
 		map = new mapbox.Map({
 			container,
 			style: 'mapbox://styles/mapbox/streets-v9',
 			center: [lon, lat],
 			zoom,
 		});
 	}

 	onDestroy(() => {
 		if (map) map.remove();
 	});
</script>

<!-- этот специальный элемент будет объяснен в следующем разделе -->
<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css"
		on:load={load}
	/>
</svelte:head>


<div bind:this={container}>
	{#if map}
		<slot/>
	{/if}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>