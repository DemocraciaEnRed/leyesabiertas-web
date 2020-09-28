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
import Tooltip from '../../components/tooltip/component'

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
      menu: false,
      showTooltip: false,
      showTagsTooltip: false
    }
  }

  componentDidMount () {
    const hideTooltips = localStorage.getItem('hide-tooltips') || false
    if (window.location.pathname === '/articulado' && !this.props.authContext.authenticated && !hideTooltips) {
      this.setState({
        showTooltip: true
      })
    }

    const hideTagsTooltip = localStorage.getItem('hide-tagstooltips') || false
    if (!hideTagsTooltip){
      this.setState({
        showTagsTooltip: true
      })
    }
  }

  handleMenu = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  render () {
    if (!this.props.authContext) return null

    let hasTags;
    try { hasTags = this.props.authContext.user.fields.tags.length > 0 }
    catch (e) { hasTags = false }

    return (
      <StyledNav>
        <BetaLabel />
        <NavbarLogo />
        {this.props.authContext.authenticated
          ? (
            <LoggedUserBar>
              <LoggedUser onClick={this.handleMenu} user={this.props.authContext.user} />
              {this.state.menu &&
              <UserMenu logout={this.props.authContext.logout} user={this.props.authContext.user} create={this.createProject} isAuthor={this.props.authContext.isAuthor} />
              }
            </LoggedUserBar>
          ) : (
            <UserBar>
              <Button primary bigger onClick={this.props.authContext.login}>Ingresar</Button>
              {/*<Button primary onClick={this.props.authContext.register}>Registrarse</Button>*/}
            </UserBar>
          )}
        { !this.props.authContext.authenticated && this.state.showTooltip &&
          <Tooltip top={'110px'} right={'20px'} localStorageHideKey='hide-tooltips'>
            Para agregar aportes debe estar registrado.
            Ingrese a la sección y complete el formulario
          </Tooltip>
        }
        { this.props.authContext.authenticated && !hasTags && this.state.showTagsTooltip &&
          <Tooltip top={'110px'} right={'20px'} localStorageHideKey='hide-tagstooltips'>
            ¡Complete su perfil con los temas que le interesan!
          </Tooltip>
        }
      </StyledNav>
    )
  }
}

NavBar.propTypes = {
  authContext: PropTypes.object.isRequired
}

export default WithUserContext(NavBar)
