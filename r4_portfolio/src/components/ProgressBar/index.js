import styles from "./style.module.css";

export default function ProgressBar({language, percent}) {
  return (
    <section className={styles.progressBar}>
      <p className={styles.progressText}>
        {language}
        <span>{percent}</span>%
      </p>
      <div className={styles.progressPercent}></div>
    </section>
  );
}



