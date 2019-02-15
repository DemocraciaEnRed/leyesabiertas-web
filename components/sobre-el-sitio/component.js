import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoP from '../../elements/static-info-p/component'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Sobre el sitio</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoP>
      El Portal de Leyes Abiertas es un desarrollo basado en la tecnología provista por Democracia en Red, coordinado por el Programa de Modernización parlamentaria de la Cámara de Diputados de La Nación.
      </StaticInfoP>
      <StaticInfoP>
      Esta es una versión “Beta”, aún en evaluación y desarrollo. Como tal, puede tener errores que pueden ser reportados a <a href='mailto:contacto@democraciaenred.org'>contacto@democraciaenred.org</a>.
      </StaticInfoP>
    </StyledDiv>
  </section>
)
