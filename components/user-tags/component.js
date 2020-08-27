import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import UserLink from '../../elements/user-link/component'

const Bar = styled.div`
display:flex;
justify-content:flex-end;
width:33%;
margin-top:auto;
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
