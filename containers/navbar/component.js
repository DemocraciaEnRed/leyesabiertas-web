import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import jump from 'jump.js'
import Link from 'next/link'
import LinkBar from '../../components/link-bar/component'
import UserBar from '../../components/user-bar/component'
import NavBarTitle from '../../elements/navbar-title/component'
import Button from '../../elements/button/component'

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
      {links.map((li, i) => (
        <a onClick={scroll(li.value)}>{li.name}</a>
      ))}
    </LinkBar>
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
