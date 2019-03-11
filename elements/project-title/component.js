import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProjectTitle = styled.h1`
  font-size: 6rem;
  font-family: var(--bold);
  line-height: 1.08;
  color: #203340;
  align-self: flex-end;
  @media(max-width:700px){
    align-self: flex-start;
  }
  padding-top:4rem;
`
ProjectTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default ProjectTitle
