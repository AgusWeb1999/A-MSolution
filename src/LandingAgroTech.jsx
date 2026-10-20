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

export default function LandingAgroTech() {
  const { t } = useTranslation();

  useSEO({
    path: '/agrotech',
    title: 'AgroTech: IA y Visión por Computadora Aplicada al Agro | A&M Solution',
    description: 'Detección de brotes con IA sobre ortomosaicos de dron, corrección automática con agentes de visión y generación de líneas de laboreo en QGIS. AgroTech real desarrollado por A&M Solution en Uruguay.',
    keywords: 'agro tech Uruguay, IA aplicada al agro Uruguay, visión por computadora agricultura, detección de brotes con inteligencia artificial, deteccion de surcos QGIS, lineas de laboreo automaticas, YOLO deteccion de plantines, ortomosaico dron analisis, agricultura de precision IA',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Visión por computadora e inteligencia artificial aplicada al agro',
      provider: { '@type': 'ProfessionalService', name: 'A&M Solution' },
      areaServed: { '@type': 'Country', name: 'Uruguay' },
      description: 'Pipeline de detección y corrección de brotes mediante IA sobre ortomosaicos de dron, y generación automática de líneas de laboreo/surcos para agricultura de precisión.',
      name: 'AgroTech - IA aplicada al agro',
    },
  });

  return (
    <>
        <section className="hero-section hero-agrotech">
          <span className="eyebrow">{t('Proyecto propio de I+D')}</span>
          <h1>{t('IA y Visión por Computadora Aplicada al Agro')}</h1>
          <p className="hero-sub">{t('Detectamos brotes sobre fotos de dron, corregimos errores con agentes de IA y trazamos automáticamente las líneas de laboreo de cada parcela. Menos horas de revisión manual en QGIS, más decisiones basadas en datos.')}</p>
          <div className="hero-badges">
            <span className="badge">{t('Visión por Computadora')}</span>
            <span className="badge">{t('YOLO / Deep Learning')}</span>
            <span className="badge">{t('QGIS & GIS')}</span>
            <span className="badge">{t('Agentes de IA (Gemini Vision)')}</span>
          </div>
          <a href="#contacto" className="cta-btn cta-epic" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('Quiero automatizar el control de mi campo')}</a>
        </section>

        <section className="value-proposition-section">
          <h2>{t('El problema: revisar un campo entero a mano')}</h2>
          <p className="section-subtitle">{t('Un ortomosaico aéreo de una plantación grande puede tener decenas de miles de plantas marcadas por un detector automático. Revisar cada punto a mano en QGIS, uno por uno, es lento, cansador y propenso a errores.')}</p>
          <div className="value-grid">
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h3>{t('Brotes sin marcar')}</h3>
              <p>{t('El detector automático prefiere marcar de más antes que perder brotes reales, así que aparecen falsos positivos sobre leña, tierra pelada o sombras.')}</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🕓</div>
              <h3>{t('Horas de revisión manual')}</h3>
              <p>{t('Recorrer franja por franja un campo de cientos de hectáreas, punto por punto, puede tomar horas de trabajo repetitivo por campo.')}</p>
            </div>
            <div className="value-item">
              <div className="value-icon">📐</div>
              <h3>{t('Líneas de laboreo a mano')}</h3>
              <p>{t('Trazar a mano cada línea paralela de laboreo por parcela, respetando bordes irregulares y lotes cóncavos, también consume tiempo valioso del equipo técnico.')}</p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>{t('Cómo funciona el pipeline de corrección de brotes')}</h2>
          <p className="section-subtitle">{t('Un flujo de 5 pasos pensado para reducir al mínimo la revisión manual, sin perder el control final del equipo agronómico.')}</p>
          <div className="pipeline-steps">
            <div className="pipeline-step">
              <div className="step-number">1</div>
              <h3>{t('Predetección automática')}</h3>
              <p>{t('Un modelo de detección (YOLO) entrenado específicamente para brotes corre sobre el ortomosaico completo y genera el primer mapa de puntos.')}</p>
            </div>
            <div className="pipeline-step">
              <div className="step-number">2</div>
              <h3>{t('Marcado de sospechosos')}</h3>
              <p>{t('Un algoritmo combina confianza relativa, alineación de fila y espaciado esperado para separar lo dudoso de lo confiable, sin usar umbrales fijos que fallan de campo a campo.')}</p>
            </div>
            <div className="pipeline-step">
              <div className="step-number">3</div>
              <h3>{t('Recorte inteligente de zonas')}</h3>
              <p>{t('En vez de generar miles de imágenes, se recorta solo donde hay puntos dudosos, a resolución casi nativa, para poder juzgar cada caso con detalle real.')}</p>
            </div>
            <div className="pipeline-step">
              <div className="step-number">4</div>
              <h3>{t('Agente de visión con criterio propio')}</h3>
              <p>{t('Un modelo de visión revisa cada zona dudosa guiado por un criterio visual armado a mano con ejemplos reales de "sí es brote" / "no es brote", y propone qué borrar y qué agregar.')}</p>
            </div>
            <div className="pipeline-step">
              <div className="step-number">5</div>
              <h3>{t('Confirmación y reentrenamiento')}</h3>
              <p>{t('El equipo agronómico da la pasada final en QGIS antes de aplicar cualquier cambio, y cada campo corregido retroalimenta al modelo para el próximo (active learning).')}</p>
            </div>
          </div>
        </section>

        <section className="use-cases-section">
          <h2>{t('Resultados medibles en campo real')}</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <div className="use-case-header">
                <h3>{t('Reducción de revisión manual')}</h3>
                <span className="industry-tag">{t('Forestación')}</span>
              </div>
              <p className="use-case-problem"><strong>{t('Campo real:')}</strong> {t('Plantación de más de 200 hectáreas, con más de 67.000 plantas detectadas automáticamente.')}</p>
              <p className="use-case-solution"><strong>{t('Resultado:')}</strong> {t('El marcado de sospechosos redujo la lista a revisar a mano de 100% a aproximadamente 17% del campo, sin perder brotes reales.')}</p>
              <div className="use-case-results">
                <span className="result-badge">{t('✓ De 100% a ~17% a revisar')}</span>
                <span className="result-badge">{t('✓ Corrida completa en minutos')}</span>
                <span className="result-badge">{t('✓ Costo en IA: centavos por campo')}</span>
              </div>
            </div>
            <div className="use-case-card">
              <div className="use-case-header">
                <h3>{t('Corrección automática con IA')}</h3>
                <span className="industry-tag">{t('Agro-tech')}</span>
              </div>
              <p className="use-case-problem"><strong>{t('Problema:')}</strong> {t('Distinguir un arbusto real de leña apilada o tierra pelada en miles de puntos, campo tras campo.')}</p>
              <p className="use-case-solution"><strong>{t('Solución:')}</strong> {t('Agente de visión que compara cada punto dudoso contra un criterio curado con fotos reales, y propone correcciones que el equipo agronómico valida antes de aplicar.')}</p>
              <div className="use-case-results">
                <span className="result-badge">{t('✓ 1.204 falsos positivos corregidos')}</span>
                <span className="result-badge">{t('✓ 9 brotes agregados')}</span>
                <span className="result-badge">{t('✓ En una sola corrida')}</span>
              </div>
            </div>
            <div className="use-case-card">
              <div className="use-case-header">
                <h3>{t('Detección automática de surcos')}</h3>
                <span className="industry-tag">{t('Precisión')}</span>
              </div>
              <p className="use-case-problem"><strong>{t('Problema:')}</strong> {t('Digitalizar a mano cada fila de siembra de un cultivo en hileras (frutales, palma) para usarla en agricultura de precisión.')}</p>
              <p className="use-case-solution"><strong>{t('Solución:')}</strong> {t('Visión por computadora clásica (sin redes entrenadas) que extrae cada surco directamente del GeoTIFF aéreo y lo exporta como capa vectorial lista para QGIS.')}</p>
              <div className="use-case-results">
                <span className="result-badge">{t('✓ Validado contra +1.000 filas reales')}</span>
                <span className="result-badge">{t('✓ Hasta 82% de recall')}</span>
                <span className="result-badge">{t('✓ Cero digitalización manual')}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonios-section">
          <h2>{t('Líneas de laboreo automáticas en QGIS')}</h2>
          <p className="section-subtitle">{t('Además de corregir brotes, desarrollamos un generador que traza automáticamente todas las líneas paralelas de laboreo de una parcela a partir de una sola línea maestra.')}</p>
          <div className="tech-grid">
            <div className="tech-card">
              <h4>📏 {t('Familias de líneas paralelas')}</h4>
              <p>{t('A partir de una línea maestra y una distancia fija entre surcos, se generan automáticamente todas las paralelas, recortadas contra el polígono real de cada parcela.')}</p>
            </div>
            <div className="tech-card">
              <h4>🧩 {t('Soporte para lotes irregulares')}</h4>
              <p>{t('El generador está corregido para funcionar también en parcelas cóncavas o con formas en L, donde una línea recta puede entrar y salir del lote varias veces.')}</p>
            </div>
            <div className="tech-card">
              <h4>🎯 {t('Selección correcta de parcela')}</h4>
              <p>{t('Cuando una línea toca el límite entre dos parcelas vecinas, el sistema elige automáticamente la de mayor área de intersección real, evitando asignaciones erróneas.')}</p>
            </div>
            <div className="tech-card">
              <h4>🛰️ {t('Dos caminos complementarios')}</h4>
              <p>{t('Línea maestra manual + generador automático para control total, o detección 100% automática de surcos por visión por computadora cuando no hay tiempo de digitalizar nada a mano.')}</p>
            </div>
          </div>
        </section>

        <section className="pricing-info-section">
          <h2>{t('Tecnologías del proyecto')}</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h4>🐍 {t('Python & Visión por Computadora')}</h4>
              <p>{t('OpenCV, scikit-image, filtros de Gabor y Hessianos, transformadas tipo Radon para detectar orientación y espaciado de filas.')}</p>
            </div>
            <div className="tech-card">
              <h4>⚙️ {t('Deep Learning & Agentes de IA')}</h4>
              <p>{t('YOLO (Ultralytics) para detección de objetos, active learning para reentrenar con cada campo corregido, y modelos de visión (Gemini) como agente de revisión.')}</p>
            </div>
            <div className="tech-card">
              <h4>🗺️ {t('GIS & Geoespacial')}</h4>
              <p>{t('QGIS, GeoPandas, Rasterio y Shapely para trabajar con GeoTIFF, GPKG y shapefiles georeferenciados a escala real de campo.')}</p>
            </div>
            <div className="tech-card">
              <h4>☁️ {t('Datos a gran escala')}</h4>
              <p>{t('Pipelines pensados para ortomosaicos de varios gigabytes y campos de cientos de hectáreas, sin perder precisión ni tiempo de procesamiento.')}</p>
            </div>
          </div>
          <p className="pricing-note">{t('💡 Este desarrollo nació para una aplicación agronómica concreta, pero el mismo enfoque (visión por computadora + agentes de IA + validación humana) aplica a cualquier industria que dependa de revisar imágenes o datos a gran escala.')}</p>
        </section>

        <section id="contacto" className="contact-section">
          <h2>{t('¿Tenés un campo o una plantación para automatizar?')}</h2>
          <p className="contact-intro">{t('Contanos sobre tu operación agrícola o tu proceso de revisión manual de imágenes, y vemos juntos si este enfoque aplica a tu caso.')}</p>
          <ContactForm
            source="Proyecto Brotes / AgroTech"
            showCompany
            messagePlaceholder={t('Contanos sobre tu campo, tu cultivo o el proceso que te gustaría automatizar...')}
            submitLabel={t('Quiero hablar sobre mi proyecto')}
            footerNote={t('📍 Trabajamos 100% remoto desde Uruguay • ⏱️ Respuesta en menos de 24hs')}
          />
        </section>
    </>
  )
}
