![Header](docs/header-doc.png)

# Leyes Abiertas - Frontend

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=DemocraciaEnRed_leyesabiertas-web&metric=alert_status)](https://sonarcloud.io/dashboard?id=DemocraciaEnRed_leyesabiertas-web)
[![GitHub license](https://img.shields.io/github/license/DemocraciaEnRed/leyesabiertas-notifier)](https://github.com/DemocraciaEnRed/leyesabiertas-notifier/blob/master/LICENSE)

Este es uno de los cuatros modulos que se requieren descargar, hacer setup e instalar cada uno de los repositorios para poder utilizar Leyes Abiertas.
Para saber mas del conjunto de modulos que compone leyes abiertas, hace [click aqui](https://github.com/DemocraciaEnRed/leyesabiertas) 

---

## Setup leyesabiertas-web

> #### ⚠️ NOTAS IMPORTANTES
> 
> El siguiente conjunto de sistemas requiere de:
> - Mongo3.6
> - Keycloak 4.4.x o 6.0.x
> 
> Sobre Mongo3.6, es necesario que instales mongo 3.6 en tu computadora, con una base de datos llamada "leyesabiertas". No hace falta crear alguna collection, eso lo hace la app en inicio.
> 
> Keycloak es un sistema open source de identificación y gestión de acceso de usuarios. Es un sistema complejo y para fines de testing, en [Democracia en Red](https://democraciaenred.org) sabemos que la instalacion de Keycloak puede ser un bloqueo para intenciones de testing. Para eso, comunicate con nosotros y podemos ayudarte a hacer el setup y utilizar nuestro Keycloak de Democracia en Red. Envianos un correo electronico en [mailto:it@democraciaenred.org](it@democraciaenred.org) o contactanos a través de nuestro [Twitter](https://twitter.com/fundacionDER).

Ir a la carpeta del repo y instalar las dependencias.

```
dev/:$ cd leyesabiertas-web
dev/leyesabiertas-web:$ npm install
```
Ahora tenemos que crear un archivo `.env` que son nuestras variables de entorno

```env
API_URL=http://localhost:4000
AUTH_SERVER_URL=############TODO
REALM=######################TODO
RESOURCE=###################TODO
SSL_REQUIRED=external
PUBLIC_CLIENT=true
CONFIDENTIAL_PORT=0
```

Comando para ejecutar:

```
dev/leyesabiertas-web:$ npm run dev
```

### 📓 Note for production build

> ⚠ **Ignore this if you dont work in this project.**

- Be sure to use `"keycloak-js": "4.4.0"` in `package.json` for production builds.

**For development**

Make sure you have this in the package.json in your local env

```json
"keycloak-js": "6.0.1"    
```
In file `containers/app-wrapper/component.js`, change line 75
```
75|    const authenticated = await keycloak.init({ onLoad: 'check-sso', promiseType: 'native' })
```

**For production**

Make sure its like this in the package.json

```json
"keycloak-js": "4.4.0"
```
In file `containers/app-wrapper/component.js`, change line 75

```
75|    const authenticated = await keycloak.init({ onLoad: 'check-sso' })
```

---

## Licencia

El siguiente repositorio es un desarrollo de codigo abierto bajo la licencia GNU General Public License v3.0. Pueden acceder a la haciendo [click aqui](./LICENSE).

