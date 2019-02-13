import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 1.5rem 0 0rem !important;
`

const StyledClosingDate = styled.p`
  font-size:1.4rem;
  color:#203340;
  margin-top: 0.4rem;
  margin-bottom: 1rem;
  height:35px;
`

const formatDate = (createdAt) => {
  return (createdAt.substring(0, 10).split('-').reverse().join('/'))
}

const ClosingDate = ({ date }) => (
  <StyledDiv>
    <StyledClosingDate>Fecha de cierre: {formatDate(date)}</StyledClosingDate>
  </StyledDiv>
)

ClosingDate.propTypes = {
  date: PropTypes.string.isRequired
}

export default ClosingDate
