import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledBarTitle = styled.h4`
  font-size: 2.2rem;
  font-family: var(--bold);
  line-height: 1.14rem;
  color: #5c97bc;
  margin-bottom: 3rem;
`

const BarTitle = ({ children }) => (
  <StyledBarTitle>
    {children}
  </StyledBarTitle>
)

BarTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default BarTitle
