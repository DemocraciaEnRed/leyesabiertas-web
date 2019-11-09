import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Icon from 'react-icons-kit'
import { arrowRight } from 'react-icons-kit/fa/arrowRight'
import PropTypes from 'prop-types'
import ArrowRight from '../../elements/arrow-right/component'
const StyledArrowLink = styled.div`
  width: 150px;
  height: 30px;
  display:flex;
  align-items: center;

`
const StyledP = styled.p`
  color:#fff;
  font-size:1.6rem;
  width:11rem;
  cursor:pointer;
`
const ArrowRightlink = () => (
  <Link href={'/info?section=acerca-de'}>
    <StyledArrowLink>
      <StyledP>Conozca más</StyledP>
      <Icon icon={arrowRight} size={20} style={{color: '#FFF'}} />
    </StyledArrowLink>

  </Link>

)

export default ArrowRightlink
