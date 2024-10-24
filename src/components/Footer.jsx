import Logo from "../assets/img/omnifood-logo.png";
import instagramLogo from "../assets/img/icons/instagram.svg";
import facebookLogo from "../assets/img/icons/facebook.svg";
import xLogo from "../assets/img/icons/x-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--5-cols">
        <div className="logo-col">
          <a className="footer-logo" href="#">
            <img className="logo" alt="Omnifood logo" src={Logo} />
          </a>

          <ul className="social-links">
            <li>
              <a href="#">
                <img src={instagramLogo} alt="Instagram logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebookLogo} alt="Facebook logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={xLogo} alt="X logo" />
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
            <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
            <p>
              <a href="tel:415-201-6370">415-201-6370</a>
              <br />
              <a href="mailto:hello@omnifood.com">hello@omnifood.com</a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a href="#">Create account</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
            <li>
              <a href="#">iOS app</a>
            </li>
            <li>
              <a href="#">Android app</a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a href="#">About Omnifood</a>
            </li>
            <li>
              <a href="#">For business</a>
            </li>
            <li>
              <a href="#">Cooking partners</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a href="#">Recipe directory</a>
            </li>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
