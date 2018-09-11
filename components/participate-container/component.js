import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledParticipateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 97%;
  justify-content: space-between;
  margin-bottom: 4.8rem;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const ParticipateContainer = ({ children }) => (
  <StyledParticipateContainer>
    { children }
  </StyledParticipateContainer>
)

ParticipateContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ParticipateContainer
