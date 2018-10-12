import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FooterTextWrapper from '../../elements/footer-text-wrapper/component'
import P from '../../elements/footer-text/component'

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: var(--white);
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
`

const Footer = ({ children }) => (
  <FooterWrapper>
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
