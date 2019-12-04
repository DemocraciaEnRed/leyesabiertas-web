import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icon from 'react-icons-kit'
import {timesCircle} from 'react-icons-kit/fa/timesCircle'
import {checkCircle} from 'react-icons-kit/fa/checkCircle'
import {lowVision} from 'react-icons-kit/fa/lowVision'
import {eye} from 'react-icons-kit/fa/eye'

const ClosedProposalWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #cacaca;
  padding: 7px 10px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
  font-size:14px;
`

const ItemTitle = styled.div`
  font-size:16px;
  font-family: var(--bold);
  color:#203340;
  margin-top: 8px;
`
const ProjectsTableRow = styled.tr`
 &:last-child{
   td {
     border-bottom: 0;
   }
 }
`
const ProjectsTableCell = styled.td`
  padding: 5px 2px;
  font-size: 13px;
  text-align: ${(props) => props.centered ? 'center' : 'left'};
  border-bottom: 1px solid #cacaca;
  & > a{
    color: #5c97bc
  }
  & > a:hover{
    color: red;
  }
`

const ProjectTitle = styled.p`
  font-size: 16px;
  // font-weight: 500;
  & > a{
    color: #5c97bc
  }
  & > a:hover{
    color: #363760;
  }
`
const WithIcon = styled.p`
  display: flex
  color: ${(props) => props.color};
`

const formatDate = (createdAt) => {
  return (createdAt.substring(0, 10).split('-').reverse().join('/'))
}

export default ({ project }) => (
  <ProjectsTableRow>
    <ProjectsTableCell>
      <ProjectTitle>
        <Link href={{ pathname: '/propuesta', query: { id: project._id } }}>{project.currentVersion.content.title}</Link>
      </ProjectTitle>
    </ProjectsTableCell>
    <ProjectsTableCell centered>
      <WithIcon color={project.closed ? 'inherit' : 'green'}>{project.closed ? <Icon icon={timesCircle} size={15} /> : <Icon icon={checkCircle} size={15} /> }&nbsp;&nbsp;{project.closed ? 'Cerrado' : 'Abierto'}</WithIcon>
      <WithIcon color={project.published ? 'inherit' : 'purple'}>{project.published ? <Icon icon={eye} size={15} /> : <Icon icon={lowVision} size={15} /> }&nbsp;&nbsp;{project.published ? 'Publico' : 'Oculto'}</WithIcon>
    </ProjectsTableCell>
    <ProjectsTableCell centered>
      <p>
        {project.commentsCount} Aport{project.commentsCount > 1 ? 'es' : 'e'}
      </p>
      <p>{project.currentVersion.version} {project.currentVersion.version > 1 ? 'Versiones' : 'Versión'}</p>
    </ProjectsTableCell>
    <ProjectsTableCell centered>
      {formatDate(project.createdAt)}
    </ProjectsTableCell>
    <ProjectsTableCell centered>
      {formatDate(project.currentVersion.content.closingDate)}
    </ProjectsTableCell>
    <ProjectsTableCell centered>
      <Link href={{ pathname: '/propuesta', query: { id: project._id } }}>Ir al proyecto ➔</Link>
    </ProjectsTableCell>
  </ProjectsTableRow>
)
