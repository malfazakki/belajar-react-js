import { useEffect, useState } from "react";

export default function MultiEffectComponent() {
	const [name, setName] = useState("");
	const [count, setCount] = useState(0);

	// useEffect pertama, mengganti judul halaman
	useEffect(() => {
		document.title = `Count: ${count}`;
	}, [count]);

	// useEffect kedua
	useEffect(() => {
		document.title = `Nama: ${name}`;
	}, [name]);

	// useEffect ketiga
	useEffect(() => {
		const handleKeyDown = (e) => {
			console.log(`Tombol ${e.key} ditekan`);
		};

		window.addEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<>
			<h2>Komponen dengan multiple useEffects</h2>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Tambah Count</button>

			<br />
			<br />

			<input type='text' value={name} onChange={(e) => setName(e.target.value)} />
			<p>Nama: {name}</p>
		</>
	);
}
