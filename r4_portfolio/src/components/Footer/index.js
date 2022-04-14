import styles from "./style.module.css";

export default function Footer() {
  return (
    <section className={styles.section5}>
      <h1 className={styles.section1Heading}>Junior Web Developer</h1>
      <img
        src='/images/person_photo.jpg'
        alt='person photo image'
        className={styles.personImg}
      />
      <h3 className={styles.personName}>Su</h3>

      <footer className={(styles.section5, styles.center)}>
        <div className={styles.socialMedia}>
          <a
            href='https://github.com/ktSuW'
            className={styles.socialMediaLink}
            target='_blank'
          >
            <i class='fab fa-github-square'></i>
          </a>
          <a
            href='https://www.youtube.com/watch?v=KrExoVSBSW4&ab_channel=ktsuw_21'
            className={styles.socialMediaLink}
            target='_blank'
          >
            <i class='fab fa-youtube'></i>
          </a>
        </div>
        <p class='copyright'>Copyright &copy; Su. All Rights Reserved</p>
      </footer>
    </section>
  );
}
