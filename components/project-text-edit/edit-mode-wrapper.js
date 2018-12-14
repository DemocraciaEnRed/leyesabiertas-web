import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import getConfig from 'next/config'
import { ArticlesContext } from '../../containers/user-project-container/component'
import Alert from '../../elements/alert/component'
import WithUserContext from '../with-user-context/component'
import Toolbar from './toolbar'
import BottomBar from './bottom-bar'

const { publicRuntimeConfig: { API_URL } } = getConfig()

class AddCommentWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 'pending'
    }
  }

  saveValue = async (ids, field, fetchDocument, projectFields) => {
    const value = this.props.editor.value.toJSON()
    const decorations = this.props.editor.value.decorations.toJSON()
    this.setState({
      status: 'loading'
    })
    try {
      let payload = {
        contributions: ids,
        decorations: decorations,
        content: {
          [field]: value
        }
      }
      if (projectFields) {
        Object.keys(projectFields).forEach((key) => {
          payload.content[key] = projectFields[key]
        })
      }
      const saveRequest = await fetch(`${API_URL}/api/v1/documents/${this.props.id}`, {
        'method': 'PUT',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
        },
        'body': JSON.stringify(payload)
      })
      if (!saveRequest.ok) {
        this.setStatus('error')
      } else {
        this.setStatus('success')
        fetchDocument(this.props.id, this.props.authContext.keycloak.token)
      }
    } catch (err) {
      this.setStatus('error')
      console.error(err)
    }
  }

  setStatus = (status) => {
    this.setState({
      status: status
    }, this.turnOffStatus())
  }

  turnOffStatus = () => {
    setTimeout(() => {
      this.setState({
        status: 'pending'
      })
    }, 4000)
  }

  dismissAlert = () => {
    this.setState({
      status: 'pending'
    })
  }

  render () {
    const { status } = this.state
    return (
      <ArticlesContext.Consumer>
        {
          ({ editMode, selectedCommentsIds, fetchDocument, projectFields }) =>
            <Fragment>
              { editMode && <Toolbar editor={this.props.editor} /> }
              {this.props.children}
              {
                editMode &&
                  <BottomBar
                    onClick={this.saveValue}
                    selectedCommentsIds={selectedCommentsIds}
                    field={this.props.field}
                    fetchDocument={fetchDocument}
                    projectFields={projectFields}
                    buttonIsDisabled={status === 'loading'} />
              }
              { (status === 'success' || status === 'error') &&
                <Alert status={status} dismissAlert={this.dismissAlert}>
                  { status === 'success' ? 'Los cambios que ha realizado en su propuesta fueron guardados con éxito.' : 'Los cambios que ha tratado de guardar no han podido ser procesados. Le aconsejamos que lo intente nuevamente.'}
                </Alert>
              }
            </Fragment>
        }
      </ArticlesContext.Consumer>
    )
  }
}

export default WithUserContext(AddCommentWrapper)
