import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { checkCircle } from 'react-icons-kit/fa/checkCircle'

const Wrapper = styled.div`
display:flex;
align-items:flex-start;
text-align:left;
margin-bottom:2rem;
`
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius:50%;
  background-image: url('${(props) => props.avatarImg ? props.avatarImg : '/static/assets/userdefault.png'}');
  background-size: cover;
  background-position: center;
`
const Name = styled.div`
color: #2d4b5e;
font-size: 1.4rem;
font-family:var(--bold);
`
const Party = styled.div`
font-size:1.2rem;
color: #5c97bc;
text-transform:uppercase;
display:flex;
margin-top:.7rem;

`
const TextWrapper = styled.div`
height:35px;
@media (max-width: 760px) {
    height:25px;
  }
margin-top:0px;
padding-left:10px;
display:flex;
flex-direction:column;
justify-content:space-between;
@media (max-width: 660px) {
    display:none;
  }
`
const Arrow = styled.i`
  margin:0px 0px 0px 15px;
  border: solid #4a5d68;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`
const IconWrapper = styled.div`
  padding-right:.5rem;`

const UserAvatar = ({ avatarImg, name, party, badge }) => (
  <Wrapper>
    <Avatar avatarImg={avatarImg} />
    <TextWrapper>
      <Name>{name} </Name>
      <Party>

        { badge &&
          <IconWrapper><Icon icon={checkCircle} /></IconWrapper>
        }
        <p>{party}</p>
      </Party>
    </TextWrapper>
    <Arrow />
  </Wrapper>
)

UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatarImg: PropTypes.string,
  party: PropTypes.string,
  badge: PropTypes.string
}

export default UserAvatar
