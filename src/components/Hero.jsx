import { useMemo } from 'react';

export default function Hero() {
  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${2 + Math.random() * 3}px`,
      delay: `${Math.random() * 6}s`,
      duration: `${4 + Math.random() * 4}s`,
    })), []
  );

  return (
    <section className="hero section" id="inicio">
      {/* Background effects */}
      <div className="hero-grid" />
      <div className="hero-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot" />
            Ciberseguridad Avanzada
          </div>

          <h1>
            Protegemos tu<br />
            <span className="gradient-text">mundo digital</span>
          </h1>

          <p className="hero-description">
            En CiberNova ofrecemos soluciones avanzadas de ciberseguridad para
            personas, empresas y negocios que desean mantener su información
            segura frente a amenazas digitales.
          </p>

          <div className="hero-buttons">
            <a href="#contacto" className="btn btn-primary">
              Solicitar asesoría
            </a>
            <a href="#servicios" className="btn btn-secondary">
              Conoce nuestros servicios
            </a>
          </div>
        </div>

        {/* Decorative visual */}
        <div className="hero-visual">
          <div className="cyber-circle" />
          <div className="cyber-circle" />
          <div className="cyber-circle" />
          <div className="shield-icon">🛡️</div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
