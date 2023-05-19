import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'

const transition = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-1px); }
  60% { transform: translateY(-1px); }
`

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
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  position: fixed;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  z-index: 200;
  animation-name: ${transition};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  &::before {
    content: "";
    display: block;
    position: absolute;
    border-bottom: 5px solid;
    border-bottom-color: #5c97bc;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    top: -5px;
    left: 80%;
    width: 0;
    height: 0;
    margin-left: -5px;
  }
`

const StyledButton = styled.button`
  background: none;
  border: none;
  margin-top: 20px;
  font-size: 1.2rem;
  cursor: pointer;
`

class Tooltip extends Component {
  state = {
    showTooltip: true
  }

  handleClickOutside = (evt) => {
    this.setState({
      showTooltip: false
    })
  }

  hideTooltip = () => {
    localStorage.setItem(this.props.localStorageHideKey, true)
    this.setState({
      showTooltip: false
    })
  }

  render () {
    const { children } = this.props
    const { showTooltip } = this.state
    if (!showTooltip) return null
    return (
      <StyledTooltip {...this.props} >
        { children }
        <StyledButton onClick={this.hideTooltip}>
          No mostrar más estos mensajes
        </StyledButton>
      </StyledTooltip>
    )
  }
}

export default onClickOutside(Tooltip)
