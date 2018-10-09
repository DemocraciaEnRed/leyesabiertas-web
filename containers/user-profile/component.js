import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import ProfileAvatar from '../../elements/profile-avatar/component'
import ProfileCharge from '../../elements/profile-charge/component'
import ProfileName from '../../elements/profile-name/component'
import ProfileMail from '../../elements/profile-mail/component'
import ProfilePeriod from '../../elements/profile-period/component'
import ProfileResume from '../../elements/profile-resume/component'

const API_URL = process.env.API_URL

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
class Profile extends Component {
  state = {
    user: null
  }

  async componentDidMount () {
    try {
      const user = await (await fetch(`${API_URL}/api/v1/users/${this.props.userId}`)).json()
      this.setState({
        user: user
      })
      console.log({ user })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { user } = this.state
    if (!user) return null
    return (
      <StyledProfile>
        <ProfileAvatar img={user.avatar} />
        <ProfileName name={user.fields.name} />
        <ProfileCharge charge={user.fields.occupation} />
        <ProfilePeriod period={'Período: 10/12/2015 - 09/12/2019'} />
        <ProfileMail mail={'malvarezr@hcdn.gob.ar'} />
        <ProfileResume resume={'Hola, Proin iaculis cursus dolor sit amet dignissim. Suspendisse condimentum placerat nisi, in varius erat consequat ac. Praesent efficitur ultricies vulputate. Donec congue eu turpis a maximus. Proin ultrices tempor laoreet.Esperamos su aporte!'} />
      </StyledProfile>
    )
  }
}

Profile.propTypes = {
  userId: PropTypes.string.isRequired
}

export default Profile
