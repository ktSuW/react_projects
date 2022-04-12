import styles from "./style.module.css";

export default function Button(props) {
  return <button className={styles[props.type]}>{props.label}</button>;
}
