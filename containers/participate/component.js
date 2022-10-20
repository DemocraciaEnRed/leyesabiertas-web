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
          <ParticipateTextbox number={'1'} action={'Informate'} />
          <ParticipateP text={'Ingresá y leé las propuestas.'} />
        </ParticipateItem>
        <ParticipateItem>
          <ParticipateTextbox number={'2'} action={'Participá'} />
          <ParticipateP text={'Comentá, proponé aportes sobre los textos y apoyá las propuestas.'} />
        </ParticipateItem>
        <ParticipateItem>
          <ParticipateTextbox number={'3'} action={'Involucrate'} />
          <ParticipateP text={'Compartí las propuestas para que más ciudadanos las conozcan y se involucren.'} />
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
