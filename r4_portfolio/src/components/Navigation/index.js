import Button from "../Button";
import styles from "./style.module.css";

export default function Navigation({links}) {


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
        {links.map(({key, label, href}) => (
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
