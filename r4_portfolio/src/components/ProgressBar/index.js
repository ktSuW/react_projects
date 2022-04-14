import styles from "./style.module.css";

export default function ProgressBar(languages) {
  return (
    <section className={styles.progressBar}>
      <p className="progressText">{languages.language}
      <span>%</span>
      </p>
      <div className="progressPercent"></div>
    </section>
  );
}
