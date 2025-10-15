import { useReducer } from "react";

function CounterReducer(state, action) {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		case "reset":
			return { count: 0 };
		default:
			throw new Error();
	}
}

export default function CounterWithReducer() {
	const [counterState, dispatch] = useReducer(CounterReducer, { count: 0 });

	return (
		<>
			<h1>Aplikasi Counter Sederhana</h1>

			<p>Count: {counterState.count}</p>

			<div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
				<button onClick={() => dispatch({ type: "increment" })}>Tambah</button>
				<button onClick={() => dispatch({ type: "decrement" })}>Kurang</button>
				<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
			</div>
		</>
	);
}
