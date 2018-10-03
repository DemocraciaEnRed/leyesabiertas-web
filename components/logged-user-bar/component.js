import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import UserLink from '../../elements/user-link/component'

const StyledBar = styled.div`
display:flex;
justify-content:flex-end;
width:33%;
margin-top:auto;
`

const LoggedUserBar = ({ children }) => (
  <StyledBar>
    { children }
  </StyledBar>
)

LoggedUserBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default LoggedUserBar
