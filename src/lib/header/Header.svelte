<script>
	import { page } from '$app/stores';

	import { todos } from '../../store/todoStore';
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Todo App</h1>
<div class=" flex flex-row my-4 justify-center align-middle ">
	<div class="px-3">
		<a href="/" class="px-1" class:active={$page.url.pathname === '/'}> All </a>
		<span class="bg-slate-200 rounded-2xl px-2"> {$todos.length}</span>
	</div>
	<div class="px-3">
		<a href="pending " class="px-1" class:active={$page.url.pathname === '/pending'}>Pending </a>
		<span class="bg-slate-200 rounded-2xl px-2">
			{$todos.filter((todo) => !todo.completed).length}</span
		>
	</div>

	<div class="px-3">
		<a href="completed" class="px-1" class:active={$page.url.pathname === '/completed'}>
			Completed
		</a>
		<span class="bg-slate-200 rounded-2xl px-2">
			{$todos.filter((todos) => todos.completed).length}</span
		>
	</div>
</div>

<style>
	.active {
		border-bottom: 2px solid #000;
	}
</style>
