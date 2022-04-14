import Project from "../Project";
import styles from "./style.module.css";

export default function ProjectWrapper({projects}) {


  return (
    <div className={styles.projectsWrapper}>
      {projects.map(({ key, projectName, projectTechnologies, img, href }) => (
        <Project
          key={projects.key}
          projectName={projects.projectName}
          projectTechnologies={projects.projectTechnologies}
          img = {projects.img}
          href = {projects.href}
        />
      ))}
    </div>
  );
}

