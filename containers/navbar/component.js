import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import WithUserContext from '../../components/with-user-context/component'
import NavbarLogo from '../../elements/navbar-logo/component'
import UserBar from '../../components/user-bar/component'
import LoggedUserBar from '../../components/logged-user-bar/component'
import Button from '../../elements/navbar-button/component'
import LoggedUser from '../../components/logged-user/component'
import Notifications from '../../components/notifications-bar/component'

const StyledNav = styled.nav`
  height:12rem;
  display: flex;
  padding:1rem 4.5%;
  flex-direction: row;
  justify-content: center;
  border-bottom:1px solid #dae1e7;
`
class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: 'logged'
    }
  }

  render () {
    const {
      user
    } = this.state
    return (

      <StyledNav>
        <NavbarLogo />
        {user !== 'logged' ? (
          <UserBar>

            <Button>Iniciar sesión</Button>
            <Button primary>Registrarse</Button>
          </UserBar>

        ) : (
          <LoggedUserBar>
            <Notifications />
            <LoggedUser />
          </LoggedUserBar>)
        }

      </StyledNav>
    )
  }
}

export default WithUserContext(NavBar)
