import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledProfile = styled.div`
  width:60%;
  margin-left:auto;
  margin-right:auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media (max-width:800px) {
    width:90%;
  }
`
const ProfileAvatar = styled.div`
  width: 130px;
  height: 130px;
  border-radius:50%;
  background-image: url('${(props) => props.avatarImg}');
  background-size: cover;
  background-position: center;
`

const ProfileName = styled.div`
  font-size: 4rem;
  color: #2c4c61;
  font-family:var(--bold);
`

const ProfileCharge = styled.div`
  font-size: 2.2rem;
  font-family:var(--bold);
  line-height: 1.55;
  color: #5c97bc;
  color: var(--faded-blue);
`

const ProfilePeriod = styled.div`
  font-size: 1.6rem;
  font-family:var(--bold);
  color: #4a5d68;
  `

const ProfileMail = styled.div`
  font-size: 1.4rem;
  color: #5c97bc;
  color: var(--faded-blue);`

const ProfileResume = styled.div`
  font-size: 1.8rem;
  line-height: 1.94;
  color: #203340;
`

const Profile = ({ user }) => (
  <StyledProfile>
    <ProfileAvatar avatarImg={user.avatarImg} />
    <ProfileName name={user.name} />
    <ProfileCharge charge={user.charge} />
    <ProfilePeriod period={user.period} />
    <ProfileMail mail={user.mail} />
    <ProfileResume resume={user.resume} />
  </StyledProfile>
)

Profile.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Profile
