<script>
	let todos = [
		{ done: false, text: 'прочитать учебник по Svelte' },
		{ done: false, text: 'создать приложение' },
		{ done: false, text: 'захватить мир' }
	];

	function add() {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter(t => !t.done);
	}
</script>

<h1>Задачи</h1>

{#each todos as todo}
	<div>
		<input
			type=checkbox
			bind:checked={todo.done}
		>

		<input
			placeholder="Что надо сделать?"
			bind:value={todo.text}
		>
	</div>
{/each}

<button on:click={add}>
	Новая
</button>

<button on:click={clear}>
	Убрать завершенные
</button>
