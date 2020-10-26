import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import WithUserContext from '../../components/with-user-context/component'

const Container = styled.form`
  z-index: 2
  position: absolute
  width: 330px
  right: 0
  background-color: white
  padding: 1.2em
  box-shadow: 0px 2px 4px #cac7c7
  color: black
  text-align: left
  text-transform: none
  cursor: auto;
  margin-top: 7px;
  font-size:1.7rem

  @media(max-width:700px){
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`

const Label = styled.label`
  display: block
  span {
    display: block
    font-weight: bold
    padding: 14px 0px 7px
  }
  input {
    width: 100%
  }
`

const Text = styled.span`
`

const ApoyosSpan = styled.span`
  color: #6f78e6
  font-weight: bold
`

const ApoyarButton = styled.button`
  width: 100%
  padding: 13px 0;
  background-color: #6f78e6
  color: white
  font-weight: bold
  border: none
  :focus {outline:0;}

  img{
    position: relative;
    top: 5px;
    margin-right: 5px;
  }
`
const MobileCloseButton = styled.button`
  margin-left: auto;
  margin-right: 10px;
  margin-bottom: 7px;
  background-color: transparent;
  border: none;
  color: #960c0c;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.7rem;
  display: none
  @media(max-width:700px){
    display: block
  }
`


class ApoyarFormulario extends Component {
  state = {
    value: ''
  }

  constructor (props) {
    super(props)
  }

  render () {
    const { authenticated, user } = this.props.authContext
    const { project, show, toggleFormulario } = this.props

    if (!project || !show) return null

    return (
      <Container onSubmit={this.handleSubmit}>
        <Text>
          <MobileCloseButton onClick={toggleFormulario}>CERRAR ✖</MobileCloseButton>
          <ApoyosSpan>{ project._id && '200' } personas</ApoyosSpan> están apoyando la propuesta<br />
          ¿Querés apoyarla también?
        </Text>
        { !authenticated &&
          <Fragment>
            <Label>
              <span>Nombre y Apellido</span>
              <input name="nombre_apellido" />
            </Label>
            <Label>
              <span>Email</span>
              <input name="email" />
            </Label>
            CAPTCHA
          </Fragment>
        }
        <ApoyarButton><img src={`${'/static/assets/apoyar-icon.svg'}`} />Quiero apoyar la propuesta</ApoyarButton>
      </Container>
    )
  }
}

export default WithUserContext(ApoyarFormulario)
