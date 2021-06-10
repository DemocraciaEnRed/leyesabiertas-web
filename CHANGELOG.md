
# Changelog

### 1.9.4

2021-06-10: Este pedido fue porque habian usado tag ambiental para representar el Foro Legislativo Ambiental

El problema surge que ahora se requiere el tag de vuelta. Por lo tanto tenemos que:

1. Ver si ya existe el tag de foro-legislativo-ambiental
   - Si existe, entonces este script ya se corrio. Saltear...
2. Si no se corrio, crear el tag de foro-legislativo-ambiental
3. Luego buscar aquellos documentVersions que tienen en sus content.tags el tag de ambiente.
   - Si esta en la primera posicion, entonces tenemos que intercambiarlo con el de foro-legislativo-ambiental.
   - Si no esta en la primera posicion, saltear la actualizacion, no hace falta.
4. Done.

En la web devolvimos las imagenes correctas.

Compatible con:
* `leyesabiertas-web:1.9.4`
* `leyesabiertas-core:1.9.4`
* `leyesabiertas-notifier:1.9.1`
* `leyesabiertas-keycloak:1.8.0`

### 1.9.2

- Fixing hero container (video) con algunos atributos que react daba "warnings"
- Agregado @react-hook/media-query al package.json
- @mijaelcohen Fix de mouse on hover sobre una seccion del articulado, (see commit 26e30e3)

Compatible con:

* `leyesabiertas-web:1.9.2`
* `leyesabiertas-core:1.9.0`
* `leyesabiertas-notifier:1.9.0`
* `leyesabiertas-keycloak:1.8.0`


### 1.9.0

1. Nueva funcion: Apoyar un proyecto. Ahora se puede apoyar un proyecto, como usuario registrado o como anonimo (con la necesidad de ingresar la informacion, un captcha, y una validacion por email)
2. Se agrega la posibilida de que en el perfil del diputada/o se pueda descargar la planilla con un listado de la informacion de quienes apoyaron los proyectos
3. Cambios visuales: Ahora los header de las cards de los proyectos tendrán una imagen de -LA PRIMERA- etiqueta/categoria elegida en el formulario del proyecto. En el caso de que no existiera, se pondrá una imagen estandar

Listado de cambios:

- Agregado campo "apoyos" en Documents como array de strings (emails)
- Agregado campo "apoyosCount" en las apis que devuelven Documents (para mostrar en tarjetas de home y dentro del proyecto)
- Se implementó un método de captcha para apoyos externos
- Se desarrollo un circuito de validación de apoyo externo (usuarix no registradx) por email usando tabla de tokens
- Al apoyar, se valida que ese mail no haya apoyado ya una vez
- Al apoyar, se valida que ese mail no tenga un token de validación vigente (creado en las últimas 48hs)
- Verificacion del captcha! (svg-captcha https://www.npmjs.com/package/svg-captcha)
- Usuarix no registradxs: Al poner mail y nombre se le avisa a lx usuarix de que va a recibir un mail para validar
- Se genera token de un solo uso (que "caduque" a las 48hs) para validar voto
- Se crea la tabla apoyoTokens con campos: token, fecha creación, email
- El token se generará como uuid v4 (https://www.npmjs.com/package/uuid)
- En el script init borraran los token más viejos que de 48hs
- Enviar mail (desde notifier) con link con el token en la url para validar el voto
- Cuando alguien X entré a validar el token, se verifica que este en el rango de 48hs (sino se avisa que ya expiró), y si lo está se registra un apoyo a nombre del mail del token y se borra el token
- Para apoyos internos (usuarix registradx) simplemente registrar el apoyo y ya
- Se agrega la posibilidad de descargar un excel con todos los apoyos registrados en los proyectos.
- Se quito el campo de URL de la imagen, dado que no va a ser mas utlilzado
- Ahora las etiquetas cuentan con una "key", importante para coordinar con que imagen mostrar en el header de la card del proyecto
- Ahora para monitores mas grandes-largos (2K/4K) se muestran 4 columnas de cards de proyectos en la home

Compatible con:
* `leyesabiertas-web:1.9.0`
* `leyesabiertas-core:1.9.0`
* `leyesabiertas-notifier:1.9.0`
* `leyesabiertas-keycloak:1.8.0`

### 1.8.1

* Cambiado la extension de excel de xls a xlsx

Compatible con:
* `leyesabiertas-core:1.8.1`
* `leyesabiertas-notifier:1.8.0`
* `leyesabiertas-keycloak:1.8.0`

### 1.8.0

Listado de cambios hasta el momento:

1. Inclusión de etiquetas en la plataforma:
    * En el menú “Mi perfil” de usuarios no diputados ahora hay un campo nuevo “Etiquetas de interés”
    * En la carga y edición de proyectos se agregó el campo “Etiquetas” al final del formulario
    * En la página de inicio, en los filtros de proyectos, ahora se puede filtrar por etiquetas
    * Si los usuarios no tienen ninguna etiqueta asignada se les muestra un aviso
    * Nota: los usuarios y proyectos previos a esta actualización no tendrán asignados ninguna etiqueta
2. Mejoras en el inicio de sesión:
    * Se sacó el botón de “Registrarse” y se dejó únicamente el de “Ingresar” (que antes decía “Iniciar sesión”) en todo el sitio web
    * Se sacó el botón de “Iniciar sesión” y se resaltó la sección que invita a registrarse en el formulario de inicio de sesión
3. Nuevo botón de descarga de excel de los proyectos propios, con sus comentarios y aportes, desde el perfil de usuario	
4. Mejoras de diseño en los filtros de proyectos en la página de inicio
5. Nueva funcionalidad de enviar notificaciones a usuarixs interesadxs al publicar proyecto. Y opción en el perfil de usuario para elegir si recibir estas notificaciones o no.
6. Se arregló un error de que en algunos navegadores, bajo ciertas condiciones, no se guardaban bien las modificaciones del perfil de usuario

Compatible con:
* `leyesabiertas-core:1.8.0`
* `leyesabiertas-notifier:1.8.0`
* `leyesabiertas-keycloak:1.8.0`

### 1.7.2

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
