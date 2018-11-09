import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavBar from '../containers/navbar/component'
import SecondaryNavbar from '../containers/secondary-navbar/component'
import UserProfileContainer from '../containers/user-profile/component'
import Footer from '../containers/footer/component'

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  min-height:100vh;
`

class UserProfile extends Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    return (
      <Wrapper>
        <div>
          <NavBar />
          <SecondaryNavbar />
          <UserProfileContainer userId={this.props.id} />
        </div>
        <Footer />
      </Wrapper>
    )
  }
}

UserProfile.propTypes = {
  id: PropTypes.string
}

export default UserProfile
