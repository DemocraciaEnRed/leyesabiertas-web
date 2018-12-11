
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { CommentCounterContext } from './index'

const StyledCommentSpan = styled.span`
  background-color: white;
  background-color: rgba(92, 151, 188, .4);
  cursor:pointer;
`

class CommentSpanWrapper extends Component {

  componentWillUnmount () {
    this.props.removeId()
  }

  render () {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}

export default class CommentMark extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: null
    }
  }

  render () {
    const id = this.props.mark.toJSON().data['id']
    return (
      <CommentCounterContext.Consumer>
        {
          (value) =>
            <CommentSpanWrapper
              removeId={value.removeId(id)}>
              <StyledCommentSpan
                onMouseEnter={id && value.addId(id)}
                onMouseLeave={id && value.removeId(id)}>
                {this.props.children}
              </StyledCommentSpan>
            </CommentSpanWrapper>
        }
      </CommentCounterContext.Consumer>
    )
  }
}