import { useState, useEffect } from "react";
import Logo from "../assets/img/omnifood-logo.png";
import menuMobile from "../assets/img/icons/mobile-menu.svg";
import menuClose from "../assets/img/icons/menu-close.svg";
import MobileNav from "./MobileNav";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const HamburgerIcon = () => {
    if (!mobileNavOpen) {
      return (
        <img
          className="icon-mobile-nav"
          src={menuMobile}
          alt="Mobile menu navigation button"
        />
      );
    } else {
      return (
        <img
        className="icon-mobile-nav"
        src={menuClose}
        alt="Mobile menu navigation button"
      />
      );
    }
  };

  const closeMenu = () => setMobileNavOpen(false);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [mobileNavOpen]);

  return (
    <header className="header">
      <a href="#">
        <img className="logo" alt="Omnifood logo" src={Logo} />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#how-it-works">
              How it works
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#meals">
              Meals
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#try-for-free">
              Try for free
            </a>
          </li>
        </ul>
      </nav>
      <button className="btn-mobile-nav" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
        {HamburgerIcon()}
      </button>
      {mobileNavOpen && <MobileNav isOpen={true} closeMenu={closeMenu} />}
    </header>
  );
};

export default Header;
