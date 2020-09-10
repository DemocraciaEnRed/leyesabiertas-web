import React, { Component } from 'react'
import UserContext from '../../components/user-context/component'
import getConfig from 'next/config'

const { publicRuntimeConfig: {
  API_URL,
  NODE_ENV,
  REALM,
  AUTH_SERVER_URL,
  SSL_REQUIRED,
  RESOURCE,
  PUBLIC_CLIENT,
  CONFIDENTIAL_PORT
} } = getConfig()

let Keycloak

export default class extends Component {
  state = {
    keycloak: null,
    authenticated: false,
    login: null,
    isAuthor: null,
    user: null
  }

  fetchMe = async (token) => {
    return (await fetch(`${API_URL}/api/v1/users/me`, {
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache'
      },
      cache: 'no-store'
    })).json()
  }

  // syncMe = async (updatedUser) => {
  //   // const updatedUser = await this.fetchMe()
  //   this.setState({
  //     user: updatedUser
  //   })
  // }

  setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  updateMe = async (newProfile) => {
    const updatedUser = await (await fetch(`${API_URL}/api/v1/users`, {
      'method': 'PUT',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.state.keycloak.token
      },
      'body': JSON.stringify(newProfile)
    })).json()
    if (!updatedUser) {
      throw Error()
    }
    await this.setStateAsync({
      user: updatedUser
    })
    return updatedUser
  }

  async componentDidMount () {
    const keycloakOptions = {
      'url': AUTH_SERVER_URL,
      'realm': REALM,
      'auth-server-url': AUTH_SERVER_URL,
      'ssl-required': SSL_REQUIRED,
      'resource': NODE_ENV === 'development' ? RESOURCE : RESOURCE,
      'public-client': PUBLIC_CLIENT,
      'confidential-port': CONFIDENTIAL_PORT,
      'clientId': NODE_ENV === 'development' ? RESOURCE : RESOURCE
    }
    Keycloak = require('keycloak-js')
    const keycloak = await Keycloak(keycloakOptions)
    try {
      const authenticated = await keycloak.init({ onLoad: 'check-sso', promiseType: 'native' })
      const isAuthor = authenticated ? await keycloak.hasRealmRole('accountable') : false
      const profile = authenticated && await keycloak.loadUserInfo()
      const user = authenticated ? await this.fetchMe(keycloak.token) : null
      this.setState({
        keycloak: keycloak,
        authenticated: authenticated,
        isAuthor: isAuthor,
        profile: profile,
        user: user,
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
    let value = this.state
    value.fetchMe = this.fetchMe
    value.updateMe = this.updateMe

    return (
      <UserContext.Provider value={value} >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
