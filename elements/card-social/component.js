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
padding-bottom: 1rem;
text-transform:uppercase;
display: flex;
width: 100%;
justify-content: space-evenly;
`

const CommentaryIcon = styled.div`
  width: 18px;
  height: 17px;
  background-image: url(${(props) => `/static/assets/${props.icon}`});
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  top: 3px;
`

const LimitDate = styled.div`
  font-size: 11px;
  color: white;
  background-color: #ef885d;
  padding: 4px 15px;
  text-transform: uppercase;
  font-family: var(--medium);
  border-radius: 2px;
  margin: 0 auto;
`
const Span = styled.span`
  font-family: var(--bold);
  margin: 0 0.2rem 0 0.3rem;
`
const Social = ({ commentaries, closed, apoyosCount }) => (
  <Wrapper>
    <CommentaryItems>
      <div>
        <CommentaryIcon icon='comment-icon.svg' />
        <Span> {commentaries}</Span> {commentaries === 1 ? ' Aporte' : ' Aportes'}
      </div>
      <div>
        <CommentaryIcon icon='apoyar-icon-azul.svg' />
        <Span> {apoyosCount}</Span> {apoyosCount === 1 ? ' Apoyo' : ' Apoyos'}
      </div>
    </CommentaryItems>
    {closed &&
      <LimitDate>Finalizó el periodo para aportes</LimitDate>
    }
  </Wrapper>
)

Social.propTypes = {
  commentaries: PropTypes.number,
  closed: PropTypes.bool
}

export default Social
