import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types' 

const StyledCommentFormFeedback = styled.div`
  width: 100%;
  height: 57px;
  background-color: #dae1e7;
  font-size: 1.4rem;
  line-height: 22px;
  color: #181818;
  border-style: none;
  cursor: pointer;
  padding: 0 2rem;
  font-family: var(--bold);
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    border: none;
    background: #dae1e7;
    font-size: 2rem;
    cursor: pointer;
  }
`

const CommentFormFeedback = ({ closeMessage }) => (
  <StyledCommentFormFeedback>
    Este mensaje no pudo ser enviado correctamente. Vuelva a intentarlo en unos minutos.
    <button onClick={closeMessage}>
      &times;
    </button>
  </StyledCommentFormFeedback>
)

CommentFormFeedback.propTypes = {
  closeMessage: PropTypes.func.isRequired
}

export default CommentFormFeedback
