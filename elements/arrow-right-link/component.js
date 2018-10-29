import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'
import ArrowRight from '../../elements/arrow-right/component'

const StyledArrowLink = styled.div`
  width: 40rem;
  height: 3.5rem;
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
  <Link href={'/'}>
    <StyledArrowLink>
      <StyledP>Conocé más</StyledP>
      <ArrowRight />
    </StyledArrowLink>

  </Link>

)

export default ArrowRightlink
