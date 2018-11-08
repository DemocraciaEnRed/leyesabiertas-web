import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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

const ButtonLink = styled.a`
  background-color: #5c97bc;
  font-size: 1.2rem;
  border-style: none;
  color: var(--white);
  font-family: var(--bold);
  padding: 0.7em 1.8em;
  background-color: #5c97bc;
  font-size: 1.4rem;
  margin: 1em 0 0;
`

const genderOptions = [
  { 'name': 'Masculino', 'value': 'masculino' },
  { 'name': 'Femenino', 'value': 'femenino' },
  { 'name': 'Otro', 'value': 'otro' },
  { 'name': 'Prefiero no especificar', 'value': 'no especifica' }
]

export default class Profile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    isOwner: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    surnames: '',
    names: '',
    username: '',
    avatar: '',
    occupation: '',
    gender: '',
    age: '',
    party: '',
    province: '',
    editMode: false,
    arrayData: []
  }

  componentDidMount () {
    const { user } = this.props
    let arrayData = []
    if (user.fields && user.fields.occupation) arrayData.push(user.fields.occupation)
    if (user.fields && user.fields.party) arrayData.push(user.fields.party)
    if (user.fields && user.fields.province) arrayData.push(user.fields.province)
    // if(user.fields && user.fields.) arrayData.push(user.fields.occupation)
    // if(user.fields && user.fields.occupation) arrayData.push(user.fields.occupation)
    this.setState({
      'surnames': user.surnames,
      'names': user.names,
      'username': user.username,
      'avatar': user.avatar,
      'occupation': user.fields && user.fields.occupation ? user.fields.occupation : '',
      'gender': user.fields && user.fields.gender ? user.fields.gender : '',
      'party': user.fields && user.fields.party ? user.fields.party : '',
      'age': user.fields && user.fields.age ? user.fields.age : '',
      'province': user.fields && user.fields.province ? user.fields.province : '',
      'arrayData': arrayData
    })
  }

  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode
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
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render () {
    const { user, isOwner, isLoading } = this.props
    return (
      <ProfileForm onSubmit={this.handleSubmit}>
        <ProfileAvatar img={this.state.avatar} />
        <ProfileName>{`${user.surnames}, ${user.names}`}</ProfileName>
        <ProfileMail mail={this.state.arrayData.join(' - ')} />
        { isOwner && !this.state.editMode ? <ButtonLink onClick={this.toggleEdit}>Editar perfil</ButtonLink> : null }
        { isLoading ? <p>...</p> : null}
        {
          this.state.editMode
            ? <div>
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
              { isOwner && user.roles.includes('accountable')
                ? <ProfileLabel htmlFor='party'>
          Bloque
                  <ProfileInput
                    type='text'
                    name='party'
                    value={this.state.party}
                    readOnly={!isOwner}
                    disabled={!isOwner}
                    onChange={this.handleChange} />
                </ProfileLabel>
                : null
              }
              <ProfileButtonWrapper>
                <SubmitInput
                  type='submit'
                  value='Guardar cambios' />
              </ProfileButtonWrapper>
            </div>
            : null
        }
      </ProfileForm>
    )
  }
}
