<script>
	import FancyButton from './FancyButton.svelte';

	function handleClick() {
		alert('кнопка нажата');
	}
</script>

<FancyButton on:click={handleClick}/>