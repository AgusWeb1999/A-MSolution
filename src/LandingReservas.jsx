import './App.css'

function LandingReservas({ goHome }) {
  return (
    <div className="app-container landing-reservas-bg">
      <header className="header modern-header">
        <div className="header-content">
          <div className="logo-area" style={{cursor: 'pointer'}} onClick={goHome}>
            <span className="logo-text">A&M Solution</span>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="hero-section hero-reservas">
          <h1>El Asistente de Reservas Definitivo</h1>
          <p className="hero-sub">Automatiza tu agenda, ahorra tiempo y sorprende a tus clientes.</p>
          <div className="hero-badges">
            <span className="badge">WhatsApp</span>
            <span className="badge">Google Calendar</span>
            <span className="badge">IA 24/7</span>
            <span className="badge">Sin intervención humana</span>
          </div>
          <a href="#contacto" className="cta-btn cta-epic">Solicita una demo exclusiva</a>
        </section>
        <section className="features-section">
          <h2>¿Por qué elegir nuestro asistente?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Automatización Total</h3>
              <p>Tu agenda se gestiona sola, sin errores ni olvidos.</p>
            </div>
            <div className="feature-card">
              <h3>Integración Instantánea</h3>
              <p>Funciona con WhatsApp y Google Calendar desde el primer día.</p>
            </div>
            <div className="feature-card">
              <h3>Experiencia Premium</h3>
              <p>Responde, agenda y confirma reservas en segundos, 24/7.</p>
            </div>
            <div className="feature-card">
              <h3>Escalable y Seguro</h3>
              <p>Ideal para cualquier comercio, con soporte y actualizaciones.</p>
            </div>
          </div>
        </section>
        <section className="testimonios-section">
          <h2>Clientes felices</h2>
          <div className="testimonios-grid">
            <div className="testimonio-card">
              <p>"Desde que uso el asistente, no pierdo ni una reserva y mis clientes están felices."</p>
              <span>- Florencia, Estética</span>
            </div>
            <div className="testimonio-card">
              <p>"Automatizó todo el proceso, ahora tengo más tiempo para mi negocio."</p>
              <span>- Pablo, Barbería</span>
            </div>
          </div>
        </section>
        <section id="contacto" className="contact-section">
          <h2>¡Quiero mi demo!</h2>
          <form className="contact-form">
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Mensaje" required></textarea>
            <button type="submit">Solicitar demo</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default LandingReservas;
