import { memo } from "react";

const OptimizedChild = memo(function OptimizedChild({ count }) {
	console.log("Optimized child di re-render");

	return <p>Count (Optimized): {count}</p>;
});

export default OptimizedChild;
