import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FiCircle } from "react-icons/fi";

function TodoItem({ id, todo, complete, deleteTodo, toggleComplete }) {
	return (
		<div
			key={id}
			className="bg-slate-600 text-white rounded-md px-6 py-4 flex items-center justify-between mt-3 shadow-lg shadow-gray-500">
			<div className="flex items-center">
				<div className="mr-4" onClick={() => toggleComplete(id)}>
					{!complete ? (
						<FiCircle className="text-green-500 w-7 h-7" />
					) : (
						<IoIosCheckmarkCircle
							className={complete ? "text-red-400 w-7 h-7" : "w-7 h-7"}
						/>
					)}
				</div>
				<p
					className={
						complete ? "line-through text-xl text-red-400" : "text-xl"
					}>
					{todo}
				</p>
			</div>
			<button
				onClick={() => deleteTodo(id)}
				type="button"
				className="bg-red-700 px-3 py-2 rounded-lg float-right">
				<MdDeleteForever className="fill-white w-5 h-5" />
			</button>
		</div>
	);
}
export default TodoItem;
