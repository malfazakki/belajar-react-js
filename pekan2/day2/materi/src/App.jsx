import { useState } from "react";

function App() {
	const [todos, setTodos] = useState([
		{ id: 1, text: "Makan", completed: false },
		{ id: 2, text: "Tidur", completed: true },
		{ id: 3, text: "Ngoding", completed: false },
		{ id: 4, text: "Sholat", completed: false },
	]);

	function handleReverseTodo() {
		setTodos([...todos].reverse());
	}

	if (!Array.isArray(todos)) {
		return <p>Data tidak valid</p>;
	}

	if (todos.length === 0) {
		return <p>Belum ada tugas ditambahkan.</p>;
	}

	return (
		<>
			<div>
				<ul>
					{todos.map((todo) => {
						return (
							<li key={todo.id}>
								{todo.text} <input placeholder={todos.text} />
							</li>
						);
					})}
				</ul>

				<button onClick={handleReverseTodo}>Reverse Todo</button>
			</div>
		</>
	);
}

export default App;
