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
    <AboutImg img={'/static/assets/diputados-asset.jpg'} />
    <AboutText>
      <AboutH2>Acerca de la propuesta</AboutH2>
      <AboutP>Elaboración colaborativa de propuestas de ley es una plataforma de co-creación de leyes. En esta, los diputados asumen el compromiso con la ciudadanía de ponerse a disposición para debatir puntos de vista y comentarios que se hagan en sus propuestas de ley antes de ser presentadas en la cámara. 
      </AboutP>
      <ArrowRightLink />
    </AboutText>
  </StyledAbout>
)

export default About
