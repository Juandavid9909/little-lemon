import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

function Header() {
  return (
    <header className="header" role="banner">
      <Link to="/" className="header-logo-link" aria-label="Little Lemon Home">
        <img src={logo} alt="Little Lemon logo" className="header-logo" />
      </Link>
    </header>
  );
}

export default Header;
