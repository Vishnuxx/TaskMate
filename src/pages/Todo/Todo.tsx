import ListItem from "../../components/Todo/ListItem/ListItem";
import ListView, { ListData } from "../../components/Todo/ListView/ListView";
import ListControls from "../../components/Todo/ListControls/ListControls";
import TextField from "../../components/Todo/TextField/TextField";
import Card from "../../components/generic/Card.tsx/Card";
import styles from "./styles.module.css";

const datas: ListData[] = [
	{ title: "one", status: 0 },
	{ title: "two", status: 0 },
	{ title: "three", status: 0 },
	{ title: "four", status: 0 },
	{ title: "one", status: 0 },
	{ title: "two", status: 0 },
	{ title: "three", status: 0 },
	{ title: "one", status: 0 },
	{ title: "two", status: 0 },
	{ title: "three", status: 0 },
];

function TodoPage() {
	return (
		<main className={styles.main}>
			<div className={styles.titlebg_container}>
				<img className={styles.titlebgimg} src="https://template.canva.com/EAENvp21inc/1/0/1600w-qt_TMRJF4m0.jpg" alt="titlebg" />
			</div>
			<div className={styles.container}>
				<div className={styles.todo_container}>
					<h1 className={styles.title}>TODO</h1>
					<TextField></TextField>
					<span style={{ height: "30px" }}></span>
					<Card className={styles.card}>
						<ListControls></ListControls>
						<ListView data={datas} itemElement={(item, index) => <ListItem key={index} title={item.title} status={item.status} />} />
					</Card>
					<span style={{ height: "20px" }}></span>
					<label className={styles.label}>5 items left</label>
					<span style={{ height: "30px" }}></span>
					<label>Drag and drop to reorder list</label>
				</div>
			</div>
		</main>
	);
}

export default TodoPage;
