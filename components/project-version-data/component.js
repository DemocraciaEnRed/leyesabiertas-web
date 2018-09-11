import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProjectVersion from '../../elements/project-version/component'
import ProjectCreationDate from '../../elements/project-creation-date/component'

const StyledProjectVersionData = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-left: auto;
`

const ProjectVersionData = ({ version, createdAt }) => (
  <StyledProjectVersionData>
    <ProjectVersion version={version} />
    <ProjectCreationDate createdAt={createdAt} />
  </StyledProjectVersionData>
)

ProjectVersionData.propTypes = {
  version: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default ProjectVersionData

