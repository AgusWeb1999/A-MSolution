import './App.css'
import LandingReservas from './LandingReservas'
import LandingAutomatizaciones from './LandingAutomatizaciones'
import LandingPaginasWeb from './LandingPaginasWeb'
import { useState, useEffect } from 'react'

function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    // Esperar a que el DOM esté listo y luego inicializar Google Translate
    const initGoogleTranslate = () => {
      const element = document.getElementById('google_translate_element');
      if (element && window.google && window.google.translate) {
        new window.google.translate.TranslateElement({
          pageLanguage: 'es',
          includedLanguages: 'en,es',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
      }
    };

    // Esperar un poco para asegurar que todo esté listo
    const timer = setTimeout(initGoogleTranslate, 500);
    return () => clearTimeout(timer);
  }, []);

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
              <li><div id="google_translate_element"></div></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <section id="home" className="hero-section">
          <h1>Automatización de Tareas Repetitivas en Uruguay</h1>
          <p>Eliminá el trabajo manual tedioso. Automatizamos procesos para que tu equipo se enfoque en lo importante.</p>
          <a href="#contacto" className="cta-btn" onClick={() => setPage('home')}>Automatizar Ahora</a>
        </section>
        <section id="servicios" className="services-section">
          <h2>Servicios de Automatización</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Automatización de Tareas Manuales</h3>
              <p>Eliminá tareas repetitivas: gestión de datos, reportes, emails, procesamiento de documentos y más.</p>
              <a className="cta-btn" style={{position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)'}} onClick={() => setPage('automatizaciones')}>Ver más</a>
            </div>
            <div className="service-card">
              <h3>Páginas Web Automatizadas</h3>
              <p>Sitios web con formularios inteligentes, reservas automáticas y gestión de clientes integrada.</p>
              <a className="cta-btn" style={{position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)'}} onClick={() => setPage('paginasweb')}>Ver más</a>
            </div>
            <div className="service-card">
              <h3>Integración de Sistemas</h3>
              <p>Conectamos tus herramientas: WhatsApp, Google Calendar, CRM, hojas de cálculo y más.</p>
              <a className="cta-btn" style={{position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)'}} onClick={() => setPage('reservas')}>Ver más</a>
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
