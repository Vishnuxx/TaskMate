import { Link } from "react-router-dom";
import styles from "./styles.module.css"
import { APPROUTES } from "../../constants/AppRoutes";

function Home() {
    return (
			<main className={styles.main}>
				<h1 className={styles.h1}>TaskMate</h1>
				<h3 className={styles.h3}>Your ToDo Companion</h3>
				<Link to={APPROUTES.todo}>
					<button className={styles.startbutton}>GetStarted</button>
				</Link>
				<img className={styles.bgimg} src="https://media.istockphoto.com/id/1334887411/vector/concept-of-checklist.jpg?s=612x612&w=0&k=20&c=kiQYNroY9BgIeTRKp7raM7gPjxFCBqWn47DT8GF1a8g=" alt="ng" />
			</main>
		);
}

export default Home;