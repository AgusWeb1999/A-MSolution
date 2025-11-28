import './App.css'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './i18n'
import LanguageSelector from './LanguageSelector'

function LandingReservas({ goHome }) {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  
  const handleLangChange = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  // Función para scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
    <div className="app-container">
      <header className="header modern-header" role="banner">
        <div className="header-content">
          <div className="logo-area" style={{cursor: 'pointer'}} onClick={goHome}>
            <img src="/img/logo.jpg" alt="Logo A&M Solution - Automatización Uruguay" className="company-logo" />
            <span className="logo-text">{t('A&M Solution')}</span>
          </div>
          <nav className="nav" role="navigation" aria-label="Navegación principal">
            <ul className="nav-list">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); goHome(); }}>{t('Inicio')}</a></li>
              <li><a href="#servicios" onClick={(e) => { e.preventDefault(); goHome(); }}>{t('Servicios')}</a></li>
              <li><a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Contacto')}</a></li>
              <li><LanguageSelector value={lang} onChange={handleLangChange} /></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <section className="hero-section hero-reservas">
          <h1>{t('El Asistente de Reservas Definitivo')}</h1>
          <p className="hero-sub">{t('Automatiza tu agenda, ahorra tiempo y sorprende a tus clientes.')}</p>
          <div className="hero-badges">
            <span className="badge">{t('WhatsApp API')}</span>
            <span className="badge">{t('Google Calendar')}</span>
            <span className="badge">{t('IA 24/7')}</span>
            <span className="badge">{t('Sin intervención humana')}</span>
          </div>
          <a href="#contacto" className="cta-btn cta-epic" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Solicita una demo exclusiva')}</a>
        </section>
        <section className="features-section">
          <h2>{t('¿Por qué elegir nuestro asistente?')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>{t('Automatización Total')}</h3>
              <p>{t('Tu agenda se gestiona sola, sin errores ni olvidos.')}</p>
            </div>
            <div className="feature-card">
              <h3>{t('Integración Instantánea')}</h3>
              <p>{t('Funciona con WhatsApp y Google Calendar desde el primer día.')}</p>
            </div>
            <div className="feature-card">
              <h3>{t('Experiencia Premium')}</h3>
              <p>{t('Responde, agenda y confirma reservas en segundos, 24/7.')}</p>
            </div>
            <div className="feature-card">
              <h3>{t('Escalable y Seguro')}</h3>
              <p>{t('Ideal para cualquier comercio, con soporte y actualizaciones.')}</p>
            </div> 
            {/* Cambio mínimo para forzar deploy */}
          </div>
        </section>
        <section className="testimonios-section">
          <h2>{t('Clientes felices')}</h2>
          <div className="testimonios-grid">
            <div className="testimonio-card">
              <p>{t('"Desde que uso el asistente, no pierdo ni una reserva y mis clientes están felices."')}</p>
              <span>{t('- Florencia, Estética')}</span>
            </div>
            <div className="testimonio-card">
              <p>{t('"Automatizó todo el proceso, ahora tengo más tiempo para mi negocio."')}</p>
              <span>{t('- Pablo, Barbería')}</span>
            </div>
          </div>
        </section>
        <section id="contacto" className="contact-section">
          <h2>{t('¡Quiero mi demo!')}</h2>
          <form className="contact-form">
            <input type="text" placeholder={t('Nombre')} required />
            <input type="email" placeholder={t('Email')} required />
            <textarea placeholder={t('Mensaje')} required></textarea>
            <button type="submit">{t('Solicitar demo')}</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default LandingReservas;
