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
      El Portal de Co-creación legislativa es una plataforma de elaboración colaborativa de normas donde los diputados asumen el compromiso con la ciudadanía de abrir el debate para incorporar puntos de vista en sus propuestas. El objetivo de la plataforma es enriquecer las propuestas de ley con aportes de la ciudadanía.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Por qué participar?
      </StaticInfoBold>
      <StaticInfoP>
      Según la Constitución la redacción y discusión de la ley debe darse en el ámbito del Congreso. 
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
      La co-creación de propuestas de ley rompe con la forma tradicional de legislar donde un equipo de políticos, profesionales y técnicos elaboran los proyectos de ley. Co-crear supone abrir ese proceso y crear un espacio en el que se encuentran legisladores con la ciudadanía, la academia, las organizaciones de la sociedad civil y personas especializadas en las temáticas que se están discutiendo.
      </StaticInfoP>
    </StyledDiv>
  </section>
)
