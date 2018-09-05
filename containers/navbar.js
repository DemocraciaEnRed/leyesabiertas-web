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
      <Link href='/'><a>co<span>legis</span></a></Link>
    </NavBarTitle>
    <LinkBar>
      <Link href='/'><a>Proyectos</a></Link>
      <Link href='/'><a>Cómo participar</a></Link>
      <Link href='/'><a>La Propuesta</a></Link>
    </LinkBar>
    <UserBar>
      <Button withBorder>Iniciar sesión</Button>
      <Button primary>Registrarse</Button>
    </UserBar>
  </Navbar>
)
