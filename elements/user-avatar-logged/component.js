import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { checkCircle } from 'react-icons-kit/fa/checkCircle'
import getConfig from 'next/config'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const Wrapper = styled.div`
display:flex;
align-items:flex-start;
text-align:left;
width:296px;
margin-bottom:2rem;
`
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius:50%;
  background-image: url('${(props) => props.userId ? `${API_URL}/api/v1/users/${props.userId}/avatar` : '/static/assets/userdefault.png'}');
  background-size: cover;
  background-position: center;
`
const Name = styled.div`
  font-size: 1.4rem;
  font-family:var(--bold);
  color: #2c4c61;
`
const Subtitle = styled.div`
  font-size:1.2rem;
  color: #5c97bc;
  font-size: 12px;
  text-transform:uppercase;
  display:flex;
  margin-top:1rem;
  align-items:center;

`
const TextWrapper = styled.div`
height:35px;
padding-left:10px;
display:flex;
flex-direction:column;
justify-content:space-between;
`

const IconWrapper = styled.div`
  padding-right:.5rem;`

const UserAvatar = ({ userId, name, subtitle }) => (
  <Wrapper>
    <Avatar userId={userId} />
    <TextWrapper>
      <Name>{name} </Name>
      <Subtitle>
        { subtitle &&
          <IconWrapper><Icon icon={checkCircle} /></IconWrapper>
        }
        <p>{subtitle}</p>
      </Subtitle>

    </TextWrapper>
  </Wrapper>
)

UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default UserAvatar
