import './App.css'

function LandingPaginasWeb({ goHome }) {
  return (
    <div className="app-container landing-web-bg">
      <header className="header modern-header">
        <div className="header-content">
          <div className="logo-area" style={{cursor: 'pointer'}} onClick={goHome}>
            <span className="logo-text">A&M Solution</span>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="hero-section hero-web">
          <h1>Tu Web, Tu Identidad Digital</h1>
          <p className="hero-sub">Creamos sitios modernos, rápidos y listos para convertir visitantes en clientes.</p>
          <div className="hero-badges">
            <span className="badge">Diseño Responsive</span>
            <span className="badge">SEO Pro</span>
            <span className="badge">Carga Ultra Rápida</span>
            <span className="badge">Integración Total</span>
          </div>
          <a href="#contacto" className="cta-btn cta-epic">Solicita tu web ahora</a>
        </section>
        <section className="features-section">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Diseño Único</h3>
              <p>Tu web será 100% personalizada, alineada a tu marca y objetivos.</p>
            </div>
            <div className="feature-card">
              <h3>Optimización SEO</h3>
              <p>Posiciona tu negocio en Google y atrae más clientes. Implementamos buenas prácticas de SEO técnico, contenido optimizado y velocidad de carga para que tu web destaque en los buscadores.</p>
            </div>
            <div className="feature-card">
              <h3>Integraciones Inteligentes</h3>
              <p>Conecta WhatsApp, redes sociales, analytics y más.</p>
            </div>
            <div className="feature-card">
              <h3>Soporte Real</h3>
              <p>Te acompañamos antes, durante y después del lanzamiento.</p>
            </div>
          </div>
          <div className="seo-section">
            <h2>SEO que sí funciona 🚀</h2>
            <ul className="seo-list">
              <li>✔️ Estructura semántica y etiquetas HTML correctas</li>
              <li>✔️ Meta títulos y descripciones optimizadas</li>
              <li>✔️ URLs limpias y amigables</li>
              <li>✔️ Imágenes comprimidas y con atributos alt</li>
              <li>✔️ Sitemap y archivo robots.txt</li>
              <li>✔️ Velocidad de carga sobresaliente</li>
              <li>✔️ Integración con Google Analytics y Search Console</li>
              <li>✔️ Estrategia de palabras clave relevante para tu rubro</li>
            </ul>
            <p className="seo-desc">Tu web será visible, rápida y lista para escalar posiciones en Google desde el primer día.</p>
          </div>
        </section>
        <section className="testimonios-section">
          <h2>Clientes que confiaron</h2>
          <div className="testimonios-grid">
            <div className="testimonio-card">
              <p>"Mi web se ve increíble y recibo más consultas que nunca."</p>
              <span>- Laura, Coach</span>
            </div>
            <div className="testimonio-card">
              <p>"El equipo entendió mi visión y la plasmó perfecto en el sitio."</p>
              <span>- Diego, Fotógrafo</span>
            </div>
          </div>
        </section>
        <section id="contacto" className="contact-section">
          <h2>¡Quiero mi web!</h2>
          <form className="contact-form">
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="¿Qué web necesitas?" required></textarea>
            <button type="submit">Solicitar propuesta</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default LandingPaginasWeb;
