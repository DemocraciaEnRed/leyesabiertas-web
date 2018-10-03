import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UserAvatar from '../../elements/user-avatar/component'

const StyledLoggedUser = styled.div`
width: 200px;
height:45px;
display:flex;
justify-content:space-between;
background: #fff;
box-sizing: border-box;
cursor: pointer;

`

const LoggedUser = ({ }) => (
  <StyledLoggedUser>
    <UserAvatar name={'Matías Pellegrini'} avatarImg={'https://i.ytimg.com/vi/NPX6Oc9rgbo/maxresdefault.jpg'} party={'abogado'} />
  </StyledLoggedUser>
)

export default LoggedUser
