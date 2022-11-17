import React from 'react'
import Link from 'next/link'
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
  padding-right: 15px;
  border-right: ${(props) => props.projectView ? '1px solid #CACACA' : '0'};
  margin-right: ${(props) => props.projectView ? '15px' : '0'};
  min-width:150px;
  @media (max-width:700px){
    border-right: 0px;
    margin-right: 0px; 
    flex:${(props) => props.projectView && '1'};
  }
`
const Avatar = styled.div`
  width: ${(props) => props.projectView ? `50px;` : '45px'};
  min-width: ${(props) => props.projectView ? `50px;` : '45px'};
  height: ${(props) => props.projectView ? `50px;` : '45px'};
  border-radius:50%;
  background-image: url('${(props) => props.userId ? `${API_URL}/api/v1/users/${props.userId}/avatar` : '/static/assets/userdefault.png'}');
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: 1px solid #CACACA;
  @media (max-width:700px){
    margin-bottom: -20px;
  }
  margin-bottom:-20px;
`
const Name = styled.div`
color: #6CAAE4;
font-size: 20px;
font-family:var(--bold);
cursor: pointer;
min-width:100px;
`
const Party = styled.div`
font-size: 12px;
color: #7e7e7e;
text-transform:uppercase;
display:flex;
margin-top:.9rem;
@media (max-width:700px){
  font-size:10px
}
align-items:center;
`

const TextWrapper = styled.div`
// margin-top:3px;
padding-left:20px;
display:flex;
flex:1;
flex-direction:column;
`
const IconWrapper = styled.div`
  padding-right:.5rem;`

const UserAvatar = ({ projectView, userId, name, party, badge }) => (
  <Wrapper projectView={projectView}>
    <Link href={{ pathname: '/userprofile', query: { id: userId } }}>
      <Avatar projectView={projectView} userId={userId} />
    </Link>
    <TextWrapper>
      <Link href={{ pathname: '/userprofile', query: { id: userId } }}>
        <Name>{name}</Name>
      </Link>
      {/* {window.location.pathname !== '/userprofile' && <Party>
        {badge && <IconWrapper><Icon icon={checkCircle} /></IconWrapper>}
        <p>{party}</p>
      </Party>} */}
    </TextWrapper>
  </Wrapper>
)

UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  userId: PropTypes.string,
  party: PropTypes.string,
  authorId: PropTypes.string,
  badge: PropTypes.string,
  projectView: PropTypes.bool
}

export default UserAvatar
