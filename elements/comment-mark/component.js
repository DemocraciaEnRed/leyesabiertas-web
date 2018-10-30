import React from 'react'	
import styled, { css } from 'styled-components'	
import { ArticlesContext } from '../../containers/user-project-container/component'	
 const StyledCommentSpan = styled.span`	
  background-color: white;	
  ${(props) => props.withComments && css`	
    background-color: rgba(92, 151, 188, .4);	
    cursor:pointer;	
  `}	
`	
 const CommentMark = (props) => (	
  <ArticlesContext.Consumer>	
    {({ withComments }) => (	
      <StyledCommentSpan	
        data-id={props.id}	
        onMouseEnter={withComments ? props.onMouseEnter(props.id) : undefined}	
        onMouseLeave={withComments ? props.onMouseLeave(props.id) : undefined}	
        withComments={withComments}>	
        {props.children}	
      </StyledCommentSpan>	
    )}	
  </ArticlesContext.Consumer>	
)	
 export default CommentMark