import React, { Component } from 'react'
import NavBar from '../containers/navbar/component'
import SecondaryNavbar from '../containers/secondary-navbar/component'
import PoliticasDePrivacidad from '../components/politicas-de-privacidad/component'
import SecondaryFooter from '../containers/secondary-footer/component'
import Footer from '../containers/footer/component'

export default class extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <SecondaryNavbar />
        <PoliticasDePrivacidad />
        <SecondaryFooter />
        <Footer />
      </div>
    )
  }
}
