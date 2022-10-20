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
        Dirección General de Innovación, Planificación y Nuevas Tecnologías.
      </StaticInfoP>
      <StaticInfoP>
        <a href='mailto:innovacion@hcdn.gob.ar'>innovacion@hcdn.gob.ar</a>.
      </StaticInfoP>
      <StaticInfoP>
        (+54 11) 6075-0000 interno 5003.
      </StaticInfoP>
    </StyledDiv>
  </section>
)
