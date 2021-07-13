<script>
	import ImmutableTodo from './ImmutableTodo.svelte';
	import MutableTodo from './MutableTodo.svelte';

	let todos = [
		{ id: 1, done: true, text: 'помыть машину' },
		{ id: 2, done: false, text: 'выгулять собаку' },
		{ id: 3, done: false, text: 'покосить газон' }
	];

	function toggle(id) {
		todos = todos.map(todo => {
			if (todo.id === id) {
				// возвращаем новый объект
				return {
					id,
					done: !todo.done,
					text: todo.text
				};
			}

			// возвращаем тот же объект
			return todo;
		});
	}
</script>

<h2>Неизменяемые</h2>
{#each todos as todo}
	<ImmutableTodo {todo} on:click="{() => toggle(todo.id)}"/>
{/each}

<h2>Изменяемые</h2>
{#each todos as todo}
	<MutableTodo {todo} on:click="{() => toggle(todo.id)}"/>
{/each}
