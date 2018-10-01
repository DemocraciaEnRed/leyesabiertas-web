import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProfileAvatar from '../../elements/profile-avatar/component'
import ProfileCharge from '../../elements/profile-charge/component'
import ProfileName from '../../elements/profile-name/component'
import ProfileMail from '../../elements/profile-mail/component'
import ProfilePeriod from '../../elements/profile-period/component'
import ProfileResume from '../../elements/profile-resume/component'

const StyledProfile = styled.div`
  width:59%;
  margin-left:auto;
  margin-right:auto;
  margin-top:8rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media (max-width:800px) {
    width:90%;
  }
`

const Profile = ({ user }) => (
  <StyledProfile>
    <ProfileAvatar img={'https://i.ytimg.com/vi/tRd00QPjJdA/hqdefault.jpg'} />
    <ProfileName name={'Alvarez Rodriguez, Maria Cristina'} />
    <ProfileCharge charge={'FRENTE PARA LA VICTORIA - PJ'} />
    <ProfilePeriod period={'Período: 10/12/2015 - 09/12/2019'} />
    <ProfileMail mail={'malvarezr@hcdn.gob.ar'} />
    <ProfileResume resume={'Hola, Proin iaculis cursus dolor sit amet dignissim. Suspendisse condimentum placerat nisi, in varius erat consequat ac. Praesent efficitur ultricies vulputate. Donec congue eu turpis a maximus. Proin ultrices tempor laoreet.Esperamos su aporte!'} />
  </StyledProfile>
)

Profile.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Profile
