import Counter from "./components/Counter";
import FormData from "./components/FormData";

export default function App() {
	return (
		<>
			<main className='min-h-full flex justify-center items-center'>
				<Counter />
				<FormData />
				{/* TodoList */}
			</main>
		</>
	);
}
