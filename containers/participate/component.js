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
  width:90%;
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
        <ParticipateTextbox number={'01'} action={'Informate'} description={'Entrá y lee'} />
        <ParticipateP text={'Elegí un proyecto que te interese  o te parezca relevante. Primero vas a encontrar una introducción a la propuesta de ley con los antecedentes, fundamentos e información relevante. a la ley, como surgió y su importancia. Después podés pasar a leer el texto del proyecto de ley. '} />
      </ParticipateItem>
      <ParticipateItem>
        <ParticipateTextbox number={'02'} action={'Participá'} description={'Comentá y proponé'} />
        <ParticipateP text={'Podés seleccionar parte del texto del proyecto de ley y hacer sugerencias. Éstos serán leídos y tenidos en cuenta por los/las diputados/as para generar nuevas versiones del documento, En caso de que tu comentario se incorpore a la nueva versión, vas a figurar como (aportante)'} />
      </ParticipateItem>
      <ParticipateItem>
        <ParticipateTextbox number={'03'} action={'Involucrate'} description={'Compartí y seguí'} />
        <ParticipateP text={'Podés compartir el proyecto con tus contactos a través de redes sociales y otros medios, para que apoyen tus sugerencias y comentarios y para que más ciudadanos se involucren en la creación de leyes. Vas a recibir notificaciones de los cambios en el proyecto ¡seguilos!'} />
      </ParticipateItem>
    </ParticipateContainer>
    <Button primary>Registrate y participá</Button>
  </StyledParticipateSection>
)

Participate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Participate
