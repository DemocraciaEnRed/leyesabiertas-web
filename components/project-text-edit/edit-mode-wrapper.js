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

  saveValue = async (ids, field) => {
    const value = this.props.editor.value.toJSON()
    try {
      const saveRequest = await (await fetch(`${API_URL}/api/v1/documents/${this.props.id}`, {
        'method': 'PUT',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
        },
        'body': JSON.stringify({
          contributions: ids,
          content: {
            [field]: value
          }
        })
      })).json()
      window.alert('Articulos editados!')
    } catch (err) {
      window.alert('Error!')
      console.error(err)
    }
  }

  render () {
    return (
      <ArticlesContext.Consumer>
        {
          ({ editMode, selectedCommentsIds }) =>
            <Fragment>
              { editMode && <Toolbar editor={this.props.editor} /> }
              {this.props.children}
              {
                editMode && 
                  <BottomBar
                    onClick={this.saveValue}
                    selectedCommentsIds={selectedCommentsIds}
                    field={this.props.field} />
              }
            </Fragment>
          }
        </ArticlesContext.Consumer>
    )
  }
}

export default WithUserContext(AddCommentWrapper)
