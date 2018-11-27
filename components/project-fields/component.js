import React, { Component } from 'react'
import ProfileLabel from '../../elements/profile-label/component'
import ProfileInput from '../../elements/profile-input/component'

class ProjectFields extends Component {
  state = {
    title: null,
    closingDate: null,
    imageCover: null
  }

  componentDidMount () {
    let {
      title,
      closingDate,
      imageCover
    } = this.props
    this.setState({
      title,
      imageCover,
      closingDate: new Date(closingDate).toUTCString()
    }, () => console.log(this.state.closingDate))
  }

  handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    }, () => console.log(this.state))
  }

  render () {
    return (
      <div>
        { this.state.title &&
          <ProfileLabel>
            Ingrese el título del proyecto:
            <ProfileInput
              type='text'
              value={this.state.title}
              name='title'
              onChange={this.handleInputChange} />
          </ProfileLabel>
        }
        { this.state.imageCover &&
          <ProfileLabel>
            Ingrese la URL para la imagen de encabezado:
            <ProfileInput
              type='text'
              value={this.state.imageCover}
              name='imageCover'
              onChange={this.handleInputChange} />
          </ProfileLabel>
        }
        { this.state.closingDate &&
          <ProfileLabel>
            Ingrese la fecha de cierre del proyecto:
            <ProfileInput
              type='date'
              value={this.state.closingDate}
              name='closingDate'
              onChange={this.handleInputChange} />
          </ProfileLabel>
        }
      </div>
    )
  }
}

export default ProjectFields
