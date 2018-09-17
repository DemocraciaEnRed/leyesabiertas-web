import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSecondaryNavbarTitle = styled.h2`
  font-family: var(--bold);
  font-size: 2rem;
  color: #101a21;
`

const SecondaryNavbarTitle = ({ children }) => (
  <StyledSecondaryNavbarTitle>
    {children}
  </StyledSecondaryNavbarTitle>
)

SecondaryNavbarTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default SecondaryNavbarTitle
