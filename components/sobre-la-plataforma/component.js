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
    <StaticInfoTitle>Sobre la plataforma</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué es?
      </StaticInfoBold>
      <StaticInfoP>
        El Portal de Co-creación legislativa es una plataforma de elaboración colaborativa de normas donde los diputados asumen el compromiso con la ciudadanía de abrir el debate para incorporar puntos de vista en sus propuestas antes de ser presentadas en la Cámara. El objetivo de la plataforma es enriquecer las propuestas de ley con aportes de la ciudadanía.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Por qué participar?
      </StaticInfoBold>
      <StaticInfoP>
        El camino de la ley: Las leyes pueden nacer por iniciativa del los representantes del pueblo, por el presidente de la Nación o por iniciativa popular. En cualquiera de estos casos, la redacción y discusión de la ley debe darse en el ámbito del Congreso. Esta es una oportunidad para co-crear leyes.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué es la co-creación de propuestas de ley?
      </StaticInfoBold>
      <StaticInfoP>
      La co-creación de propuestas de ley rompe con la forma tradicional de legislar donde hay un equipo de políticos, profesionales y técnicos que elaboran los proyectos de ley a puertas cerradas. Co-crear supone abrir ese proceso para que se involucren más personas creando un espacio en el que se encuentran los diputados con la ciudadanía, la academia, las organizaciones de la sociedad civil y personas especializadas en las temáticas que se están discutiendo.
      </StaticInfoP>
    </StyledDiv>
  </section>
)
