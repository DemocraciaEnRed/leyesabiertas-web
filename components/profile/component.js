import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProfileForm from '../../elements/profile-form/component'
import ProfileAvatar from '../../elements/profile-avatar/component'
import ProfileName from '../../elements/profile-name/component'
import ProfileResume from '../../elements/profile-resume/component'
import ProfileCharge from '../../elements/profile-charge/component'
import ProfileMail from '../../elements/profile-mail/component'
import ProfileLabel from '../../elements/profile-label/component'
import ProfileInput from '../../elements/profile-input/component'
import ProfileSelect from '../../elements/profile-select/component'
import ProfileButtonWrapper from '../../elements/profile-button-wrapper/component'
import SubmitInput from '../../elements/submit-input/component'

const genderOptions = [
  { 'name': 'Masculino', 'value': 'masculino' },
  { 'name': 'Femenino', 'value': 'femenino' },
  { 'name': 'No me interesa especificar', 'value': 'no especifica' }
]

export default class Profile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    isOwner: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    'surnames': '',
    'names': '',
    'username': '',
    'avatar': '',
    'occupation': '',
    'gender': '',
    'age': '',
    'party': '',
    'province': ''
  }

  componentDidMount () {
    const { user } = this.props
    this.setState({
      'surnames': user.surnames,
      'names': user.names,
      'username': user.username,
      'avatar': user.avatar,
      'occupation': user.fields && user.fields.occupation ? user.fields.occupation : '',
      'gender': user.fields && user.fields.gender ? user.fields.gender : '',
      'party': user.fields && user.fields.party ? user.fields.party : '',
      'age': user.fields && user.fields.age ? user.fields.age : '',
      'province': user.fields && user.fields.province ? user.fields.province : ''
    })
  }
  handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newData = {
      'avatar': this.state.avatar || '',
      'fields': {
        'occupation': this.state.occupation || '',
        'gender': this.state.gender || '',
        'age': this.state.age || '',
        'province': this.state.province || '',
        'party': this.state.party || ''
      }
    }
    this.props.onSubmit(newData)
  }

  render () {
    const { user, isOwner } = this.props
    return (
      <ProfileForm onSubmit={this.handleSubmit}>
        <ProfileAvatar img={this.state.avatar} />
        <ProfileName
          type='text'
          value={`${user.surnames}, ${user.names}`}
          readOnly />
        {/* <ProfileMail mail={'malvarezr@hcdn.gob.ar'} /> */}
        { isOwner
          ? <ProfileLabel htmlFor='username'>
          Nombre de usuario
            <ProfileInput
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              readOnly disabled />
          </ProfileLabel> : null
        }
        {console.log(isOwner)}
        <ProfileLabel htmlFor='age'>
          Edad
          <ProfileInput type='text'
            name='age'
            value={this.state.age}
            onChange={this.handleChange}
            readOnly={!isOwner}
            disabled={!isOwner} />
        </ProfileLabel>
        <ProfileLabel htmlFor='gender'>
          Género
          {console.log(isOwner)}
          {isOwner
            ? <ProfileSelect name='gender' value={this.state.gender} options={genderOptions} onChange={this.handleChange} />
            : <ProfileInput type='text' name='gender' value={this.state.gender} readOnly disabled />
          }
        </ProfileLabel>
        <ProfileLabel htmlFor='province'>
          Provincia
          <ProfileInput
            type='text'
            name='province'
            value={this.state.province}
            readOnly={!isOwner}
            disabled={!isOwner}
            onChange={this.handleChange} />
        </ProfileLabel>
        <ProfileLabel htmlFor='occupation'>
          Ocupación
          <ProfileInput
            type='text'
            name='occupation'
            value={this.state.occupation}
            readOnly={!isOwner}
            disabled={!isOwner}
            onChange={this.handleChange} />
        </ProfileLabel>
        <ProfileLabel htmlFor='party'>
          Partido
          <ProfileInput
            type='text'
            name='party'
            value={this.state.party}
            readOnly={!isOwner}
            disabled={!isOwner}
            onChange={this.handleChange} />
        </ProfileLabel>
        {isOwner &&
          <ProfileButtonWrapper>
            <SubmitInput
              type='submit'
              value='Guardar cambios' />
          </ProfileButtonWrapper>
        }
      </ProfileForm>
    )
  }
}
