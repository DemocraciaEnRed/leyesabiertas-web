import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FundationForm from '../../elements/fundation-form/component'
import FundationFormTitle from '../../elements/fundation-form-title/component'
import FundationFormLabel from '../../elements/fundation-form-label/component'
import FundationFormTextarea from '../../elements/fundation-form-textarea/component'
import FundationFormButtonWrapper from '../../elements/fundation-form-button-wrapper/component'
import SubmitInput from '../../elements/submit-input/component'
import CommentFormFeedback from '../../elements/comment-form-feedback/component'

export default class extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    status: PropTypes.string
  }

  state = {
    comment: '',
    emptyComment: false
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.comment === '') {
      this.setState({
        emptyComment: true
      })
      return
    }
    this.props.handleSubmit(this.state.comment)
    this.setState({ comment: '' })
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
          {!this.props.status
            ? <SubmitInput type='submit' value='Enviar opinión' />
            : <CommentFormFeedback error={this.props.status === 'error'}>
              {this.props.status === 'success' ? '¡Gracias! Su comentario fue enviado correctamente' : 'Ha ocurrido un error, por favor vuelva a intentarlo más tarde'}
            </CommentFormFeedback>
          }
        </FundationFormButtonWrapper>
      </FundationForm>
    )
  }
}