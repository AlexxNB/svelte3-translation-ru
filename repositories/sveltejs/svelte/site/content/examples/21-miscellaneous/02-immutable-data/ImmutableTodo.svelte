<svelte:options immutable/>

<script>
	import { afterUpdate } from 'svelte';
	import flash from './flash.js';

	export let todo;
	export let toggle;

	let div;

	afterUpdate(() => {
		flash(div);
	});
</script>

<style>
	div {
		cursor: pointer;
		line-height: 1.5;
	}
</style>

<!-- текст будет мигать красным, когда
	 изменится объект `todo` -->
<div bind:this={div} on:click>
	{todo.done ? '👍': ''} {todo.text}
</div>