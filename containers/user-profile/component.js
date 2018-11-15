import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import WithUserContext from '../../components/with-user-context/component'
import Profile from '../../components/profile/component'
import Alert from '../../elements/alert/component'

const API_URL = process.env.API_URL

class UserProfile extends Component {
  static propTypes = {
    userId: PropTypes.string
  }

  state = {
    user: null,
    isOwner: false,
    showAlert: false,
    alertText: null,
    alertStatus: null
  }

  async componentDidMount () {
    if (!this.props.authContext.keycloak) return
    // this.fetchUser(this.props.authContext.keycloak.token)
    this.fetchUser(this.props.authContext.authenticated, this.props.authContext.keycloak.token)
  }

  async componentWillUpdate (props) {
    if (!props.authContext.keycloak) return
    if (props === this.props) return
    this.fetchUser(props.authContext.authenticated, props.authContext.keycloak.token)
  }

  setUser = (user, isOwner) => {
    let arrayData = []
    if (user.fields && user.fields.occupation) arrayData.push(user.fields.occupation)
    if (user.fields && user.fields.party) arrayData.push(user.fields.party)
    if (user.fields && user.fields.province) arrayData.push(user.fields.province)
    if (user.fields && user.fields.gender) arrayData.push('Género: ' + user.fields.gender)
    if (user.fields && user.fields.birthday) arrayData.push('Fecha de Nacimiento: ' + user.fields.birthday)
    // if(user.fields && user.fields.) arrayData.push(user.fields.occupation)
    // if(user.fields && user.fields.occupation) arrayData.push(user.fields.occupation)
    this.setState({
      'user': {
        'surnames': user.surnames,
        'names': user.names,
        'username': user.username,
        'avatar': user.avatar,
        'occupation': user.fields && user.fields.occupation ? user.fields.occupation : '',
        'gender': user.fields && user.fields.gender ? user.fields.gender : '',
        'party': user.fields && user.fields.party ? user.fields.party : '',
        'birthday': user.fields && user.fields.birthday ? user.fields.birthday : '',
        'province': user.fields && user.fields.province ? user.fields.province : '',
        'roles': user.roles,
        'fields': user.fields,
        'arrayData': arrayData
      },
      isOwner: isOwner
    })
  }

  fetchUser = async (authenticated, token) => {
    const { authContext } = this.props
    try {
      let user = null
      let isOwner = null
      if (this.props.userId) {
        user = await (await fetch(`${API_URL}/api/v1/users/${this.props.userId}`)).json()
        isOwner = false
        if (authenticated) isOwner = (user.keycloak == authContext.keycloak.userInfo.sub)
      } else {
        user = await (await fetch(`${API_URL}/api/v1/users/me`, {
          'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        })).json()
        isOwner = true
      }
      this.setUser(user, isOwner)
    } catch (error) {
      console.error(error)
    }
  }

  updateProfile = async (newProfile) => {
    const { authContext } = this.props
    if (!authContext.authenticated || !this.state.isOwner) return false
    try {
      await authContext.updateMe(newProfile)
      this.setState({
        showAlert: true,
        alertText: '¡Perfil actualizado!',
        alertStatus: 'success'
      })
    } catch (error) {
      this.setState({
        showAlert: true,
        alertText: 'Ocurrió un error actualizando el perfil',
        alertStatus: 'error'
      })
      console.error(error)
    }
  }

  dismissAlert = () => {
    this.setState({
      showAlert: false
    })
  }

  render () {
    const { user, isOwner } = this.state
    return (
      <Fragment>
        {user &&
          <Profile user={user} isOwner={isOwner} onSubmit={this.updateProfile} />
        }
        {
          this.state.showAlert &&
          <Alert status={this.state.alertStatus} dismissAlert={this.dismissAlert}>
            {this.state.alertText}
          </Alert>
        }
      </Fragment>
    )
  }
}

export default WithUserContext(UserProfile)
