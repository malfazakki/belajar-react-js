export default function UnoptimizedChild({ count }) {
	console.log("Unoptimized child di re-render");
	return (
		<>
			<p>Count (Unoptimized): {count}</p>
		</>
	);
}
