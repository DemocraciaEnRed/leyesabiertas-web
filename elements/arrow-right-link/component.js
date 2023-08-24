import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Icon from 'react-icons-kit'
import { arrowRight } from 'react-icons-kit/fa/arrowRight'
import PropTypes from 'prop-types'
import ArrowRight from '../../elements/arrow-right/component'
const StyledArrowLink = styled.div`
  width: 100%;
  height: 30px;
  display:flex;
  align-items: center;
  @media(max-width:700px){
    justify-content: center;
  }

`
const StyledP = styled.p`
  text-align:center;
  padding: 8px 16px;
  color: #4C7394;
  font-size:1.6rem;
  // width:13rem;
  cursor:pointer;
  border-radius:5px;
  border:1px solid #4C7394
  &:hover{
    background-color: #5c97bc;
    color: var(--white);
    border: none;
  }
`
const ArrowRightlink = () => (
  <Link href={'/info?section=acerca-de'}>
    <StyledArrowLink>
      <StyledP>Conocé más</StyledP>
    </StyledArrowLink>

  </Link>

)

export default ArrowRightlink
