import { useRef, type FC } from "react";

const TextInputWithFocusButton: FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const focusInput = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<>
			<div>
				<h2>useRef: Mengakses DOM</h2>
				<div>
					<input type='text' ref={inputRef} />
				</div>
				<div>
					<button onClick={focusInput}>Fokus pada input</button>
				</div>
			</div>
		</>
	);
};

export default TextInputWithFocusButton;
