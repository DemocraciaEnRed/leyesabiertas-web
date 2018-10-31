import React from 'react'
import FundationFormAlert from '../../elements/fundation-form-alert/component'
import CommentIcon from '../../elements/comment-icon/component'

const FundationAlertLogin = () => (
  <FundationFormAlert>
    <CommentIcon />
    <p>
      Para agregar aportes debe estár registrado. Puede crear su cuenta haciendo <a>click aquí </a>
    </p>
  </FundationFormAlert>
)

export default FundationAlertLogin
