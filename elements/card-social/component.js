import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
height:85px;
border-top: 1px solid #e9e9e9;
font-size:1.4rem;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
box-sizing:border-box;
color: #2d4b5e;
font-size:1.6em;
box-sizing:border-box;
margin:0px 20px 0px 20px;
box-sizing:border-box;
`
const CommentaryItems = styled.div`
padding-bottom:1.3rem;
text-transform:uppercase;
display: flex;
align-items: center;
`

const CommentaryIcon = styled.div`
  width: 18px;
  height: 17px;
  background-image: url(${'/static/assets/comment-icon.svg'});
  background-size: cover;
  background-repeat: no-repeat;
`

const LimitDate = styled.div`
font-size:1.2rem;
`
const Span = styled.span`
  font-family: var(--bold);
  margin: 0 0.5rem 0 1rem;
`
const Social = ({ commentaries, limitDate }) => (
  <Wrapper>
    <CommentaryItems>
      <CommentaryIcon />
      <Span> {commentaries}</Span> {commentaries === 1 ? ' Comentario' : ' Comentarios'}
    </CommentaryItems>
    {limitDate &&
      <LimitDate><span>Aportes habilitados hasta: </span>{limitDate}</LimitDate>
    }
  </Wrapper>
)

Social.propTypes = {
  commentaries: PropTypes.number.isRequired,
  limitDate: PropTypes.string
}

export default Social
