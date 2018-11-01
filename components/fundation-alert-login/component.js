import React from 'react'
import FundationFormAlert from '../../elements/fundation-form-alert/component'
import CommentIcon from '../../elements/comment-icon/component'

const FundationAlertLogin = ({ registerUrl }) => (
  <FundationFormAlert>
    <CommentIcon />
    <p>
      Para agregar aportes debe estár registrado. Puede crear su cuenta haciendo <a href={registerUrl}>click aquí </a>
    </p>
  </FundationFormAlert>
)

export default FundationAlertLogin
