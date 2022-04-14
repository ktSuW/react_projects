import styles from "./style.module.css";
export default function Skill({ icon, title , ...props}) {
  return (
    <div className={styles.skill} {...props}>
      {icon}
      <h2 className='skillHeading'>{title}</h2>
    </div>
  );
}
