# Congreso

#### Note for production build

- Be sure to use `"keycloak-js": "4.4.0"` in `package.json`
For development
```
"keycloak-js": "6.0.1"    
```

For production
```
"keycloak-js": "4.4.0"
```
- In file `containers/app-wrapper/component.js`, change line 75

For development
```
75|    const authenticated = await keycloak.init({ onLoad: 'check-sso', promiseType: 'native' })
```

For production
```
75|    const authenticated = await keycloak.init({ onLoad: 'check-sso' })
```