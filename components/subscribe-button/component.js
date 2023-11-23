import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import WithUserContext from '../../components/with-user-context/component'
import Icon from 'react-icons-kit'
import { userPlus } from 'react-icons-kit/fa'
import { userMinus } from 'react-icons-kit/feather'

const { publicRuntimeConfig: { API_URL } } = getConfig()

// const Icon = styled.div`
//   width: 20px;
//   height: 20px;
//   background-image: url(${(props) => `/static/assets/${props.icon}`});
//   background-size: cover;
//   background-repeat: no-repeat;
//   display: inline-block;
//   position: relative;
//   @media(max-width:700px){
// filter:grayscale(100%) brightness(54%) sepia(100%) hue-rotate(-180deg) saturate(700%) contrast(0.8);
// }
// `
// const IconLoading = styled(Icon)`
// width:20px;
// height:20px;
// filter:grayscale(100%);
// animation: rotation 2s infinite linear;

// @keyframes rotation {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(359deg);
//   }
// }
// `

const AuthorSubscribeButton = styled.button`
  cursor:pointer;
  border: none;
  padding:9px 20px;
  font-size: 1.4rem;
  color: ${(props) => props.active ? 'red' : 'green'};
  background-color: ${(props) => props.active ? 'white' : 'white'};
  font-family: ${(props) => !props.active ? 'var(--bold)' : 'var(--regular)'};
  @media(max-width:760px){
    padding:9px;
  }
`

class SubscribeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      isSubscribed: false
    }
  }

  async componentDidMount () {
    // if (this.props.authContext && this.props.authContext.user && this.props.authContext.user._id) {
    //   await this.fetchData()
    // }

    // when component initiates, this.props.authContext might not be fullfiled, we need to
    // set an interval to check if it is already there
    const interval = setInterval(() => {
      // console.log('Is it loaded?')
      if (this.props.authContext && this.props.authContext.user && this.props.authContext.user._id) {
        // console.log('Yes it is')
        clearInterval(interval)
        this.fetchData()
      } else {
        // console.log('Not yet')
      }
    }, 1000)
  }

  
  async fetchData () {
    const token = this.props.authContext && this.props.authContext.keycloak && this.props.authContext.keycloak.token
    const authorId = this.props.authorId
    const data = await (await fetch(`${API_URL}/api/v1/users/notifications/settings/authors/${authorId}/check`, {
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })).json()
    if(data.error) return console.log(data.error)
    this.setState({
      isLoading: false,
      isSubscribed: data.isSubscribed
    })
  }


  async handleAuthorSubscribeClick () {
    const token = this.props.authContext && this.props.authContext.keycloak && this.props.authContext.keycloak.token;
    const authorId = this.props.authorId
    const data = await (await fetch(`${API_URL}/api/v1/users/notifications/settings/authors/${authorId}`, {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })).json()
    this.setState({
      isLoading: false,
      isSubscribed: data.added
    })
  }

  render () {
    if (!this.props.authContext || !this.props.authContext.authenticated) return null

    if(this.props.authContext && this.props.authContext && this.props.authContext.user && this.props.authContext.user._id === this.props.authorId) return null

    if (this.state.isLoading) {
      return null
    }

    return (
      <AuthorSubscribeButton onClick={() => this.handleAuthorSubscribeClick()} active={this.state.isSubscribed}>
        <Icon icon={this.state.isSubscribed ? userMinus : userPlus } size={window.innerWidth > 760 ? 14 : 10} /> {this.state.isSubscribed ? 'Desuscribirse del diputado' : 'Suscribirse al diputado'}
      </AuthorSubscribeButton>
    )
  }
}

export default WithUserContext(SubscribeButton)
