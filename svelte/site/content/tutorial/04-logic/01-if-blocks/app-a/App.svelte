<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

<button on:click={toggle}>
	Выйти
</button>

<button on:click={toggle}>
	Войти
</button>