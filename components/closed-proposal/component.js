import React from 'react'
import PropTypes from 'prop-types'
import ClosedProposalMessage from '../../elements/closed-proposal-message/component'
import ClosedProposalTitle from '../../elements/closed-proposal-title/component'
import ClosedProposalWrapper from '../../elements/closed-proposal-wrapper/component'

export default () => (
  <ClosedProposalWrapper>
    <ClosedProposalTitle>Los aportes para esta propuesta ya han sido cerrados</ClosedProposalTitle>
    <ClosedProposalMessage>Agradecemos a cada uno de los ciudadanos que compartieron sus aportes y comentarios a esta propuesta de ley. <br/> A continuación podrá ver los detalles y el resumen de la  co-creación de esta propuesta de ley.</ClosedProposalMessage>
  </ClosedProposalWrapper>
)
