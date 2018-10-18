import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import WithUserContext from '../with-user-context/component'
import UserAvatar from '../../elements/user-avatar/component'

const StyledLoggedUser = styled.div`
  width: 200px;
  height:45px;
  display:flex;
  justify-content:space-between;
  background: #fff;
  box-sizing: border-box;
  cursor: pointer;
`

class LoggedUser extends Component {
  state = {
    user: null
  }

  async componentDidMount () {
    try {
      const userInfo = await this.props.authContext.keycloak.loadUserInfo()
      this.setState({
        user: userInfo
      })
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    return (
      <StyledLoggedUser>
        { this.state.user && 
          <UserAvatar name={this.state.user.name} avatarImg={'https://robohash.org/63.143.42.242.png'} party={'abogado'} />
        }
      </StyledLoggedUser>
    )
  }
}

export default WithUserContext(LoggedUser)
