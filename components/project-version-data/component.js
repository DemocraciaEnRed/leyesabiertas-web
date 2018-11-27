import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProjectVersion from '../../elements/project-version/component'
import ProjectCreationDate from '../../elements/project-creation-date/component'

const StyledProjectVersionData = styled.div`
  display: flex;
  flex-direction:column;
  width:250px;
  height:50px;
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
