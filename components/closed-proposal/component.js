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
  flex-direction: row;
  flex-wrap: wrap;
  // margin-top: 10px;
  // @media (max-width: 700px) {
  //   flex-direction: column;
  // }
`

export default ({ contributors, contributions, contextualComments }) => (
  <ClosedProposalWrapper>
    <ClosedProposalMessage>Agradecemos a cada uno de los ciudadanos que compartieron sus aportes y comentarios a esta propuesta de ley. A continuación podrá ver los detalles y el resumen de la co-creación de esta propuesta de ley.</ClosedProposalMessage>
    <ClosedProposalData>
      <DashboardBarItem>
        <DashboardBarTextContainer>
          <ActivityIcon img={'/static/assets/group-3.svg'} small={true} />
          <BarActivitySubtitle number={contextualComments}>
            Aportes
          </BarActivitySubtitle>
        </DashboardBarTextContainer>
      </DashboardBarItem>
      <DashboardBarItem>
        <DashboardBarTextContainer>
          <ActivityIcon img={'/static/assets/citizen-icon.svg'} small={true} />
          <BarActivitySubtitle number={contributors}>
            Participantes
          </BarActivitySubtitle>
        </DashboardBarTextContainer>
      </DashboardBarItem>
      { 
        (contributions) > 0 &&
        <DashboardBarItem>
          <BarTitle>Aportes Destacados</BarTitle>
          <DashboardBarTextContainer>
            <ActivityIcon img={'/static/assets/cha-rect-star.svg'} small={true} />
            <BarActivitySubtitle number={contributions}>
              Aportes destacados
            </BarActivitySubtitle>
          </DashboardBarTextContainer>
        </DashboardBarItem>
      }
    </ClosedProposalData>
  </ClosedProposalWrapper>
)
