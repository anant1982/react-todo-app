import TodoList from "./components/TodoList";

function App() {
	return (
		<div className="mx-auto py-10 inline-block w-full">
			<h1 className="font-bold text-4xl mb-8 uppercase text-center">
				Todo List
			</h1>
			<div className="flex items-center justify-center h-full">
				<TodoList />
			</div>
		</div>
	);
}

export default App;
