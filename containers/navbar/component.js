import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import WithUserContext from '../../components/with-user-context/component'
import BetaLabel from '../../elements/beta-label/component'
import NavbarLogo from '../../elements/navbar-logo/component'
import UserBar from '../../components/user-bar/component'
import LoggedUserBar from '../../components/logged-user-bar/component'
import Button from '../../elements/navbar-button/component'
import LoggedUser from '../../components/logged-user/component'
import Notifications from '../../components/notifications-bar/component'
import UserMenu from '../../components/user-menu/component'

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
      menu: false
    }
  }

handleMenu = () => {
  this.setState({
    menu: !this.state.menu
  })
}

render () {
  if (!this.props.authContext) return null
  return (
    <StyledNav>
      <BetaLabel />
      <NavbarLogo />
      {this.props.authContext.authenticated
        ? (
          <LoggedUserBar>
            <LoggedUser onClick={this.handleMenu} />
            {this.state.menu &&
              <UserMenu logout={this.props.authContext.logout}/>
            }
          </LoggedUserBar>
        ) : (
          <UserBar>
            <Button onClick={this.props.authContext.login}>Iniciar sesión</Button>
            <Button primary onClick={this.props.authContext.register}>Registrarse</Button>
          </UserBar>
        )}
    </StyledNav>
  )
}
}

NavBar.propTypes = {
  authContext: PropTypes.object.isRequired
}

export default WithUserContext(NavBar)
