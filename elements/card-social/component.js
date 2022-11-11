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
margin:26px 5px;
padding:0px 15px 0px 15px;
box-sizing:border-box;
`
const CommentaryItems = styled.div`
text-transform:uppercase;
display: flex;
width: 100%;
justify-content: space-around;
`

const CommentaryIcon = styled.div`
  width: 18px;
  height: 17px;
  background-image: url(${(props) => `/static/assets/${props.icon}`});
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  top: 2px;
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
const ContribDiv = styled.div`
> * {
  ${(props) => props.closed && `
  
  filter: brightness(2.5);
  `}
  

}
`

const Span = styled.span`
  font-family: var(--ligth);
  color:#4C4C4E;
`
const Contributions = styled.span`
  font-family: var(--ligth);
  margin: 0 8px
  color:#4C4C4E;
`
const Support = styled(Contributions)``

const Social = ({ commentaries, apoyosCount, userIsApoyado, closed }) => (
  <Wrapper>
    <CommentaryItems >
      <ContribDiv closed={closed}>
        <Span> {commentaries}</Span> <Contributions>{commentaries === 1 ? ' Aporte' : ' Aportes'}</Contributions>
        <CommentaryIcon icon='pencil.svg' />
      </ContribDiv>
      <div>
        <Span> {apoyosCount}</Span> <span>
          <Support>{userIsApoyado ? 'apoyando' : (apoyosCount === 1 ? ' Apoyo' : ' Apoyos' )  }</Support>
          <CommentaryIcon icon={userIsApoyado ? 'check-in-a-circle-.svg': 'hand-holding-heart-solid.svg' } />
        </span>
      </div>
    </CommentaryItems>
  </Wrapper>
)

Social.propTypes = {
  commentaries: PropTypes.number,
  apoyosCount: PropTypes.number,
  userIsApoyado: PropTypes.bool,
  closed: PropTypes.bool
}

export default Social
