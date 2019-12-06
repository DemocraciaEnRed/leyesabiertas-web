import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledBarSubtitle = styled.div`
  height:2.9rem;
  max-width:25rem;
`
const Span = styled.span`
  font-size: 2rem;
  font-family: var(--black);  
  line-height: 1.13rem;
  color: #ef885d;
  margin:0;
`
const ItemStyle = styled.p`
  font-size: 1.6rem;
  font-family: var(--medium);
  color: #2d4b5e; 
  margin-bottom: 0.5rem;
`
const BarActivitySubtitle = ({ number, children }) => (
  <StyledBarSubtitle>
    <ItemStyle>
      {children}
    </ItemStyle>
    <Span>➔ {number}</Span>
  </StyledBarSubtitle>
)

BarActivitySubtitle.propTypes = {
  number: PropTypes.number.isRequired,
  children: PropTypes.node
}

export default BarActivitySubtitle
