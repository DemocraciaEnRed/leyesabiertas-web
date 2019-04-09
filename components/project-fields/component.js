import React, { Component } from 'react'
import styled from 'styled-components'
import ProfileLabel from '../../elements/profile-label/component'
import EditorTitle from '../../elements/editor-title/component'

const InputField = styled.input`
  width: 100%;
  height: 40px;
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  font-size: 1.4rem;
  line-height: 1.5rem;
  color: #203340;
  margin-top: 10px;
  padding: 14px;
  &:read-only,
  &:disabled {
    cursor: not-allowed;
    background-color: #f7f7f7
  }
`
const TextareaField = styled.textarea`
  width: 100%;
  min-height: 250px;
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: #203340;
  margin-top: 10px;
  padding: 14px;
  &:read-only,
  &:disabled {
    cursor: not-allowed;
    background-color: #f7f7f7
  }
`

const SpanOk = styled.span`
  color: #808181;
  font-size: 0.9em;
  line-height: 1.5em;
  margin-top: 0.8em;
`
const SpanDanger = styled.span`
  margin-top: 0.8em;
  color: red;
`

const EditField = styled.div`
  border: 1px solid #dae1e7;
  padding: 2.5em 2.5em 1em;
  margin-bottom: 2em;  
`

class ProjectFields extends Component {
  state = {
    title: null,
    closingDate: null,
    imageCover: null,
    youtubeId: null,
    youtubeURL: null,
    closure: null,
  }

  componentDidMount () {
    let {
      title,
      closingDate,
      imageCover,
      youtubeId,
      closure
    } = this.props
    this.setState({
      title,
      imageCover,
      youtubeId,
      youtubeURL: youtubeId ? 'https://www.youtube.com/watch?v=' + youtubeId : '',
      closingDate: new Date(closingDate).toISOString().split('T')[0],
      closure: closure || null
    }, () => this.props.setNewFields(this.getBodyPayload()))
  }

  getBodyPayload = () => {
    return {
      title: this.state.title,
      imageCover: this.state.imageCover,
      closingDate: new Date(this.state.closingDate).toISOString(),
      youtubeId: this.state.youtubeId,
      closure: this.state.closure
    }
  }

  handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    }, () => this.props.setNewFields(this.getBodyPayload()))
  }

  parseVideoId = () => {
    let videoID = this.state.youtubeURL.split('v=')[1] || null
    if (videoID) {
      let ampersandPosition = videoID.indexOf('&')
      if (ampersandPosition !== -1) {
        videoID = videoID.substring(0, ampersandPosition)
      }
    }
    this.setState({
      youtubeId: videoID
    }, () => {
      this.props.setNewFields(this.getBodyPayload())
    })
  }

  handleInputChangeYoutube = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    }, () => {
      this.parseVideoId()
    })
  }

  render () {
    return (
      <EditField>
        <EditorTitle>Datos del proyecto</EditorTitle>
        <ProfileLabel>
            Título del proyecto:
          <InputField
            type='text'
            value={this.state.title}
            name='title'
            onChange={this.handleInputChange}
            placeholder='Hacer uso correcto de mayúsculas y minúsculas' />
        </ProfileLabel>
        <ProfileLabel>
            Ingrese la URL para la imagen de encabezado:
          <InputField
            type='text'
            value={this.state.imageCover}
            name='imageCover'
            onChange={this.handleInputChange} />
        </ProfileLabel>
        <ProfileLabel>
            Fecha de cierre del proyecto:
          <InputField
            type='date'
            value={this.state.closingDate}
            name='closingDate'
            onChange={this.handleInputChange} />
          { this.state.closingDate
            ? <SpanOk>La fecha de cierre será el: {this.state.closingDate}<br />NOTA: El documento se cerrará automáticamente llegada la fecha de cierre</SpanOk>
            : <SpanDanger>Debe definir una fecha de cierre</SpanDanger>
          }
        </ProfileLabel>
        <ProfileLabel>
          Ingrese el link del video de Youtube (Opcional)
          <InputField
            type='text'
            name='youtubeURL'
            value={this.state.youtubeURL || ''}
            onChange={this.handleInputChangeYoutube} />
          {!this.state.youtubeId && <SpanOk>Link invalido o vacio (El proyecto se publicará sin video)</SpanOk>
          }
        </ProfileLabel>
        <ProfileLabel>
          Palabras de cierre
          <TextareaField
            value={this.state.closure}
            name='closure'
            onChange={this.handleInputChange}
            placeholder='Escriba aquí el texto'  />
          <SpanOk>NOTA: Las palabras de cierre solo serán visibles luego de la fecha de cierre</SpanOk>
        </ProfileLabel>
      </EditField>
    )
  }
}

export default ProjectFields
