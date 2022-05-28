<script>
	import TodoForm from '../lib/TodoForm.svelte';
	import Todo from '../lib/TodoItem.svelte';
	import { todos } from '../store/todoStore.js';
</script>

<main>
	<TodoForm />
	{#each $todos as todo}
		{#if todo.completed}
			<Todo {todo} />
		{/if}
	{/each}
</main>
