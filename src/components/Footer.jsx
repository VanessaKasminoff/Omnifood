import Logo from "../assets/img/omnifood-logo.png";
import instagramLogo from "../assets/img/icons/instagram.svg";
import facebookLogo from "../assets/img/icons/facebook.svg";
import xLogo from "../assets/img/icons/x-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a className="footer-logo" href="#">
            <img className="logo" alt="Omnifood logo" src={Logo} />
          </a>

          <ul className="social-links">
            <li>
              <a className="footer-link" href="#">
                <img className="social-icon" src={instagramLogo} alt="Instagram logo" />
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <img className="social-icon" src={facebookLogo} alt="Facebook logo" />
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <img className="social-icon" src={xLogo} alt="X logo" />
              </a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; {new Date().getFullYear()} by Omnifood, Inc. All
            rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">415-201-6370</a>
              <br />
              <a className="footer-link" href="mailto:hello@omnifood.com">hello@omnifood.com</a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">Create account</a>
            </li>
            <li>
              <a className="footer-link" href="#">Sign in</a>
            </li>
            <li>
              <a className="footer-link" href="#">iOS app</a>
            </li>
            <li>
              <a className="footer-link" href="#">Android app</a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">About Omnifood</a>
            </li>
            <li>
              <a className="footer-link" href="#">For business</a>
            </li>
            <li>
              <a className="footer-link" href="#">Cooking partners</a>
            </li>
            <li>
              <a className="footer-link" href="#">Careers</a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">Recipe directory</a>
            </li>
            <li>
              <a className="footer-link" href="#">Help center</a>
            </li>
            <li>
              <a className="footer-link" href="#">Privacy Policy</a>
            </li>
            <li>
              <a className="footer-link" href="#">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
