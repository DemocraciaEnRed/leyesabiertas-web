import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Span = styled.span`
  color:#4a5d68;
  font-size:1.6rem;
  font-family:var(--bold);
`
const StyledDate = styled.p`
  font-size:1.4rem;
  color:#203340;
  margin-top: 0.4rem;
`

const formatDate = (createdAt) => {
  return (createdAt.substring(0, 10).split('-').reverse().join('/'))
}

const ProjectLimitDate = ({ limitDate }) => (
  <div>
    <Span>Aportes hasta</Span>
    <StyledDate>{formatDate(limitDate)}</StyledDate>
  </div>
)

ProjectLimitDate.propTypes = {
  limitDate: PropTypes.string.isRequired
}

export default ProjectLimitDate
