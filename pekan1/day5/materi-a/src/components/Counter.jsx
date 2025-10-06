import { useState } from "react";

export default function Counter() {
	// struktur getter, setter
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter((prev) => prev + 1);
	};

	const decrement = () => {
		setCounter((prev) => prev - 1);
	};

	return (
		<>
			<h1>Aplikasi Counter Sederhana</h1>

			<p>Jumlah Counter: {counter}</p>

			<div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
				<button onClick={decrement}>-</button>
				<input
					type='text'
					value={counter}
					onChange={(event) => {
						setCounter(event.target.value);
					}}
				/>
				<button onClick={increment}>+</button>
			</div>
		</>
	);
}
