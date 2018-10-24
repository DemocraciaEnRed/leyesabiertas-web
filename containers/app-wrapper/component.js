import React, { Component } from 'react'
import UserContext from '../../components/user-context/component'

const API_URL = process.env.API_URL
const NODE_ENV = process.env.NODE_ENV
const REALM = process.env.REALM
const AUTH_SERVER_URL = process.env.AUTH_SERVER_URL
const SSL_REQUIRED = process.env.SSL_REQUIRED
const RESOURCE_DEV = process.env.RESOURCE_DEV
const RESOURCE_TEST = process.env.RESOURCE_TEST
const PUBLIC_CLIENT = process.env.PUBLIC_CLIENT
const CONFIDENTIAL_PORT = process.env.CONFIDENTIAL_PORT

let Keycloak

export default class extends Component {
  state = {
    keycloak: null,
    authenticated: false,
    login: null
  }

  async componentDidMount () {
    const keycloakOptions = {
      'url': AUTH_SERVER_URL,
      'realm': REALM,
      'auth-server-url': AUTH_SERVER_URL,
      'ssl-required': SSL_REQUIRED,
      'resource': NODE_ENV === 'development' ? RESOURCE_DEV : RESOURCE_TEST,
      'public-client': PUBLIC_CLIENT,
      'confidential-port': CONFIDENTIAL_PORT,
      'clientId': NODE_ENV === 'development' ? RESOURCE_DEV : RESOURCE_TEST
    }
    Keycloak = require('keycloak-js')
    const keycloak = await Keycloak(keycloakOptions)
    try {
      const authenticated = await keycloak.init({ onLoad: 'check-sso' })
      this.setState({
        keycloak: keycloak,
        authenticated: authenticated,
        login: keycloak.login,
        register: keycloak.register,
        logout: keycloak.logout
      })
    } catch (err) {
      console.error(err)
      this.setState({
        authenticated: false
      })
    }
  }

  render () {
    const value = this.state

    return (
      <UserContext.Provider value={value} >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
