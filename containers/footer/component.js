import React from 'react'
import styled from 'styled-components'
import FooterTextWrapper from '../../elements/footer-text-wrapper/component'
import P from '../../elements/footer-text/component'

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: var(--white);
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
`

const Footer = () => (
  <FooterWrapper>
    <FooterTextWrapper>
      <P><strong>Honorable Cámara de Diputados de la Nación Argentina</strong> | Congreso de la Nación Argentina | Av. Rivadavia 1864 | Ciudad Autónoma de Bs. As. (C.P. C1033AAV) | (54-11) 4127-7100</P>
      <P>Nota: La información contenida en este sitio es de dominio público y puede ser utilizada libremente. Se solicita citar la fuente.</P>
    </FooterTextWrapper>
  </FooterWrapper>
)

export default Footer
