import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../containers/navbar/component'
import UserProfileContainer from '../containers/user-profile-container/component'
import Footer from '../containers/footer/component'

class UserProfile extends Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    return (
      <div>
        <NavBar />
        <UserProfileContainer project={this.props.id} />
        <Footer />
      </div>
    )
  }
}

UserProfile.propTypes = {
  id: PropTypes.string.isRequired
}

export default UserProfile
