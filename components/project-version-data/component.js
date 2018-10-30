import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProjectVersion from '../../elements/project-version/component'
import ProjectCreationDate from '../../elements/project-creation-date/component'

const StyledProjectVersionData = styled.div`
  display: flex;
  flex-flow: column wrap;
  border-left:1px solid #e9e9e9;
  border-right:1px solid #e9e9e9;
  width:241px;
  padding-left:3.5rem;
  padding-right:auto;
`
const formatDate = (createdAt) => {
  return (createdAt.substring(0, 10).split('-').reverse().join('/'))
}

const ProjectVersionData = ({ version, createdAt }) => (
  <StyledProjectVersionData>
    <ProjectVersion version={version} />
    <ProjectCreationDate createdAt={formatDate(createdAt)} />
  </StyledProjectVersionData>
)

ProjectVersionData.propTypes = {
  version: PropTypes.number.isRequired,
  createdAt: PropTypes.string
}

export default ProjectVersionData
