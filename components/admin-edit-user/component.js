import React, { Component } from 'react'
import styled from 'styled-components'
import FileBase64 from 'react-file-base64'
import Jimp from 'jimp'
import jump from 'jump.js'
import ProfileForm from '../../elements/profile-form/component'
import ProfileAvatar from '../../elements/profile-avatar/component'
import ProfileName from '../../elements/profile-name/component'
import ProfileLabel from '../../elements/profile-label/component'
import ProfileInput from '../../elements/profile-input/component'
import ProfileSelect from '../../elements/profile-select/component'
import ProfileButtonWrapper from '../../elements/profile-button-wrapper/component'
import ProfileTags from '../../elements/profile-tags/component'
import Alert from '../../elements/alert/component'
import SubmitInput from '../../elements/submit-input/component'
import WithDocumentTagsContext from '../../components/document-tags-context/component'
import { withRouter } from 'next/router'

import getConfig from 'next/config'

const { publicRuntimeConfig: {
  API_URL,
} } = getConfig()

const TagsNotificationCheckboxDiv = styled.div`
  width: 350px;
  display: flex;
  line-height: 15px;
  margin-top: 3px;
  font-size:13px;
  & > input {
    margin-right: 7px;
    margin-bottom: auto;
  }
`

const ButtonLink = styled.button`
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

const InputErrorSpan = styled.span`
  color: red;
  font-size: 1.2rem;
