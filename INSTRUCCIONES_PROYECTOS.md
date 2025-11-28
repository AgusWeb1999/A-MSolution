# Instrucciones para Agregar Imágenes de Proyectos

## Cómo agregar imágenes de tus automatizaciones realizadas

### Paso 1: Preparar las imágenes

1. Las imágenes deben tener un tamaño recomendado de **800x600px** o similar (aspect ratio 4:3)
2. Formato: JPG, PNG o WebP
3. Peso recomendado: menos de 500KB por imagen para carga rápida
4. **IMPORTANTE**: Asegúrate de que las imágenes NO contengan información confidencial o privada de clientes

### Paso 2: Ubicación de las imágenes

Coloca las imágenes en la carpeta: `/public/img/proyectos/`

Nombres sugeridos:
- `proyecto-automatizacion-tareas.jpg`
- `proyecto-reportes.jpg`
- `proyecto-atencion-cliente.jpg`

### Paso 3: Actualizar el código

Abre el archivo `src/App.jsx` y busca la sección de proyectos (alrededor de la línea 150).

Reemplaza cada `<div className="project-image-placeholder">` con:

```jsx
<div className="project-image-placeholder">
  <img 
    src="/img/proyectos/nombre-de-tu-imagen.jpg" 
    alt="Descripción del proyecto"
    style={{width: '100%', height: '100%', objectFit: 'cover'}}
  />
</div>
```

### Ejemplo completo de una tarjeta de proyecto con imagen:

```jsx
<div className="project-card">
  <div className="project-image-placeholder">
    <img 
      src="/img/proyectos/proyecto-automatizacion-tareas.jpg" 
      alt="Sistema de Automatización de Tareas"
      style={{width: '100%', height: '100%', objectFit: 'cover'}}
    />
  </div>
  <div className="project-info">
    <h3>{t('Sistema de Automatización de Tareas')}</h3>
    <p className="project-description">
      {t('Automatización completa de procesos repetitivos...')}
    </p>
    <div className="project-tags">
      <span className="tag">Automation</span>
      <span className="tag">API Integration</span>
      <span className="tag">Workflow</span>
    </div>
    <p className="project-timeframe">{t('Duración: 3 semanas')}</p>
  </div>
</div>
```

### Paso 4: Capturas de pantalla recomendadas para Tiendamia

Para las automatizaciones de Tiendamia que no puedes revelar:

**Opción 1: Capturas con difuminado**
- Toma una captura de la interfaz del sistema
- Difumina/pixela todos los datos sensibles (nombres, emails, números, logos de cliente)
- Deja visible solo la estructura y el flujo de la automatización

**Opción 2: Mockups o diagramas**
- Crea un diagrama de flujo que muestre cómo funciona la automatización
- Usa herramientas como Figma, Canva o draw.io
- Ejemplo: "API E-commerce → Bot → Google Sheets → WhatsApp"

**Opción 3: Capturas de código genérico**
- Muestra fragmentos de código sin información específica del cliente
- Resalta las integraciones usadas (logos de APIs, frameworks)

### Consejos de privacidad

✅ **SÍ puedes mostrar:**
- Interfaces sin datos reales
- Diagramas de flujo
- Código genérico
- Capturas con datos ficticios/demo
- Logos de tecnologías usadas (Python, WhatsApp API, etc.)

❌ **NO muestres:**
- Nombres de clientes o empresas
- Datos reales de usuarios
- URLs o dominios específicos
- Información financiera
- Emails o teléfonos reales
- Cualquier dato que pueda identificar al cliente

### Estructura de carpetas recomendada

```
public/
  img/
    proyectos/
      proyecto-1-automatizacion-tareas.jpg
      proyecto-2-reportes.jpg
      proyecto-3-atencion.jpg
```

### Verificar los cambios

Después de agregar las imágenes:

1. Ejecuta `npm run dev` en la terminal
2. Abre `http://localhost:5173` en tu navegador
3. Navega a la sección "Proyectos Realizados"
4. Verifica que las imágenes se vean correctamente

---

## Agregar más proyectos

Para agregar un nuevo proyecto completo, copia y pega este código en `App.jsx` dentro de `<div className="projects-grid">`:

```jsx
<div className="project-card">
  <div className="project-image-placeholder">
    <img 
      src="/img/proyectos/nuevo-proyecto.jpg" 
      alt="Título del nuevo proyecto"
      style={{width: '100%', height: '100%', objectFit: 'cover'}}
    />
  </div>
  <div className="project-info">
    <h3>Título del Nuevo Proyecto</h3>
    <p className="project-description">
      Descripción breve del proyecto y el problema que resolvió.
      Incluye el impacto o resultados obtenidos.
    </p>
    <div className="project-tags">
      <span className="tag">Tecnología 1</span>
      <span className="tag">Tecnología 2</span>
      <span className="tag">Tecnología 3</span>
    </div>
    <p className="project-timeframe">Duración: X semanas</p>
  </div>
</div>
```

Recuerda también agregar las traducciones al inglés en `src/i18n.js` si usas textos nuevos.
