import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledTooltip = styled.div`
  width: 37.6rem;
  padding: 2rem;
  border-radius: 3px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
  background-color: #5c97bc;
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: var(--white);
  display: flex;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    border-bottom: 5px solid;
    border-bottom-color: #5c97bc;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    top: -5px;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -5px;
  }
`

class Tooltip extends Component {
  render () {
    return (
      <StyledTooltip>
        Para agregar aportes debe estár registrado. 
        Ingrese a la sección y complete el formulario
      </StyledTooltip>
    )
  }
}

export default Tooltip
