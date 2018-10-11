import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import FooterBar from '../../components/footer-bar/component'
import SocialBar from '../../components/social-bar/component'
import SocialIcon from '../../elements/social-icon/component'

const FooterWrapper = styled.footer`
  width: 100%;
  height: 14rem;
  background-color: var(--white);
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
  margin-top:10rem;
`

const Footer = ({ children }) => (
  <FooterWrapper>
    <FooterBar>
      <Link to='/'><a>Proyectos</a></Link>
      <Link to='/'><a>La Propuesta</a></Link>
      <Link to='/'><a>Preguntas Frecuentes</a></Link>
      <Link to='/'><a>Términos y condiciones</a></Link>
    </FooterBar>
    <SocialBar>
      <SocialIcon
        img={'/static/assets/facebook-icon.svg'}
        link={'/'} />
      <SocialIcon img={'/static/assets/twitter-icon.svg'}
        link={'/'} />
    </SocialBar>
  </FooterWrapper>
)

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Footer
