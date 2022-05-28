<script>
	import { deleteTodo, toggleTodo } from '../store/todoStore.js';
	export let todo;
</script>

<li
	class="bg-white flex items-center shadow-sm border border-gray-200 rounded-md my-2 mx-3 py-2 px-4"
>
	<input
		name="completed"
		type="checkbox"
		checked={todo.completed}
		on:change={() => toggleTodo(todo.id)}
		class="mr-2 form-checkbox h-5 w-5"
	/>
	<span class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}>{todo.text} </span>
	<div class="text-gray-400 p-1  ">
		Created At : {todo.createdAt}
	</div>

	<button
		type="button"
		class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
		on:click={() => deleteTodo(todo.id)}>Delete</button
	>
</li>
