import logo from '../assets/Logo.svg';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-col footer-logo-col">
          <img src={logo} alt="Little Lemon logo" className="footer-logo" />
          <p className="footer-tagline">
            Authentic Mediterranean dining in Chicago. Traditional family recipes served with a modern twist.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Navigation</h4>
          <nav aria-label="Footer Navigation">
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Menu</a></li>
              <li><a href="#" className="footer-link">Reservations</a></li>
              <li><a href="#" className="footer-link">Order Online</a></li>
              <li><a href="#" className="footer-link">Login</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <address className="footer-contact">
            <p>123 Lemon Street, Chicago, IL</p>
            <p>
              <a href="tel:3125550199" className="footer-link" aria-label="Call Little Lemon at (312) 555-0199">
                (312) 555-0199
              </a>
            </p>
            <p>
              <a href="mailto:contact@littlelemon.com" className="footer-link" aria-label="Email Little Lemon at contact@littlelemon.com">
                contact@littlelemon.com
              </a>
            </p>
          </address>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Social Media</h4>
          <nav aria-label="Social Media links">
            <ul className="footer-links">
              <li><a href="#" className="footer-link" aria-label="Visit Little Lemon on Facebook">Facebook</a></li>
              <li><a href="#" className="footer-link" aria-label="Visit Little Lemon on Instagram">Instagram</a></li>
              <li><a href="#" className="footer-link" aria-label="Visit Little Lemon on Twitter">Twitter</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
