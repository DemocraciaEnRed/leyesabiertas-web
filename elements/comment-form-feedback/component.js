import styled from 'styled-components'

const CommentFormFeedback = styled.div`
  min-width: 125px;
  height: 39px;
  background-color: ${(props) => props.error ? '#ea5f5f' : '#5c97bc'}
  font-size: 1.4rem;
  color: var(--white);
  border-style: none;
  cursor: pointer;
  padding: 0 2rem;
  font-family: var(--bold);
  display: flex;
  justify-content: center;
  align-items: center;
`

export default CommentFormFeedback
