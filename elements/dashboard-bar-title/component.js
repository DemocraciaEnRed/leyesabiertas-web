import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledBarTitle = styled.h4`
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: #5c97bc;
  max-width: 22.2rem;
  font-family:var(--bold);
  margin:0;

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
