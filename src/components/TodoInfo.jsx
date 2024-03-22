import React, { useState } from "react";
import TabButtons from "./TabButtons";
import TabContent from "./TabContent";

const TodoInfo = ({ todos, completedTasks, deleteTodo, toggleComplete }) => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<>
			<div className="flex gap-8 mb-4">
				<div className="data-card">
					<h5 className="font-bold text-xl">
						{todos?.length < 10
							? `0${todos?.length}`
							: todos?.length
							? todos?.length
							: "00"}
					</h5>
					<p>Created tasks</p>
				</div>
				<div className="data-card">
					<h5 className="font-bold text-xl">
						{completedTasks < 10 ? `0${completedTasks}` : completedTasks}
					</h5>
					<p>Completed tasks</p>
				</div>
			</div>
			{todos?.length > 0 && (
				<div className="inline-block w-full">
					<TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
					<TabContent
						todos={todos}
						activeTab={activeTab}
						deleteTodo={deleteTodo}
						toggleComplete={toggleComplete}
					/>
				</div>
			)}
		</>
	);
};

export default TodoInfo;
