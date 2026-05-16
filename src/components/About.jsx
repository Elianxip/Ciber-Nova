import { valores } from '../data';

export default function About() {
  return (
    <section className="about section" id="nosotros">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">👥 Sobre Nosotros</div>
          <h2 className="section-title">Quiénes somos</h2>
          <p className="section-subtitle">
            Conoce la empresa que protege tu futuro digital
          </p>
        </div>

        <div className="about-grid reveal">
          <div className="about-text">
            <p>
              <strong>CiberNova</strong> es una empresa dedicada a la protección
              digital y la seguridad informática. Nuestro objetivo es ayudar a
              empresas y usuarios a prevenir ataques cibernéticos, proteger sus
              datos y mantener sistemas seguros.
            </p>
            <p>
              Con un equipo de profesionales altamente capacitados y las
              herramientas más avanzadas del mercado, ofrecemos soluciones
              integrales que se adaptan a las necesidades específicas de cada
              cliente.
            </p>
          </div>

          <div className="about-highlight">
            <div className="glass-card">
              <h3>🎯 Misión</h3>
              <p>
                Brindar soluciones de ciberseguridad innovadoras y confiables
                para proteger la información digital de nuestros clientes.
              </p>
            </div>
            <div className="glass-card">
              <h3>🚀 Visión</h3>
              <p>
                Convertirnos en una empresa líder en seguridad informática en
                República Dominicana y Latinoamérica.
              </p>
            </div>
          </div>
        </div>

        <div className="valores-grid">
          {valores.map((valor, i) => (
            <div key={i} className={`valor-item reveal reveal-delay-${i + 1}`}>
              <span className="valor-icon">{valor.icon}</span>
              <span className="valor-name">{valor.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
