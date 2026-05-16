import { navLinks } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="nav-logo">
              <div className="logo-icon">🛡️</div>
              <span>CiberNova</span>
            </a>
            <p>
              Tu seguridad digital es nuestra prioridad. Protegemos personas,
              empresas y negocios con soluciones de ciberseguridad avanzadas.
            </p>
          </div>

          <div>
            <h4>Navegación</h4>
            <ul className="footer-links">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li><a href="#servicios">Protección contra hackers</a></li>
              <li><a href="#servicios">Seguridad de redes</a></li>
              <li><a href="#servicios">Seguridad en la nube</a></li>
              <li><a href="#servicios">Auditorías</a></li>
              <li><a href="#servicios">Capacitación</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 CiberNova. Todos los derechos reservados.</p>
          <div className="footer-socials">
            <a href="#" className="footer-social-link" aria-label="Facebook">f</a>
            <a href="#" className="footer-social-link" aria-label="Twitter">𝕏</a>
            <a href="#" className="footer-social-link" aria-label="LinkedIn">in</a>
            <a href="#" className="footer-social-link" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
