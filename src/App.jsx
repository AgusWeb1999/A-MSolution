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
  const [menuOpen, setMenuOpen] = useState(false)

  // Función para scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

  if (page === 'reservas') return <LandingReservas goHome={() => { setPage('home'); window.scrollTo(0, 0); }} />
  if (page === 'automatizaciones') return <LandingAutomatizaciones goHome={() => { setPage('home'); window.scrollTo(0, 0); }} />
  if (page === 'paginasweb') return <LandingPaginasWeb goHome={() => { setPage('home'); window.scrollTo(0, 0); }} />

  return (
    <div className="app-container">
      <header className="header modern-header" role="banner">
        <div className="header-content">
          <div className="logo-area">
            <img src="/img/logo.jpg" alt="Logo A&M Solution - Automatización Uruguay" className="company-logo" />
            <span className="logo-text">{t('A&M Solution')}</span>
            <button
              className={`hamburger-btn${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú de navegación"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <nav className={`nav${menuOpen ? ' nav-open' : ''}`} role="navigation" aria-label="Navegación principal">
            <ul className="nav-list">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); setMenuOpen(false); setPage('home'); setTimeout(() => scrollToSection('home'), 100); }}>{t('Inicio')}</a></li>
              <li><a href="#servicios" onClick={(e) => { e.preventDefault(); setMenuOpen(false); setPage('home'); setTimeout(() => scrollToSection('servicios'), 100); }}>{t('Servicios')}</a></li>
              <li><a href="#contacto" onClick={(e) => { e.preventDefault(); setMenuOpen(false); setPage('home'); setTimeout(() => scrollToSection('contacto'), 100); }}>{t('Contacto')}</a></li>
              <li><LanguageSelector value={lang} onChange={handleLangChange} /></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <section id="home" className="hero-section">
          <h1>{t('Automatización de Tareas Repetitivas en Uruguay')}</h1>
          <p>{t('Eliminá el trabajo manual tedioso. Automatizamos procesos para que tu equipo se enfoque en lo importante.')}</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">+5</span>
              <span className="stat-label">{t('Años de Experiencia')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2-4</span>
              <span className="stat-label">{t('Semanas promedio')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">{t('Remoto desde Uruguay')}</span>
            </div>
          </div>
          <a href="#contacto" className="cta-btn" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Solicitar Presupuesto')}</a>
        </section>

        <section className="about-section">
          <h2>{t('Somos A&M Solution')}</h2>
          <p className="about-intro">{t('Un equipo de 2 profesionales especializados en automatización desde Uruguay. Trabajamos de forma remota con empresas de toda Latinoamérica.')}</p>
          <div className="about-values">
            <div className="value-card">
              <h3>🎯 {t('Transparencia')}</h3>
              <p>{t('Tiempos realistas y comunicación constante durante todo el proyecto.')}</p>
            </div>
            <div className="value-card">
              <h3>⚡ {t('Eficiencia')}</h3>
              <p>{t('Entregamos soluciones probadas en 2-4 semanas según complejidad.')}</p>
            </div>
            <div className="value-card">
              <h3>🤝 {t('Compromiso')}</h3>
              <p>{t('Seguimiento post-entrega y ajustes incluidos en cada proyecto.')}</p>
            </div>
          </div>
        </section>

        <section id="servicios" className="services-section" aria-label="Servicios de automatización">
          <h2>{t('Servicios de Automatización')}</h2>
          <p className="section-subtitle">{t('Soluciones a medida para eliminar trabajo manual y aumentar productividad')}</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>{t('Automatización de Tareas Manuales')}</h3>
              <p>{t('Eliminá tareas repetitivas: gestión de datos, reportes, emails, procesamiento de documentos y más.')}</p>
              <ul className="service-list">
                <li>{t('Bots personalizados')}</li>
                <li>{t('Procesamiento de datos')}</li>
                <li>{t('Generación de reportes')}</li>
              </ul>
              <a className="cta-btn cta-secondary" onClick={() => { setPage('automatizaciones'); window.scrollTo(0, 0); }} aria-label="Ver más sobre automatización de tareas manuales">{t('Más Info')}</a>
            </div>
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>{t('Páginas Web Automatizadas')}</h3>
              <p>{t('Sitios web con formularios inteligentes, reservas automáticas y gestión de clientes integrada.')}</p>
              <ul className="service-list">
                <li>{t('Landing pages optimizadas')}</li>
                <li>{t('Sistemas de reservas')}</li>
                <li>{t('Integración con tu CRM')}</li>
              </ul>
              <a className="cta-btn cta-secondary" onClick={() => { setPage('paginasweb'); window.scrollTo(0, 0); }} aria-label="Ver más sobre páginas web automatizadas">{t('Más Info')}</a>
            </div>
            <div className="service-card">
              <div className="service-icon">🔗</div>
              <h3>{t('Integración de Sistemas')}</h3>
              <p>{t('Conectamos tus herramientas usando n8n y otras plataformas líderes: WhatsApp, Google Calendar, CRM, hojas de cálculo y más.')}</p>
              <div className="n8n-badge">
                <span className="n8n-logo-badge">n8n</span>
                <span className="n8n-badge-text">{t('Automatización visual con n8n')}</span>
              </div>
              <ul className="service-list">
                <li>⚡ {t('Flujos visuales con n8n')}</li>
                <li>{t('APIs, webhooks y triggers')}</li>
                <li>{t('Sincronización automática de datos')}</li>
                <li>{t('Notificaciones en tiempo real')}</li>
                <li>{t('Integraciones con +400 apps')}</li>
              </ul>
              <a className="cta-btn cta-secondary" onClick={() => { setPage('reservas'); window.scrollTo(0, 0); }} aria-label="Ver más sobre integración de sistemas">{t('Más Info')}</a>
            </div>
          </div>
        </section>

        <section id="proyectos" className="projects-section">
          <h2>{t('Proyectos Realizados')}</h2>
          <p className="section-subtitle">{t('Automatizaciones implementadas para empresas de e-commerce y retail')}</p>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image-placeholder">
                <img 
                  src="/img/proyectos/proyecto-automatizacion-tareas.jpg" 
                  alt="Sistema de Automatización de Tareas"
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <span className="project-placeholder-text" style={{display: 'none'}}>{t('Imagen del proyecto')}</span>
              </div>
              <div className="project-info">
                <h3>{t('Sistema de Automatización de Tareas')}</h3>
                <p className="project-description">{t('Automatización completa de procesos repetitivos y flujos de trabajo. Eliminación de tareas manuales con integración multi-plataforma.')}</p>
                <div className="project-tags">
                  <span className="tag">{t('Automation')}</span>
                  <span className="tag">{t('Workflow')}</span>
                  <span className="tag">{t('Integration')}</span>
                </div>
                <p className="project-timeframe">{t('Duración: 3 semanas')}</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-placeholder">
                <span className="project-placeholder-text">{t('Imagen del proyecto')}</span>
              </div>
              <div className="project-info">
                <h3>{t('Dashboard de Reportes Automáticos')}</h3>
                <p className="project-description">{t('Sistema de generación automática de reportes diarios con análisis de ventas, KPIs y envío programado a stakeholders. Dashboard en tiempo real.')}</p>
                <div className="project-tags">
                  <span className="tag">{t('Google Sheets')}</span>
                  <span className="tag">{t('Analytics')}</span>
                  <span className="tag">{t('Reports')}</span>
                  <span className="tag badge-in-progress">{t('En Desarrollo')}</span>
                </div>
                <p className="project-timeframe">{t('Duración: 4 semanas')}</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-placeholder">
                <img 
                  src="/img/proyectos/proyecto-atencion-cliente.jpg" 
                  alt="Automatización de Atención al Cliente"
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <span className="project-placeholder-text" style={{display: 'none'}}>{t('Imagen del proyecto')}</span>
              </div>
              <div className="project-info">
                <h3>{t('Automatización de Atención al Cliente')}</h3>
                <p className="project-description">{t('Integración de chatbot con sistema de tickets, respuestas automáticas y escalamiento inteligente. Mejora del 60% en tiempo de respuesta.')}</p>
                <div className="project-tags">
                  <span className="tag">{t('Chatbot')}</span>
                  <span className="tag">{t('CRM')}</span>
                  <span className="tag">{t('Support')}</span>
                </div>
                <p className="project-timeframe">{t('Duración: 3 semanas')}</p>
              </div>
            </div>
          </div>
          <div className="projects-cta">
            <p>{t('¿Querés automatizar procesos en tu empresa?')}</p>
            <a href="#contacto" className="cta-btn" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Solicitar Presupuesto')}</a>
          </div>
        </section>

        <section className="process-section">
          <h2>{t('Cómo Trabajamos')}</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>{t('Consulta Inicial')}</h3>
              <p>{t('Reunión virtual para entender tus necesidades y procesos actuales. Sin compromiso.')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>{t('Propuesta & Presupuesto')}</h3>
              <p>{t('Te enviamos una propuesta detallada con tiempos estimados (2-4 semanas típicamente) y costos transparentes.')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>{t('Desarrollo')}</h3>
              <p>{t('Trabajamos en tu automatización con actualizaciones semanales del progreso.')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>{t('Entrega & Seguimiento')}</h3>
              <p>{t('Entregamos, capacitamos a tu equipo y brindamos seguimiento durante 30 días.')}</p>
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
