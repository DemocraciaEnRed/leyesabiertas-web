import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { clockO } from 'react-icons-kit/fa/clockO'
import { toggle } from 'react-icons-kit/ionicons/toggle'
import { toggleFilled } from 'react-icons-kit/ionicons/toggleFilled'
import getConfig from 'next/config'
import WithUserContext from '../with-user-context/component'
import Alert from '../../elements/alert/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  // width:250px;
  min-height:50px;
  padding-left: 15px;
  border-left: 1px solid #CACACA;
  margin-left: 15px;
  // min-width: 125px;
  @media (max-width:700px){
    display: none;
  }
`
const ToggleItem = styled.div`
  font-size:12px;
  position: relative;
  width: 85px;
  height: 30px;
  border-radius: 100px;
  background-color: #f2f5f8;
  overflow: hidden;
  box-shadow: inset 0 0 2px 1px rgba(0,0,0,.05);
`
const StyledCheck = styled.input`
  position: relative;
  display: flex;
  justify-content:center;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 6;
  :checked ~  b {
    box-shadow: inset 0 0 0 20px #ef885d;
  }
  :checked ~ b {
    right: 2px;
    left: 33px;
    transition: .35s cubic-bezier(0.785, 0.135, 0.150, 0.860);
    transition-property: left, right;
    transition-delay: .05s, 0s;
  }
`

const ItemOn = styled.b`
  position: absolute;
  color:#fff;
  display:flex;
  justify-content:center;
  padding-top:6px;
  width:50px; /*ancho del toggle superior*/
  left: 2px;
  top: 2px;
  bottom: 2px;
  right: 2px;
  background-color: #2c4c61;
  border-radius: 36px;
  z-index: 1;
  transition: .35s cubic-bezier(0.785, 0.135, 0.150, 0.860);
  transition-property: left, right;
  transition-delay: 0s, .05s;
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  `
const ItemOff = styled.span` 
  position: absolute;
  color:#2c4c61;
  display:flex;
  justify-content:flex-start;
  padding-top:8px;
  padding-left:10px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: .35s cubic-bezier(0.785, 0.135, 0.150, 0.860);
  box-shadow: inset 0 0 0 2px rgba(0,0,0,.05);
  border-radius: 40px;
`
const Label = styled.div`
  font-size:14px;
  font-family: var(--bold);
  color:#203340;
  margin: 4px 0 0px;
`

const ToggleClick = styled.span`
  cursor: pointer;
  margin-top: -6px;
`
const LoadingClick = styled.span`

`

class TogglePublished extends Component {
  constructor (props) {
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

  render () {
    const { isPublished } = this.props
    const { showAlert, alertType, alertText, isLoading } = this.state
    return (
      <Wrapper>
        <Label>Publicar</Label>
        {
          !isLoading &&
            <ToggleClick onClick={this.submitToggle}>
              {
                isPublished ? <Icon icon={toggleFilled} size={40} style={{ color: 'green' }} /> : <Icon icon={toggle} size={40} style={{ color: '#4a5d84' }} />
              } {
                isPublished && !isLoading ? 'Publico' : 'Oculto'
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
      </Wrapper>
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
