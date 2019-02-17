import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeroTitle from '../../elements/hero-title/component'
import HeroSubtitle from '../../elements/hero-subtitle/component'

const StyledHero = styled.div`
  height: 350px;
  background-image: url('/static/assets/background-hero.jpg');
  background-repeat: no-repeat;
  background-position: right 0px bottom 42%;
  background-size: 130%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 7rem;
`

const Hero = () => (
  <StyledHero>
    <HeroTitle>Plataforma de Participación ciudadana en propuestas de ley</HeroTitle>
    <HeroSubtitle>¡Participe haciendo comentarios y sugerencias para co-crear mejores leyes!</HeroSubtitle>
  </StyledHero>
)

export default Hero
