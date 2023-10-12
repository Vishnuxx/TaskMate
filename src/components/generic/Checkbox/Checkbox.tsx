import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type Props = {
	checked?: boolean;
	onChange?: (checked: boolean) => void;
};

enum STATE {
	normal,
	hover,
	clicked,
}

function CheckBox({ checked, onChange }: Props) {
	const [isChecked, setIsChecked] = useState(checked ?? false);
	const [state, setState] = useState(STATE.normal);

	useEffect(() => {
		onChange ? onChange(isChecked) : "";
	}, [isChecked]);

	const toggleCheckbox = () => {
		setIsChecked(!isChecked);
		setState(isChecked ? STATE.clicked : STATE.normal);
	};

	const hover = () => {
		setState(STATE.hover);
	};

	const leave = () => {
		setState(STATE.normal);
	};

	return (
		<div onPointerEnter={hover} onPointerLeave={leave} onClick={toggleCheckbox} className={`${styles["round-checkbox"]}`}>
			{isChecked ? (
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<circle cx="12" cy="12" r="12" fill="url(#paint0_linear_71_28)" />
					<path
						d="M16.7709 8.23151C16.7048 8.15815 16.6261 8.09993 16.5394 8.06019C16.4527 8.02046 16.3597 8 16.2657 8C16.1718 8 16.0788 8.02046 15.9921 8.06019C15.9054 8.09993 15.8267 8.15815 15.7605 8.23151L10.4595 14.0701L8.23235 11.6126C8.16367 11.5396 8.08259 11.4822 7.99375 11.4437C7.90491 11.4052 7.81004 11.3863 7.71457 11.3881C7.61909 11.39 7.52488 11.4124 7.4373 11.4543C7.34972 11.4962 7.2705 11.5566 7.20416 11.6322C7.13782 11.7077 7.08565 11.7969 7.05064 11.8946C7.01563 11.9923 6.99846 12.0967 7.00011 12.2017C7.00176 12.3067 7.0222 12.4103 7.06027 12.5066C7.09833 12.603 7.15327 12.6901 7.22195 12.7631L9.95429 15.7685C10.0204 15.8418 10.0991 15.9001 10.1858 15.9398C10.2726 15.9795 10.3656 16 10.4595 16C10.5534 16 10.6464 15.9795 10.7331 15.9398C10.8198 15.9001 10.8985 15.8418 10.9647 15.7685L16.7709 9.38201C16.8432 9.30872 16.9008 9.21977 16.9402 9.12077C16.9796 9.02176 17 8.91485 17 8.80676C17 8.69867 16.9796 8.59176 16.9402 8.49275C16.9008 8.39375 16.8432 8.3048 16.7709 8.23151Z"
						fill="white"
						stroke="white"
						strokeWidth="0.5"
					/>
					<defs>
						<linearGradient id="paint0_linear_71_28" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
							<stop stopColor="#00C2FF" />
							<stop offset="1" stopColor="#CC00FF" />
						</linearGradient>
					</defs>
				</svg>
			) : state == STATE.hover ? (
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<circle cx="12" cy="12" r="11.25" stroke="url(#paint0_linear_70_26)" strokeWidth="1.5" />
					<defs>
						<linearGradient id="paint0_linear_70_26" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
							<stop stopColor="#00A3FF" />
							<stop offset="1" stopColor="#CC00FF" />
						</linearGradient>
					</defs>
				</svg>
			) : (
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<circle cx="12" cy="12" r="11.25" stroke="#A9A9A9" strokeWidth="1.5" />
				</svg>
			)}
		</div>
	);
}

export default CheckBox;
