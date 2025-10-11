import { useEffect, useState } from "react";

export default function MultiEffectComponent() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	// useEffect pertama, mengubah document title
	useEffect(() => {
		console.log(`Count telah berubah menjadi: ${count}`);
		document.title = `Count: ${count}`;
	}, [count]);

	// useEffect kedua, berjalan setiap name berubah
	useEffect(() => {
		console.log(`Nama telah berubah menjadi: ${name}`);
	}, [name]);

	// useEffect ketiga, berjalan saat component mounting
	useEffect(() => {
		console.log("Komponen ini pertama kali dimuat");
		const handleKeyDown = (e) => {
			console.log(`Tombol ${e.key} ditekan`);
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<>
			<h2>Komponen dengan multiple effect</h2>
			<p>Count: {count}</p>

			<button onClick={() => setCount(count + 1)}>Tambah Count</button>

			<br />
			<br />

			<input value={name} onChange={(e) => setName(e.target.value)} />
			<p>Nama: {name}</p>
		</>
	);
}
