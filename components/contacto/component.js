import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoP from '../../elements/static-info-p/component'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Contacto</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoP>
      Programa de Modernización Parlamentaria, Innovación, Transparencia y Fortalecimiento Democrático.
      </StaticInfoP>
      <StaticInfoP>
        <a href='mailto:leyesabiertas@hcdn.gob.ar'>leyesabiertas@hcdn.gob.ar</a>.
      </StaticInfoP>
      <StaticInfoP>
        (+5411) 4127-7100 int. 5091
      </StaticInfoP>
    </StyledDiv>
  </section>
)
