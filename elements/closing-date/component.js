import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: block;
  // align-items: flex-end;
  padding-right: 15px;
  border-right: 1px solid #CACACA;
  margin-right: 15px;
  // padding: 0 1.5rem 0 0rem !important;
  @media(max-width:700px){
    display: none;
  }
`

const StyledClosingDateTitle = styled.p`
  font-size:14px;
  font-family: var(--bold);
  color:#203340;
  margin: 4px 0 6px;
  // margin-top: 0.4rem;
  // margin-bottom: 1rem;
  // height:35px;
`
const StyledClosingDate = styled.p`
  font-size:12px;
  // color:#203340;
  // margin-top: 0.4rem;
  // margin-bottom: 1rem;
  // height:35px;
`

const formatDate = (createdAt) => {
  return (createdAt.substring(0, 10).split('-').reverse().join('/'))
}

const ClosingDate = ({ date }) => (
  <StyledDiv>
    <StyledClosingDateTitle>Fecha de cierre</StyledClosingDateTitle>
    <StyledClosingDate>{formatDate(date)}</StyledClosingDate>
  </StyledDiv>
)

ClosingDate.propTypes = {
  date: PropTypes.string.isRequired
}

export default ClosingDate
