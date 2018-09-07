import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import LinkBar from '../../components/link-bar/component'
import UserBar from '../../components/user-bar/component'
import NavBarTitle from '../../elements/navbar-title/component'
import Button from '../../elements/button/component'

const StyledNav = styled.nav`
  margin: 2.7rem 8.5rem 5.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`

const NavBar = ({ children }) => (
  <StyledNav>
    <NavBarTitle>
      <Link href='/'><a>co<span>legis</span></a></Link>
    </NavBarTitle>
    <LinkBar>
      <Link href='/'><a>Proyectos</a></Link>
      <Link href='/'><a>Cómo participar</a></Link>
      <Link href='/'><a>La Propuesta</a></Link>
    </LinkBar>
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
