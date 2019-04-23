<script>
	import Info from './Info.svelte';

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'невероятно',
		website: 'https://svelte.dev'
	};
</script>

<Info {...pkg}/>