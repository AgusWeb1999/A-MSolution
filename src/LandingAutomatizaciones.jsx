import './App.css'
import { useTranslation } from 'react-i18next'
import './i18n'
import ContactForm from './ContactForm'
import useSEO from './useSEO'

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function LandingAutomatizaciones() {
  const { t } = useTranslation();

  useSEO({
    path: '/automatizaciones',
    title: 'Automatización de Procesos con Bots e IA | A&M Solution Uruguay',
    description: 'Automatizamos procesamiento de datos, emails, reportes y sincronización de sistemas con bots a medida y n8n. Implementaciones probadas en e-commerce, retail y servicios en 1-4 semanas.',
    keywords: 'automatización de procesos Uruguay, bots personalizados, automatización n8n, automatización de reportes, RPA Uruguay, automatización WhatsApp, sincronización de sistemas, automatización de pedidos',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Automatización de procesos empresariales',
      provider: { '@type': 'ProfessionalService', name: 'A&M Solution' },
      areaServed: { '@type': 'Country', name: 'Uruguay' },
      description: 'Automatización de tareas manuales, procesamiento de datos, reportes y sincronización de sistemas mediante bots y herramientas como n8n.',
    },
  });

  return (
    <>
        <section className="hero-section hero-auto">
          <h1>{t('Automatiza y Gana Tiempo')}</h1>
          <p className="hero-sub">{t('Bots, integraciones y flujos inteligentes para que tu negocio funcione solo.')}</p>
          <div className="hero-badges">
            <span className="badge">{t('Google Sheets')}</span>
            <span className="badge">{t('WhatsApp API')}</span>
            <span className="badge">{t('Notificaciones')}</span>
            <span className="badge">{t('Reportes Automáticos')}</span>
          </div>
          <a href="#contacto" className="cta-btn cta-epic" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Solicitar Presupuesto')}</a>
        </section>

        <section className="value-proposition-section">
          <h2>{t('¿Por Qué Automatizar?')}</h2>
          <div className="value-grid">
            <div className="value-item">
              <div className="value-icon">⏱️</div>
              <h3>{t('Ahorra Tiempo')}</h3>
              <p>{t('Recupera hasta 20 horas semanales eliminando tareas manuales repetitivas.')}</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💰</div>
              <h3>{t('Reduce Costos')}</h3>
              <p>{t('Menos errores humanos y más eficiencia operativa se traducen en ahorro real.')}</p>
            </div>
            <div className="value-item">
              <div className="value-icon">📈</div>
              <h3>{t('Escala tu Negocio')}</h3>
              <p>{t('Procesa más volumen sin contratar personal adicional.')}</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h3>{t('Enfócate en lo Importante')}</h3>
              <p>{t('Tu equipo puede concentrarse en tareas estratégicas de alto valor.')}</p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>{t('¿Qué podemos automatizar?')}</h2>
          <p className="section-subtitle">{t('Soluciones probadas en empresas de e-commerce, retail y servicios')}</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>{t('Procesamiento de Datos')}</h3>
              <p>{t('Importación, transformación y sincronización automática de datos entre sistemas. Ideal para inventarios, catálogos y bases de clientes.')}</p>
              <span className="time-badge">⏱ 2-3 {t('semanas')}</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📧</div>
              <h3>{t('Emails y Notificaciones')}</h3>
              <p>{t('Envío automático de emails transaccionales, recordatorios, notificaciones por WhatsApp y seguimiento de clientes.')}</p>
              <span className="time-badge">⏱ 1-2 {t('semanas')}</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>{t('Sincronización de Sistemas')}</h3>
              <p>{t('Conecta tu CRM, ERP, e-commerce y Google Sheets para que la información fluya automáticamente.')}</p>
              <span className="time-badge">⏱ 3-4 {t('semanas')}</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>{t('Reportes Automáticos')}</h3>
              <p>{t('Generación y envío automático de reportes diarios, semanales o mensuales con KPIs de tu negocio.')}</p>
              <span className="time-badge">⏱ 2-3 {t('semanas')}</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧩</div>
              <h3>{t('Bots Personalizados')}</h3>
              <p>{t('Bots para atención al cliente, procesamiento de pedidos, validación de datos y tareas específicas de tu negocio.')}</p>
              <span className="time-badge">⏱ 2-4 {t('semanas')}</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>{t('Gestión Documental')}</h3>
              <p>{t('Automatización de generación de PDFs, facturas, contratos y procesamiento de documentos entrantes.')}</p>
              <span className="time-badge">⏱ 2-3 {t('semanas')}</span>
            </div>
          </div>
        </section>

        <section className="use-cases-section">
          <h2>{t('Casos de Uso Reales')}</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <div className="use-case-header">
                <h3>{t('E-commerce - Gestión de Inventario')}</h3>
                <span className="industry-tag">{t('Retail')}</span>
              </div>
              <p className="use-case-problem"><strong>{t('Problema:')}</strong> {t('Actualización manual de stock entre tienda online y sistema interno causaba sobreventa y desabastecimiento.')}</p>
              <p className="use-case-solution"><strong>{t('Solución:')}</strong> {t('Sincronización automática en tiempo real de inventario, alertas de stock bajo y actualización de precios centralizada.')}</p>
              <div className="use-case-results">
                <span className="result-badge">{t('✓ 85% menos errores')}</span>
                <span className="result-badge">{t('✓ 15 horas/semana ahorradas')}</span>
                <span className="result-badge">{t('✓ 3 semanas de implementación')}</span>
              </div>
            </div>

            <div className="use-case-card">
              <div className="use-case-header">
                <h3>{t('Procesamiento de Pedidos')}</h3>
                <span className="industry-tag">{t('E-commerce')}</span>
              </div>
              <p className="use-case-problem"><strong>{t('Problema:')}</strong> {t('Verificación manual de cada pedido, envío de confirmaciones y actualización de estados consumía mucho tiempo.')}</p>
              <p className="use-case-solution"><strong>{t('Solución:')}</strong> {t('Bot que valida pedidos, envía confirmaciones por WhatsApp/email y actualiza estados automáticamente.')}</p>
              <div className="use-case-results">
                <span className="result-badge">{t('✓ 20 horas/semana ahorradas')}</span>
                <span className="result-badge">{t('✓ 95% satisfacción cliente')}</span>
                <span className="result-badge">{t('✓ 2 semanas de implementación')}</span>
              </div>
            </div>

            <div className="use-case-card">
              <div className="use-case-header">
                <h3>{t('Dashboard de Métricas')}</h3>
                <span className="industry-tag">{t('Multi-industria')}</span>
              </div>
              <p className="use-case-problem"><strong>{t('Problema:')}</strong> {t('Generación manual de reportes de ventas, KPIs y análisis consumía horas de trabajo administrativo cada día.')}</p>
              <p className="use-case-solution"><strong>{t('Solución:')}</strong> {t('Dashboard automático con datos en tiempo real y reportes enviados por email cada mañana a stakeholders.')}</p>
              <div className="use-case-results">
                <span className="result-badge">{t('✓ 10 horas/semana ahorradas')}</span>
                <span className="result-badge">{t('✓ Datos en tiempo real')}</span>
                <span className="result-badge">{t('✓ 4 semanas de implementación')}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonios-section">
          <h2>{t('Tecnologías que Dominamos')}</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h4>{t('🔗 APIs & Integraciones')}</h4>
              <p>{t('WhatsApp Business API, Google APIs, Mercado Libre, TiendaNube, WooCommerce, Shopify')}</p>
            </div>
            <div className="tech-card">
              <h4>{t('📊 Datos & Reportes')}</h4>
              <p>{t('Google Sheets, Excel, Power BI, bases de datos SQL, MongoDB')}</p>
            </div>
            <div className="tech-card">
              <h4>{t('⚙️ Automatización')}</h4>
              <p>{t('Python, Node.js, Zapier, Make (Integromat), webhooks personalizados')}</p>
            </div>
            <div className="tech-card">
              <h4>{t('☁️ Cloud & Deploy')}</h4>
              <p>{t('AWS, Google Cloud, Heroku, servidores dedicados')}</p>
            </div>
          </div>
        </section>

        <section className="pricing-info-section">
          <h2>{t('Inversión & Tiempos')}</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>{t('Automatización Simple')}</h3>
              <p className="pricing-desc">{t('1-2 integraciones, flujo lineal, pocas validaciones')}</p>
              <div className="pricing-time">
                <span className="time-icon">⏱️</span>
                <span>{t('1-2 semanas')}</span>
              </div>
              <p className="pricing-example">{t('Ej: Envío automático de emails, sincronización básica de datos')}</p>
              <a href="#contacto" className="cta-btn cta-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Consultar Precio')}</a>
            </div>
            <div className="pricing-card pricing-featured">
              <span className="featured-badge">{t('Más Solicitado')}</span>
              <h3>{t('Automatización Media')}</h3>
              <p className="pricing-desc">{t('3-5 integraciones, lógica de negocio, validaciones complejas')}</p>
              <div className="pricing-time">
                <span className="time-icon">⏱️</span>
                <span>{t('2-3 semanas')}</span>
              </div>
              <p className="pricing-example">{t('Ej: Bot de procesamiento de pedidos, reportes automáticos')}</p>
              <a href="#contacto" className="cta-btn" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Consultar Precio')}</a>
            </div>
            <div className="pricing-card">
              <h3>{t('Automatización Compleja')}</h3>
              <p className="pricing-desc">{t('Sistema completo, múltiples integraciones, dashboard personalizado')}</p>
              <div className="pricing-time">
                <span className="time-icon">⏱️</span>
                <span>{t('3-4 semanas')}</span>
              </div>
              <p className="pricing-example">{t('Ej: Ecosistema de automatización multi-plataforma')}</p>
              <a href="#contacto" className="cta-btn cta-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Consultar Precio')}</a>
            </div>
          </div>
          <p className="pricing-note">{t('💡 Todos los proyectos incluyen: documentación, capacitación y 30 días de seguimiento post-entrega')}</p>
        </section>

        <section id="contacto" className="contact-section">
          <h2>{t('¿Listo para Automatizar?')}</h2>
          <p className="contact-intro">{t('Contanos qué proceso querés automatizar y te enviamos una propuesta personalizada en 48hs')}</p>
          <ContactForm
            source="Automatizaciones"
            showCompany
            messagePlaceholder={t('¿Qué proceso querés automatizar? Contanos los detalles...')}
            submitLabel={t('Solicitar Presupuesto Gratuito')}
            footerNote={t('📍 Trabajamos 100% remoto desde Uruguay • ⏱️ Respuesta en menos de 24hs')}
          />
        </section>
    </>
  )
}

export default LandingAutomatizaciones;
