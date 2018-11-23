import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { checkCircle } from 'react-icons-kit/fa/checkCircle'

const Wrapper = styled.div`
display:flex;
align-items:flex-start;
text-align:left;
margin-bottom:2rem;
min-width:200px;
`
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius:50%;
  background-image: url('${(props) => props.avatarImg ? props.avatarImg : '/static/assets/userdefault.png'}');
  background-size: cover;
  background-position: center;
  cursor: pointer;
`
const Name = styled.div`
color: #2d4b5e;
font-size: 1.4rem;
font-family:var(--bold);
cursor: pointer;
`
const Party = styled.div`
font-size:1.2rem;
color: #5c97bc;
text-transform:uppercase;
display:flex;
margin-top:.7rem;
align-items:center;
`

const TextWrapper = styled.div`
height:35px;
margin-top:3px;
padding-left:10px;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const IconWrapper = styled.div`
  padding-right:.5rem;`

 
const UserAvatar = ({ authorId, avatarImg, name, party, badge }) => (
  <Wrapper>
    <Link href={{ pathname: '/userprofile', query: { id: authorId } }}>
      <Avatar avatarImg={avatarImg} />
    </Link>
    <TextWrapper>
      <Link href={{ pathname: '/userprofile', query: { id: authorId } }}>
        <Name>{name}</Name>
      </Link>
      <Party>
        { badge && <IconWrapper><Icon icon={checkCircle} /></IconWrapper>}
        <p>{party}</p>
      </Party>
    </TextWrapper>
  </Wrapper>
)

UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatarImg: PropTypes.string,
  party: PropTypes.string,
  authorId: PropTypes.string,
  badge: PropTypes.string
}

export default UserAvatar
