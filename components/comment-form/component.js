import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import WithUserContext from '../../components/with-user-context/component'
import UserAvatarLogged from '../../elements/user-avatar-logged/component'

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
  left: 70%;
  top: ${this.props.top + 'px'};
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
  background: #fff;
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
class CommentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      disableSubmit : false,
      messsage: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({disableSubmit: true});
    fetch(`/api/v1/documents/5bb7bab09a5ac91dffa9e884/comments`, {
      method: 'POST',
      body: {
        'field': 'articles',
        'content': this.state.value
      }
    })
      .then((res) => {
        let message = res.status === 200 ? "Comentario enviado con exito" : "Error al enviar el comentario";
        this.setState({
          disableSubmit: false,
          message
        });
      })
      .catch((err) => {
        console.error(err)
        this.setState({
          disableSubmit: false,
          message: "Error al enviar el comentario"
        });
      })
  }

  render () {
    return (
      <CommentFormContainer>
        <CommentFormHeader>Agregar comentario</CommentFormHeader>
        <CommentFormContent>
          <UserAvatarLogged
            userId={'/static/assets/userdefault.png'}
            /*        name={props.authContext.userInfo.name} /> */
            name={'Nombre'} />
          <CommentText
            placeholder='Agregue su comentario aquí'
            value={this.state.value}
            onChange={this.handleChange} />
        </CommentFormContent>
        <CommentFormFooter disabled={disableSubmit} onClick={this.handleSubmit}>Enviar comentario </CommentFormFooter>
        <br/>
        <p>{message}</p>
      </CommentFormContainer>
    )
  }
}

export default WithUserContext(CommentForm)
