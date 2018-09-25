import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '../../elements/button/component'
import ParticipateTitle from '../../elements/participate-title/component'
import ParticipateTextbox from '../../elements/participate-textbox/component'
import ParticipateP from '../../elements/participate-p/component'
import ParticipateContainer from '../../components/participate-container/component'
import ParticipateItem from '../../components/participate-item/component'

const StyledParticipateSection = styled.section`
  margin-left:auto;
  margin-right:auto;
  padding: 8.4rem 0rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  box-sizing:border-box;
`

const Participate = ({ children }) => (
  <StyledParticipateSection id='participate'>
    <ParticipateTitle>Cómo puedo participar</ParticipateTitle>
    <ParticipateContainer>
      <ParticipateItem>
        <ParticipateTextbox number={'1'} action={'Infórmese'} />
        <ParticipateP text={'Ingrese y lea las propuestas de ley que los diputados están creando.'} />
      </ParticipateItem>
      <ParticipateItem>
        <ParticipateTextbox number={'2'} action={'Participe'} />
        <ParticipateP text={'Comente y proponga aportes sobre los textos de las propuestas.'} />
      </ParticipateItem>
      <ParticipateItem>
        <ParticipateTextbox number={'3'} action={'Involúcrese'} />
        <ParticipateP text={'Comparta y siga resultados para que más ciudadanos se involucren.'} />
      </ParticipateItem>
    </ParticipateContainer>
    <Button primary >Registrate y participá</Button>
  </StyledParticipateSection>
)

Participate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Participate
