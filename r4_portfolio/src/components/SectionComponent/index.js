import styles from "./style.module.css";
export default function SectionComponent({ children , heading, }) {
  return (
    <section className={styles.sectionWrapper} >
      <h1 className={styles.sectionHeading}>{heading}</h1>
      {children}
    </section>
  );
}
