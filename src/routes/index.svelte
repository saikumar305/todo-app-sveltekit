<script>
	import TodoForm from '../lib/TodoForm.svelte';
	import Todo from '../lib/TodoItem.svelte';
	import { todos } from '../store/todoStore.js';
</script>

<main>
	<TodoForm />
	{#each $todos as todo}
		<Todo {todo} />
	{/each}
</main>
