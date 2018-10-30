import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCreationDate = styled.span`
  font-size: 1.4rem;
  color: #203340;
  margin-top: 0.4rem;
`

const ProjectCreationDate = ({ createdAt }) => (
  <StyledCreationDate>
    Fecha creación  { createdAt }
  </StyledCreationDate>
)

ProjectCreationDate.propTypes = {
  createdAt: PropTypes.string.isRequired
}

export default ProjectCreationDate
