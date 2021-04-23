<script>
	let current = 'foo';
</script>

<button
	class="{current === 'foo' ? 'active' : ''}"
	on:click="{() => current = 'foo'}"
>foo</button>

<button
	class="{current === 'bar' ? 'active' : ''}"
	on:click="{() => current = 'bar'}"
>bar</button>

<button
	class="{current === 'baz' ? 'active' : ''}"
	on:click="{() => current = 'baz'}"
>baz</button>

<style>
	button {
		display: block;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}
</style>