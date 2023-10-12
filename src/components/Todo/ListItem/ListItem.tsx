import { useState } from "react";
import CheckBox from "../../generic/Checkbox/Checkbox";
import styles from "./styles.module.css"

enum STATUS {
    pending , 
    completed
}
type Props = {
    title : string , 
    status : STATUS,
}

function ListItem({title , status} : Props) {
	const [currentStatus, setcurrentStatus] = useState<STATUS>(status ?? STATUS.pending)
    return (
			<div className={styles.container}>
				<div className={styles.checkbox_container}>
					<CheckBox onChange={(checked)=>{setcurrentStatus(checked ? STATUS.completed : STATUS.pending);}}></CheckBox>
				</div>

				<p className={`${styles.title} ${currentStatus === STATUS.completed ? styles.checked : "" }`} >{title}</p>
			</div>
		);
}

export default ListItem;