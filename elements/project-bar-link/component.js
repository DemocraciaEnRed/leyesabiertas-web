import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledProjectBarLink = styled.a`
  font-size: 1.2rem;
  line-height: 1.67;
  color: #4a5d68;
  text-transform: uppercase;
`

const ProjectBarLink = () => (
  <Link href='/'>
    <StyledProjectBarLink>
      Volver a Listado de Propuestas
    </StyledProjectBarLink>
  </Link>
)

export default ProjectBarLink
