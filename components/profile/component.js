import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FileBase64 from 'react-file-base64'
import Jimp from 'jimp'
import ProfileForm from '../../elements/profile-form/component'
import ProfileAvatar from '../../elements/profile-avatar/component'
import ProfileName from '../../elements/profile-name/component'
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
  { 'name': '', 'value': '' },
  { 'name': 'Masculino', 'value': 'Masculino' },
  { 'name': 'Femenino', 'value': 'Femenino' },
  { 'name': 'Otro', 'value': 'Otro' },
  { 'name': 'Prefiero no especificar', 'value': 'Prefiero no especificar' }
]

export default class Profile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    isOwner: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    avatar: null,
    occupation: '',
    gender: '',
    party: '',
    birthday: '',
    province: '',
    editMode: false,
    files: []
  }

  componentDidMount () {
    const { user } = this.props
    this.setState({
      occupation: user.fields && user.fields.occupation ? user.fields.occupation : '',
      gender: user.fields && user.fields.gender ? user.fields.gender : '',
      party: user.fields && user.fields.party ? user.fields.party : '',
      birthday: user.fields && user.fields.birthday ? user.fields.birthday : '',
      province: user.fields && user.fields.province ? user.fields.province : ''
    })
  }

  // Callback~
  getFiles = async (files) => {
    console.log(files.base64.split('base64,')[1])
    Jimp.read(Buffer.from(files.base64.split('base64,')[1], 'base64'))
      .then(async (image) => {
        let optimizedImage = await image.cover(150, 150).quality(90).getBase64Async(Jimp.MIME_JPEG)
        this.setState({ avatar: optimizedImage })
      }).catch((err) => {
        console.log(err)
      })
    this.setState({ files: files })
  }

  // get derivedState
  toggleEdit = () => {
    const { user } = this.props

    this.setState({
      editMode: !this.state.editMode,
      occupation: user.fields && user.fields.occupation ? user.fields.occupation : '',
      gender: user.fields && user.fields.gender ? user.fields.gender : '',
      party: user.fields && user.fields.party ? user.fields.party : '',
      birthday: user.fields && user.fields.birthday ? user.fields.birthday : '',
      province: user.fields && user.fields.province ? user.fields.province : ''
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
      fields: {
        occupation: this.state.occupation || '',
        gender: this.state.gender || '',
        birthday: this.state.birthday || '',
        province: this.state.province || '',
        party: this.state.party || ''
      }
    }
    if (this.state.avatar) {
      newData.avatar = this.state.avatar
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
        <ProfileAvatar id={user.id} />
        <ProfileName>{`${user.surnames}, ${user.names}`}</ProfileName>
        <ProfileMail mail={user.arrayData.join(' - ')} />
        { isOwner && !this.state.editMode ? <ButtonLink onClick={this.toggleEdit}>Editar perfil</ButtonLink> : null }
        { isLoading ? <p>...</p> : null}
        {
          this.state.editMode
            ? <div>
              <ProfileLabel htmlFor='avatar'>
          Imagen de perfil
                <FileBase64
                  multiple={false}
                  onDone={this.getFiles}
                  style={{ marginTop: '10px' }} />
              </ProfileLabel>
              <ProfileLabel htmlFor='birthday'>
          Fecha de Nacimiento
                <ProfileInput type='text'
                  name='birthday'
                  value={this.state.birthday}
                  onChange={this.handleChange}
                  readOnly={!isOwner}
                  disabled={!isOwner}
                  placeholder='30/02/1900' />
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
          Provincia / Localidad
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
