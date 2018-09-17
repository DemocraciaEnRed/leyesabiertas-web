import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeroImg from '../../elements/hero-img/component'
import HeroLeftColumn from '../../components/hero-left-column/component'
import HeroTitle from '../../elements/hero-title/component'
import HeroSubtitle from '../../elements/hero-subtitle/component'

const StyledHero = styled.div`
  margin: 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Hero = ({ children }) => (
  <StyledHero>
    <HeroLeftColumn>
      <HeroTitle>La ciudadanía y sus representantes conectados para co-crear mejores leyes</HeroTitle>
      <HeroSubtitle>¡Participá haciendo comentarios y sugerencias en los propuestas de ley! Los/as diputados/as tendrán en cuenta tus aportes</HeroSubtitle>
    </HeroLeftColumn>
    <HeroImg />
  </StyledHero>
)

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Hero
