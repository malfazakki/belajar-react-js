import { memo } from "react";

const OptimizedChild = memo(function OptimizedChild({ count }) {
	console.log("OptimizedChild di-render");
	return <p>Count (Optimized): {count}</p>;
});

export default OptimizedChild;
