import { useRef, type FC } from "react";
import type { ModalHandle } from "./Modal";
import Modal from "./Modal";

const ModalShow: FC = () => {
	const modalRef = useRef<ModalHandle | null>(null);

	const handleOpenModal = () => {
		modalRef.current?.open();
		setTimeout(() => {
			modalRef.current?.close();
		}, 3000);
	};

	const handleCloseModal = () => {
		modalRef.current?.close();
	};

	return (
		<>
			<div>
				<h2>useImperativeHandle: Mengontrol Komponen Anak</h2>
				<button onClick={handleOpenModal}>Buka Modal</button>
				<button onClick={handleCloseModal}>Tutup Modal</button>
				<Modal ref={modalRef}>
					<p>Konten di dalam modal.</p>
				</Modal>
			</div>
		</>
	);
};

export default ModalShow;
