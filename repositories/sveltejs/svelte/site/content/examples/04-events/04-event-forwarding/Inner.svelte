<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'Привет!'
		});
	}
</script>

<button on:click={sayHello}>
	Нажми для приветствия
</button>