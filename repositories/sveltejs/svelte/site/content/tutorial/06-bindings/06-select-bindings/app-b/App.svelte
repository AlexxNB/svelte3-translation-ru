<script>
	let questions = [
		{ id: 1, text: `В какой школе ты учился?` },
		{ id: 2, text: `Девичья фамилия твоей мамы?` },
		{ id: 3, text: `Любая другая персональная информация, которую злоумышленник спокойно нагуглит?` }
	];

	let selected;

	let answer = '';

	function handleSubmit() {
		alert(`Ответ на вопрос №${selected.id} (${selected.text}): "${answer}"`);
	}
</script>

<h2>Секретные вопросы</h2>

<form on:submit|preventDefault={handleSubmit}>
	<select bind:value={selected} on:change="{() => answer = ''}">
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input bind:value={answer}>

	<button disabled={!answer} type=submit>
		Отправить
	</button>
</form>

<p>выбранный вопрос {selected ? selected.id : '[ждём...]'}</p>

<style>
	input { display: block; width: 500px; max-width: 100%; }
</style>