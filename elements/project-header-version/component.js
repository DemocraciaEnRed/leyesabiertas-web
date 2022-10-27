import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding:20px 30px;
background-color: #EFEFEF;
  @media(max-width:700px){
    display: none;
  }
`

const ProjectHeaderVersionTitle = styled.p`
  font-size:14px;
  font-family: var(--bold);
  color:#203340;
  margin: 4px 0 6px;
  // margin-top: 0.4rem;
  // margin-bottom: 1rem;
  // height:35px;
`
const ProjectHeaderVersionLink = styled.p`
  font-size:12px;
  color: #4C4C4E;
  text-decoration:underline
  // height:35px;
`

const ProjectHeaderVersion = ({ project, version }) => (
  <StyledDiv>
    <ProjectHeaderVersionTitle>Versión{version}</ProjectHeaderVersionTitle>
    <ProjectHeaderVersionLink>
      <Link href={{ pathname: '/versiones', query: { id: project } }}>+Versiones</Link>
    </ProjectHeaderVersionLink>
  </StyledDiv>
)

ProjectHeaderVersion.propTypes = {
  project: PropTypes.string,
  version: PropTypes.number.isRequired
}

export default ProjectHeaderVersion
