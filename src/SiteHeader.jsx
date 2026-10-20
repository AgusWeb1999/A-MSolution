import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function SiteHeader() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === '/';

  const handleLangChange = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  const goToSection = (sectionId) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (onHome) {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 150);
    }
  };

  const goHome = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    navigate('/');
    window.scrollTo(0, 0);
  };

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header modern-header" role="banner">
      <div className="header-content">
        <div className="logo-area" style={{ cursor: 'pointer' }} onClick={goHome}>
          <img src="/img/logo.jpg" alt="Logo A&M Solution - Automatización, IA y desarrollo web en Uruguay" className="company-logo" />
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
            <li><a href="/" onClick={goHome} className={isActive('/') ? 'nav-active' : ''}>{t('Inicio')}</a></li>
            <li><a href="/#servicios" onClick={goToSection('servicios')}>{t('Servicios')}</a></li>
            <li>
              <Link to="/agrotech" onClick={closeMenu} className={isActive('/agrotech') ? 'nav-active nav-highlight' : 'nav-highlight'}>
                {t('AgroTech')} <span className="nav-badge">IA</span>
              </Link>
            </li>
            <li><a href="/#proyectos" onClick={goToSection('proyectos')}>{t('Proyectos')}</a></li>
            <li><LanguageSelector value={lang} onChange={handleLangChange} /></li>
            <li>
              <a href="#contacto" className="nav-cta" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToSection('contacto'); }}>
                {t('Hablemos')}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
