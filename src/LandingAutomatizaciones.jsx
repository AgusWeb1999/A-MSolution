import './App.css'

function LandingAutomatizaciones({ goHome }) {
  return (
    <div className="app-container">
      <header className="header modern-header">
        <div className="header-content">
          <div className="logo-area" style={{cursor: 'pointer'}} onClick={goHome}>
            <span className="logo-text">A&M Solution</span>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="hero-section">
          <h1>Automatizaciones para tu Negocio</h1>
          <p>Optimiza procesos y ahorra tiempo con automatizaciones a medida: Google Sheets, bots y más.</p>
          <a href="#contacto" className="cta-btn">Solicita una demo</a>
        </section>
        <section className="services-section">
          <h2>¿Qué automatizamos?</h2>
          <ul style={{textAlign: 'left', maxWidth: 600, margin: '0 auto', color: '#fff'}}>
            <li>Procesos repetitivos y manuales.</li>
            <li>Integraciones con Google Sheets y otras plataformas.</li>
            <li>Notificaciones automáticas y reportes.</li>
            <li>Soluciones personalizadas según tu necesidad.</li>
          </ul>
        </section>
        <section id="contacto" className="contact-section">
          <h2>Contacto</h2>
          <form className="contact-form">
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default LandingAutomatizaciones;
