# LABS — nueva web integrada

Esta versión conserva el diseño visual existente y traslada al proyecto contenido institucional, servicios, preguntas frecuentes, contactos, sedes, selección y catálogo de exámenes basado en la información pública disponible de LABS.

## Cambios principales
- Navegación interna mediante secciones de la nueva web.
- Eliminación de enlaces internos que enviaban a `labs.ec`.
- Catálogo de exámenes con búsqueda.
- Cotizador integrado en la interfaz, con selección de exámenes y formulario de datos.
- Preguntas frecuentes integradas.
- Atención al usuario integrada.
- Trabaja con nosotros integrado, incluyendo validación del CV.
- Sedes y contactos actualizados según la página de contactos de LABS.
- Se mantiene `https://app.labs.ec/` únicamente como plataforma externa de resultados.

## Dependencias externas legítimas
- Plataforma de resultados: `https://app.labs.ec/`
- Teléfono, correo y WhatsApp de contacto.

## Nota técnica
El formulario de cotización y el de selección están preparados dentro de la nueva interfaz. El envío definitivo de datos requiere conectar estos formularios con el backend/API correspondiente de LABS; no se sustituye esa integración por una redirección a la web antigua.
