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
const BarActivitySubtitle = ({ number, itemStyle }) => (
  <StyledBarSubtitle>
    <Span>{number}</Span>
    <ItemStyle>
      {itemStyle === 'projects' ? 'con más actividad'
        : (itemStyle === 'commentaries'
          ? (number === 1 ? 'nuevo comentario' : 'nuevos comentarios')
          : (number === 1 ? 'persona activa' : 'personas activas'))
      }
    </ItemStyle>
  </StyledBarSubtitle>
)

BarActivitySubtitle.propTypes = {
  number: PropTypes.number.isRequired,
  itemStyle: PropTypes.string.isRequired
}

export default BarActivitySubtitle
