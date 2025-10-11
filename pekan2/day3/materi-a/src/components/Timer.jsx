import { useEffect, useState } from "react";

export default function Timer() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<>
			<h2>Aplikasi Timer Sederhana</h2>
			<p>Timer: {count} detik</p>
		</>
	);
}
