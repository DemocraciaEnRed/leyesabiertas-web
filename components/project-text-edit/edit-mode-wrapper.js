import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Toolbar from './toolbar'

const StyledButton = styled.button`
  background-color: #5c97bc;
  border-radius: 21px;
  width: 180px;
  height: 42px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
`

export default class AddCommentWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleClick = () => {
    console.log('guardar', this.props.selectedCommentsIds)
  }

  render () {
    return (
      <Fragment>
        <Toolbar editor={this.props.editor} />
        {this.props.children}
        <StyledButton onClick={this.handleClick}>
          Guardar cambios
        </StyledButton>
      </Fragment>
    )
  }
}
