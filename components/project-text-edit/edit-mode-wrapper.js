import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Toolbar from './toolbar'
import { ArticlesContext } from '../../containers/user-project-container/component'	
import WithUserContext from '../with-user-context/component'

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

class AddCommentWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  saveValue = (ids) => async () => {
    const value = this.props.editor.value.toJSON()
    try {
      const saveRequest = await (await fetch(`${API_URL}/api/v1/documents/${this.props.id}/update/articles`, {
        'method': 'PUT',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.authContext.keycloak.token,
        },
        'body': JSON.stringify({
          contributions: ids,
          content: {
            articles: value
          }
       })
      })).json()
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    return (
      <Fragment>
        <Toolbar editor={this.props.editor} />
        {this.props.children}
        <ArticlesContext.Consumer>
          {
            ({ selectedCommentsIds }) => 
              <StyledButton onClick={this.saveValue(selectedCommentsIds)}>
                Guardar cambios
              </StyledButton>
          }
        </ArticlesContext.Consumer>
      </Fragment>
    )
  }
}

export default WithUserContext(AddCommentWrapper)
