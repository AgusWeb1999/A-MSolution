import './App.css'
import LandingReservas from './LandingReservas'
import LandingAutomatizaciones from './LandingAutomatizaciones'
import LandingPaginasWeb from './LandingPaginasWeb'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'reservas') return <LandingReservas goHome={() => setPage('home')} />
  if (page === 'automatizaciones') return <LandingAutomatizaciones goHome={() => setPage('home')} />
  if (page === 'paginasweb') return <LandingPaginasWeb goHome={() => setPage('home')} />

  return (
    <div className="app-container">
      <header className="header modern-header">
        <div className="header-content">
          <div className="logo-area">
            <span className="logo-text">A&M Solution</span>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#home" onClick={() => setPage('home')}>Inicio</a></li>
              <li><a href="#servicios" onClick={() => setPage('home')}>Servicios</a></li>
              <li><a href="#contacto" onClick={() => setPage('home')}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <section id="home" className="hero-section">
          <h1>Soluciones automatizadas con IA para tu Negocio</h1>
          <p>Impulsa tu empresa con IA.</p>
          <a href="#contacto" className="cta-btn" onClick={() => setPage('home')}>Contacta ya</a>
        </section>
        <section id="servicios" className="services-section">
          <h2>Nuestros Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Asistente de reservas WhatsApp </h3>
              <p>Gestiona reservas por WhatsApp y Google Calendar sin intervención manual.</p>
              <a className="cta-btn" style={{position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)'}} onClick={() => setPage('reservas')}>Ver más</a>
            </div>
            <div className="service-card">
              <h3>Automatización</h3>
              <p>Automatiza tareas y procesos con soluciones a medida.</p>
              <a className="cta-btn" style={{position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)'}} onClick={() => setPage('automatizaciones')}>Ver más</a>
            </div>
            <div className="service-card">
              <h3>Otros servicios tecnologicos</h3>
              <p>Desarrollo web, bots y recursos digitales para tu negocio.</p>
              <a className="cta-btn" style={{position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)'}} onClick={() => setPage('paginasweb')}>Ver más</a>
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
