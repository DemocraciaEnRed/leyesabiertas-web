import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FundationForm from '../../elements/fundation-form/component'
import FundationFormTitle from '../../elements/fundation-form-title/component'
import FundationFormLabel from '../../elements/fundation-form-label/component'
import FundationFormTextarea from '../../elements/fundation-form-textarea/component'
import FundationFormButtonWrapper from '../../elements/fundation-form-button-wrapper/component'
import SubmitInput from '../../elements/submit-input/component'
import CommentFormFeedback from '../../elements/comment-form-feedback/component'
import FundationErrorSpan from '../../elements/fundation-error-span/component'

export default class extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.bool,
    closeMessage: PropTypes.func.isRequired
  }

  state = {
    comment: '',
    emptyComment: false
  }

  handleChange = (e) => {
    this.setState({
      emptyComment: e.target.value === '',
      comment: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.comment === '') {
      this.setState({
        emptyComment: true
      })
      return null
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
            onChange={this.handleChange}
            error={this.state.emptyComment} />
        </FundationFormLabel>
        { this.state.emptyComment &&
          <FundationErrorSpan>Este campo no puede estar vacío. Escriba su opinión y luego haga click en agregar.</FundationErrorSpan>
        }
        <FundationFormButtonWrapper>
          {!this.props.error &&
          <SubmitInput type='submit' value='Enviar opinión' />
          }
          {this.props.error &&
          <CommentFormFeedback closeMessage={this.props.closeMessage} />
          }
        </FundationFormButtonWrapper>
      </FundationForm>
    )
  }
}
