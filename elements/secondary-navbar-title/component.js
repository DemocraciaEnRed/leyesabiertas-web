import React from 'react'
import styled from 'styled-components'

const StyledSecondaryNavbarTitle = styled.h2`
  font-size: 2rem;
  color: #101a21;
`
const Span = styled.span`
  font-family: var(--bold);
`

const SecondaryNavbarTitle = () => (
  <StyledSecondaryNavbarTitle>
   Portal de <Span>Co-creación Legislativa</Span>
  </StyledSecondaryNavbarTitle>
)

export default SecondaryNavbarTitle
