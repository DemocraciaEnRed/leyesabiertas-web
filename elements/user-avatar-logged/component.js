import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
display:flex;
align-items:flex-start;
text-align:left;
width:296px;
margin-bottom:2rem;
`
const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius:50%;
  background-image: url('${(props) => props.avatarImg}');
  background-size: cover;
  background-position: center;
`
const Name = styled.div`
  font-size: 1.4rem;
  font-family:var(--bold);
  color: #2c4c61;
`
const Charge = styled.div`
  font-size:1.2rem;
  color: #5c97bc;
  font-size: 12px;
  text-transform:uppercase;

`
const TextWrapper = styled.div`
height:35px;
padding-left:10px;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const UserAvatar = ({ avatarImg, name, charge }) => (
  <Wrapper>
    <Avatar avatarImg={avatarImg} />
    <TextWrapper>
      <Name>{name} </Name>
      <Charge></Charge>
    </TextWrapper>
  </Wrapper>
)

UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatarImg: PropTypes.string.isRequired,
  charge: PropTypes.string
}

export default UserAvatar
