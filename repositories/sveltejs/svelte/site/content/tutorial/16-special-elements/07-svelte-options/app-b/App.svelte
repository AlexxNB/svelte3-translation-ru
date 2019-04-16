<script>
	import Todo from './Todo.svelte';

	let todos = [
		{ id: 1, done: true, text: 'помыть машину' },
		{ id: 2, done: false, text: 'выгулять собаку' },
		{ id: 3, done: false, text: 'покосить газон' }
	];

	function toggle(toggled) {
		todos = todos.map(todo => {
			if (todo === toggled) {
				// возвращаем новый объект
				return {
					id: todo.id,
					text: todo.text,
					done: !todo.done
				};
			}

			// возвращаем тот же объект
			return todo;
		});
	}
</script>

<h2>Задачи</h2>
{#each todos as todo}
	<Todo {todo} on:click={() => toggle(todo)}/>
{/each} 