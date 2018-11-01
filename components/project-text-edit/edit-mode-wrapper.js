import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Toolbar from './toolbar'

const API_URL = process.env.API_URL

const StyledButton = styled.button`
  background-color: #5c97bc;
  border-radius: 21px;
  width: 180px;
  height: 42px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  float: right;
`

export default class AddCommentWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  saveValue = async () => {
    const value = this.props.editor.value.toJson()
    console.log('guardar', this.props.selectedCommentsIds, value, )
    try {
      const newComment = await (await fetch(`${API_URL}/api/v1/documents/${this.props.id}/update/articles`, {
        'method': 'PUT',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.authContext.keycloak.token,
        },
        'body': JSON.stringify({
          contributions: comments,
          content: {
            articles: value
          }
       })
      })).json()
      console.log('articulos guardados')
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    return (
      <Fragment>
        <Toolbar editor={this.props.editor} />
        {this.props.children}
        <StyledButton onClick={this.saveValue}>
          Guardar cambios
        </StyledButton>
      </Fragment>
    )
  }
}
