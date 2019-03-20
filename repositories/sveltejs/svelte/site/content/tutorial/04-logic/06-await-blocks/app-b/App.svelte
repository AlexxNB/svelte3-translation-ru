<script>
	let promise = getRandomNumber();

	async function getRandomNumber() {
		const res = await fetch(`tutorial/random-number`);
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}>
	получить случайное число
</button>

{#await promise}
	<p>...подождите</p>
{:then number}
	<p>Число равно {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}