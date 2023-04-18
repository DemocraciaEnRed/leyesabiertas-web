import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import UserLink from '../../elements/user-link/component'

const Bar = styled.div`
display:flex;
justify-content:flex-end;
margin-top:auto;
margin-bottom:auto;
@media(max-width:760px){
  justify-content: start;
  border-bottom: 1px solid #D6D6D6;
  width:100%;

 }
`

const UserBar = ({ children }) => (
  <Bar>
    { children }
  </Bar>
)

UserBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default UserBar
