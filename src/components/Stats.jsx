import { useState, useEffect, useRef } from 'react';
import { stats } from '../data';

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-value">
        {count}{suffix}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats section" id="estadisticas">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">📊 Estadísticas</div>
          <h2 className="section-title">Números que respaldan</h2>
          <p className="section-subtitle">
            Resultados reales que demuestran nuestro compromiso con la seguridad
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i}>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
