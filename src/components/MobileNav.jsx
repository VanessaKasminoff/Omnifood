const MobileNav = ({isClicked, closeMenu}) => {
    return (
        <nav className="mobile-main-nav">
        <ul className="mobile-main-nav-list">
          <li onClick={() => isClicked && closeMenu()}>
            <a className="mobile-main-nav-link" href="#how-it-works">
              How it works
            </a>
          </li>
          <li onClick={() => isClicked && closeMenu()}>
            <a className="mobile-main-nav-link" href="#meals">
              Meals
            </a>
          </li>
          <li onClick={() => isClicked && closeMenu()}>
            <a className="mobile-main-nav-link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li onClick={() => isClicked && closeMenu()}>
            <a className="mobile-main-nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li onClick={() => isClicked && closeMenu()}>
            <a className="mobile-main-nav-link nav-cta" href="#try-for-free">
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    );
};

export default MobileNav;