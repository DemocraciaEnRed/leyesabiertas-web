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
    <NavbarUsermenu
      name={props.authContext.user.fullname}
      userId={props.authContext.user._id}
      party={subtituloUsuario(props)}
      badge={badge(props)}
      updatedAt={props.authContext.user.updatedAt} />
  </StyledLoggedUser>
)

export default WithUserContext(LoggedUser)
