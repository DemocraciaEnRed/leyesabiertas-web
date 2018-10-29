import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import ComoParticiparDiv from '../como-participar-div/component'

export default () => (
  <section>
    <StaticInfoTitle>Cómo participar</StaticInfoTitle>
    <ComoParticiparDiv
      number={1}
      title='Infórmese'
      text='Elija una propuesta que le interese.  
      Primero, encontrará una introducción a la propuesta de ley con los antecedentes, fundamentos e información relevante. Luego podrá leer el texto completo de la propuesta de ley.'/>
    <ComoParticiparDiv
      number={2}
      title='Participe'
      text='Podrá seleccionar alguna parte del texto de la propuesta de ley para hacer los aportes que considere importantes.
      Éstos serán leídos y tenidos en cuenta por los diputados para generar nuevas versiones del documento. En caso de que su comentario sea tomado en cuenta en la nueva versión, usted figurará como colaborador en nuestro sitio.' />
      <ComoParticiparDiv
        number={3}
        title='Involúcrese'
        text='Puede compartir la propuesta con sus contactos a través de redes sociales para que apoyen sus aportes y que más ciudadanos se involucren en la co-creación de leyes.
        Recibirá notificaciones de los cambios en la propuesta ¡Sigalos!' />
    
      </section>
)
