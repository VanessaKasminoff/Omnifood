import React from "react";
import Logo from "../assets/img/omnifood-logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" alt="Omnifood logo" src={Logo} />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              Section 1
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Section 2
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Section 3
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Section 4
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#">
              Section 5
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
