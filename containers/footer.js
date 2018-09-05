import React from 'react'
import Link from 'next/link'
import {
  Footer, SocialBar, footerBar, SocialIcon, FooterText
} from 'democracyos-ui'

export default () => (
  <Footer>
    <footerBar>
      <Link to='/'><a>Co-Legis</a></Link>
      <SocialBar>
        <SocialIcon img='https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg' />
        <SocialIcon img='https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg' />
        <SocialIcon img='https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg' />
      </SocialBar>
      <Link to='/'><a>Proyectos</a></Link>
      <Link to='/'><a>Cómo participar</a></Link>
      <Link to='/'><a>La Propuesta</a></Link>
      <Link to='/'><a>Crear cuenta</a></Link>
      <Link to='/'><a>Iniciar sesión</a></Link>
      <Link to='/'><a>Contacto</a></Link>
      <Link to='/'><a>Preguntas Frecuentes</a></Link>
      <Link to='/'><a>Términos y condiiones</a></Link>
    </footerBar>
    <FooterText>
    Honorable Cámara de diputados de la Nación Argentina | Congreso de la Nación Argentina | Av. Rivadavia 1864 | Ciudad Autónoma de Bs. As. (C.P. C1033AAV) | (54-11) 4127-7100
    La información contenida en este sitio es de dominio público y puede ser utilizada libremente. Se solicita citar la fuente.
    </FooterText>
  </Footer>
)

