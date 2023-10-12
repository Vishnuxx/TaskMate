import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { AuthInput } from "../../generic/AuthInput/AuthInput";
import { APPROUTES } from "../../../constants/AppRoutes";

function Login() {
	return (
		<div className={styles.container}>
			<h2 className={styles.formTitle}>Login</h2>
			<form className={styles.signupForm}>
				<AuthInput name="email" placeholder="Email" type="email" />

				<AuthInput name="password" placeholder="Password" type="password" />

				<div className={styles.buttons}>
					<button type="submit" className={"primary-button " + styles.button}>
						Login
					</button>
					<Link to={APPROUTES.signup} replace>Don't have an account?</Link>
				</div>
			</form>
		</div>
	);
}

export default Login;
