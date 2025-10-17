import { useState } from "react";
import OptimizedChild from "./OptimizedChild";
import UnoptimizedChild from "./UnoptimizedChild";

export default function ParentComponent() {
	const [parentCount, setParentCount] = useState(0);
	const [otherState, setOtherState] = useState(0);

	return (
		<>
			<h2>Optimasi dengan React.memo</h2>
			<p>Parent Count: {parentCount}</p>
			<p>Other State: {otherState}</p>

			<button onClick={() => setParentCount(parentCount + 1)}>Tambah Parent Count</button>
			<button onClick={() => setOtherState(otherState + 1)}>Tambah Other State</button>

			<OptimizedChild count={parentCount} />
			<UnoptimizedChild count={parentCount} />
		</>
	);
}
