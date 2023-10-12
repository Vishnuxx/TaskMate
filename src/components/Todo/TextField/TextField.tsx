import CheckBox from "../../generic/Checkbox/Checkbox";
import styles from "./styles.module.css";

function TextField() {
    return (
			<div className={styles.container}>
				<div className={styles.checkbox_container}>
					<CheckBox></CheckBox>
				</div>

				<input type="text" className={styles.input} placeholder="Type here..." />
				
			</div>
		);
}

export default TextField;