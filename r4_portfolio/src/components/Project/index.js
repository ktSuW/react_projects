import styles from "./style.module.css";

export default function Project({projectName, projectTechnologies, img, href, goTo}) {

  return (
    <section className={styles.project}>
      <div className={styles.projectText}>
        <h2 className={styles.projectName}>{projectName}</h2>
        <h4 className={styles.projectTechnologies}>{projectTechnologies}</h4>
      </div>
      <img src={img} className={styles.projectImg} />
      <a
        href={href}
        className={styles.projectLink}
        target='_blank'
      >{goTo}</a>
    </section>
  );
}

