import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Wrapper = styled.div`
display: flex;
font-size: 18px;
padding: 0 35px 0 20px;
margin-right: 20px;
border-right: 1px solid #CACACA;
align-content: space-between;
justify-content: space-around;
flex-direction: column;
@media (max-width:700px){
  display: none;
}
`

const StyledNumber = styled.p`
font-family:var(--light);
font-weight:300;
font-size: 18px;
text-align: center;
color: #000;
`

const StyledText = styled(StyledNumber)`
  align-items: center;
  margin: 0 12px
  color:#333
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

const StyledCommentsCounter = styled.div`
  // padding: 0 2rem;
  padding-bottom: 3px;
  display: flex;
  align-items: flex-start;
`
const StyledApoyoCounter = styled(StyledCommentsCounter)``

const ArticlesCommentsCounter = ({ commentsCount, apoyosCount, project }) => (
  <Wrapper>
    <StyledCommentsCounter>
      <StyledNumber>{commentsCount}</StyledNumber>
      <StyledText>Aportes</StyledText>
      <CommentaryIcon icon='pencil.svg' />
    </StyledCommentsCounter>
    <StyledApoyoCounter>
      <StyledNumber>{apoyosCount}</StyledNumber>
      <StyledText>Apoyos</StyledText>
      <CommentaryIcon icon='hand-holding-heart-solid.svg' />
    </StyledApoyoCounter>
  </Wrapper>
)

ArticlesCommentsCounter.propTypes = {
  commentsCount: PropTypes.number.isRequired,
  apoyosCount: PropTypes.number
}

export default ArticlesCommentsCounter
