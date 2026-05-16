import { useState, useEffect } from 'react';
import { navLinks } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#inicio" className="nav-logo" onClick={() => handleClick('inicio')}>
          <div className="logo-icon">🛡️</div>
          <span>CiberNova</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => handleClick(link.id)}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-primary nav-cta" onClick={() => handleClick('contacto')}>
            Asesoría
          </a>
        </div>

        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>
      </div>
    </nav>
  );
}
