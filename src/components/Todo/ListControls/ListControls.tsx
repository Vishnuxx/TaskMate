import { useState } from "react";
import SettingsButton from "../SettingsButton/SettingsButton";
import styles from "./styles.module.css";

function ListControls() {
	return (
		<div className={styles.container}>
			<div className={styles.optionsbar}>
				<ListViewingOptions options={["All" , "Pending" , "Completed"]}></ListViewingOptions>
				<SettingsButton></SettingsButton>
			</div>
		</div>
	);
}

export default ListControls;

type optionsProps = {
	options: string[];
	defaultIndex?:number
};
function ListViewingOptions({ options , defaultIndex }: optionsProps) {
	const [currentIndex, setIndex] = useState(defaultIndex??0);
	const onChange = (value: number) => {
		setIndex(value);
	};
	return (
		<div className={styles.optionsbar}>
			{options.map((option, index) => {
				return (
					<p key={index} className={currentIndex == index ? styles.highlightOption : ""} onClick={() => onChange(index)}>
						{option}
					</p>
				);
			})}
			
		</div>
	);
}
