import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledProjectLimitDate = styled.div`
  display: flex;
  flex-flow: column wrap;
`
const Span = styled.span`
  color:#ef885d;
  font-size:1.6rem;
  font-family:var(--bold);
`
const StyledDate = styled.p`
  font-size:1.4rem;
  color:#203340;
  margin-top: 0.4rem;
`

const ProjectLimitDate = ({ limitDate }) => (
  <StyledProjectLimitDate>
    <Span>Comentarios habilitados hasta</Span>
    <StyledDate>{limitDate}</StyledDate>
  </StyledProjectLimitDate>
)

ProjectLimitDate.propTypes = {
  limitDate: PropTypes.string.isRequired
}

export default ProjectLimitDate
