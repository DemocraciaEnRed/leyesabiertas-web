import React from 'react'
import App, { Container } from 'next/app'
import AppWrapper from '../containers/app-wrapper/component'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <AppWrapper>
        <Container>
          <Component {...pageProps} />
        </Container>
      </AppWrapper>
    )
  }
}
