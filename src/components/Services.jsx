import { services } from '../data';

export default function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">🛡️ Servicios</div>
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Soluciones completas de ciberseguridad para proteger cada aspecto de tu vida digital
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className={`service-card reveal reveal-delay-${Math.min(i + 1, 5)}`}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
