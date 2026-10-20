import './App.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './i18n'
import SiteHeader from './SiteHeader'
import Footer from './Footer'
import ContactForm from './ContactForm'
import useSEO from './useSEO'
import FlowDiagram from './FlowDiagram'
import { IconWorkflow, IconGlobe, IconLink, IconLeaf, IconInbox, IconChart, IconCheck, IconCross } from './Icons'
import LandingReservas from './LandingReservas'
import LandingAutomatizaciones from './LandingAutomatizaciones'
import LandingPaginasWeb from './LandingPaginasWeb'
import LandingAgroTech from './LandingAgroTech'

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const DEMO_STEP_DURATION = 1100;

function Home() {
  const { t } = useTranslation();
  const location = useLocation();

  useSEO({
    path: '/',
    title: 'A&M Solution Uruguay | Automatización, IA Aplicada al Agro y Desarrollo Web',
    description: '🚀 Automatizamos procesos empresariales, desarrollamos sitios web y aplicamos IA/visión por computadora al agro desde Uruguay. Desde bots y reportes automáticos hasta detección de brotes con inteligencia artificial. Consultoría gratuita.',
    keywords: 'automatización tareas repetitivas Uruguay, automatización empresarial Uruguay, IA aplicada al agro Uruguay, visión por computadora agricultura, detección de brotes con inteligencia artificial, desarrollo web Uruguay, soluciones de tecnología Uruguay, RPA Uruguay, n8n Uruguay, agro tech Uruguay, software a medida Montevideo',
  });

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => scrollToSection(location.hash.replace('#', '')), 50);
    }
  }, [location]);

  const heroFlowNodes = [
    { icon: IconInbox, label: t('Entrada') },
    { icon: IconWorkflow, label: t('Automatización') },
    { icon: IconLink, label: t('Integración') },
    { icon: IconChart, label: t('Resultado') },
  ];

  const demoSteps = [
    { icon: IconInbox, label: t('Entrada'), text: t('Llega un mensaje, un formulario o un dato nuevo a alguna de tus herramientas.') },
    { icon: IconWorkflow, label: t('Automatización'), text: t('Un flujo de reglas o IA lo procesa y decide automáticamente qué hacer con eso.') },
    { icon: IconLink, label: t('Integración'), text: t('Se sincroniza con el resto de tus sistemas: CRM, planillas, WhatsApp, calendario.') },
    { icon: IconChart, label: t('Resultado'), text: t('Queda todo registrado y notificado, sin que nadie lo haya tocado a mano.') },
  ];

  const [demoStep, setDemoStep] = useState(-1);
  const [demoRunning, setDemoRunning] = useState(false);
  const demoIntervalRef = useRef(null);

  useEffect(() => () => clearInterval(demoIntervalRef.current), []);

  const runDemo = () => {
    if (demoRunning) return;
    clearInterval(demoIntervalRef.current);
    setDemoRunning(true);
    setDemoStep(0);
    let i = 0;
    demoIntervalRef.current = setInterval(() => {
      i += 1;
      if (i >= demoSteps.length) {
        clearInterval(demoIntervalRef.current);
        setDemoRunning(false);
        return;
      }
      setDemoStep(i);
    }, DEMO_STEP_DURATION);
  };

  const resetDemo = () => {
    clearInterval(demoIntervalRef.current);
    setDemoRunning(false);
    setDemoStep(-1);
  };

  return (
    <>
      <section id="home" className="hero-section hero-main">
        <div className="hero-copy">
          <h1>{t('Menos tareas manuales. Más tiempo para crecer.')}</h1>
          <p>{t('Diseñamos automatizaciones con inteligencia artificial que conectan tus herramientas, simplifican procesos y ayudan a tu empresa — o a tu campo — a trabajar mejor.')}</p>
          <div className="hero-cta-row">
            <a href="#contacto" className="cta-btn" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Quiero automatizar mi empresa')}</a>
            <a href="#demo" className="cta-btn cta-ghost" onClick={(e) => { e.preventDefault(); scrollToSection('demo'); }}>{t('Conocé cómo funciona')}</a>
          </div>
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
        </div>
        <div className="hero-visual">
          <FlowDiagram nodes={heroFlowNodes} variant="hero" />
        </div>
      </section>

      <section className="about-section">
        <h2>{t('Somos A&M Solution')}</h2>
        <p className="about-intro">{t('Un equipo de 2 profesionales especializados en automatización, desarrollo de software e IA aplicada, trabajando desde Uruguay para empresas de toda Latinoamérica y el campo uruguayo.')}</p>
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

      <section id="servicios" className="services-section" aria-label="Servicios de automatización, IA y desarrollo web">
        <h2>{t('Nuestros Servicios')}</h2>
        <p className="section-subtitle">{t('De la automatización de tareas al desarrollo de modelos de IA aplicados: soluciones a medida que eliminan trabajo manual y aumentan productividad')}</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><IconWorkflow /></div>
            <h3>{t('Automatización de Tareas Manuales')}</h3>
            <p>{t('Eliminá tareas repetitivas: gestión de datos, reportes, emails, procesamiento de documentos y más.')}</p>
            <ul className="service-list">
              <li>{t('Bots personalizados')}</li>
              <li>{t('Procesamiento de datos')}</li>
              <li>{t('Generación de reportes')}</li>
            </ul>
            <Link className="cta-btn cta-secondary" to="/automatizaciones" aria-label="Ver más sobre automatización de tareas manuales">{t('Más Info')}</Link>
          </div>
          <div className="service-card">
            <div className="service-icon"><IconGlobe /></div>
            <h3>{t('Páginas Web Automatizadas')}</h3>
            <p>{t('Sitios web con formularios inteligentes, reservas automáticas y gestión de clientes integrada.')}</p>
            <ul className="service-list">
              <li>{t('Landing pages optimizadas')}</li>
              <li>{t('Sistemas de reservas')}</li>
              <li>{t('Integración con tu CRM')}</li>
            </ul>
            <Link className="cta-btn cta-secondary" to="/paginas-web" aria-label="Ver más sobre páginas web automatizadas">{t('Más Info')}</Link>
          </div>
          <div className="service-card">
            <div className="service-icon"><IconLink /></div>
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
            <Link className="cta-btn cta-secondary" to="/reservas" aria-label="Ver más sobre integración de sistemas">{t('Más Info')}</Link>
          </div>
          <div className="service-card service-card-featured">
            <div className="service-icon"><IconLeaf /></div>
            <h3>{t('IA Aplicada al Agro')}</h3>
            <p>{t('Visión por computadora para detectar brotes en ortomosaicos de dron y trazar automáticamente líneas de laboreo en QGIS.')}</p>
            <ul className="service-list">
              <li>{t('Detección de brotes con IA')}</li>
              <li>{t('Agentes de visión para corrección automática')}</li>
              <li>{t('Líneas de laboreo y surcos automáticos')}</li>
            </ul>
            <Link className="cta-btn cta-secondary" to="/agrotech" aria-label="Ver más sobre IA aplicada al agro">{t('Más Info')}</Link>
          </div>
        </div>
      </section>

      <section id="demo" className="demo-section" aria-label="Demostración interactiva de una automatización">
        <h2>{t('Así se ve una automatización, paso a paso')}</h2>
        <p className="section-subtitle">{t('Una demostración interactiva: no está conectada a ningún sistema real, pero muestra la lógica detrás de lo que construimos.')}</p>

        <FlowDiagram nodes={demoSteps} variant="demo" activeIndex={demoStep} />

        <div className="demo-step-detail" aria-live="polite">
          {demoStep === -1 ? (
            <p className="demo-step-placeholder">{t('Hacé clic en "Ejecutar demostración" para ver cómo avanza cada paso.')}</p>
          ) : (
            <p><strong>{demoSteps[demoStep].label}:</strong> {demoSteps[demoStep].text}</p>
          )}
        </div>

        <div className="demo-controls">
          <button type="button" className="cta-btn" onClick={runDemo} disabled={demoRunning}>
            {demoRunning ? t('Ejecutando…') : t('▶ Ejecutar demostración')}
          </button>
          {demoStep !== -1 && !demoRunning && (
            <button type="button" className="cta-btn cta-ghost" onClick={resetDemo}>{t('↻ Reiniciar')}</button>
          )}
        </div>
      </section>

      <section className="before-after-section" aria-label="Antes y después de automatizar">
        <h2>{t('Antes y después de automatizar')}</h2>
        <p className="section-subtitle">{t('Ejemplos ilustrativos del tipo de proceso que automatizamos. Cada proyecto se adapta a tu operación real.')}</p>
        <div className="before-after-grid">
          <div className="ba-column ba-before">
            <h3>{t('Antes')}</h3>
            <ul>
              <li><IconCross /> {t('Las consultas por WhatsApp o email se responden una por una, cuando hay tiempo.')}</li>
              <li><IconCross /> {t('Los datos se copian a mano entre planillas y sistemas.')}</li>
              <li><IconCross /> {t('Los reportes se arman manualmente, revisando varias fuentes.')}</li>
              <li><IconCross /> {t('Cada herramienta funciona por separado, sin hablarse entre sí.')}</li>
            </ul>
          </div>
          <div className="ba-column ba-after">
            <h3>{t('Después')}</h3>
            <ul>
              <li><IconCheck /> {t('Un flujo clasifica y responde las consultas automáticamente.')}</li>
              <li><IconCheck /> {t('La información se sincroniza sola entre tus herramientas.')}</li>
              <li><IconCheck /> {t('Los reportes se generan y se envían de forma programada.')}</li>
              <li><IconCheck /> {t('Tus sistemas quedan conectados en un mismo flujo de trabajo.')}</li>
            </ul>
          </div>
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

      <section id="proyectos" className="projects-section">
        <h2>{t('Proyectos Realizados')}</h2>
        <p className="section-subtitle">{t('De automatizaciones para e-commerce y retail a visión por computadora aplicada al agro')}</p>
        <div className="projects-grid">
          <Link to="/agrotech" className="project-card project-card-featured">
            <span className="featured-badge">{t('Proyecto Destacado')}</span>
            <div className="project-image-placeholder project-image-agrotech">
              <span className="project-placeholder-text">🌱 {t('IA aplicada al Agro')}</span>
            </div>
            <div className="project-info">
              <h3>{t('Detección de Brotes con IA + Líneas de Laboreo')}</h3>
              <p className="project-description">{t('Pipeline propio de visión por computadora que corrige automáticamente los brotes detectados sobre ortomosaicos de dron, y genera líneas de laboreo para parcelas completas en QGIS.')}</p>
              <div className="project-tags">
                <span className="tag">{t('Computer Vision')}</span>
                <span className="tag">{t('YOLO')}</span>
                <span className="tag">{t('QGIS')}</span>
                <span className="tag">{t('IA Generativa')}</span>
              </div>
              <p className="project-timeframe">{t('Validado en campos reales de +200 hectáreas')}</p>
            </div>
          </Link>

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
        </div>
        <div className="projects-cta">
          <p>{t('¿Querés automatizar procesos en tu empresa o en tu campo?')}</p>
          <a href="#contacto" className="cta-btn" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Solicitar Presupuesto')}</a>
        </div>
      </section>

      <section className="faq-section" aria-label="Preguntas frecuentes">
        <h2>{t('Preguntas Frecuentes')}</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>{t('¿Cuánto cuesta automatizar un proceso?')}</summary>
            <p>{t('Depende de la complejidad: una automatización simple (1-2 integraciones) suele resolverse en 1-2 semanas, mientras que un sistema completo con múltiples integraciones puede tomar 3-4 semanas. Siempre te enviamos un presupuesto cerrado antes de empezar.')}</p>
          </details>
          <details className="faq-item">
            <summary>{t('¿Trabajan con empresas fuera de Uruguay?')}</summary>
            <p>{t('Sí, trabajamos 100% remoto con empresas de toda Latinoamérica, y con proyectos de desarrollo web para clientes en Estados Unidos.')}</p>
          </details>
          <details className="faq-item">
            <summary>{t('¿Qué es la IA aplicada al agro que ofrecen?')}</summary>
            <p>{t('Desarrollamos sistemas de visión por computadora que analizan fotos aéreas de dron para detectar plantas o brotes automáticamente, corregir errores con agentes de IA, y generar líneas de laboreo listas para usar en QGIS. Podés ver el detalle completo en nuestra página de AgroTech.')}</p>
          </details>
          <details className="faq-item">
            <summary>{t('¿Qué pasa si ya tengo una web o un sistema armado?')}</summary>
            <p>{t('Podemos integrarnos a lo que ya existe: conectamos tu web, tu CRM o tu sistema actual con nuevas automatizaciones sin necesidad de reconstruir todo desde cero.')}</p>
          </details>
          <details className="faq-item">
            <summary>{t('¿Ofrecen soporte después de la entrega?')}</summary>
            <p>{t('Sí, todos los proyectos incluyen documentación, capacitación del equipo y 30 días de seguimiento post-entrega sin costo adicional.')}</p>
          </details>
        </div>
      </section>

      <section id="contacto" className="contact-section" aria-label="Formulario de contacto">
        <h2>{t('Contacto')}</h2>
        <ContactForm source="Home" />
      </section>
    </>
  )
}

function App() {
  return (
    <div className="app-container">
      <SiteHeader />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservas" element={<LandingReservas />} />
          <Route path="/automatizaciones" element={<LandingAutomatizaciones />} />
          <Route path="/paginas-web" element={<LandingPaginasWeb />} />
          <Route path="/agrotech" element={<LandingAgroTech />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
