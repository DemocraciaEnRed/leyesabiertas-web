import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AboutImg from '../../elements/about-img/component'
import AboutText from '../../elements/about-text/component'
import AboutH2 from '../../elements/about-h2/component'
import AboutP from '../../elements/about-p/component'
import ArrowRightLink from '../../elements/arrow-right-link/component'

const StyledAbout = styled.div`
  height:540px;
  width:90%;
  margin-left:auto;
  margin-right:auto;
  display:flex;
  background-color: #5c97bc;
  box-sizing: border-box;
  }
`

const About = () => (
  <StyledAbout id='about'>
    <AboutImg img={'https://www.ncn.com.ar/wp-content/uploads/2017/12/diputados-prevision1.jpg'} />
    <AboutText>
      <AboutH2>Acerca de la propuesta</AboutH2>
      <AboutP>Co-legis es una plataforma de creación colaborativa de normas. En esta, los diputados asumen un compromiso con la ciudadanía de ponerse a disposición para incorporar puntos de vista y comentarios que se hagan en proyectos de ley a ser presentado en la cámara.</AboutP>
      <ArrowRightLink />
    </AboutText>
  </StyledAbout>
)

export default About
