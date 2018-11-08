import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { consolidateStreamedStyles } from 'styled-components'
import fetch from 'isomorphic-unfetch'
import { Mark } from 'slate'
import Icon from 'react-icons-kit'
import { checkCircleO } from 'react-icons-kit/fa/checkCircleO'
import { timesCircleO } from 'react-icons-kit/fa/timesCircleO'
import UserAvatarLogged from '../../elements/user-avatar-logged/component'
import WithUserContext from '../../components/with-user-context/component'

const API_URL = process.env.API_URL

const CommentFormContainer = styled.form`
  width: 300px;
  min-height: 305px;
  border-radius: 3px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  border: solid 1px #dae1e7;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  box-sizing: border-box;
  cursor: pointer;
  z-index:2;
  position: absolute;
  left: 74%;
`

const CommentStatus = styled.form`
  width: 300px;
  height: 122px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px ${(props) => props.error ? '#ea5f5f' : '#b8e986'};
  background-color: #ffffff;
  display:flex;
  justify-content:space-between;
  box-sizing: border-box;
  cursor: pointer;
  z-index:2;
  position: absolute;
  left: 74%;
`

const CommentFormContent = styled.div`
  display:flex;
  min-height:210px;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  box-sizing:border-box;
  padding-left:20px;
  padding-right:20px;
  background-color:#fff;
  padding-top:2rem;
`
const CommentFormHeader = styled.div`
  height: 40px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #5c97bc;
  font-size:1.3em;
  color: #fff;
  display:flex;
  align-items:center;
  padding-left:20px;
  box-sizing:border-box;
`

const CommentFormFooter = styled.button`
  height: 5.5rem;
  border:none;
  font-size: 1.6rem;
  color: #5c97bc;
  border-top: 1px solid #dae1e7;
  font-size:1.3em;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  box-sizing:border-box;
  padding-left:20px;
  padding-right:20px;
  opacity: 0.5;
  cursor:pointer;
  :focus {outline:0;}

`
const CommentText = styled.textarea`
  font-size:1.4rem;
  color: #181818;
  width:100%;
  min-height:130px;
  resize:none;
  border-style: none; 
  border-color: Transparent; 
`

const IconDiv = styled.div`
  width: 50px;
  background-color: ${(error) => error ? '#ea5f5f' : '#b8e986'};
  color: #fff;
  display:flex;
  justify-content:center;
  align-items:center;
`
const TextTitle = styled.div`
  color: #2c4c61;
  font-size:1.4rem;
  margin-bottom:1.6rem;
  font-family:var(--bold);
`
const TextDiv = styled.div`
  display:flex;
  flex-direction:column;
  padding-left:1rem;
  justify-content:center;

`
const Text = styled.div`
  color: #181818;
  font-size:1.4rem;
`

class CommentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      status: false,
      error: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${API_URL}/api/v1/documents/${this.props.id}/comments`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        field: 'articles',
        content: this.state.value,
        decoration: this.props.decoration
      })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        console.log('comentario guardado...')
        let decoration = this.props.decoration
        decoration.mark.data.preview = false
        const decorations = this.props.editor.value.decorations.push(decoration)
        this.props.editor.setDecorations(decorations)
        this.setState({
          value: '',
          status: true
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          error: true
        })
      })
  }

  render () {
    return (
      <Fragment>
        {!this.state.status
          ? <CommentFormContainer onSubmit={this.handleSubmit} style={{ top: this.props.top }}>
            <CommentFormHeader>Agregar comentario</CommentFormHeader>
            <CommentFormContent>
              <UserAvatarLogged
                avatarImg={'/static/assets/userdefault.png'}
                name={this.props.authContext.profile.name} />
              <CommentText
                placeholder='Agregue su comentario aquí'
                value={this.state.value}
                onChange={this.handleChange} />
            </CommentFormContent>
            <CommentFormFooter onClick={this.handleSubmit}>Enviar comentario</CommentFormFooter>
          </CommentFormContainer>

          : <CommentStatus style={{ top: this.props.top }} color={{ error: this.state.error }}>
            {!this.state.error ? <IconDiv><Icon icon={checkCircleO} /></IconDiv>
              : <IconDiv error><Icon icon={timesCircleO} /></IconDiv> }
            <TextDiv>
              <TextTitle>{!this.state.error ? 'Gracias por tu aporte' : 'Ha ocurrido un error'}</TextTitle>
              <Text>{!this.state.error ? 'Su comentario ha sido enviado al diputado y sus asesores.' : 'Lo sentimos. Por favor intente nuevamente más tarde.' }</Text>
            </TextDiv>
          </CommentStatus>
        }
      </Fragment>
    )
  }
}

export default WithUserContext(CommentForm)