`

const genderOptions = [
  { 'name': '', 'value': '' },
  { 'name': 'Masculino', 'value': 'Masculino' },
  { 'name': 'Femenino', 'value': 'Femenino' },
  { 'name': 'Otro', 'value': 'Otro' },
  { 'name': 'Prefiero no especificar', 'value': 'Prefiero no especificar' }
]

class UserEdit extends Component {
  state = {
    avatar: null,
    user: null,
    occupation: "",
    gender: "",
    party: "",
    birthday: "",
    province: "",
    editMode: true,
    files: [],
    allTags: [],
    tags: [],
    tagsMaxReached: false,
    tagsNotification: "",
    isLoading: true,
    status: "pending",
  };

  async componentWillMount() {
    this.setState({ allTags: await this.props.fetchDocumentTags() });
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    fetch(`${API_URL}/api/v1/users/${this.props.router.query.user}`)
      .then((resp) => resp.json())
      .then((user) =>
        this.setState({
          user: user,
          occupation: user.fields.occupation || "",
          gender: user.fields.gender || "",
          party: user.fields.party || "",
          birthday: user.fields.birthday || "",
          province: user.fields.province || "",
          tags: user.fields.tags || [],
          tagsNotification: user.fields.tagsNotification || "",
          isLoading: true,
        })
      )
      .catch((err) => console.error(err));
  }

  // Callback~
  getFiles = async (files) => {
    Jimp.read(Buffer.from(files.base64.split("base64,")[1], "base64"))
      .then(async (image) => {
        let optimizedImage = await image
          .cover(150, 150)
          .quality(90)
          .getBase64Async(Jimp.MIME_JPEG);
        this.setState({ avatar: optimizedImage });
      })
      .catch((err) => {
        console.error(err);
      });
    this.setState({ files: files });
  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleTagClick = (tag) => {
    if (this.state.tagsMaxReached) this.setState({ tagsMaxReached: false });

    const clickedTagId = tag._id;
    if (this.state.tags.includes(clickedTagId))
      this.setState((prevState) => ({
        tags: prevState.tags.filter((tagId) => tagId != clickedTagId),
      }));
    else {
      if (this.state.tags.length == 6) this.setState({ tagsMaxReached: true });
      else
        this.setState((prevState) => ({
          tags: prevState.tags.concat(clickedTagId),
        }));
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      fields: {
        occupation: this.state.occupation || "",
        gender: this.state.gender || "",
        birthday: this.state.birthday || "",
        province: this.state.province || "",
        party: this.state.party || "",
        tags: this.state.tags || "",
        tagsNotification: this.state.tagsNotification || "",
      },
    };
    if (this.state.avatar) {
      newData.avatar = this.state.avatar;
    }
    await (
      await fetch(`${API_URL}/api/v1/users/${this.state.user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.props.token,
        },
        body: JSON.stringify(newData),
      }).then((res) => {
        this.setState({ status: res.status === 200 ? "success" : "error" });
        return res;
      })
    ).json();
    jump(-1000);
  };

  toggleTagsCheckboxChange = () => {
    this.setState(({ tagsNotification }) => ({
      tagsNotification: !tagsNotification,
    }));
  };

  dismissAlert = () => {
    this.setState({
      status: "pending",
    });
  };

  render() {
    const { user, isLoading, status } = this.state;
    if (user) {
      return (
        <>
          <ProfileForm onSubmit={this.handleSubmit}>
            <ProfileAvatar id={user.id} date={user.updatedAt} />
            <ProfileName>{`${user.surnames}, ${user.names}`}</ProfileName>
            {/* <ProfileMail mail={user.arrayData.join(' - ')} /> */}

            {isLoading ? <p>...</p> : null}
            {this.state.editMode ? (
              <div>
                <ProfileLabel htmlFor="avatar">
                  Imagen de perfil
                  <FileBase64
                    multiple={false}
                    onDone={this.getFiles}
                    style={{ marginTop: "10px" }}
                  />
                </ProfileLabel>
                <ProfileLabel htmlFor="birthday">
                  Fecha de Nacimiento
                  <ProfileInput
                    type="text"
                    name="birthday"
                    value={this.state.birthday}
                    onChange={this.handleChange}
                    readOnly={false}
                    disabled={false}
                    placeholder="30/02/1900"
                  />
                </ProfileLabel>
                <ProfileLabel htmlFor="gender">
                  Género
                  <ProfileSelect
                    name="gender"
                    value={this.state.gender}
                    options={genderOptions}
                    onChange={this.handleChange}
                  />
                </ProfileLabel>
                <ProfileLabel htmlFor="province">
                  Provincia / Localidad
                  <ProfileInput
                    type="text"
                    name="province"
                    value={this.state.province}
                    readOnly={false}
                    disabled={false}
                    onChange={this.handleChange}
                  />
                </ProfileLabel>
                <ProfileLabel htmlFor="occupation">
                  Ocupación
                  <ProfileInput
                    type="text"
                    name="occupation"
                    value={this.state.occupation}
                    readOnly={false}
                    disabled={false}
                    onChange={this.handleChange}
                  />
                </ProfileLabel>
                <ProfileLabel htmlFor="party">
                  Bloque
                  <ProfileInput
                    type="text"
                    name="party"
                    value={this.state.party}
                    readOnly={false}
                    disabled={false}
                    onChange={this.handleChange}
                  />
                </ProfileLabel>

                <ProfileLabel htmlFor="tags">
                  Etiquetas de interés
                  <TagsNotificationCheckboxDiv>
                    <input
                      type="checkbox"
                      name="tagsNotification"
                      checked={this.state.tagsNotification}
                      onChange={this.toggleTagsCheckboxChange}
                    />
                    Deseo recibir notificaciones de futuros proyectos asociados
                    a mis etiquetas de interés
                  </TagsNotificationCheckboxDiv>
                  {this.state.tagsMaxReached && (
                    <InputErrorSpan>
                      Se pueden elegir hasta 6 etiquetas de interés
                    </InputErrorSpan>
                  )}
                  <ProfileTags
                    name="tags"
                    allTags={this.state.allTags}
                    tags={this.state.tags}
                    onTagClick={this.handleTagClick}
                  />
                </ProfileLabel>
                <ProfileButtonWrapper>
                  <SubmitInput type="submit" value="Guardar cambios" />
                </ProfileButtonWrapper>
              </div>
            ) : null}
          </ProfileForm>
          {(status === "success" || status === "error") && (
            <Alert status={status} dismissAlert={this.dismissAlert}>
              {status === "success"
                ? "Los cambios que ha realizado en el perfil fueron guardados con éxito."
                : "Los cambios que ha tratado de guardar no han podido ser procesados. Le aconsejamos que lo intente nuevamente."}
            </Alert>
          )}
        </>
      );
    } else {
      return <div></div>;
    }
  }
}

export default WithDocumentTagsContext(withRouter(UserEdit))
