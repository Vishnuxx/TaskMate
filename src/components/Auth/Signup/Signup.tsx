import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { AuthInput } from "../../generic/AuthInput/AuthInput";
import { APPROUTES } from "../../../constants/AppRoutes";

function Signup() {
	return (
		<div className={styles.container}>
			<h2 className={styles.formTitle}>Signup</h2>
			<form className={styles.signupForm}>
				<AuthInput name="username" placeholder="UserName" type="text" />

				<AuthInput name="email" placeholder="Email" type="email" />

				<AuthInput name="password" placeholder="Password" type="password" />

				<AuthInput name="confirmpassword" placeholder="Confirm Password" type="password" />

				<div className={styles.buttons}>
					<button type="submit" className={"primary-button " + styles.button}>
						Signup
					</button>
					<Link to={APPROUTES.login} replace>Already have an account</Link>
				</div>
			</form>
		</div>
	);
}

export default Signup;
