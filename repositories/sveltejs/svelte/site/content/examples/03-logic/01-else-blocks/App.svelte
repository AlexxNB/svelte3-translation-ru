<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

{#if user.loggedIn}
	<button on:click={toggle}>
		Выйти
	</button>
{:else}
	<button on:click={toggle}>
		Войти
	</button>
{/if}