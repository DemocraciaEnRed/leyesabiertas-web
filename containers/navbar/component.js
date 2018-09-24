import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import NavbarLogo from '../../elements/navbar-logo/component'
import UserBar from '../../components/user-bar/component'
import Button from '../../elements/navbar-button/component'

const StyledNav = styled.nav`
  height:12rem;
  display: flex;
  padding:1rem 5%;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  border-bottom:1px solid #dae1e7;
`

const NavBar = ({ children }) => (
  <StyledNav>
    <NavbarLogo />
    <UserBar>
      <Button>Iniciar sesión</Button>
      <Button primary>Registrarse</Button>
    </UserBar>
  </StyledNav>
)

NavBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default NavBar
