import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledBarSubtitle = styled.div`
  height:2.9rem;
  max-width:25rem;
  margin-top: 0.8rem;
`
const Span = styled.span`
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.13rem;
  color: #ef885d;
  margin-bottom: 0.5rem;
`
const ItemStyle = styled.p`
  font-size: 1.6rem;
  line-height: 1.38;
  color: #4a4a4a; 
  margin:0;
`
const BarActivitySubtitle = ({ number, children }) => (
  <StyledBarSubtitle>
    <Span>{number}</Span>
    <ItemStyle>
      {children}
    </ItemStyle>
  </StyledBarSubtitle>
)

BarActivitySubtitle.propTypes = {
  number: PropTypes.number.isRequired,
  children: PropTypes.node
}

export default BarActivitySubtitle
