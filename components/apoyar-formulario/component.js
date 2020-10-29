import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import WithUserContext from '../../components/with-user-context/component'
import getConfig from 'next/config'
const { publicRuntimeConfig: { API_URL } } = getConfig()

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

const CaptchaGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  img {
    padding-bottom: 5px;
  }
  input {
    width: 70px;
    text-align: center;
    /*text-transform: uppercase;*/
  }
`

const CaptchaTitle = styled.span`
  font-weight: bold;
`

const ErrorSpan = styled.span`
  display: block;
  color:red
  padding-bottom: 5px;
`


class ApoyarFormulario extends Component {
  state = {
    success: false,
    formError: null,
    svg: null,
    token: null,
    nombre_apellido: '',
    email: '',
    captcha: '',
  }

  constructor (props) {
    super(props)

    this.nombreApellidoInput = this.nombreApellidoInput.bind(this)
    this.emailInput = this.emailInput.bind(this)
    this.captchaInput = this.captchaInput.bind(this)

    this.inputKeyPress = this.inputKeyPress.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  inputKeyPress(e){
    // por algún motivo al apretar enter se cerraba el form
    if (e.key == "Enter"){
      e.stopPropagation()
      e.preventDefault()
    }
  }

  nombreApellidoInput(e) { this.setState({ nombre_apellido: e.target.value }) }
  emailInput(e) { this.setState({ email: e.target.value }) }
  captchaInput(e) { this.setState({ captcha: e.target.value }) }

  handleSubmit(e){
    e.preventDefault()

    const { authenticated, keycloak } = this.props.authContext
    const { project } = this.props

    let url
    let headers = { 'Content-Type': 'application/json' }
    let body

    if (authenticated && keycloak && keycloak.token){
      url = `${API_URL}/api/v1/documents/${project._id}/apoyar`
      Object.assign(headers, {
        Authorization: `Bearer ${keycloak.token}`
      })
      body = {}
    } else {
      url = `${API_URL}/api/v1/documents/${project._id}/apoyar-anon`
      Object.assign(headers, {
        credentials: "include"
      })
      body = {
        token: this.state.token,
        nombre_apellido: this.state.nombre_apellido,
        email: this.state.email,
        captcha: this.state.captcha,
      }
    }

    fetch(url, {
      headers,
      method: 'POST',
      body: JSON.stringify(body)
    }).then(async (res) => {
      if (res.status == 200){
        this.setState({formError: null, success: true})
      }else{
        let err
        try {
          err = (await res.json()).error
        } catch(_) {
          err = "Ha ocurrido un error"
        }
        this.setState({formError: err})
      }
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.show && !this.props.authContext.authenticated && !this.state.svg) {
      fetch(`${API_URL}/api/v1/documents/captcha-data`)
        .then(r => r.json())
        .then(j => this.setState({svg: j.img, token: j.token}))
    }
  }

  render () {
    const { authenticated, user } = this.props.authContext
    const { project, show, toggleFormulario } = this.props
    const { svg, success } = this.state

    if (!project || !show) return null

    return (
      <Container onSubmit={this.handleSubmit}>
        <MobileCloseButton onClick={toggleFormulario}>CERRAR ✖</MobileCloseButton>
        { !success ?
          <Fragment>
            <ApoyosSpan>{ project._id && '200' } personas</ApoyosSpan> están apoyando la propuesta<br />
            ¿Querés apoyarla también?
            { !authenticated &&
              <Fragment>
                <Label>
                  <span>Nombre y Apellido</span>
                  <input name="nombre_apellido" required value={this.state.nombre_apellido} onChange={this.nombreApellidoInput} onKeyPress={this.inputKeyPress} />
                </Label>
                <Label>
                  <span>Email</span>
                  <input name="email" type="email" required value={this.state.email} onChange={this.emailInput} onKeyPress={this.inputKeyPress} />
                </Label>
                <CaptchaGroup>
                  <CaptchaTitle>Validá que no sos un robot:</CaptchaTitle>
                  {svg ?
                    <div dangerouslySetInnerHTML={{ __html: svg}} />
                    :
                    <span>Cargando imagen...</span>
                  }
                  <input type='text' maxlength='4' name="captcha" required value={this.state.captcha} onChange={this.captchaInput} onKeyPress={this.inputKeyPress} />
                </CaptchaGroup>
              </Fragment>
            }
            { this.state.formError &&
              <ErrorSpan>{this.state.formError}</ErrorSpan>
            }
            <ApoyarButton><img src={`${'/static/assets/apoyar-icon.svg'}`} />Quiero apoyar la propuesta</ApoyarButton>
          </Fragment>
        :
          <span>¡Ya estás apoyando la propuesta!</span>
        }
      </Container>
    )
  }
}

export default WithUserContext(ApoyarFormulario)
