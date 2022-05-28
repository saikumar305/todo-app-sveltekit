<script>
	import { addTodo } from '../store/todoStore';

	let todo = '';

	const handleSubmit = () => {
		if (todo === '') {
			todo = '';
			return alert('Please enter a todo');
		}
		addTodo(todo);
		todo = '';
	};
</script>

<form class="my-6 mx-3" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col text-center mb-2">
		<input
			type="text"
			name="todo"
			bind:value={todo}
			placeholder="Enter a todo"
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg  "
		/>
	</div>
	<button
		type="submit"
		class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Add</button
	>
</form>
