import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import UserLink from '../../elements/user-link/component'

const StyledBar = styled.div`
display:flex;
justify-content:flex-end;
margin-top:auto;
margin-bottom:auto;
padding-bottom:.5rem;
@media(max-width:760px){
  justify-content: center;
  border-bottom: 1px solid #D6D6D6

 }
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
