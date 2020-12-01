import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeroTitle from '../../elements/hero-title/component'
import HeroSubtitle from '../../elements/hero-subtitle/component'
import HeroVideo from '../../elements/hero-video/component'

// const StyledHero = styled.div`
//   min-height: 350px;
//   background-image: url('/static/assets/background-hero.jpg');
//   background-repeat: no-repeat;
//     background-position: right 0px bottom 42%;
//   background-size: 120%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   padding: 0 7rem;
//   @media (max-width: 1060px) {
//     background-position: 46% center;
//     background-size: cover;
//   }
//   @media (max-width:700px){
//       padding: 0 20px;
//     }
// `
const StyledHero = styled.div`
  // min-height: 350px;
`

const Hero = () => (
  <StyledHero>
    {/* <HeroTitle>Plataforma de Participación Ciudadana en Propuestas de Ley</HeroTitle>
    <HeroSubtitle>¡Participe haciendo aportes para co-crear mejores leyes!</HeroSubtitle>
    <HeroVideo video='argos.hcdn.gob.ar/DMPARL/tutorial.mp4' /> */}
    <video style={{}} id="videobcg" class="fill" width="100%" height="100%" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0" poster="/static/assets/background-hero.jpg" >
      <source src="/static/assets/images/banner-01.webm" type="video/webm" />
      <source src="/static/assets/images/banner-01.mp4" type="video/mp4" />
      Sorry, your browser does not support HTML5 video.
    </video>
  </StyledHero>
)

export default Hero
