import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHero = styled.div`
  margin: 10rem 10.2rem 10.8rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Hero = ({ children }) => (
  <StyledHero>
    { children }
  </StyledHero>
)

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Hero
