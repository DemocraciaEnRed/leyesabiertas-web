# Changelog

### 3.0.0

> **IMPORTANTE: HAY NUEVAS VARIABLES DE ENTORNO, POR FAVOR VERIFICAR EL ARCHIVO `.env.dist` DEL NOTIFIER**

En las variables de entorno del notifier, se agregaron las variables:

```bash
BOTTLENECK_ENABLE= #true|false
BOTTLENECK_MIN_TIME= #in milliseconds
BOTTLENECK_MAX_CONCURRENT= #number of concurrent jobs
```

Dado que las notificaciones en esta nueva version tenderá a enviar grandes cantidades de emails, agregamos un "throttle" para evitar que el servidor de correo nos bloquee por abuso. Es importante que se configure correctamente, ya que si no se configura, el throttle no se activa y el servidor de correo puede colapsar. La forma de configurarlo es pensar "cuantas notificaciones deseamos que se envien cada X tiempo". Por ejemplo, si nuestro servidor de SMTP nos limita a que no se envien mas de 10 emails cada 5 segundos, entonces podriamos configurarlo para que, siendo precabidos, en una venta de 2.5 segundos se envien alrededor de 4 mails. Para esto, configurariamos las variables de entorno de la siguiente forma:

```bash
BOTTLENECK_ENABLE= true
BOTTLENECK_MIN_TIME= 2500
BOTTLENECK_MAX_CONCURRENT= 4
```

Entonces nos aseguramos que a los 5 segundos no hayamos enviado mas de 10 mails, y que en 2.5 segundos no hayamos enviado mas de 4 mails. Esto es solo un ejemplo, y es importante que se configure correctamente para evitar que el servidor de correo nos bloquee por abuso de floodings.

Si no se desea activar throttle, se puede desactivar con `BOTTLENECK_ENABLE=false` y el resto de las variables no se toman en cuenta.

**Listado de cambios:**

