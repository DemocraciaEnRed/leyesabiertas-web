import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../containers/navbar/component'
import UserProfileContainer from '../containers/user-profile/component'
import Footer from '../containers/footer/component'

class UserProfile extends Component {
  static getInitialProps ({ query: { user } }) {
    return { user }
  }

  render () {
    return (
      <div>
        <NavBar />
        <UserProfileContainer userId={this.props.user} />
        <Footer />
      </div>
    )
  }
}

UserProfile.propTypes = {
  user: PropTypes.string.isRequired
}

export default UserProfile
