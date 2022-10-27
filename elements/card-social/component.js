import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import WithUserContext from '../../components/with-user-context/component'

const Wrapper = styled.div`
font-size:1.4rem;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
box-sizing:border-box;
color: #2d4b5e;
font-size:1.6em;
box-sizing:border-box;
margin:24px 5px;
padding:0px 15px 0px 15px;
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
  color:#4C4C4E;
`
const Contributions = styled.span`
  font-family: var(--bold);
  margin: 0 8px
  color:#4C4C4E;
`
const Support = styled(Contributions)``

const Social = ({ commentaries, apoyosCount }) => (
  <Wrapper>
    <CommentaryItems>
      <div>
        <Span> {commentaries}</Span> <Contributions>{commentaries === 1 ? ' Aporte' : ' Aportes'}</Contributions>
        <CommentaryIcon icon='pencil.svg' />
      </div>
      <div>
        <Span> {apoyosCount}</Span> <Support>{apoyosCount === 1 ? ' Apoyo' : ' Apoyos'}</Support>
        <CommentaryIcon icon='hand-holding-heart-solid.svg' />
      </div>
    </CommentaryItems>
  </Wrapper>
)

Social.propTypes = {
  commentaries: PropTypes.number,
  apoyosCount: PropTypes.number
}

export default Social
