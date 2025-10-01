import { useState } from "react";

export default function Counter() {
	const [counter, setCounter] = useState(0);

	const handleAddCounter = () => {
		setCounter((prev) => prev + 1);
	};

	return (
		<>
			<h1>Aplikasi Counter Sederhana</h1>

			<p>Counter: {counter}</p>

			<button onClick={handleAddCounter}>Click to add counter</button>
		</>
	);
}
