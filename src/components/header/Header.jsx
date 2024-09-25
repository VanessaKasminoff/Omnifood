import React from "react";
import Logo from "../../assets/img/omnifood-logo.png";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} alt="Omnifood logo" src={Logo} />
      <nav className={styles.main_nav}>Navigation</nav>
    </header>
  );
};

export default Header;
