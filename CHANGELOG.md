
# Changelog

### 1.5.0

- DERLA-75 Agregado support a las tarjetas de los proyectos para soportar textos largos y agregado Masonry para que funcione mejor en grilla
- DERLA-71 - Cambiado el metoDO GET /documents.  Ya no se utiliza el paginado de mongoose sino que se hace casero.   Por defecto los proyectos vienen primero abiertos, luego cerrados (querystring = page, limit, closed(null,false,true), created(ASC,DESC))
- Cambiado el telefono (Footer descripcion de la HCDN)

Compatible con:
- `leyesabiertas-core:1.5.0`
- `leyesabiertas-notifier:1.5.0`

### 1.4.0

- DERLA-64 Posible fix de el hover en el contador de comentarios en una mark del articulado
- DERLA-66 Fix en el handleResolve de un comentario que no estaba parseando bien el id del comentario
- DERLA-39 Agregar focus al abrirse el componente para hacer un comentario
- DERLA-67 Fix en el calculo de la posicion el "Agregar comentario" se estaba posicionando incorrectamente
- DERLA-33 Nuevo feature: Poder navegar por las versiones historicas del documento

Compatible con:
- `leyesabiertas-core:1.4.0`
- `leyesabiertas-notifier:1.3.0`


### 1.3.0

- DERLA-63 Actualizado manual de usuario 
- DERLA-57 Ahora al agregar un comentario el focus queda en el cuadro d…
- FIX en hero por el cover
- DERLA-60 Agregado el video tutorial al portal en la home
- DERLA-59 Desde el perfil de diputados, cuando está logueado, no se ven los iconos para compartir en redes, solo se ve los botones de editar y publicar
- DERLA-27 Agregado react-datepicker que mejora la experiencia de elegir el dia de cierre
- Update del package.json por razones de seguridad

Compatible con:
- `leyesabiertas-core:1.3.0`
- `leyesabiertas-notifier:1.3.0`

#### 1.2.1

- Cambiado colores por defecto
- Aportes en una propuesta cerrada solo se veran si los hay (>0)
- Las palabras finales se ven si esta efectivamente cerrada la propuesta
- Cambio de texto
- Cambio de los valores de un proyecto por defecto
- Nuevo background 

#### 1.0.9
- Cambiado fundamentacion a "Resumen de la propuesta"
- Actualizadas las preguntas frecuentes

#### 1.0.8
- Agregado Google Ananytics
- Cambiado aportantes a participantes

#### 1.0.7
Arreglado los siguientes issues (17/02/2019)
- Issues solucionados: #83 #81 #80 #76 #73 #75 #74 #77 #82 #88
- Otros issues: Correcciones de texto

#### 1.0.6

- Mejorado los estilos en mobile
