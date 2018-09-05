import React from 'react'
import Link from 'next/link'
import {
  Footer,
  FooterBar,
  FooterLogo,
  NavBarTitle,
  SocialBar,
  SocialIcon,
  FooterTextWrapper,
  P
} from 'democracyos-ui'

export default () => (
  <Footer>
      <FooterBar>
        <NavBarTitle footer>
          <Link to='/'><FooterLogo img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} /></Link>
        </NavBarTitle>
        <SocialBar>
          <SocialIcon
            img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'}
            link={'/'} />
          <SocialIcon img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'}
            link={'/'} />
        </SocialBar>
        <Link to='/'><a>Proyectos</a></Link>
        <Link to='/'><a>La Propuesta</a></Link>
        <Link to='/'><a>Preguntas Frecuentes</a></Link>
        <Link to='/'><a>Términos y condiciones</a></Link>
      </FooterBar>
      <FooterTextWrapper>
        <P>Honorable Cámara de diputados de la Nación Argentina | Congreso de la Nación Argentina | Av. Rivadavia 1864 | Ciudad Autónoma de Bs. As. (C.P. C1033AAV) | (54-11) 4127-7100</P>
        <P>La información contenida en este sitio es de dominio público y puede ser utilizada libremente. Se solicita citar la fuente.</P>
      </FooterTextWrapper>
    </Footer>
)

