import React from 'react'
import Link from 'next/link'
import {
  Navbar,
  NavBarTitle,
  LinkBar,
  UserBar,
  Button
} from 'democracyos-ui'

export default () => (
  <Navbar>
    <NavBarTitle>
      <Link to='/'><a>co<span>legis</span></a></Link>
    </NavBarTitle>
    <LinkBar>
      <Link to='/'><a>Proyectos</a></Link>
      <Link to='/'><a>Cómo participar</a></Link>
      <Link to='/'><a>La Propuesta</a></Link>
    </LinkBar>
    <UserBar>
      <Button>Iniciar sesión</Button>
      <Button primary>Registrarse</Button>
    </UserBar>
  </Navbar>
)
