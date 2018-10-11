import React from 'react'
import App, { Container } from 'next/app'
import UserContext from '../components/user-context/component'
const json = import('../json/keycloak.json')
let Keycloak

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    let keycloak = await json
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, keycloak }
  }

  state = {
    keycloak: null,
    authenticated: false
  }

  async componentDidMount () {
    Keycloak = require('keycloak-js')
    const keycloak = await Keycloak(this.props.keycloak)
    try {
      const authenticated = await keycloak.init({ onLoad: 'check-sso' })
      this.setState({
        keycloak, authenticated
      })
    } catch (err) {
      console.error(err)
      this.setState({
        authenticated: false
      })
    }
  }

  render () {
    const { Component, pageProps } = this.props
    const value = this.state

    return (
      <UserContext.Provider value={value} >
        <Container>
          <Component {...pageProps} />
        </Container>
      </UserContext.Provider>
    )
  }
}
