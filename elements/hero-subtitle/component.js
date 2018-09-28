import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeroSubtitle = styled.h2`
  font-size: 1.8rem;
  line-height: 1.67;
  color: #454246;
  padding-top: 3rem;
`

const HeroSubtitle = ({ children }) => (
  <StyledHeroSubtitle>
    {children}
  </StyledHeroSubtitle>
)

HeroSubtitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default HeroSubtitle
