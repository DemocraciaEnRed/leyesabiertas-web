import React, { Component } from 'react'
import NavBar from '../containers/navbar/component'
import SecondaryNavbar from '../containers/secondary-navbar/component'
import TerminosYCondiciones from '../components/terminos-y-condiciones/component'
import SecondaryFooter from '../containers/secondary-footer/component'
import Footer from '../containers/footer/component'
import styled from 'styled-components'


const BannerImg = styled.div`
background-image: url(${props => props.srcImg});
background-size: contain;
background-repeat: no-repeat;
width: 100%;
height: 0;
padding-top: 22.82%; /* (img-height / img-width * container-width) */
@media (max-width:700px){
  background-position: center; 
  
  }
`

export default class extends Component {
  render () {
    return (
      <div>
        <NavBar />
        {/* <SecondaryNavbar /> */}
        <BannerImg srcImg="/static/assets/images/politicas_de_privacidad.jpg"/>
        <TerminosYCondiciones />
        <SecondaryFooter />
        <Footer />
      </div>
    )
  }
}
