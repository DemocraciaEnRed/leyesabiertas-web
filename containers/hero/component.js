import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeroTitle from '../../elements/hero-title/component'
import HeroSubtitle from '../../elements/hero-subtitle/component'

const StyledHero = styled.div`
  margin: 5%;
  padding-right:45%;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width:1200px) {
    padding-right:20%;
  }
`

const Hero = () => (
  <StyledHero>
    <HeroTitle>Plataforma de intervención ciudadana en propuestas de ley</HeroTitle>
    <HeroSubtitle>¡Participe haciendo comentarios y sugerencias para co-crear mejores leyes!</HeroSubtitle>
  </StyledHero>
)

export default Hero
