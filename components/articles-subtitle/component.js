import React from 'react'
import PropTypes from 'prop-types'
import Subtitle from '../../elements/editor-subtitle/component'
import FundationAlertLogin from '../fundation-alert-login/component'

const ArticlesSubtitle = ({ authenticated, editMode }) => (
  authenticated
    ? <Subtitle>
      { editMode ? 'Puede editar el texto y marcar comentarios como aportes.'
        : 'Puede comentar haciendo selección sobre el fragmento de texto deseado.' }
    </Subtitle>
    : <FundationAlertLogin articles />
)

ArticlesSubtitle.propTypes = {
  authenticated: PropTypes.bool
}

export default ArticlesSubtitle
