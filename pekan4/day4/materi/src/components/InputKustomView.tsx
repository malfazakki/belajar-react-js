import { useRef, type FC } from "react";
import InputKustom from "./InputKustom";

const InputKustomView: FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleClick = () => {
		if (inputRef.current) {
			inputRef.current.focus();
			inputRef.current.value = "Fokus dari Induk!";
		}
	};

	return (
		<>
			<div>
				<h2>forwardRef</h2>
				<InputKustom ref={inputRef} placeholder='Masukkan sesuatu...' />
				<button onClick={handleClick}>Fokus ke Input</button>
			</div>
		</>
	);
};

export default InputKustomView;
