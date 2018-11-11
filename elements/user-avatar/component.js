import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
`
const TextWrapper = styled.div`
height:35px;
margin-top:3px;
padding-left:10px;
display:flex;
flex-direction:column;
justify-content:space-between;
`

const UserAvatar = ({ authorId, avatarImg, name, party }) => (
  <Wrapper>
    <Link href={{ pathname: '/userprofile', query: { id: authorId } }}>
      <Avatar avatarImg={avatarImg} />
    </Link>
    <TextWrapper>
      <Link href={{ pathname: '/userprofile', query: { id: authorId } }}>
        <Name>{name}</Name>
      </Link>
      <Party>{party}</Party>
    </TextWrapper>
  </Wrapper>
)

UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatarImg: PropTypes.string,
  party: PropTypes.string
}

export default UserAvatar
