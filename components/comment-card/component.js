import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCommentCard = styled.div`
  width: 300px;
  border-radius: 3px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  border: solid 1px #dae1e7;
  margin-bottom: 20px;
  > h2 {
    box-sizing: border-box;
      width: 100%;
      display: block;
      height: 40px;
      padding: 12px 18px;
      background-color: #5c97bc;
      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
      margin: 0;
  }
  > p {
    box-sizing: border-box;
      border: none;
      width: 100%;
      padding: 12px 18px;
      font-family: 'Roboto', sans-serif;
  }
`

const commentCard = ({ comment }) => (
  <StyledCommentCard>
    <h2>Comentario</h2>
    <p>{comment.content}</p>
  </StyledCommentCard>
)

commentCard.propTypes = {
  comment: PropTypes.object.isRequired
}

export default commentCard
