<script>
	let user = {
		firstname: 'Ада',
		lastname: 'Лавлейс'
	};
</script>

<input bind:value={user.firstname}>
<input bind:value={user.lastname}>

{@debug user}

<h1>Привет, {user.firstname}!</h1>