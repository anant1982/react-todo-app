import React from "react";
import TodoItem from "./TodoItem";

const TabContent = ({ todos, deleteTodo, toggleComplete, activeTab }) => {
	return (
		<div className="flex items-center gap-6">
			<div
				className={`${
					activeTab !== 0 && "hidden"
				} inline-block w-full all-tasks`}>
				{todos.map((todoItem) => {
					const { id, todo, complete } = todoItem;
					return (
						<TodoItem
							key={id}
							deleteTodo={deleteTodo}
							id={id}
							todo={todo}
							complete={complete}
							toggleComplete={toggleComplete}
						/>
					);
				})}
			</div>
			<div
				className={`${
					activeTab !== 1 && "hidden"
				} inline-block w-full active-tasks`}>
				{todos.map((todoItem) => {
					const { id, todo, complete } = todoItem;
					if (todoItem.complete === false) {
						return (
							<TodoItem
								key={id}
								deleteTodo={deleteTodo}
								id={id}
								todo={todo}
								complete={false}
								toggleComplete={toggleComplete}
							/>
						);
					}
				})}
			</div>
			<div
				className={`${
					activeTab !== 2 && "hidden"
				} inline-block w-full completed-tasks`}>
				{todos.map((todoItem) => {
					const { id, todo, complete } = todoItem;
					if (todoItem.complete !== false) {
						return (
							<TodoItem
								key={id}
								deleteTodo={deleteTodo}
								id={id}
								todo={todo}
								complete={true}
								toggleComplete={toggleComplete}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

export default TabContent;
