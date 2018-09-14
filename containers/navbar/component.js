import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import NavbarLogo from '../../elements/navbar-logo/component'
import UserBar from '../../components/user-bar/component'
import Button from '../../elements/navbar-button/component'

const StyledNav = styled.nav`
  height:14rem;
  display: flex;
  padding:1.8rem 5%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  border-bottom:1px solid #dae1e7;
`

const NavBar = ({ children }) => (
  <StyledNav>
    <NavbarLogo />
    <UserBar>
      <Button withBorder>Iniciar sesión</Button>
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

/*

const links = [
  {
    name: 'Proyectos',
    value: '#projects'
  },
  {
    name: 'Cómo participar',
    value: '#participate'
  },
  {
    name: 'La propuesta',
    value: '#about'
  }
]

const scroll = (target) => (e) => {
  jump(target)
}

 <LinkBar>
      {links.map((li, i) => (
        <a onClick={scroll(li.value)}>{li.name}</a>
      ))}
    </LinkBar>

    */
