import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import WithUserContext from '../../components/with-user-context/component'
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

const Participate = (props) => {
  if (!props.authContext) return null
  return (
    <StyledParticipateSection id='participate'>
      <ParticipateTitle>¿Cómo participar?</ParticipateTitle>
      <ParticipateContainer>
        <ParticipateItem>
          <ParticipateTextbox number={'1'} action={'Infórmese'} />
          <ParticipateP text={'Ingrese y lea las propuestas y proyectos de ley abiertos a la co-creación.'} />
        </ParticipateItem>
        <ParticipateItem>
          <ParticipateTextbox number={'2'} action={'Participe'} />
          <ParticipateP text={'Comente, proponga aportes sobre los textos y apoye las propuestas.'} />
        </ParticipateItem>
        <ParticipateItem>
          <ParticipateTextbox number={'3'} action={'Involúcrese'} />
          <ParticipateP text={'Comparta para que más ciudadanos se involucren y siga la evolución de las propuestas.'} />
        </ParticipateItem>
      </ParticipateContainer>
      <Link href='/info?section=como-participar'>
        <Button primary>Conozca más</Button>
      </Link>
    </StyledParticipateSection>
  )
}

Participate.propTypes = {
  authContext: PropTypes.object.isRequired
}

export default WithUserContext(Participate)
