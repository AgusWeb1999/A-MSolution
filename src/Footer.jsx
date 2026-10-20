import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Footer() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const goToSection = (sectionId) => (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 150);
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-area">
            <img src="/img/logo.jpg" alt="Logo A&M Solution" className="company-logo" />
            <span className="logo-text">{t('A&M Solution')}</span>
          </div>
          <p className="footer-tagline">{t('Automatización de procesos, IA aplicada y desarrollo web, 100% remoto desde Uruguay.')}</p>
          <ul className="footer-contact-list">
            <li><a href="mailto:projectsam1110@gmail.com">projectsam1110@gmail.com</a></li>
            <li><a href="tel:+59899919107">+598 99 919 107</a></li>
            <li><a href="https://wa.me/59899919107" target="_blank" rel="noopener noreferrer">{t('Escribinos por WhatsApp')}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('Servicios')}</h4>
          <ul>
            <li><Link to="/automatizaciones">{t('Automatización de Tareas Manuales')}</Link></li>
            <li><Link to="/paginas-web">{t('Páginas Web Automatizadas')}</Link></li>
            <li><Link to="/reservas">{t('Integración de Sistemas')}</Link></li>
            <li><Link to="/agrotech">{t('IA Aplicada al Agro')}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('Empresa')}</h4>
          <ul>
            <li><a href="/#proyectos" onClick={goToSection('proyectos')}>{t('Proyectos')}</a></li>
            <li><a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Contacto')}</a></li>
            <li><a href="https://github.com/AgusWeb1999/A-MSolution" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} A&M Solution — {t('Uruguay')}</span>
        <span>{t('100% remoto desde Uruguay')}</span>
      </div>
    </footer>
  )
}
