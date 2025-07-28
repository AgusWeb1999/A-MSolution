import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="header modern-header">
        <div className="header-content">
          <div className="logo-area">
            <span className="logo-text">A&M Solution</span>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#home">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <section id="home" className="hero-section">
          <h1>Soluciones Inteligentes para tu Negocio</h1>
          <p>Impulsa tu empresa con tecnología y atención personalizada.</p>
          <a href="#contacto" className="cta-btn">Solicita una demo</a>
        </section>
        <section id="servicios" className="services-section">
          <h2>Nuestros Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Automatización</h3>
              <p>Optimiza procesos y ahorra tiempo con nuestras soluciones automatizadas.</p>
            </div>
            <div className="service-card">
              <h3>Atención al Cliente</h3>
              <p>Mejora la experiencia de tus clientes con canales modernos y eficientes.</p>
            </div>
            <div className="service-card">
              <h3>Consultoría</h3>
              <p>Recibe asesoría experta para digitalizar y escalar tu negocio.</p>
            </div>
          </div>
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

export default App
