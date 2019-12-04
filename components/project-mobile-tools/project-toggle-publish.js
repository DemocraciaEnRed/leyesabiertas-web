import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { clockO } from 'react-icons-kit/fa/clockO'
import { toggle } from 'react-icons-kit/ionicons/toggle'
import { toggleFilled } from 'react-icons-kit/ionicons/toggleFilled'
import WithUserContext from '../with-user-context/component'
import Alert from '../../elements/alert/component'
import getConfig from 'next/config'

const { publicRuntimeConfig: { API_URL } } = getConfig()

// const Label = styled.div`
//   font-size:14px;
//   font-family: var(--bold);
//   color:#203340;
//   margin: 4px 0 0px;
// `

const ToggleClick = styled.span`
  cursor: pointer;
  margin-top: -6px;
`
const LoadingClick = styled.span`

`

class TogglePublished extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAlert: false,
      alertText: null,
      alertType: null,
      isLoading: false
    }
    this.props.setPublish(this.props.project.published)
  }

  submitToggle = async () => {
    this.setState({
      isLoading: true
    })
    let newState = !this.props.isPublished
    fetch(`${API_URL}/api/v1/documents/${this.props.project._id}`, {
      'method': 'PUT',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
      },
      'body': JSON.stringify({
        'published': newState
      })
    }).then((res) => {
      if (res.ok) {
        this.props.togglePublish()
        this.setState({
          showAlert: true,
          alertText: newState ? 'La propuesta se ha publicado' : 'La propuesta se ha ocultado',
          alertType: 'success',
          isLoading: false
        })
      }
    }).catch((err) => {
      console.error(err)
      this.setState({
        showAlert: true,
        alertText: 'Ocurrio un error',
        alertType: 'error',
        isLoading: false
      })
    })
  }

  dismissAlert = () => {
    this.setState({
      showAlert: false
    })
  }

  render() {
    const { isPublished } = this.props
    const { showAlert, alertType, alertText, isLoading } = this.state
    return (
      <div>
        {
          !isLoading &&
            <ToggleClick onClick={this.submitToggle}>
              {
                isPublished && !isLoading ? 'Publico' : 'Oculto'
              }&nbsp;&nbsp;
              {
                isPublished ? <Icon icon={toggleFilled} size={30} style={{ color: 'green' }} /> : <Icon icon={toggle} size={30} style={{ color: '#4a5d84' }} />
              }
            </ToggleClick>
        }
        {
          isLoading && 
            <LoadingClick>
              <Icon icon={clockO} size={25} style={{ color: '#ef885d' }} />
                &nbsp;&nbsp;Guardado...
            </LoadingClick>
        }
        {showAlert &&
          <Alert status={alertType} dismissAlert={this.dismissAlert}>
            {alertText}
          </Alert>
        }
      </div>
    )
  }
}

TogglePublished.propTypes = {
  authContext: PropTypes.object,
  togglePublish: PropTypes.func,
  isPublished: PropTypes.bool,
  project: PropTypes.object
}

export default WithUserContext(TogglePublished)
