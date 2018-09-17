import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProjectTitle = styled.h1`
  max-width:80%;
  font-size: 6rem;
  font-family: var(--bold);
  line-height: 1.08;
  color: #203340;
  align-self: flex-end;
  padding-top:2rem;
`
ProjectTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default ProjectTitle
