import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledProjectVersion = styled.span`
  font-size: 1.6rem;
  font-family: var(--bold);
  line-height: 1.25;
  color: #5c97bc;
`

const ProjectVersion = ({ version }) => (
  <StyledProjectVersion>Versión: { version }</StyledProjectVersion>
)

ProjectVersion.propTypes = {
  version: PropTypes.number.isRequired
}

export default ProjectVersion
