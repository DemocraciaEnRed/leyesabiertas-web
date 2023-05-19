import React from 'react'
import styled from 'styled-components'

const StyledSecondaryNavbarTitle = styled.h2`
  font-size: 2rem;
  margin-top:auto
  color: #101a21;
  width:33.33%;
  margin-bottom:auto;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`
const Span = styled.span`
  font-family: var(--bold);
`

const NavbarTitle = () => (
  <StyledSecondaryNavbarTitle>
   Portal de <Span>Leyes Abiertas</Span>
  </StyledSecondaryNavbarTitle>
)

export default NavbarTitle
