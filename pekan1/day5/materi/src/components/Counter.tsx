import { useState } from "react";

export default function Counter() {
	const [counter, setCounter] = useState<number>(0);
	return (
		<>
			<div className='flex flex-col items-center justify-center gap-[30px] h-[100vh]'>
				<h1 className='text-5xl text-center'>Aplikasi Counter Sederhana</h1>

				{/* jumlah counter */}
				<p className='text-2xl'>Jumlah Counter: {counter}</p>

				{/* button counter */}
				<section className='flex gap-3'>
					<button
						className={`py-2 px-3 bg-gray-500 rounded-md text-white ${
							counter !== 0 && "hover:bg-gray-400 cursor-pointer"
						}`}
						onClick={() => {
							setCounter(counter - 1);
						}}
						disabled={counter === 0}
					>
						-
					</button>
					<input
						type='text'
						value={counter}
						onChange={(e) => {
							console.log("event: ", e);
							setCounter(parseInt(e.target.value));
						}}
						className='border-gray-500 rounded-sm p-2 border-[2px]'
					/>
					<button
						className='py-2 px-3 bg-gray-500 rounded-md text-white hover:bg-gray-400 cursor-pointer'
						onClick={() => {
							setCounter(counter + 1);
						}}
					>
						+
					</button>
				</section>
			</div>
		</>
	);
}
