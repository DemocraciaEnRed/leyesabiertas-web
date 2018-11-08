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
        <strong><u>El Portal de Co-creación legislativa</u></strong> es una <strong>plataforma de elaboración colaborativa de normas</strong> donde los diputados asumen el compromiso con la ciudadanía de <strong>abrir el debate para incorporar puntos de vista en sus propuestas</strong>. El objetivo de la plataforma es <strong>enriquecer las propuestas de ley</strong> con aportes de la ciudadanía.
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
        Esta es una herramienta que brinda a la ciudadanía la oportunidad de co-crear leyes en conjunto con las y los legisladores.      
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué es la co-creación de propuestas de ley?
      </StaticInfoBold>
      <StaticInfoP>
        <strong>La co-creación de propuestas de ley rompe con la forma tradicional de legislar</strong> donde un equipo de políticos, profesionales y técnicos elaboran los proyectos de ley. <strong>Co-crear supone abrir ese proceso y crear un espacio en el que se encuentran legisladores con la ciudadanía</strong>, la academia, las organizaciones de la sociedad civil y personas especializadas en las temáticas que se están discutiendo.
      </StaticInfoP>
    </StyledDiv>
  </section>
)
