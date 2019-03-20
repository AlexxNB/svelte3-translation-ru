<script>
	let name = '';
</script>

<input bind:value={name} placeholder="Ваше имя?">
<h1>Привет, {name || 'незнакомец'}!</h1>