import './App.css'

function LandingPaginasWeb({ goHome }) {
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
          <h1>Desarrollo de Páginas Web</h1>
          <p>Impulsa tu presencia online con sitios web modernos, rápidos y a medida.</p>
          <a href="#contacto" className="cta-btn">Solicita tu web</a>
        </section>
        <section className="services-section">
          <h2>¿Qué ofrecemos?</h2>
          <ul style={{textAlign: 'left', maxWidth: 600, margin: '0 auto', color: '#fff'}}>
            <li>Diseño responsive y profesional.</li>
            <li>Optimización para buscadores (SEO).</li>
            <li>Integración con herramientas y redes sociales.</li>
            <li>Soporte y mantenimiento.</li>
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

export default LandingPaginasWeb;
