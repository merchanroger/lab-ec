# LABS — versión final de estructura, navegación y funcionalidad

## Cambios realizados
- Se conserva la identidad visual existente: verde principal, naranja como acento, tipografías, tarjetas, botones, espaciados e imágenes.
- Orden de página: Inicio → Nosotros → Servicios → Cotiza y consulta → Notas de salud → Sedes → Contacto → Footer.
- Menú principal sincronizado exactamente con esas secciones.
- Se eliminó el elemento independiente “Resultados” del menú, servicios y footer.
- No se dejaron enlaces internos hacia la web anterior de LABS.
- Se mantuvo la navegación externa/operativa únicamente cuando corresponde a un canal real, como correo, teléfono, WhatsApp o Google Maps.

## Cotizador
- El catálogo permanece cerrado en la página principal.
- El botón “Cotizar y consultar exámenes” abre el cotizador.
- Incluye búsqueda de exámenes.
- Permite seleccionar y deseleccionar exámenes.
- Muestra la selección actual.
- Permite quitar exámenes desde el resumen.
- Calcula el total estimado.
- Valida que exista al menos un examen.
- El formulario prepara una solicitud real mediante `mailto:info@labs.ec`, evitando un botón ficticio sin acción.
- El modal puede cerrarse con X, clic fuera o Escape.

## Sedes
- Selector compacto.
- Solo se muestra la sede seleccionada.
- Dirección, horario y enlace de ubicación se actualizan al cambiar de sede.
- Adaptación específica para móvil.

## Notas de salud
- Se muestran mediante tarjetas resumidas.
- La lectura completa disponible dentro del proyecto se abre en un modal para no saturar la página.
- Se conservaron las notas existentes del proyecto sin crear artículos nuevos.

## Responsive
- Menú hamburguesa funcional.
- Cierre automático al seleccionar una sección.
- Cierre con Escape.
- Cotizador usable en móvil.
- Sedes compactas en móvil.
- Sin duplicación de secciones ni IDs.

## Validaciones realizadas
- `node --check script.js` sin errores de sintaxis.
- Anchors internos verificados contra IDs existentes.
- IDs duplicados revisados.
- Claves `data-i18n` comparadas con el objeto de traducciones.
- Secciones verificadas en el orden solicitado.
