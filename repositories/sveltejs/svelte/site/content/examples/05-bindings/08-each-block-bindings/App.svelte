<script>
	let todos = [
		{ done: false, text: 'дочитать учебник по Svelte' },
		{ done: false, text: 'создать приложение' },
		{ done: false, text: 'захватить мир' }
	];

	function add() {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter(t => !t.done);
	}

	$: remaining = todos.filter(t => !t.done).length;
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
			disabled={todo.done}
		>
	</div>
{/each}

<p>Осталось: {remaining}</p>

<button on:click={add}>
	Новая
</button>

<button on:click={clear}>
	Убрать завершенные
</button>
