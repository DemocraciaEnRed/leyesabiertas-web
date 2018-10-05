import React from 'react'
import styled, { css } from 'styled-components'
import { ArticlesContext } from '../../containers/articles-container/component'

const StyledCommentSpan = styled.span`
  background-color: white;
  cursor: pointer;
  ${(props) => props.withComments && css`
    background-color: rgba(92, 151, 188, .4);
  `}
`

const CommentMark = (props) => (
  <ArticlesContext.Consumer>
    {({ withComments }) => (
      <StyledCommentSpan
        data-id={props.id}
        onMouseEnter={props.onMouseEnter(props.id)}
        onMouseLeave={props.onMouseLeave(props.id)}
        onClick={withComments ? props.onClick(props.id) : undefined}
        withComments={withComments}>
        {props.children}
      </StyledCommentSpan>
    )}
  </ArticlesContext.Consumer>
)

export default CommentMark
