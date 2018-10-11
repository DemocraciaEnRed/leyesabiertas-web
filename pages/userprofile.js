import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../containers/navbar/component'
import SecondaryNavbar from '../containers/secondary-navbar/component'
import UserProfileContainer from '../containers/user-profile/component'
import Footer from '../containers/footer/component'

class UserProfile extends Component {
  static getInitialProps ({ query: { userId } }) {
    return { userId }
  }

  render () {
    return (
      <div>
        <NavBar />
        <SecondaryNavbar />
        <UserProfileContainer userId={this.props.userId} />
        <Footer />
      </div>
    )
  }
}

UserProfile.propTypes = {
  userId: PropTypes.string.isRequired
}

export default UserProfile
