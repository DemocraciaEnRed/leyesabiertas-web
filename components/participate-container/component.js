import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledParticipateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 3rem;
`

const ParticipateContainer = ({ children }) => (
  <StyledParticipateContainer>
    { children }
  </StyledParticipateContainer>
)

export default ParticipateContainer
