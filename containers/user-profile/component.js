import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import WithUserContext from '../../components/with-user-context/component'
import Profile from '../../components/profile/component'

const API_URL = process.env.API_URL

class UserProfile extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired
  }

  state = {
    user: null,
    isOwner: false
  }

  async componentDidMount () {
    const { authContext } = this.props
    try {
      let user = null
      let isOwner = null
      if (this.props.userId) {
        user = await (await fetch(`${API_URL}/api/v1/users/${this.props.userId}`)).json()
        isOwner = false
        // console.log(authContext.keycloak.userInfo.sub)
        if (authContext.authenticated && authContext.keycloak) isOwner = user.keycloak === authContext.keycloak.userInfo.sub
      } else {
        user = await (await fetch(`${API_URL}/api/v1/users/me`, {
          'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authContext.keycloak.token
          }
        })).json()
        isOwner = true
      }
      this.setState({
        user,
        isOwner
      })
    } catch (error) {
      console.error(error)
    }
  }

  updateProfile = async (newProfile) => {
    const { authContext } = this.props
    if (!authContext.authenticated || !this.state.isOwner) return false
    try {
      const updatedUser = await (await fetch(`${API_URL}/api/v1/users`, {
        'method': 'PUT',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authContext.keycloak.token
        },
        'body': JSON.stringify(newProfile)
      })).json()
      window.alert('¡Perfil actualizado!')
      console.log(updatedUser)
    } catch (error) {
      window.alert('Ocurrio un error')
      console.error(error)
    }
  }

  render () {
    const { user, isOwner } = this.state
    return (
      <Fragment>
        {user &&
          <Profile user={user} isOwner={isOwner} onSubmit={this.updateProfile} />
        }
      </Fragment>
    )
  }
}

export default WithUserContext(UserProfile)
