import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
	children? : ReactNode[],
	className?: string 
};


function Card({ children, className }: Props) {
	return <div className={`${styles["card"]} ${className}`}>{children}</div>;
}

export default Card;
