import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledBarSubtitle = styled.div`
  height:2.9rem;
  max-width:25rem;
  display:flex;
  flex-direction:row;
  align-items:center;
`
const Span = styled.span`
  font-size:2.5rem;
  padding-right:0.5rem;
  color: #ef885d;
  line-height:3.4rem;
  font-family:var(--bold);
  margin:0;


`
const ItemStyle = styled.p`
  font-size: 1.6rem;
  line-height: 2.5rem;
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
