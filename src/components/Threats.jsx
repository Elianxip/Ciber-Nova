import { threats } from '../data';

export default function Threats() {
  return (
    <section className="threats section" id="amenazas">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">⚠️ Amenazas</div>
          <h2 className="section-title">Amenazas Digitales Comunes</h2>
          <p className="section-subtitle">
            Conoce los peligros más frecuentes en el mundo digital y cómo protegerte
          </p>
        </div>

        <div className="threats-grid">
          {threats.map((threat, i) => (
            <div key={i} className={`threat-card reveal reveal-delay-${Math.min(i + 1, 5)}`}>
              <div className="threat-icon">{threat.icon}</div>
              <h3>{threat.name}</h3>
              <p>{threat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
