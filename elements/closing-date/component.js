import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProgressBar from '../progress-bar/component'

const StyledDiv = styled.div`
  display: block;
  // align-items: flex-end;
  width:22%;
  padding-right: 15px;
  border-right: 1px solid #CACACA;
  margin-right: 15px;
  text-align: center;
  // padding: 0 1.5rem 0 0rem !important;
  @media(max-width:700px){
    display: none;
  }
`

const StyledClosingDateTitle = styled.p`
font-family: var(--light);
font-size:14px;
color: #7e7e7e;
letter-spacing: .5px;
margin-bottom:8px
`
const StyledCreationDate = styled(StyledClosingDateTitle)`
`

const formatDate = (createdAt) => {
  return (createdAt.substring(0, 10).split('-').reverse().join('/'))
}

const ClosingDate = ({ closingDate, creationDate, closed }) => (
  <StyledDiv>
    <div>
      <StyledClosingDateTitle>Fecha de cierre: {formatDate(closingDate)}</StyledClosingDateTitle>
      <StyledCreationDate>Fecha de creación: {formatDate(creationDate)}</StyledCreationDate>
      <ProgressBar closingDate={closingDate} creationDate={creationDate} closed={closed} />

    </div>
  </StyledDiv>
)

ClosingDate.propTypes = {
  closingDate: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  closed: PropTypes.bool
}

export default ClosingDate
