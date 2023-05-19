import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProjectTitle = styled.h1`
  font-size: 4.2rem;
  font-family: var(--regular);
  line-height: 4.5rem;
  color: #203340;
  letter-spacing: -2px;
  width: 100%;
  @media(max-width:700px){
    font-size: 3rem;
    line-height: 3.5rem;
  }
  margin-top: 15px;
  margin-bottom: 45px;
  // border-bottom: 1px solid #CACACA;
`
ProjectTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default ProjectTitle
