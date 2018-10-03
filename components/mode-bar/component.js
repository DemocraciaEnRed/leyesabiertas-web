import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledModeBar = styled.nav`
  height: 45px;
  background: #FFF;
  padding: 0 30px;
`

const ModeBar = ({ children }) => (
  <StyledModeBar>
    { children }
  </StyledModeBar>
)

ModeBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ModeBar
