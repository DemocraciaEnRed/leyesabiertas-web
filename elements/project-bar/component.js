import React from 'react'
import styled from 'styled-components'
import ProjectBarLink from '../../elements/project-bar-link/component'

const StyledProjectBar = styled.nav`
  height: 6.5rem;
  border-top: 1px solid #dae1e7;
  padding: 2.5rem 8.8rem;
`

const ProjectBar = () => (
  <StyledProjectBar>
    <ProjectBarLink />
  </StyledProjectBar>
)

export default ProjectBar
