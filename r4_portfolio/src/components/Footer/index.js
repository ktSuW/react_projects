import styles from "./style.module.css";
import { FaGithubSquare, FaYoutubeSquare } from "react-icons/fa";
// Questions:
//  How to add two classnames
export default function Footer() {
  return (
    <footer className={styles.section5}>
      <div className={styles.socialMedia}>
        <a
          href='https://github.com/ktSuW'
          className={styles.socialMediaLink}
          target='_blank'
        >
          <FaGithubSquare />
        </a>
        <a
          href='https://www.youtube.com/watch?v=KrExoVSBSW4&ab_channel=ktsuw_21'
          className={styles.socialMediaLink}
          target='_blank'
        >
          <FaYoutubeSquare />
        </a>
      </div>
      <p className={styles.copyright}>
        Copyright &copy; Su. All Rights Reserved
      </p>
    </footer>
  );
}

