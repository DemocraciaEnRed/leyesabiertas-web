import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledParticipateSection = styled.section`
  width: 100%;
  margin-left: 5rem;
  padding: 8.4rem 4.3rem;
  background-size: 60px 60px;
  background-image: linear-gradient(to right, #f2f5f8 1px, transparent 1px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

const Participate = ({ children }) => (
  <StyledParticipateSection>
    { children }
  </StyledParticipateSection>
)

Participate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Participate
