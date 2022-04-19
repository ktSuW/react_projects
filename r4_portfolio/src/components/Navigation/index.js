import Button from "../Button";
import styles from "./style.module.css";

export default function Navigation({links}) {
  // const navbar = document.querySelector(".navbar");
  const navbarOffsetTop = styles.navbar.offsetTop;

  window.addEventListener("scroll", () => {
    navBarSticky_SkillsBar();
  });

  const navBarSticky_SkillsBar = () => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= navbarOffsetTop) {
        styles.navbar.classList.add("sticky");
      } else {
        styles.navbar.classList.remove("sticky");
      }
    });

  };

  navBarSticky_SkillsBar();

  return (
    <div>
      <nav className={styles.navbar}>
        {/* {props.links.map(link => <Button
          className='navbar-link'
          key = {link.key}
          label= {link.label}
          href = {link.href}
          type='secondary'
          size='default'
        />)} */}
        {/* destructuring props */}
        {links.map(({ key, label, href }) => (
          <Button
            className='navbarLink'
            key={key}
            label={label}
            href={href}
            type='secondary'
            size='default'
          />
        ))}
      </nav>
    </div>
  );
}
