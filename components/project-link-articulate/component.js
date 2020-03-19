import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icon from 'react-icons-kit'
import {arrowRight} from 'react-icons-kit/fa/arrowRight'
import ArrowRight from '../../elements/arrow-right/component'
const StyledButton = styled.button`
  width: 100%;
  height: auto;
  background-color: #5c97bc;
  padding:15px 10px;
  padding-right: 40px;
  font-size: 2rem;
  color: #fff;
  min-height: 50px;
  cursor: pointer;
  font-family: var(--bold);
  // align-self: auto;
  // display:flex;
  // flex-direction:row;
  // flex-wrap:nowrap;
  // align-items:center;
  // justify-content:space-around;
  text-align: left;
  display: block
  border: none;
  margin-bottom: 15px;
  position:relative;
  @media(max-width:700px){
    // width:60%;
    // align-self:center;
  }
`

const TheArrow = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;

`

const styledButton = (props) => (
  <Link href={`/articulado?id=${props.id}`}>
    <StyledButton>
      <TheArrow>
        <Icon icon={arrowRight} size={30} />
      </TheArrow>
      { props.closed ? 'Conozca los artículos de la propuesta' : 'Contribuya dejando sus aportes en los artículos de la propuesta'}
    </StyledButton>
  </Link>
)

styledButton.propTypes = {
  id: PropTypes.string.isRequired,
  closed: PropTypes.bool
}

export default styledButton
