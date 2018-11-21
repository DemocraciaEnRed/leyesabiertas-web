import React from 'react'
import styled from 'styled-components'
import ProjectTitle from '../../elements/project-title/component'

const StyledSubtitle = styled.h2`
  font-size: 2.4rem;
  font-family: var(--bold);
  line-height: 1.42rem;
  color: #5c97bc;
  margin-top: 4.7rem;
`

export default ({ title }) => (
  <div>
    <StyledSubtitle>Fundamentación</StyledSubtitle>
    <ProjectTitle>{ title }</ProjectTitle>
  </div>
)
