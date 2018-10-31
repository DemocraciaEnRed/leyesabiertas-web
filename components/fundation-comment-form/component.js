import React, { Component } from 'react'
import FundationForm from '../../elements/fundation-form/component'
import FundationFormTitle from '../../elements/fundation-form-title/component'
import FundationFormLabel from '../../elements/fundation-form-label/component'
import FundationFormTextarea from '../../elements/fundation-form-textarea/component'
import FundationFormButtonWrapper from '../../elements/fundation-form-button-wrapper/component'
import Button from '../../elements/button/component'

export default class extends Component {
  state = {
    comment: ''
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  render () {
    return (
      <FundationForm>
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
          <Button withBorder>Cancelar</Button>
          <Button primary>Agregar opinión</Button>
        </FundationFormButtonWrapper>
      </FundationForm>
    )
  }
}