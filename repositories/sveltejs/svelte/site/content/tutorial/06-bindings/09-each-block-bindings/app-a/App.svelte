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

	$: remaining = todos.filter(t => !t.done).length;
</script>

<style>
	.done {
		opacity: 0.4;
	}
</style>

<h1>Задачи</h1>

{#each todos as todo}
	<div class:done={todo.done}>
		<input
			type=checkbox
			checked={todo.done}
		>

		<input
			placeholder="Что надо сделать?"
			value={todo.text}
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
