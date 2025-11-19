import './App.css'
import { useEffect } from 'react'

function LandingAutomatizaciones({ goHome }) {
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

    const timer = setTimeout(initGoogleTranslate, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container landing-auto-bg">
      <header className="header modern-header">
        <div className="header-content">
          <div className="logo-area" style={{cursor: 'pointer'}} onClick={goHome}>
            <span className="logo-text">A&M Solution</span>
          </div>
          <div id="google_translate_element"></div>
        </div>
      </header>
      <main className="main-content">
        <section className="hero-section hero-auto">
          <h1>Automatiza y Gana Tiempo</h1>
          <p className="hero-sub">Bots, integraciones y flujos inteligentes para que tu negocio funcione solo.</p>
          <div className="hero-badges">
            <span className="badge">Google Sheets</span>
            <span className="badge">Bots automatizados</span>
            <span className="badge">Notificaciones</span>
            <span className="badge">Ahorro de Tiempo</span>
          </div>
          <a href="#contacto" className="cta-btn cta-epic">Solicita tu automatización</a>
        </section>
        <section className="features-section">
          <h2>¿Qué podemos automatizar?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Procesos Repetitivos</h3>
              <p>Elimina tareas manuales y reduce errores humanos.</p>
            </div>
            <div className="feature-card">
              <h3>Integraciones Potentes</h3>
              <p>Conecta tus apps favoritas: Google Sheets, WhatsApp, email y más.</p>
            </div>
            <div className="feature-card">
              <h3>Alertas y Reportes</h3>
              <p>Recibe notificaciones y reportes automáticos en tiempo real.</p>
            </div>
            <div className="feature-card">
              <h3>Soluciones a Medida</h3>
              <p>Automatizaciones personalizadas según tu negocio.</p>
            </div>
          </div>
        </section>
        <section className="testimonios-section">
          <h2>Ejemplos y casos donde aplica</h2>
          <div className="testimonios-grid">
            <div className="testimonio-card">
              <p>Automatizaciones para importante ecommerce de LATAM, logrando un ahorro significativo de tiempo y recursos.</p>
              <span>Ecommerce</span>
            </div>
            <div className="testimonio-card">
              <p>Bot de atención al cliente implementado en WhatsApp, mejorando la respuesta y satisfacción del cliente.</p>
              <span>Proyecto del equipo</span>
            </div>
          </div>
        </section>
        <section id="contacto" className="contact-section">
          <h2>¡Quiero automatizar!</h2>
          <form className="contact-form">
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="¿Qué proceso quieres automatizar?" required></textarea>
            <button type="submit">Solicitar demo</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default LandingAutomatizaciones;
