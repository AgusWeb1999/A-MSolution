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

function LandingReservas() {
  const { t } = useTranslation();

  useSEO({
    path: '/reservas',
    title: 'Asistente de Reservas con WhatsApp e IA | A&M Solution Uruguay',
    description: 'Automatizá tu agenda con un asistente que confirma reservas 24/7 por WhatsApp, se integra con Google Calendar y elimina los olvidos. Ideal para estética, barbería y comercios con turnos.',
    keywords: 'asistente de reservas automatico, reservas por WhatsApp, automatizacion de agenda, integracion Google Calendar, bot de turnos Uruguay, software de reservas para comercios',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Asistente automático de reservas',
      provider: { '@type': 'ProfessionalService', name: 'A&M Solution' },
      areaServed: { '@type': 'Country', name: 'Uruguay' },
      description: 'Asistente de reservas automático integrado con WhatsApp y Google Calendar, disponible 24/7 sin intervención humana.',
    },
  });

  return (
    <>
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
          <ContactForm
            source="Reservas"
            submitLabel={t('Solicitar demo')}
          />
        </section>
    </>
  )
}

export default LandingReservas;
