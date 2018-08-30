import React from 'react'
import Link from 'next/link'
import {
  Navbar,
  NavBarTitle,
  LinkBar,
  UserBar
} from 'ui'

export default () => (
  <Navbar>
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
  </Navbar>
)
