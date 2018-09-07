import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import FooterBar from '../../components/footer-bar/component'
import NavBarTitle from '../../elements/navbar-title/component'
import SocialBar from '../../components/social-bar/component'
import SocialIcon from '../../elements/social-icon/component'
import FooterTextWrapper from '../../elements/footer-text-wrapper/component'
import P from '../../elements/footer-text/component'
import FooterLogo from '../../elements/footer-logo/component'

const FooterWrapper = styled.footer`
  width: 100%;
  height: 48.5rem;
  background-color: var(--white);
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
`

const Footer = ({ children }) => (
  <FooterWrapper>
    <FooterBar>
      <NavBarTitle>
        <Link href='/'><a>co<span>legis</span></a></Link>
      </NavBarTitle>
      <SocialBar>
        <SocialIcon
          img={'/static/assets/facebook-icon.svg'}
          link={'/'} />
        <SocialIcon img={'/static/assets/twitter-icon.svg'}
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
  </FooterWrapper>
)

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Footer
