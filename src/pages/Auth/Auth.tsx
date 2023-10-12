import { Outlet} from "react-router-dom";

import styles from "./styles.module.css"


function AuthPage() {
    return (
			<main className={styles.main}>
				<div className={styles.content}>
					<Outlet></Outlet>
				</div>
			</main>
		);
}

export default AuthPage;