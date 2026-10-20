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

function LandingPaginasWeb() {
  const { t } = useTranslation();

  useSEO({
    path: '/paginas-web',
    title: 'Desarrollo Web a Medida con SEO Real | A&M Solution Uruguay',
    description: 'Diseñamos y desarrollamos sitios web rápidos, responsive y optimizados para SEO. Sitios reales entregados a clientes en Uruguay y Estados Unidos. Integración con WhatsApp, analytics y reservas.',
    keywords: 'desarrollo web Uruguay, diseño web responsive, páginas web SEO Uruguay, landing page Uruguay, desarrollo web a medida, diseño de sitios web rápidos, SEO técnico Uruguay',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Desarrollo de sitios web',
      provider: { '@type': 'ProfessionalService', name: 'A&M Solution' },
      areaServed: { '@type': 'Country', name: 'Uruguay' },
      description: 'Sitios web responsive con SEO técnico, formularios inteligentes e integraciones, optimizados para velocidad de carga y conversión.',
    },
  });

  return (
    <>
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
              <li>{t('✔️ Meta títulos y descripciones optimizadas por página')}</li>
              <li>{t('✔️ URLs limpias y amigables, sin fragmentos ni hashes')}</li>
              <li>{t('✔️ Imágenes comprimidas y con atributos alt')}</li>
              <li>{t('✔️ Sitemap, robots.txt y datos estructurados (Schema.org)')}</li>
              <li>{t('✔️ Velocidad de carga sobresaliente')}</li>
              <li>{t('✔️ Integración con Google Analytics y Search Console')}</li>
              <li>{t('✔️ Estrategia de palabras clave relevante para tu rubro')}</li>
            </ul>
            <p className="seo-desc">{t('Tu web será visible, rápida y lista para escalar posiciones en Google desde el primer día.')}</p>
          </div>
        </section>
        <section className="use-cases-section">
          <h2>{t('Clientes que confiaron')}</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <div className="use-case-header">
                <h3>{t('Empresa de columnas arquitectónicas')}</h3>
                <span className="industry-tag">{t('Miami, EE.UU.')}</span>
              </div>
              <p className="use-case-solution">{t('Web para reconocida empresa de columnas en Miami, Pompano Beach: catálogo de productos, diseño a medida y presencia profesional para captar clientes de diseño y construcción.')}</p>
              <div className="use-case-results">
                <a href="https://www.stonecolumnsfl.com/#/" target="_blank" rel="noopener noreferrer" className="result-badge">{t('🔗 Visitar sitio')}</a>
              </div>
            </div>
            <div className="use-case-card">
              <div className="use-case-header">
                <h3>{t('Empresa de construcción')}</h3>
                <span className="industry-tag">{t('Miami, EE.UU.')}</span>
              </div>
              <p className="use-case-solution">{t('Web para empresa de construcción en Miami: presentación de servicios, formulario de contacto optimizado y diseño responsive pensado para captar leads locales.')}</p>
              <div className="use-case-results">
                <a href="https://mazzservicesllc.com/" target="_blank" rel="noopener noreferrer" className="result-badge">{t('🔗 Visitar sitio')}</a>
              </div>
            </div>
          </div>
        </section>
        <section id="contacto" className="contact-section">
          <h2>{t('¡Quiero mi web!')}</h2>
          <ContactForm
            source="Páginas Web"
            messagePlaceholder={t('¿Qué web necesitas?')}
            submitLabel={t('Solicitar propuesta')}
          />
        </section>
    </>
  )
}

export default LandingPaginasWeb;
