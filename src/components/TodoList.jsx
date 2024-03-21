import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoInfo from "./TodoInfo";

const TodoList = () => {
	const storedTodos = JSON.parse(localStorage.getItem("todos"));
	const [todos, setTodos] = useState(storedTodos);
	const [todoItem, setTodoItem] = useState("");
	const [error, setError] = useState(false);
	const [completedTasksCount, setCompletedTasksCount] = useState("");
	const [completedTasks, setCompletedTasks] = useState([]);
	const [activeTasks, setActiveTasks] = useState([]);

	const handleSubmit = (e) => {
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

	const deleteTodo = (id) => {
		let newTodos = todos.filter((todo) => todo.id !== id);
		setTodos([...newTodos]);
	};

	const toggleComplete = (id) => {
		todos.find((todo) => {
			if (todo.id === id) {
				todo.complete = !todo.complete;
			}
			return setTodos([...todos]);
		});
	};

	useEffect(() => {
		let completeArray = [];
		todos.filter((todo) => todo.complete === true && completeArray.push(todo));
		setCompletedTasksCount(completeArray.length);
		setCompletedTasks(completeArray);

		let activeTasksArray = [];
		todos.filter(
			(todo) => todo.complete === false && activeTasksArray.push(todo)
		);
		setActiveTasks(activeTasksArray);
	}, [todos]);

	useEffect(() => {
		let adderror = setTimeout(() => {
			setError(false);
		}, 2000);
		return () => {
			clearTimeout(adderror);
		};
	}, [error]);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	let Today = new Date().toLocaleDateString("en-us", { weekday: "long" });
	let day = new Date().toLocaleDateString("en-us", { day: "numeric" });
	let month = new Date().toLocaleDateString("en-us", { month: "short" });
	let year = new Date().toLocaleDateString("en-us", { year: "numeric" });

	return (
		<div className="min-w-[700px] bg-white p-8 rounded-md shadow-lg shadow-gray-500">
			<div className="header-section">
				<h4 className="font-semibold text-lg">
					Date: {`${Today},`} <span>{`${day} ${month} ${year}`}</span>
				</h4>
				<AddTodo
					handleSubmit={handleSubmit}
					todoItem={todoItem}
					setTodoItem={setTodoItem}
					error={error}
				/>
			</div>
			<div className="inline-block w-full">
				<TodoInfo
					todos={todos}
					completedTasks={completedTasksCount}
					deleteTodo={deleteTodo}
					toggleComplete={toggleComplete}
				/>
			</div>
		</div>
	);
};

export default TodoList;
