import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { NavBarTitle, LinkBar, UserBar } from 'ui'

const Nav = styled.nav`
  margin: 27px 85px 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`

export default () => (
  <Nav>
    <NavBarTitle>
      <Link to='/'><a>Co-Legis</a></Link>
    </NavBarTitle>
    <LinkBar>
      <Link to='/'><a>Inicio</a></Link>
      <Link to='/'><a>Proyectos</a></Link>
      <Link to='/'><a>Cómo participar</a></Link>
      <Link to='/'><a>La Propuesta</a></Link>
    </LinkBar>
    <UserBar>
      <Link to='/'><a>Crear cuenta</a></Link>
      <Link to='/'><a>Ingresar</a></Link>
    </UserBar>
  </Nav>
)
