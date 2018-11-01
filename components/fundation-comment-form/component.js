import React, { Component } from 'react'
import FundationForm from '../../elements/fundation-form/component'
import FundationFormTitle from '../../elements/fundation-form-title/component'
import FundationFormLabel from '../../elements/fundation-form-label/component'
import FundationFormTextarea from '../../elements/fundation-form-textarea/component'
import FundationFormButtonWrapper from '../../elements/fundation-form-button-wrapper/component'
import SubmitInput from '../../elements/submit-input/component'

export default class extends Component {
  state = {
    comment: ''
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state.comment)
  }

  render () {
    return (
      <FundationForm onSubmit={this.handleSubmit}>
        <FundationFormTitle>
          Complete el formulario para enviar su opinión
        </FundationFormTitle>
        <FundationFormLabel>
          Su opinión
          <FundationFormTextarea
            value={this.state.comment}
            onChange={this.handleChange} />
        </FundationFormLabel>
        <FundationFormButtonWrapper>
          <SubmitInput type='submit' value='Enviar opinión' />
        </FundationFormButtonWrapper>
      </FundationForm>
    )
  }
}