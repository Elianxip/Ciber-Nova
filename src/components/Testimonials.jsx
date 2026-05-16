import { useState, useEffect } from 'react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="testimonials section" id="testimonios">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">💬 Testimonios</div>
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-card" key={current}>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.avatar}</div>
              <div className="testimonial-info">
                <h4>{t.author}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>

          <div className="testimonial-arrows">
            <button className="testimonial-arrow" onClick={prev} aria-label="Anterior">
              ←
            </button>
            <button className="testimonial-arrow" onClick={next} aria-label="Siguiente">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
