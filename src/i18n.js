import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      'A&M Solution': 'A&M Solution',
      'Inicio': 'Inicio',
      'Servicios': 'Servicios',
      'Contacto': 'Contacto',
      'Automatización de Tareas Repetitivas en Uruguay': 'Automatización de Tareas Repetitivas en Uruguay',
      'Eliminá el trabajo manual tedioso. Automatizamos procesos para que tu equipo se enfoque en lo importante.': 'Eliminá el trabajo manual tedioso. Automatizamos procesos para que tu equipo se enfoque en lo importante.',
      'Automatizar Ahora': 'Automatizar Ahora',
      'Servicios de Automatización': 'Servicios de Automatización',
      'Automatización de Tareas Manuales': 'Automatización de Tareas Manuales',
      'Eliminá tareas repetitivas: gestión de datos, reportes, emails, procesamiento de documentos y más.': 'Eliminá tareas repetitivas: gestión de datos, reportes, emails, procesamiento de documentos y más.',
      'Páginas Web Automatizadas': 'Páginas Web Automatizadas',
      'Sitios web con formularios inteligentes, reservas automáticas y gestión de clientes integrada.': 'Sitios web con formularios inteligentes, reservas automáticas y gestión de clientes integrada.',
      'Integración de Sistemas': 'Integración de Sistemas',
      'Conectamos tus herramientas: WhatsApp, Google Calendar, CRM, hojas de cálculo y más.': 'Conectamos tus herramientas: WhatsApp, Google Calendar, CRM, hojas de cálculo y más.',
      'Ver más': 'Ver más',
      'Enviar': 'Enviar',
      'Enviando...': 'Enviando...',
      '¡Mensaje enviado con éxito!': '¡Mensaje enviado con éxito!',
      'Error al enviar. Intenta de nuevo.': 'Error al enviar. Intenta de nuevo.',
      'Nombre': 'Nombre',
      'Email': 'Email',
      'Mensaje': 'Mensaje'
    }
  },
  en: {
    translation: {
      'A&M Solution': 'A&M Solution',
      'Inicio': 'Home',
      'Servicios': 'Services',
      'Contacto': 'Contact',
      'Automatización de Tareas Repetitivas en Uruguay': 'Repetitive Task Automation in Uruguay',
      'Eliminá el trabajo manual tedioso. Automatizamos procesos para que tu equipo se enfoque en lo importante.': 'Eliminate tedious manual work. We automate processes so your team can focus on what matters.',
      'Automatizar Ahora': 'Automate Now',
      'Servicios de Automatización': 'Automation Services',
      'Automatización de Tareas Manuales': 'Manual Task Automation',
      'Eliminá tareas repetitivas: gestión de datos, reportes, emails, procesamiento de documentos y más.': 'Eliminate repetitive tasks: data management, reports, emails, document processing and more.',
      'Páginas Web Automatizadas': 'Automated Websites',
      'Sitios web con formularios inteligentes, reservas automáticas y gestión de clientes integrada.': 'Websites with smart forms, automatic reservations and integrated customer management.',
      'Integración de Sistemas': 'Systems Integration',
      'Conectamos tus herramientas: WhatsApp, Google Calendar, CRM, hojas de cálculo y más.': 'We connect your tools: WhatsApp, Google Calendar, CRM, spreadsheets and more.',
      'Ver más': 'See more',
      'Enviar': 'Send',
      'Enviando...': 'Sending...',
      '¡Mensaje enviado con éxito!': 'Message sent successfully!',
      'Error al enviar. Intenta de nuevo.': 'Error sending. Please try again.',
      'Nombre': 'Name',
      'Email': 'Email',
      'Mensaje': 'Message'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
