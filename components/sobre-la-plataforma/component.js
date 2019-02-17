import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoBold from '../../elements/static-info-bold/component'
import StaticInfoP from '../../elements/static-info-p/component'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Acerca de</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué es?
      </StaticInfoBold>
      <StaticInfoP>
        <strong>El Portal de Leyes Abiertas</strong> es una <strong>plataforma de elaboración colaborativa de normas</strong> donde los diputados ponen a disposición de la ciudadanía sus propuestas de ley para incorporar nuevos puntos de vista a sus iniciativas. El objetivo de la plataforma es enriquecer las propuestas de ley y generar un nuevo espacio de comunicación con los ciudadanos, que permita enriquecer el debate parlamentario.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Por qué participar?
      </StaticInfoBold>
      <StaticInfoP>
      Según la Constitución <strong>la redacción y discusión de la ley debe darse en el ámbito del Congreso</strong>.
      </StaticInfoP>
      <StaticInfoP>
      Esta herramienta nace del enfoque de parlamento abierto, el cual promueve la incorporación de los ciudadanos en los procesos de toma de decisiones públicas.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué es la co-creación de propuestas de ley?
      </StaticInfoBold>
      <StaticInfoP>
        <strong>La co-creación de propuestas de ley rompe con la forma tradicional de legislar</strong> donde un equipo de políticos, profesionales y técnicos elaboran los proyectos de ley. <strong>Co-crear supone abrir y federalizar ese proceso y crear un espacio en el que se encuentran legisladores con la ciudadanía</strong>, la academia, las organizaciones de la sociedad civil y personas especializadas en las temáticas que se están discutiendo.
      </StaticInfoP>
    </StyledDiv>
  </section>
)
