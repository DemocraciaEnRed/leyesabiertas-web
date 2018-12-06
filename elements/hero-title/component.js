import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeroTitle = styled.h1`
  margin-top: 0px;
  font-family: var(--bold);
  font-size: 4rem;
  line-height: 1.25;
  color: var(--white);
  max-width: 700px;
  margin-top: 5rem;
`

const HeroTitle = ({ children }) => (
  <StyledHeroTitle>
    {children}
  </StyledHeroTitle>
)

HeroTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default HeroTitle
