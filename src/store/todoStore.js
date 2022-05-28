import { v4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/env';
export const todos = writable(
	browser && window.localStorage.getItem('todos')
		? JSON.parse(window.localStorage.getItem('todos'))
		: [
				{
					id: v4(),
					text: 'Learn Svelte',
					completed: false,
					createdAt: new Date().toLocaleString('en-US')
				}
		  ]
);

if (browser) {
	todos.subscribe((val) => window.localStorage.setItem('todos', JSON.stringify(val)));
}

export const addTodo = (text) => {
	todos.update((items) => {
		return [
			...items,
			{
				id: v4(),
				text,
				completed: false,
				createdAt: new Date().toLocaleString()
			}
		];
	});
};

export const deleteTodo = (id) => {
	todos.update((items) => {
		return items.filter((item) => item.id !== id);
	});
};

export const toggleTodo = (id) => {
	todos.update((items) => {
		return items.map((item) => {
			if (item.id === id) {
				item.completed = !item.completed;
			}
			return item;
		});
	});
};
