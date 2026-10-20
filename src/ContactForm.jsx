import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_u3fhpks';
const TEMPLATE_ID = 'template_531rrho';
const PUBLIC_KEY = 'bTDQ8wwM6acE6pVRV';

/**
 * Shared contact form wired to EmailJS. Every landing page used to render
 * its own <form> with no onSubmit handler at all, so those leads vanished
 * on click - only the home page form actually sent an email.
 */
export default function ContactForm({ source, showCompany = false, messagePlaceholder, submitLabel, footerNote }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ nombre: '', email: '', empresa: '', mensaje: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.nombre,
        from_email: formData.email,
        message: `[${source}]${formData.empresa ? ' Empresa: ' + formData.empresa + '.' : ''} ${formData.mensaje}`,
        to_name: 'A&M Solution',
      }, PUBLIC_KEY);
      setStatus('success');
      setFormData({ nombre: '', email: '', empresa: '', mensaje: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit} aria-label={t('Formulario para contactarnos')}>
        <div className="form-group">
          <input type="text" name="nombre" placeholder={t('Nombre')} value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder={t('Email')} value={formData.email} onChange={handleChange} required />
        </div>
        {showCompany && (
          <div className="form-group">
            <input type="text" name="empresa" placeholder={t('Empresa (opcional)')} value={formData.empresa} onChange={handleChange} />
          </div>
        )}
        <div className="form-group">
          <textarea name="mensaje" placeholder={messagePlaceholder || t('Mensaje')} value={formData.mensaje} onChange={handleChange} rows="5" required></textarea>
        </div>
        <button type="submit" className="form-submit-btn cta-btn" disabled={status === 'sending'}>
          {status === 'sending' ? t('Enviando...') : (submitLabel || t('Enviar'))}
        </button>
        {status === 'success' && <div className="form-success-message">{t('¡Mensaje enviado con éxito!')}</div>}
        {status === 'error' && <div className="form-error-message">{t('Error al enviar. Intenta de nuevo.')}</div>}
      </form>
      <div className="direct-contact">
        <span>{t('¿Preferís escribirnos directo?')}</span>
        <div className="direct-contact-links">
          <a href="mailto:projectsam1110@gmail.com">projectsam1110@gmail.com</a>
          <a href="https://wa.me/59899919107" target="_blank" rel="noopener noreferrer">WhatsApp +598 99 919 107</a>
        </div>
      </div>
      {footerNote && <p className="contact-footer">{footerNote}</p>}
    </>
  )
}
