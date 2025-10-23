interface CounterProps {
	count: number;
	handleAdd: () => void;
	handleMinus: () => void;
}

export default function Counter({ count, handleAdd, handleMinus }: CounterProps) {
	return (
		<>
			<div
				style={{
					display: "flex",
					gap: "15px",
				}}
			>
				<button onClick={handleMinus}>Kurang</button>
				<p>Jumlah Count: {count}</p>
				<button onClick={handleAdd}>Tambah</button>
			</div>
		</>
	);
}
