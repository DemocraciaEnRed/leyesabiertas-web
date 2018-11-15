import React from 'react'
import WithUserContext from '../with-user-context/component'
import FundationFormAlert from '../../elements/fundation-form-alert/component'
import CommentIcon from '../../elements/comment-icon/component'

const FundationAlertLogin = (props) => (
  <FundationFormAlert {...props} >
    <CommentIcon />
    <p>
      Para {props.articles ? 'agregar aportes ' : 'comentar '} debe estar registrado. Puede crear su cuenta haciendo <a href={props.authContext.keycloak.createRegisterUrl()}>click aquí </a>
    </p>
  </FundationFormAlert>
)

export default WithUserContext(FundationAlertLogin)

