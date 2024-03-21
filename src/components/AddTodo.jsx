import React from "react";

const AddTodo = ({ handleSubmit, todoItem, setTodoItem, error }) => {
	return (
		<div className="my-5">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={todoItem}
					className={`bg-slate-300 px-5 py-2 rounded-md mr-4 w-1/2 ${
						error ? "error" : ""
					}`}
					onChange={(e) => setTodoItem(e.target.value)}
					placeholder="Type Todo here..."
				/>
				<button
					type="submit"
					className="px-4 py-2 bg-pink-400 rounded-md font-semibold hover:bg-pink-500 transition-colors duration-200 text-white">
					Add Todo
				</button>
			</form>
		</div>
	);
};

export default AddTodo;
