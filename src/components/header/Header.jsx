import React from "react";
import Logo from "../../assets/img/omnifood-logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} alt="Omnifood logo" src={Logo} />
      <nav className={styles.main_nav}>
        <ul className={styles.main_nav_list}>
          <li>
            <a className={styles.main_nav_link} href="#">
              Section 1
            </a>
          </li>
          <li>
            <a className={styles.main_nav_link} href="#">
              Section 2
            </a>
          </li>
          <li>
            <a className={styles.main_nav_link} href="#">
              Section 3
            </a>
          </li>
          <li>
            <a className={styles.main_nav_link} href="#">
              Section 4
            </a>
          </li>
          <li>
            <a className={`${styles.main_nav_link} ${styles.nav_cta}`} href="#">
              Section 5
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
