import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { consolidateStreamedStyles } from 'styled-components'
import fetch from 'isomorphic-unfetch'
import { Mark } from 'slate'
import Icon from 'react-icons-kit'
import { checkCircleO } from 'react-icons-kit/fa/checkCircleO'
import { timesCircleO } from 'react-icons-kit/fa/timesCircleO'
import getConfig from 'next/config'
import UserAvatarLogged from '../../elements/user-avatar-logged/component'
import WithUserContext from '../../components/with-user-context/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()

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
  border: solid 1px ${(props) => props.color ? '#ea5f5f' : '#b8e986'};
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
  background-color: var(--white);
  height: 5.5rem;
  border:none;
  font-size: 1.4rem;
  color: #5c97bc;
  border-top: 1px solid #dae1e7;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  box-sizing:border-box;
  padding-left:20px;
  padding-right:20px;
  cursor:pointer;
  &:focus {outline:0;}
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
  background-color: ${(props) => props.color ? '#ea5f5f' : '#b8e986'};
  color: #fff;
  display:flex;
  justify-content:center;
  align-items:center;
`
const TextTitle = styled.div`
  color: #2c4c61;
  font-size:1.4rem;
  margin-top:1rem;
  margin-bottom:1.6rem;
  font-family:var(--bold);
`
const TextDiv = styled.div`
  display:flex;
  flex-direction:column;
  padding-left:1rem;
  justify-content:flex-start;
  padding: 5px 5px 0px 10px;

`
const Text = styled.div`
  color: #181818;
  font-size:1.4rem;
`
const Close = styled.button`
  height: 20px;
  width: 20px;
  margin-left: auto;
  color: #181818;
  border: none;
  font-size: 20px;
  cursor:pointer;
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

  turnOffStatus = () => {
    setTimeout(() =>
      this.props.handleClose(), 3000)
  }

  setSubtitle = (props) => {
    if (props.authContext.isAuthor) {
      if (props.authContext.user.fields) {
        if (props.authContext.user.fields.party !== null || props.authContext.user.fields.party !== '') {
          return props.authContext.user.fields.party
        }
      }
      return ''
    } else {
      if (props.authContext.user.fields) {
        if (props.authContext.user.fields.occupation !== null || props.authContext.user.fields.occupation !== '') {
          return props.authContext.user.fields.occupation
        }
      }
      return ''
    }
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
      .then((res) => {
        this.setState({
          value: '',
          status: true,
          error: !res.ok
        })

        return res.json()
      })
      .then((res) => {
        let comment = res
        comment.user = this.props.authContext.user
        let decoration = this.props.decoration
        decoration.mark.data.preview = false
        decoration.mark.data.id = res._id
        const decorations = this.props.editor.value.decorations.push(decoration)
        this.props.editor.setDecorations(decorations)

        this.setState({
          value: '',
          status: true
        }, () => this.props.pushComment(comment))
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => { this.turnOffStatus() })
  }

  render () {
    return (
      <Fragment>
        {!this.state.status
          ? <CommentFormContainer onSubmit={this.handleSubmit} style={{ top: this.props.top }}>
            <CommentFormHeader>Agregar comentario</CommentFormHeader>
            <CommentFormContent>
              <UserAvatarLogged
                userId={this.props.authContext.user._id}
                name={this.props.authContext.profile.name}
                subtitle={this.setSubtitle(this.props)}
                badge={(this.props.authContext.user.fields && this.props.authContext.user.fields.party) ? this.props.authContext.user.fields.party : ''} />
              <CommentText
                placeholder='Agregue su comentario aquí'
                value={this.state.value}
                onChange={this.handleChange} />
            </CommentFormContent>
            <CommentFormFooter onClick={this.handleSubmit}>Enviar comentario</CommentFormFooter>
          </CommentFormContainer>

          : <CommentStatus style={{ top: this.props.top }} color={this.state.error}>
            <IconDiv color={this.state.error}>
              {!this.state.error ? <Icon icon={checkCircleO} /> : <Icon icon={timesCircleO} /> }
            </IconDiv>

            <TextDiv>
              <Close onClick={this.props.handleClose}>&times;</Close>
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
