import styles from "./styles.module.css"

type AuthInputProps = {
	name: string;
	type: string;
	placeholder: string;
};
export function AuthInput({ name, type, placeholder }: AuthInputProps) {
	return (
		<div className={styles.auth_input}>
			<label htmlFor={name}>{name}</label>
			<input className="input" type={type} name={name} id="name" placeholder={placeholder} />
		</div>
	);
}