import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { ArticlesContext } from '../../containers/user-project-container/component'
import WithUserContext from '../with-user-context/component'
import Toolbar from './toolbar'
import BottomBar from './bottom-bar'

const API_URL = process.env.API_URL

class AddCommentWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  saveValue = async (ids, field, newYoutubeId, editedYoutubeId, setEditedYoutubeId, fetchDocument) => {
    const value = this.props.editor.value.toJSON()
    const decorations = this.props.editor.value.decorations.toJSON()
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
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
        },
        'body': JSON.stringify(payload)
      })).json()
      window.alert('Articulos editados!')
      fetchDocument(this.props.id, this.props.authContext.keycloak.token)
    } catch (err) {
      window.alert('Error!')
      console.error(err)
    }
  }

  render () {
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
                    fetchDocument={fetchDocument} />
              }
            </Fragment>
        }
      </ArticlesContext.Consumer>
    )
  }
}

export default WithUserContext(AddCommentWrapper)
