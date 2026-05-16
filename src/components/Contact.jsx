import { useState } from 'react';
import { contactInfo } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <section className="contact section" id="contacto">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">📧 Contacto</div>
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">
            ¿Listo para proteger tu mundo digital? Escríbenos y te asesoramos
          </p>
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
              Información de contacto
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Estamos disponibles para ayudarte. No dudes en comunicarte con nosotros.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Correo electrónico</h4>
                  <p>{contactInfo.email}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Teléfono</h4>
                  <p>{contactInfo.phone}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Ubicación</h4>
                  <p>{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre completo"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="tu@correo.com"
                value={form.correo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="¿En qué podemos ayudarte?"
                value={form.mensaje}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              {sent ? '✅ Mensaje enviado' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
