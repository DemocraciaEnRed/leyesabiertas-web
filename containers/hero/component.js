import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeroImg from '../../elements/hero-img/component'
import HeroLeftColumn from '../../components/hero-left-column/component'
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

const Hero = ({ children }) => (
  <StyledHero>
    <HeroTitle>La ciudadanía y los diputados conectados para co-crear mejores leyes</HeroTitle>
    <HeroSubtitle>¡Participe haciendo comentarios y sugerencias en las propuestas de ley!</HeroSubtitle>
  </StyledHero>
)

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Hero
