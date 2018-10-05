import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ArrowRight from '../../elements/arrow-right/component'

const StyledButton = styled.button`
  width: 270px;
  height: 50px;
  background-color: #5c97bc;
  padding-left:2rem;
  font-size: 1.4rem;
  color: #fff;
  cursor: pointer;
  font-family: var(--bold);
  align-self:auto;
  margin:4rem auto;
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  align-items:center;
  justify-content:space-around;

  
`

const styledButton = (props) => (
  <StyledButton>Ver artículos de la propuesta<ArrowRight /></StyledButton>
)

styledButton.propTypes = {
  primary: PropTypes.bool,
  withBorder: PropTypes.bool,
  center: PropTypes.bool
}

export default styledButton
