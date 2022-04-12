import Button from "../Button";
import styles from "./style.module.css";

export default function Header() {
  return (
    <section className={styles.section1} id='section1'>
      <h1 className={styles.section1Heading}>Junior Web Developer</h1>
      <img
        src="/images/person_photo.jpg"
        alt="person photo image"
        className={styles.personImg}
      />
      <h3 className={styles.personName}>Su</h3>
      <Button label='Projects' type='primary' size='default' />
    </section>
  );
}
