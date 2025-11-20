import './App.css'
import LandingReservas from './LandingReservas'
import LandingAutomatizaciones from './LandingAutomatizaciones'
import LandingPaginasWeb from './LandingPaginasWeb'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './i18n'
import LanguageSelector from './LanguageSelector'
import emailjs from '@emailjs/browser'

function App() {
  const [page, setPage] = useState('home')

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const handleLangChange = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      // Configuración de EmailJS
      const serviceID = 'service_u3fhpks'; // Reemplazar con tu Service ID
      const templateID = 'template_531rrho'; // Reemplazar con tu Template ID
      const publicKey = 'bTDQ8wwM6acE6pVRV'; // Reemplazar con tu Public Key
      
      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        message: formData.mensaje,
        to_name: 'A&M Solution', // Nombre de tu empresa
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setFormStatus('success');
      setFormData({ nombre: '', email: '', mensaje: '' });
      setTimeout(() => setFormStatus(''), 5000);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  if (page === 'reservas') return <LandingReservas goHome={() => setPage('home')} />
  if (page === 'automatizaciones') return <LandingAutomatizaciones goHome={() => setPage('home')} />
  if (page === 'paginasweb') return <LandingPaginasWeb goHome={() => setPage('home')} />

  return (
    <div className="app-container">
      <header className="header modern-header" role="banner">
        <div className="header-content">
          <div className="logo-area">
            <img src="/img/logo.jpg" alt="Logo A&M Solution - Automatización Uruguay" className="company-logo" />
            <span className="logo-text">{t('A&M Solution')}</span>
          </div>
          <nav className="nav" role="navigation" aria-label="Navegación principal">
            <ul className="nav-list">
              <li><a href="#home" onClick={() => setPage('home')}>{t('Inicio')}</a></li>
              <li><a href="#servicios" onClick={() => setPage('home')}>{t('Servicios')}</a></li>
              <li><a href="#contacto" onClick={() => setPage('home')}>{t('Contacto')}</a></li>
              <li><LanguageSelector value={lang} onChange={handleLangChange} /></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <section id="home" className="hero-section">
          <h1>{t('Automatización de Tareas Repetitivas en Uruguay')}</h1>
          <p>{t('Eliminá el trabajo manual tedioso. Automatizamos procesos para que tu equipo se enfoque en lo importante.')}</p>
          <a href="#contacto" className="cta-btn" onClick={() => setPage('home')}>{t('Automatizar Ahora')}</a>
        </section>
        <section id="servicios" className="services-section" aria-label="Servicios de automatización">
          <h2>{t('Servicios de Automatización')}</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>{t('Automatización de Tareas Manuales')}</h3>
              <p>{t('Eliminá tareas repetitivas: gestión de datos, reportes, emails, procesamiento de documentos y más.')}</p>
              <a className="cta-btn" style={{position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)'}} onClick={() => setPage('automatizaciones')} aria-label="Ver más sobre automatización de tareas manuales">{t('Ver más')}</a>
            </div>
            <div className="service-card">
              <h3>{t('Páginas Web Automatizadas')}</h3>
              <p>{t('Sitios web con formularios inteligentes, reservas automáticas y gestión de clientes integrada.')}</p>
              <a className="cta-btn" style={{position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)'}} onClick={() => setPage('paginasweb')} aria-label="Ver más sobre páginas web automatizadas">{t('Ver más')}</a>
            </div>
            <div className="service-card">
              <h3>{t('Integración de Sistemas')}</h3>
              <p>{t('Conectamos tus herramientas: WhatsApp, Google Calendar, CRM, hojas de cálculo y más.')}</p>
              <a className="cta-btn" style={{position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)'}} onClick={() => setPage('reservas')} aria-label="Ver más sobre integración de sistemas">{t('Ver más')}</a>
            </div>
          </div>
        </section>
        <section id="contacto" className="contact-section" aria-label="Formulario de contacto">
          <h2>{t('Contacto')}</h2>
          <form className="contact-form" onSubmit={handleSubmit} aria-label="Formulario para contactarnos">
            <div className="form-group">
              <input 
                type="text" 
                name="nombre"
                placeholder={t('Nombre')} 
                value={formData.nombre}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder={t('Email')} 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="mensaje"
                placeholder={t('Mensaje')} 
                value={formData.mensaje}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? t('Enviando...') : t('Enviar')}
            </button>
            {formStatus === 'success' && (
              <div className="form-success-message">{t('¡Mensaje enviado con éxito!')}</div>
            )}
            {formStatus === 'error' && (
              <div className="form-error-message">{t('Error al enviar. Intenta de nuevo.')}</div>
            )}
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
