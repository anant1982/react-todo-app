export const handleSubmit = (
	e,
	todoItem,
	setError,
	setTodos,
	setTodoItem,
	todos
) => {
	e.preventDefault();
	if (todoItem) {
		setError(false);
		let uniqueId =
			new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
		let newTodoItem = {
			id: uniqueId,
			todo: todoItem,
			complete: false,
		};
		setTodos([newTodoItem, ...todos]);
		setTodoItem("");
	} else {
		setError(true);
		setTodoItem("");
	}
};

export const deleteTodo = (id, setTodos) => {
	let newTodos = todos.filter((todo) => todo.id !== id);
	setTodos([...newTodos]);
};

export const toggleComplete = (id, setTodos, todos) => {
	todos.find((todo) => {
		if (todo.id === id) {
			todo.complete = !todo.complete;
		}
		return setTodos([...todos]);
	});
};
