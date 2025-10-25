import { forwardRef } from "react";

interface InputKustomProps {
	placeholder?: string;
	style?: React.CSSProperties;
}

const InputKustom = forwardRef<HTMLInputElement, InputKustomProps>((props, ref) => {
	return (
		<>
			<input ref={ref} {...props} style={{ padding: "8px", border: "1px solid #ccc" }} />
		</>
	);
});

export default InputKustom;
