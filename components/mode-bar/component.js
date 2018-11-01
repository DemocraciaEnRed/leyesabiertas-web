import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledModeBar = styled.nav`
  margin-left: auto;
  margin-right: auto;
  margin-top: 37px;
  width: 90%;
  height: 45px;
  background: #FFF;
  padding: 0 3%;
  border-bottom: solid 1px #dae1e7;
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
