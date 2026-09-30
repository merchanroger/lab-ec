# LABS — Ajustes finales de diseño, contenido y funcionalidad

Esta versión mantiene la línea visual aprobada y aplica los cambios solicitados.

## Estructura
1. Inicio
2. Nosotros
3. Cotiza tus exámenes
4. Notas de salud
5. Sedes
6. Contacto

Se eliminó por completo la sección independiente **Servicios** y no existe un apartado independiente de **Resultados**.

## Hero
- Carrusel de fotografías de laboratorio de la web oficial de LABS.
- Avance automático y navegación manual.
- Adaptación móvil.
- Fallback visual si una fotografía remota no está disponible.

## Nosotros
- Imagen del laboratorio a la izquierda en escritorio y arriba en móvil.
- Misión, visión, alcance y política de calidad basados en la información institucional publicada por LABS.
- Información adicional contenida en elementos desplegables para mantener la página limpia.

## Cotizador
- Catálogo cerrado inicialmente.
- Búsqueda de exámenes.
- Selección y eliminación de exámenes.
- Resumen de selección.
- Total estimado calculado con los valores disponibles en el catálogo incluido.
- Datos del solicitante.
- Generación de PDF descargable mediante jsPDF.
- Código de cotización generado automáticamente.
- El PDF indica expresamente que es una solicitud de cotización y no una factura fiscal.
- Envío por correo a info@labs.ec mediante el cliente de correo del usuario.

## PDF
El PDF contiene solicitante, identificación si fue proporcionada, correo, teléfono, fecha, código de cotización, exámenes, cantidad, precio, subtotal y total estimado. No se inventan códigos de examen; cuando no existe un código disponible en los datos incluidos, no se muestra uno ficticio.

## Sedes
- Selector compacto.
- Solo se muestra la sede seleccionada.
- Dirección y horario oficiales disponibles.
- Enlace a Google Maps.
- Guayaquil identificada como sede principal.

## Notas de salud
- Se mantienen como tarjetas compactas.
- El título principal es: “Contenido educativo publicado por LABS para pacientes y familias”.
- Cada nota abre su contenido completo en un modal.
- Se incluyen traducciones de la interfaz y títulos/resúmenes de las notas disponibles en el proyecto.

## Idiomas
La interfaz ES/EN actualiza menú, botones, formularios, cotizador, sedes, notas, mensajes, footer y título del documento.

## Responsive
Se ajustaron hero/carrusel, Nosotros, sedes, cotizador, formularios, botones y modales para teléfono, tablet y escritorio.

## Fuentes oficiales consultadas
- https://labs.ec/
- https://labs.ec/nosotros/
- https://labs.ec/contactos/
- https://labs.ec/cotizador_nuevo.php

Las fotografías del carrusel y la imagen institucional utilizan referencias remotas de la web oficial de LABS para conservar el material publicado por la institución.


## Correcciones adicionales
- Header y footer usan como referencia el logo oficial de LABS: https://labs.ec/wp-content/uploads/2020/10/logo.jpg
- El título de Notas de salud es: “Contenido educativo de LABS para pacientes y familias”.
- Se eliminó el subtítulo secundario del lado derecho de Notas de salud.
- Se reforzaron sutilmente los acentos naranja sin desplazar al verde como color principal.
- El PDF intenta cargar el mismo logo oficial antes de generarse.


## Ajustes finales — 30 Sep 2026
- Módulo Sedes con apertura a pantalla completa y cierre claro, incluyendo móvil.
- Verde de marca alineado con el tono turquesa/verde del logo oficial LABS (#00A99D como referencia de interfaz); naranja conservado como acento.
- Carrusel de Inicio conserva las imágenes existentes y agrega las dos fotografías entregadas por el usuario en `assets/`.
- PDF usa la URL oficial del logo LABS como fuente de imagen y mantiene fallback de compatibilidad si el navegador no permite la carga remota.
- Cotizador reorganizado visualmente por pasos y catálogo de 6 columnas en escritorio, con adaptación responsive.
- Footer reducido a logo, Explora, LABS y Contacto.
