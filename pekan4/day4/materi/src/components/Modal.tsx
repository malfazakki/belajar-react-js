import { forwardRef, useImperativeHandle, useState, type ReactNode } from "react";

export interface ModalHandle {
	open: () => void;
	close: () => void;
}

interface ModalProps {
	children: ReactNode;
}

const Modal = forwardRef<ModalHandle, ModalProps>((props, ref) => {
	const [isOpen, setIsOpen] = useState(false);

	useImperativeHandle(ref, () => ({
		open: () => setIsOpen(true),
		close: () => setIsOpen(false),
	}));

	if (!isOpen) return null;

	return (
		<>
			<div
				style={{
					position: "fixed",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					backgroundColor: "white",
					padding: "20px",
					border: "1px solid black",
					zIndex: 1000,
				}}
			>
				<h3 style={{ color: "black" }}>Modal Di Click</h3>
				<p>{props.children}</p>
				{/* <button onClick={() => setIsOpen(false)}>Tutup</button> */}
			</div>
		</>
	);
});

export default Modal;
