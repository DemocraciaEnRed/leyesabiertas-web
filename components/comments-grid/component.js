import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CommentCard from '../../elements/comment-card'

const StyledCommentsGrid = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  width: 300px;
`

const CommentsGrid = ({ comments }) => (
  <StyledCommentsGrid>
    {comments.map((comment) => (
      <CommentCard key={comment._id} comment={comment} />
    ))}
  </StyledCommentsGrid>
)

CommentsGrid.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentsGrid
