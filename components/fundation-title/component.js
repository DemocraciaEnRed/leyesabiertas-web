import React from 'react'
import styled from 'styled-components'
import ProjectTitle from '../../elements/project-title/component'

const StyledSubtitle = styled.h2`
  font-size: 2.4rem;
  font-family: var(--bold);
  line-height: 1.42rem;
  color: ${(props) => props.closed ? '#ef885d' : '#5c97bc'};
  margin-top: 4.7rem;
`

const container = styled.div`
  width: 100%;
`

export default ({ title, isClosed }) => (
  <div>
    <StyledSubtitle closed={isClosed}>
      {isClosed ? 'Finalizó el periodo para aportes' : 'Resumen de la propuesta'}
    </StyledSubtitle>
    <ProjectTitle>{ title }</ProjectTitle>
  </div>
)
