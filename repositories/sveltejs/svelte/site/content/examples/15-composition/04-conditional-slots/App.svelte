<script>
	import Profile from "./Profile.svelte";
</script>

<Profile>
	<span slot="name">Ваня</span>
	<span slot="email">bob@email.com</span>
</Profile>

<Profile>
	<span slot="name">Алиса</span>
	<span slot="phone">12345678</span>
</Profile>