* NEW: Nuevo procedimiento de init() del sistema: Implementacion de "migrations", para realizar migraciones mas concretas y de forma secuenciales. Esto permite que el sistema pueda ser actualizado de forma mas sencilla y tener mejor auditoria de los cambios que se realizan en la base de datos.
* MIGRATION 001 & MIGRATION 002: Son migraciones que se encargan de setear datos basicos al iniciar el sistema por primera vez. Si el sistema ya esta iniciado, estas migraciones no se saltean y se marcan como ejecutadas. La 001 responde a crear la comunidad, si ya existe, no se crea. La 002 se encarga de setear las tags, si ya existen, no se crean.
* MIGRATION 003: Esta migracion fuerza todas las tags/etiquetas de intereses de todos los usuarios de la DB.
* MIGRATION 004: Esta migracion fuerza las notificaciones de proyectos populares en todos los usuarios DB.
* MIGRATION 005: Esta migracion se encarga de setear en los documentos existentes de la base de datos si ya son populares o si no. Si ya lo son, se setea que el mail de popular "ya" fue enviado (esto es para evitar que proyectos del pasado sean "populares" cuando ya están cerrados.)
* MIGRATION 006: Esta migracion agrega el campo "authors" en los fields de los usuarios (necesario para que se puedan suscribir a sus diputados favoritos)
* MIGRATION 007: Esta migracion fuerza que TODOS los usuarios (si no lo tenian) tengan activadas las notificaciones por tags/etiquetas de intereses.
* NEW: Reordenados los "customForms" de los fields de usuarios y documentos en archivos separados, para mejor control de los mismos.
* NEW: Agregado en el customForm de users el campo "popularNotification" para guardar la preferencia si el usuario desea ser notificado por proyectos populares
* NEW: Agregado en el customForm de users el campo "authors" para guardar la lista de usuarios 
* NEW: Agregado en el customForm de documents el campo "popular" para guardar si el documento es popular o no
* NEW: Nuevo segmento "Mis notificaciones" en el perfil de un usuario: Ahora los usuarios tienen separado de la seccion "Editar perfil" la configuracion de sus notificaciones, que son 4: Activar notificaciones por etiquetas de interes / Seleccion de etiquetas de interes / Activar notificaciones por proyectos populares / Diputados suscriptos.
* NEW: Nueva notificacion: "Proyectos populares": Ahora cuando un proyecto se vuelve popular (esto significa, que consigue 30 apoyos, o 10 comentarios en su fundamento, o 5 aportes en el articulado) se envia un mail a todos los usuarios que tengan activada la opcion de recibir notificaciones por proyectos populares.
* NEW: Agregado nuevo boton en vista de proyecto: "Suscribirse al/Desuscribirse del diputado" para que los usuarios puedan suscribirse a los diputados que quieran, y recibir notificaciones cuando estos publiquen un nuevo proyecto.
* NEW: Agregado nuevo boton al visitar el perfil de un diputado "Suscribirse al/Desuscribirse del diputado" (Similar al punto anterior)
* NEW: Ahora al agregar una nueva etiqueta, automaticamente todos los usuarios van a ser suscriptos a esta etiqueta.
* NEW: Ahora se guarda el lastLogin de los usuarios, para saber cuando fue la ultima vez que se loguearon.
* NEW: Nuevos usuarios que se registran automaticamente estaran suscripto a todas las etiquetas de interes, y a recibir notificaciones por proyectos populares. (NO asi, no se los suscribe a todos los diputados, eso es decision especifica del usuario)
* NEW - Notifier: Nueva notificacion del tipo "document-popular" para documentos que se vuelven populares. Se le notifica a los usuarios que tienen la opcion de recibir notificaciones por proyectos populares activada.
* NEW - Notifier: Ahora la notificacion de "document-published" o documento publicado contempla a todos los usuarios que: Estan suscriptos a notificaciones por etiquetas y el documento tiene una etiqueta que le interesa al usuario, o bien, el usuario esta suscripto a notificaciones por diputados y el documento fue publicado por un diputado al que el usuario esta suscripto.
* NEW - Notifier: Se agrego al mail de notificacion de cierre de documento, ademas de que ya se veia la cantidad de comentarios, la cantidad de aportes al articulado y la cantidad de apoyos al proyecto.
* NEW - Notifier: Se agrego al mail de notificacion de documento publicado el recuadro del proyecto (que generalmente se mostraba en otras plantillas pero estaba faltando en la de publicacion del proyecto)
* NEW - Notifier: Agregado **bottleneck** como dependencia, que es un paquete que se encarga de limitar la cantidad de mails que se envian por segundo, para evitar que el servidor de correo nos bloquee por abuso. **IMPORTANTE: HAY NUEVAS VARIABLES DE ENTORNO, POR FAVOR VERIFICAR EL ARCHIVO `.env.dist` DEL NOTIFIER**. Este throttle es opcional pero vital para evitar que el servidor de correo nos bloquee por abuso. Es importante que se configure correctamente, ya que si no se configura, el throttle no se activa y el servidor de correo puede colapsar.
* NEW - Notifier: Se cambio el uso de la palabra "propuesta" por "proyecto" en los mails de notificaciones.
* NEW - Notifier: Se cambiaron los titulos de los emails de notificaciones para que sean mas descriptivos. Ver Nota al final de este changelog.
* FIX: Se arreglo un problema de que al eliminar una etiqueta, la misma no se borraba de la lista de tags de los documentos. 
* FIX: Se arreglo un problema de que al eliminar una etiqueta, la misma no se borraba de la lista de tags/etiquetas de los usuarios que se suscribieron a las mismas.
* FIX: Se arreglo un problema al apoyar un proyecto de forma anonima: El usuario recibia un correo para validar su apoyo, al ser redirigido a la pagina web, ocurrian doble HTTP GET al link, donde uno validaba, pero el ultimo devolvia error porque ya el primero lo habia validado, y el usuario siempre veia "No se encontro su apoyo" cuando en realidad el mismo fue procesado por el primer GET. Se soluciono cambiando el endpoint de HTTP GET a HTTP POST y aplicando un setTimeout en la vista de 3 segundos antes de enviar el POST.
* FIX: Para notificaciones cuando un proyeto se publica, en el momento que se enviaba el pedido del CORE al NOTIFIER, el modulo de NOTIFIER corrobora si el mail habia sido enviado, como el CORE estaba seteando el flag `publishedMailSent`, el NOTIFIER no enviaba el mail porque este flag evitaba su envio. Ahora se cambio para que los flags (tanto `publishedMailSent` y `popularMailSent`) los setee el NOTIFIER, y no el CORE.
* FIX - Web: Ahora en el admin, al crear una nueva etiqueta, el slug se crea en el backend de mejor forma que como se creaba en el backend.
* FIX - Web: Ahora en el admin, en la vista de etiquetas, las mismas estan ordenadas alfabeticamente.
* FIX - Web: Ahora en la pagina principal, las etiquetas estan ordenadas alfabeticamente.
* FIX - Web: Las etiquetas del recuadro de un proyeto se achicaron los espacios y compactaron las etiquetas, ya que se rompia y escapaban del recuadro en algunos casos. Tambien se quito el letter-spacing que agregaba confusion a etiquetas grandes.
* FIX - Web: Corregido el titulo "tags" por "Etiquetas" en la vista de admin de Etiquetas
* FIX - Web: Corregido el titulo "users" por "Usuarios" en la vista de admin de Usuarios
* FIX - Web: En la seccion de "Usuarios" del admin, no se podia diferenciar que era cada usuario, si un usuario normal o si era un admin o si un diputado. Ahora visualmente se puede diferenciar
* FIX - Web: En la seccion de "Usuarios" del admin el buscador permite buscar a cualquier usuario, pero el placeholder especificamente decia que podia buscar diputados por nombre.
* FIX - Notifier: Las variables de entorno se estaban cargando de forma inconsistente e incorrecta.
* FIX - Notifier: Se agregaron mejoras en el logging del notifier, mas informacion para poder debuggear en caso de error.
* FIX - Notifier: Las notificaciones del cierre de documentos no estaba tomando en cuenta las personas que apoyaron el proyecto. A partir de ahora los usuarios que reciben la notificacion que un proyeto cierra es la union de: Los usuarios que participaron comentando en el fundamento + Los usuarios que aportaron en el articulado + Los usuarios que dieron like a un comentario + Los usuarios que apoyaron el proyecto.
* NOTA: La notificacion de proyectos populares se envia a todos los usuarios que tengan activada la opcion de recibir notificaciones por proyectos populares, completamente ajeno si siguen o no al diputado, o si estan o no suscriptos a notificaciones por etiquetas de interes.
* NOTA: La notificacion de proyectos populares se envia UNA sola vez. Comentarios, aportes o apoyos posteriores no vuelven a enviar la notificacion.

