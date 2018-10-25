import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import WithUserContext from '../../components/with-user-context/component'
import UserAvatarLogged from '../../elements/user-avatar-logged/component'

const CommentFormContainer = styled.div`
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

  left: 102%;
  bottom:900px;

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

const CommentFormFooter = styled.div`
  height: 5.5rem;
  font-size: 1.4rem;
  color: #5c97bc;
  border-top: 1px solid #dae1e7;
  font-size:1.3em;
  display:flex;
  align-items:center;
  box-sizing:border-box;
  padding-left:20px;
`
const CommentText = styled.textarea`
  font-size:1.4rem;
  color: #181818;
  width:100%;
  height:15rem;
  outline-width: 0;


`
class CommentForm extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    console.log('Envio comentario ' + this.state.value)
    event.preventDefault()
  }

  render () {
    return (

      <CommentFormContainer onSubmit={this.handleSubmit}>
        <CommentFormHeader>Agregar comentario</CommentFormHeader>
        <CommentFormContent>
          <UserAvatarLogged
            avatarImg={'https://robohash.org/63.143.42.242.png'}
            name={'sarasa'} />
          <CommentText type='text' value={this.state.value} onChange={this.handleChange} />
        </CommentFormContent>
        <CommentFormFooter type='submit' value='Submit'>Enviar comentario </CommentFormFooter>

      </CommentFormContainer>
    )
  }
}

export default WithUserContext(CommentForm)
