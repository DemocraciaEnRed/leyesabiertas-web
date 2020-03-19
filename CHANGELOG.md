
# Changelog

### 1.7.1

- Arreglados unos typos

Compatible con:
- `leyesabiertas-core:1.7.1`
- `leyesabiertas-notifier:1.7.2`


### 1.7.1

- Mejorado el grid visual de los comentarios del articulado. Ahora se adapta de mejor forma al tamaño de la pantalla.
- Cambiado el numero del telefono de diputados en el footer
- Correcciones ortograficas
- Cambiado "Fundamentación" por "Presentación"
- Ocultado el campo de ID del video de youtube
- Agregado autofocus en los campos de texto cuando se abre un dialogo de respuesta

Compatible con:
- `leyesabiertas-core:1.7.1`
- `leyesabiertas-notifier:1.7.1`

### 1.7.0

- DERLA-80 Se cambio el formato del header de un proyecto, utilizando mejor el espacio y resaltando datos mas importantes que otros y adaptandolo para  mobile
- Mejora visuales de las cards: Si el contenido cuenta con una imagen de header, se ve completamente la imagen. Si no cuenta con una imagen de header, se mantiene el formato conocido.
- Re-diseño de "Mis proyectos" en la sección de usuario: Ahora se muestra en formato tabla, y se ordenan los proyectos en orden de creacion (Los mas recientes en primer lugar). Cuenta con mas información. Es ideal abandonar la estructura de las cards por el espacio que ocupaba.
- DERLA-84 Por pedido del equipo de diseño, se cambio el color de resaltado.
- DERLA-86 Nuevo diseño del grid de comentarios: Ahora los comentarios no se colocan en una posición relativa. Se "fixean" a la ventana y la maxima altura es acorde a la altura de la pantalla. Si el listado de comentarios es mas largo, aparece un "scroll" vertical. Tambien los comentarios ahora se pegan uno a otro.
- Se hicieron algunas mejoras en la visualizacion para mobile, las mejoras son ciertos accesos a algunas opciones y tambien mas que nada para el listado de los aportes al cliquear una seccion de un texto.

Compatible con:
- `leyesabiertas-core:1.7.0`
- `leyesabiertas-notifier:1.5.0`


### 1.6.0

- DERLA-74 Se cambio el reproductor de video de youtube para poder utilizar VideoJS y obtener los videos del servidor de streaming de la HCDN. Se utiliza `customVideoId`. `youtubeId` aun se mantiene activo por razones de retro-compatibilidad con los datos.
- DERLA-77 Actualizado el manual de Usuario
- DERLA-78 Algunos cambios de labels que tenian errores de ortografia

### 1.5.0

- DERLA-72 Se cambio las menciones de “comentarios” por "aportes” y “aportes” por “aportes destacados”.
- DERLA-75 Agregado support a las tarjetas de los proyectos para soportar textos largos y agregado Masonry para que funcione mejor en grilla
- DERLA-71 - Cambiado el metodo GET /documents.  Ya no se utiliza el paginado de mongoose sino que se hace casero.   Por defecto los proyectos vienen primero abiertos, luego cerrados (querystring = page, limit, closed(null,false,true), created(ASC,DESC))
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
- Cambiado fundamentación a "Resumen de la propuesta"
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
