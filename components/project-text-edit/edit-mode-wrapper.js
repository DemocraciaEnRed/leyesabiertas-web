import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { ArticlesContext } from '../../containers/user-project-container/component'
import Alert from '../../elements/alert/component'
import WithUserContext from '../with-user-context/component'
import Toolbar from './toolbar'
import BottomBar from './bottom-bar'

const API_URL = process.env.API_URL

class AddCommentWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 'pending'
    }
  }

  saveValue = async (ids, field, newYoutubeId, editedYoutubeId, setEditedYoutubeId, fetchDocument) => {
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
      if (editedYoutubeId) {
        payload.content.youtubeId = newYoutubeId
      }
      const saveRequest = await (await fetch(`${API_URL}/api/v1/documents/${this.props.id}`, {
        'method': 'PUT',
        'headers': {
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify(payload)
      })).json()
      this.setStatus('success')
      fetchDocument(this.props.id, this.props.authContext.keycloak.token)
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
          ({ editMode, selectedCommentsIds, newYoutubeId, editedYoutubeId, setEditedYoutubeId, fetchDocument }) =>
            <Fragment>
              { editMode && <Toolbar editor={this.props.editor} /> }
              {this.props.children}
              {
                editMode &&
                  <BottomBar
                    onClick={this.saveValue}
                    selectedCommentsIds={selectedCommentsIds}
                    field={this.props.field}
                    newYoutubeId={newYoutubeId}
                    editedYoutubeId={editedYoutubeId}
                    setEditedYoutubeId={setEditedYoutubeId}
                    fetchDocument={fetchDocument}
                    buttonIsDisabled={status === 'loading'} />
              }
              { (status === 'success' || status === 'error') &&
                <Alert status={status} dismissAlert={this.dismissAlert}>
                  { status === 'success' ? 'Los cambios que ha realizado en su propuesta fueron guardados y publicados con éxito.' : 'Los cambios que ha tratado de publicar no han podido ser procesados. Le aconsejamos que lo intente nuevamente.'}
                </Alert>
              }
            </Fragment>
        }
      </ArticlesContext.Consumer>
    )
  }
}

export default WithUserContext(AddCommentWrapper)