##### Titulos de las notificaciones

* Título para notificación al autor del proyecto sobre nuevo comentario: 'Ha recibido un nuevo comentario en su proyecto de Leyes Abiertas'
* Título para notificación al usuario autor de un aporte en el articulado de un proyecto el cual el diputado ha marcado como resuelto: 'Su comentario en un proyecto de Leyes Abiertas ha sido marcado como resuelto'
* Título para notificación al usuario autor de un aporte en el articulado de un proyecto el cual el diputado ha dejado un like: 'Su comentario en un proyecto de Leyes Abiertas ha sido marcado como relevante'
* Título para notificación al usuario autor de un aporte en el articulado o de un comentario en los fundamentos de un proyecto el cual el diputado ha respondido: 'Su comentario en un proyecto de Leyes Abiertas recibió una respuesta'
* Título para notificación al usuario autor de un comentario en el articulado de un proyecto el cual el diputado ha marcado como aporte: 'Su comentario en un proyecto de Leyes Abiertas ha sido marcado como aporte'
* Título para notificación a todos los usuarios que estan suscriptos a etiquetas del proyecto o al autor del proyecto y que tienen sus notificaciones habilitadas: 'Nuevo proyecto publicado en Leyes Abiertas'
* Título para notificación a todos los usuarios que estan suscriptos a ser notificados cuando un proyecto se vuelve popular: 'Un proyecto en Leyes Abiertas está volviendose popular'
* Título para notificación a un usuario no registrado para validar su apoyo: '¡Último paso para apoyar el proyecto en Leyes Abiertas!'


