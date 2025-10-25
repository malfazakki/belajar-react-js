import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../features/counter/counterSlice";
import type { RootState } from "../app/store";

export default function Counter() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<h1>Count: {count}</h1>

			<button onClick={() => dispatch(increment())}>Tambah</button>
			<button onClick={() => dispatch(decrement())}>Kurang</button>
			<button onClick={() => dispatch(incrementByValue(10))}>Tambah 10</button>
		</>
	);
}
