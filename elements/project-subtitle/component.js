import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

const SubtitleContainer = styled.p`
  font-size: 14px;
  font-family: var(--italic);
  color: #888;
  margin-bottom: 25px;
  @media(max-width:700px){
  font-size: 12px;

  }
`

const MoreLink = styled.span`
  // font-size: 1.2rem;
  color: #5c97bc;
  text-transform: uppercase;
  & > a {
  // font-family: var(--bold);
  }
}`

const HideInMobile = styled.span`
  display: none;
  font-family: var(--italic);

  @media(max-width:700px){
  display: inline-block;
  }
`

const formatDate = (createdAt) => {
  return (createdAt.substring(0, 10).split('-').reverse().join('/'))
}

const ProjectSubtitle = ({ project, version, createdAt, commentsCount}) => (
  <SubtitleContainer>
    Fecha de creación: {formatDate(createdAt)} - Versión { version }<HideInMobile>&nbsp;- Aportes hechos: {commentsCount}</HideInMobile>
    </SubtitleContainer>
)

ProjectSubtitle.propTypes = {
  project: PropTypes.string,
  version: PropTypes.number.isRequired,
  createdAt: PropTypes.string
}

export default ProjectSubtitle
