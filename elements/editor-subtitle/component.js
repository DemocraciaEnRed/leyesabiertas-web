import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSubtitle = styled.span`
  height: 20px;
  border-radius: 4px;
  background-color: #e3effa;
  font-size: 1.5rem;
  font-weight: 500;
  color: #4a5d68;
  padding: 5px 8px;
  text-transform: italic;
  margin-bottom:3rem;
`

const Subtitle = ({ children }) => (
  <StyledSubtitle>
    {children}
  </StyledSubtitle>
)

Subtitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default Subtitle
