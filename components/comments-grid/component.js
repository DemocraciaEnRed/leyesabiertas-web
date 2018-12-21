import React, { Component } from 'react'
import styled from 'styled-components'
import CommentCard from '../comment-card/component'

const StyledCommentsGrid = styled.div`
  position: absolute;
  top: 200px;
  right: -4%;
  display: flex;
  flex-direction: column;
  width: 300px;
  z-index: 1;
`

const CommentsGrid = ({ activeComments = [], top, comments, removeComment, attachReply, updateComments }) => {
  const displayComments = comments
    .filter((comment) => activeComments.includes(comment._id))
    .map((comment) =>
      <CommentCard
        removeComment={removeComment}
        key={comment._id}
        comment={comment}
        attachReply={attachReply}
        updateComments={updateComments} />)

  return (
    <StyledCommentsGrid style={{ top }}>
      { displayComments }
    </StyledCommentsGrid>
  )
}

export default CommentsGrid
