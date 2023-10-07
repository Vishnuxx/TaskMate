import styles from "./styles.module.css"

function Home() {
    return (
			<main className={styles.main}>
				<h1 className={styles.h1}>TaskMate</h1>
				<h3 className={styles.h3}>Your ToDo Companion</h3>
				<button className={styles.startbutton}>GetStarted</button>
				<img className={styles.bgimg} src="https://media.istockphoto.com/id/1334887411/vector/concept-of-checklist.jpg?s=612x612&w=0&k=20&c=kiQYNroY9BgIeTRKp7raM7gPjxFCBqWn47DT8GF1a8g=" alt="ng" />
			</main>
		);
}

export default Home;