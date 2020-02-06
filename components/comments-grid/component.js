import React, { Component } from 'react'
import styled from 'styled-components'
import CommentCard from '../comment-card/component'
import Icon from 'react-icons-kit'
import {timesCircle} from 'react-icons-kit/fa/timesCircle'
const StyledCommentsGrid = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  // width: 312px;
  border: 1px solid #dae1e7;
  max-height: 100vh;
  overflow-y: scroll;
  z-index: 1;
  background-color: #FFF;
  min-width: 300px;
  width: 33%;
  ${(props) => !props.show && 'display: none;'}
`
const CloseGrid = styled.div`
  padding: 7px;
  font-size: 12px;
  color: #2d4b5e;
  border-bottom: 1px solid #dae1e7;
  text-align: right
  &:hover{
    cursor: pointer;
    color: #5c97bc;
  }
  position: sticky;
  top: 0;
  background-color: #FFF;
`

const CommentsGrid = ({ activeComments = [], top, comments, removeComment, attachReply, updateComments, closeCommentsGrid }) => {
  const displayComments = comments
    .filter((comment) => activeComments.includes(comment._id))
    .map((comment) =>
      <CommentCard
        removeComment={removeComment}
        key={comment._id}
        comment={comment}
        attachReply={attachReply}
        updateComments={updateComments} />)
  // <StyledCommentsGrid show={!!top} style={{ top }}>

  return (
    <StyledCommentsGrid show={!!top}> 
      <CloseGrid onClick={closeCommentsGrid}>
        Cerrar comentarios&nbsp;&nbsp;<Icon icon={timesCircle} size={12}/>
      </CloseGrid>
      { displayComments }
    </StyledCommentsGrid>
  )
}

export default CommentsGrid
