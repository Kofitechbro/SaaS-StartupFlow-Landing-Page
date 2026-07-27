import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { Buttons } from '../Buttons/Buttons';
import './NavBar.css';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggled() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="nav-bar">
      <NavLogo />

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <NavLinks />
      </nav>

      <div className="desktop-btn">
        <Buttons type="submit" variant="primary" size="small">
          Get Started
        </Buttons>
      </div>

      {/* Mobile Navigation */}
      <div className="menu-btn">
        <button type="button" className="toggle-btn" onClick={handleToggled}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && <MobileNav isOpen={isOpen} />}
    </header>
  );
}

function MobileNav({ isOpen }) {
  return (
    <nav className={`mobile-nav ${isOpen ? 'active' : ''}`}>
      <NavLinks />
      <Buttons type="submit" variant="primary" size="medium">
        Get Started
      </Buttons>
    </nav>
  );
}

function NavLogo() {
  return (
    <div className="logo">
      <span className="logo-img">
        <img src={Logo} alt="Logo" />
      </span>
      <span className="logo-text">StartupFlow</span>
    </div>
  );
}

function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <a href="#">Features</a>
      </li>
      <li>
        <a href="#">Solution</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Resources</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  );
}
