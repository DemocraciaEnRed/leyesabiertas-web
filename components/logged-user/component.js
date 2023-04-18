import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import WithUserContext from '../with-user-context/component'
import NavbarUsermenu from '../../elements/navbar-usermenu/component'

const StyledLoggedUser = styled.div`
  height:35px;
  display:flex;
  justify-content:flex-end;
  background: #fff;
  box-sizing: border-box;
  cursor: pointer;
  @media(max-width:760px){
    width:100%
    justify-content:space-between;
    padding-bottom:10px
   }
`
const UserName = styled.div`
height: 22px;
font-size: 1.6rem<;
color: #5c97bc;
border-style: none;
padding-left:1.5rem;
padding-bottom:2rem;
cursor: pointer;
background:#fff;
color: #5c97bc;
display:none
@media(max-width:760px){
  display:block;
  height:auto;
  padding:0
  font-size: 2.6rem;
  font-family:var(--bold);
  width:100%
  padding: 12px 0 10px 48px
  text-align: start
 }
`

const badge = (props) => {
  if (props.authContext.isAuthor) {
    if (props.authContext.user.fields) {
      if (props.authContext.user.fields.party !== null || props.authContext.user.fields.party !== '') {
        return true
      }
    }
  }
}

const subtituloUsuario = (props) => {
  if (props.authContext.isAuthor) {
    if (props.authContext.user.fields) {
      if (props.authContext.user.fields.party !== null || props.authContext.user.fields.party !== '') {
        return props.authContext.user.fields.party
      }
    }
    return ''
  } else {
    if (props.authContext.user.fields) {
      if (props.authContext.user.fields.occupation !== null || props.authContext.user.fields.occupation !== '') {
        return props.authContext.user.fields.occupation
      }
    }
    return ''
  }
}

const LoggedUser = (props) => (
  <StyledLoggedUser onClick={props.onClick}>
    <UserName>{props.authContext.user.fullname}</UserName>
    <NavbarUsermenu
      name={props.authContext.user.fullname}
      userId={props.authContext.user._id}
      party={subtituloUsuario(props)}
      badge={badge(props)}
      updatedAt={props.authContext.user.updatedAt} />
  </StyledLoggedUser>
)

export default WithUserContext(LoggedUser)
