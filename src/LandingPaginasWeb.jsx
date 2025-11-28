import './App.css'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './i18n'
import LanguageSelector from './LanguageSelector'

function LandingPaginasWeb({ goHome }) {
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
        <section className="hero-section hero-web">
          <h1>{t('Tu Web, Tu Identidad Digital')}</h1>
          <p className="hero-sub">{t('Creamos sitios modernos, rápidos y listos para convertir visitantes en clientes.')}</p>
          <div className="hero-badges">
            <span className="badge">{t('Diseño Responsive')}</span>
            <span className="badge">{t('SEO Pro')}</span>
            <span className="badge">{t('Carga Ultra Rápida')}</span>
            <span className="badge">{t('Integración Total')}</span>
          </div>
          <a href="#contacto" className="cta-btn cta-epic" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Solicita tu web ahora')}</a>
        </section>
        <section className="features-section">
          <h2>{t('¿Por qué elegirnos?')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>{t('Diseño Único')}</h3>
              <p>{t('Tu web será 100% personalizada, alineada a tu marca y objetivos.')}</p>
            </div>
            <div className="feature-card">
              <h3>{t('Optimización SEO')}</h3>
              <p>{t('Posiciona tu negocio en Google y atrae más clientes. Implementamos buenas prácticas de SEO técnico, contenido optimizado y velocidad de carga para que tu web destaque en los buscadores.')}</p>
            </div>
            <div className="feature-card">
              <h3>{t('Integraciones Inteligentes')}</h3>
              <p>{t('Conecta WhatsApp, redes sociales, analytics y más.')}</p>
            </div>
            <div className="feature-card">
              <h3>{t('Soporte Real')}</h3>
              <p>{t('Te acompañamos antes, durante y después del lanzamiento.')}</p>
            </div>
          </div>
          <div className="seo-section">
            <h2>{t('SEO que sí funciona 🚀')}</h2>
            <ul className="seo-list">
              <li>{t('✔️ Estructura semántica y etiquetas HTML correctas')}</li>
              <li>{t('✔️ Meta títulos y descripciones optimizadas')}</li>
              <li>{t('✔️ URLs limpias y amigables')}</li>
              <li>{t('✔️ Imágenes comprimidas y con atributos alt')}</li>
              <li>{t('✔️ Sitemap y archivo robots.txt')}</li>
              <li>{t('✔️ Velocidad de carga sobresaliente')}</li>
              <li>{t('✔️ Integración con Google Analytics y Search Console')}</li>
              <li>{t('✔️ Estrategia de palabras clave relevante para tu rubro')}</li>
            </ul>
            <p className="seo-desc">{t('Tu web será visible, rápida y lista para escalar posiciones en Google desde el primer día.')}</p>
          </div>
        </section>
        <section className="testimonios-section">
          <h2>{t('Clientes que confiaron')}</h2>
          <div className="testimonios-grid">
            <div className="testimonio-card">
              <p>{t('Web para reconocida empresa de columnas en Miami, pompano beach.')}</p>
              <a href="https://www.stonecolumnsfl.com/#/" target="_blank" rel="noopener noreferrer">
                  {t('Visitar sitio')}
              </a>            
            </div>
            <div className="testimonio-card">
              <p>{t('Web para empresa de construccion en Miami.')}</p>
                <a href="https://mazzservicesllc.com/" target="_blank" rel="noopener noreferrer">
                    {t('Visitar sitio')}
                </a>
            </div>
          </div>
        </section>
        <section id="contacto" className="contact-section">
          <h2>{t('¡Quiero mi web!')}</h2>
          <form className="contact-form">
            <input type="text" placeholder={t('Nombre')} required />
            <input type="email" placeholder={t('Email')} required />
            <textarea placeholder={t('¿Qué web necesitas?')} required></textarea>
            <button type="submit">{t('Solicitar propuesta')}</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default LandingPaginasWeb;
