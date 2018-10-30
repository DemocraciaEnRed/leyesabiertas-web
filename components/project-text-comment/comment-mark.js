
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { CommentCounterContext } from './index'

const StyledCommentSpan = styled.span`
  background-color: white;
  background-color: rgba(92, 151, 188, .4);
  cursor:pointer;
`

export default class CommentMark extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: null
    }
  }

  render () {
    const id = this.props.mark.toJSON().data['data-id']
    return (
      <CommentCounterContext.Consumer>
        {
          (value) => 
            <StyledCommentSpan
              onMouseEnter={value.addId(id)}
              onMouseLeave={value.removeId(id)}>
              {this.props.children}
            </StyledCommentSpan>
        }
      </CommentCounterContext.Consumer>
    )
  }
}