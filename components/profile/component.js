import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProfileForm from '../../elements/profile-form/component'
import ProfileAvatar from '../../elements/profile-avatar/component'
import ProfileName from '../../elements/profile-name/component'
import ProfileLabel from '../../elements/profile-label/component'
import ProfileInput from '../../elements/profile-input/component'
import ProfileSelect from '../../elements/profile-select/component'

const genderOptions = [
  { 'name': 'Masculino', 'value': 'masculino' },
  { 'name': 'Femenino', 'value': 'femenino' },
  { 'name': 'No me interesa especificar', 'value': 'no especifica' }
]

export default class Profile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    isOwner: PropTypes.bool.isRequired
  }

  state = {
    'surnames': '',
    'names': '',
    'username': '',
    'avatar': '',
    'occupation': '',
    'gender': '',
    'age': '',
    'province': ''
  }

  componentDidMount () {
    const { user } = this.props
    this.setState({
      'surnames': user.surnames,
      'names': user.names,
      'username': user.username,
      'avatar': user.avatar,
      'occupation': user.occupation,
      'gender': user.gender,
      'age': user.age,
      'province': user.province
    })
  }

  render () {
    const { user, isOwner } = this.props
    return (
      <ProfileForm>
        <ProfileAvatar img={this.state.avatar} />
        <ProfileName type='text' value={`${user.surnames}, ${user.names}`} readOnly />
        <ProfileLabel htmlFor='username'>
          Nombre de usuario
          <ProfileInput type='text' name='username' value={this.state.username} readOnly disabled />
        </ProfileLabel>
        <ProfileLabel htmlFor='age'>
          Edad
          <ProfileInput type='text' name='age' value={this.state.age} readOnly disabled />
        </ProfileLabel>
        <ProfileLabel htmlFor='gender'>
          Género
          {isOwner
            ? <ProfileSelect name='gender' value={this.state.gender} options={genderOptions} />
            : <ProfileInput type='text' name='gender' value={this.state.gender} readOnly disabled />
          }
        </ProfileLabel>
        <ProfileLabel htmlFor='province'>
          Province
          <ProfileInput type='text' name='province' value={this.state.province} readOnly disabled />
        </ProfileLabel>
        <ProfileLabel htmlFor='occupation'>
          Ocupación
          <ProfileInput type='text' name='occupation' value={this.state.occupation} readOnly disabled />
        </ProfileLabel>
      </ProfileForm>
    )
  }
}
