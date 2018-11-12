import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ActivityIcon from '../../elements/activity-icon/component'
import BarTitle from '../../elements/dashboard-bar-title/component'
import BarActivitySubtitle from '../../elements/dashboard-bar-subtitle/component'
import DashboardBarItem from '../../components/dashboard-bar-item/component'
import DashboardBarTextContainer from '../../elements/dashboard-bar-text-container/component'
import ClosedProposalMessage from '../../elements/closed-proposal-message/component'
import ClosedProposalTitle from '../../elements/closed-proposal-title/component'
import ClosedProposalWrapper from '../../elements/closed-proposal-wrapper/component'

const ClosedProposalData = styled.div`
  display: flex;
  margin-top: 30px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export default ({ contributors, contributions }) => (
  <ClosedProposalWrapper>
    <ClosedProposalTitle>Los aportes para esta propuesta ya han sido cerrados</ClosedProposalTitle>
    <ClosedProposalMessage>Agradecemos a cada uno de los ciudadanos que compartieron sus aportes y comentarios a esta propuesta de ley. <br/> A continuación podrá ver los detalles y el resumen de la  co-creación de esta propuesta de ley.</ClosedProposalMessage>
    <ClosedProposalData>
      { contributions > 0 &&
        <DashboardBarItem>
          <ActivityIcon img={'/static/assets/citizen-icon.svg'} />
          <DashboardBarTextContainer>
            <BarTitle>Cantidad de aportes</BarTitle>
            <BarActivitySubtitle number={contributions}>
              aportes incluídos
            </BarActivitySubtitle>
          </DashboardBarTextContainer>
        </DashboardBarItem>
      }
      { contributors &&
        <DashboardBarItem>
          <ActivityIcon img={'/static/assets/comment-smiley-icon.svg'} />
          <DashboardBarTextContainer>
            <BarTitle>Total de aportantes</BarTitle>
            <BarActivitySubtitle number={contributors}>
              aportantes
            </BarActivitySubtitle>
          </DashboardBarTextContainer>
        </DashboardBarItem>
      }
    </ClosedProposalData>
  </ClosedProposalWrapper>
)