Compatible con:
* `leyesabiertas-web:3.0.0`
* `leyesabiertas-core:3.0.0`
* `leyesabiertas-notifier:3.0.0`
* `leyesabiertas-keycloak:2.0.0`

### 2.1.0

* Agregado sección de metricas para administradores
* Agregado en los datos del usuario `lastLogin`
* Cambio en middleware `bindUserToSession` para guardar la fecha de lastLogin

#### Metricas de autores:

* Cantidad de proyectos por autor
* Cantidad de proyectos creados en X año por autor

#### Metricas de etiquetas:

* Cantidad de proyectos por etiquetas ordenadas de forma descendiente
* Cantidad de proyectos creados en X año por etiqueta
* (Al seleccionar una etiqueta) Lista de proyectos
* (Al seleccionar una etiqueta) Lista  creados en X año
* Lista de proyectos sin etiquetas

#### Metricas de usuarios

* Cantidad de usuarios registrados
* Cantidad de usuarios comunes (sin rol admin o autor)
* Cantidad de usuarios registrados que se registraron en X año
* Cantidad de usuarios comunes que se registraron en X año
* Lista de usuarios admin
* Lista de usuarios autores

#### Metricas de interaccion por proyecto

* Lista de proyectos ordenados por mayor a menor interaccion en total:

```
* Total de comentarios en la fundamentacion
* Total de comentarios en aportes
* Total de likes (en comentarios de la fundamentacion y en aportes)
* Total de apoyos
* Total de interacciones (comentarios+apoyos+likes)
```

* Posibilidad de filtrar por

```
* Año de creacion de proyecto
* Etiqueta
* Autor
```

#### * Descarga de datasets:

* Listado completo de usuarios con:
```
* id
* nombre
* apellido
* email
* ocupacion
* genero
* fecha de nacimiento
* provincia
* partido
* notificaciones_activadas
* fecha de creacion
* fecha de actualizacion
* fecha de ultimo login
```
* Listado de proyectos con interacciones y autor:
```
* id
* titulo
* version
* tags
* autorNombre
* autorEmail
* apoyos
* likes
* comentariosFundamentos
* comentariosAportesArticulado
* totalInteracciones
* fechaCreacion
* fechaCierre
```

Compatible con:
* `leyesabiertas-web:2.1.0`
* `leyesabiertas-core:2.1.0`
* `leyesabiertas-notifier:2.0.0`
* `leyesabiertas-keycloak:2.0.0`

### 2.0.1

- Ordena documentos por orden de cierre

Ultimos cambios de frontend:

- Banners en acerca de
- Cambio logo
- Sistematización de botones en home
- ajustes en pagina apoyo sin registro
- cambio logo navbar


Compatible con:

* `leyesabiertas-web:2.0.1`
* `leyesabiertas-core:2.0.1`
* `leyesabiertas-notifier:1.9.1`
* `leyesabiertas-keycloak:1.8.0`

### 2.0.0

> TO BE DONE

Compatible con:

* `leyesabiertas-web:2.0.0`
* `leyesabiertas-core:2.0.0`
* `leyesabiertas-notifier:1.9.1`
* `leyesabiertas-keycloak:1.8.0`

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
