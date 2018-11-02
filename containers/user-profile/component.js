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
      const user = await (await fetch(`${API_URL}/api/v1/users/${this.props.userId}`)).json()
      let isOwner = false
      if (authContext.authenticated && authContext.keycloak) isOwner = user.keycloak === authContext.keycloak.userInfo.sub
      this.setState({
        user,
        isOwner
      })
    } catch (error) {
      console.error(error)
    }
  }

  updateProfile = (newProfile) => {
    console.log(newProfile)
  }

  render () {
    const { user, isOwner } = this.state
    return (
      <Fragment>
        {user &&
          <Profile user={user} isOwner={isOwner} />
        }
      </Fragment>
    )
  }
}

export default WithUserContext(UserProfile)
