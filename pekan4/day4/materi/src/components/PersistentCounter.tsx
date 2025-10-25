import { useRef, type FC } from "react";

const PersistentCounter: FC = () => {
	const countRef = useRef<number>(0);

	const increment = () => {
		countRef.current += 1;
		console.log(`Count (ref): ${countRef.current}`);
	};

	return (
		<>
			<h2>useRef: Menyimpan nilai persistent</h2>
			<p>Nilai Ref (cek dalam konsol): {countRef.current}</p>
			<button onClick={increment}>Tambah Ref</button>
		</>
	);
};

export default PersistentCounter;
