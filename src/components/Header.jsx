import logo from '../assets/Logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="#" className="header-logo-link">
        <img src={logo} alt="Little Lemon" className="header-logo" />
      </a>
    </header>
  );
}

export default Header;
