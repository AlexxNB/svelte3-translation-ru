<script>
	let files;

	$: if (files) {
		// Переменная `files` будет типа `FileList`, а не массивом:
		// https://developer.mozilla.org/ru/docs/Web/API/FileList
		console.log(files);

		for (const file of files) {
			console.log(`${file.name}: ${file.size} байт(а)`);
		}
	}
</script>

<label for="avatar">Загрузить картинку:</label>
<input
	accept="image/png, image/jpeg"
	bind:files
	id="avatar"
	name="avatar"
	type="file"
/>

<label for="many">Загрузить несколько файлов любого типа:</label>
<input
	bind:files
	id="many"
	multiple
	type="file"
/>

{#if files}
	<h2>Выбранные файлы:</h2>
	{#each Array.from(files) as file}
		<p>{file.name} ({file.size} bytes) </p>
	{/each}
{/if}
