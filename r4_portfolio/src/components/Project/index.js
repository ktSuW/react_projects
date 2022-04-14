import ProgressBar from "../ProgressBar";
import styles from "./style.module.css";

export default function Project({projects}) {


  return (
    <div className={styles.project}>
      <div className={styles.projectText}>
        <h2 className={styles.projectName}>{projects.projectName}</h2>
        <h4 className={styles.projectTechnologies}>
          {projects.projectTechnologies}
        </h4>
      </div>
      <img src={projects.img} alt="" />
      <a href={projects.href} className="projectLink"></a>
    </div>
  );
}

