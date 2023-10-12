import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
	isOpen: boolean;
	onClose: () => void;
    children?: ReactNode
}

function Modal({ isOpen, onClose, children } : Props) {
	if (!isOpen) return null;

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div onClick={(e)=>e.stopPropagation()} className={styles.modal}>
				<div className={styles.modalContent}>{children}</div>
			</div>
		</div>
	);
}

export default Modal;
