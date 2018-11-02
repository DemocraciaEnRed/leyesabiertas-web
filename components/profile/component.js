import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Profile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  state = {
    'surnames': '',
    'names': '',
    'username': '',
    'avatar': '',
    'occupation': '',
    'gender': '',
    'age': '',
    'province': ''
  }

  componentDidMount () {
    const { user } = this.props
    this.setState({
      'surnames': user.surnames,
      'names': user.names,
      'username': user.username,
      'avatar': user.avatar,
      'occupation': user.occupation,
      'gender': user.gender,
      'age': user.age,
      'province': user.province
    })
  }

  handleChange = (e) => {
    
  }

  render () {
    const { user } = this.props
    return (
      <div>
        <img src={user.avatar} />
        <h2>{user.surnames}, {user.names}</h2>
        <p>Nombre de usuario</p>
        <p>{user.username}</p>
        <p>Edad</p>
        {console.log(user)}
      </div>
    )
  }
}
