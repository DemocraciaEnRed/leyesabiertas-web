import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import ComoParticiparDiv from '../como-participar-div/component'
import ComoParticiparWrapper from '../../elements/como-participar-wrapper/component'
import StaticInfoP from '../../elements/static-info-p/component'
import StaticInfoBold from '../../elements/static-info-bold/component'

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
    <ComoParticiparWrapper>
      <StaticInfoBold>
        ¿Cómo funciona?
      </StaticInfoBold>
      <StaticInfoP>
      Los Diputados suben propuestas de ley para que puedan ser enriquecidas: se pueden hacer aportes, comentarios y sugerencias 
      </StaticInfoP>
      <StaticInfoBold>
        ¿Qué es una propuesta?
      </StaticInfoBold>
      <StaticInfoP>
        Una propuesta de ley es al estado anterior al proyecto de ley que será presentado para debate en la Cámara. 
      </StaticInfoP>
      <StaticInfoP>
        Los diputados y su equipo leerán los aportes realizados por la ciudadanía en la propuesta y a partir de esto realizarán los cambios que consideren necesarios.
      </StaticInfoP>
      <StaticInfoBold>
        ¿Qué entendemos por aporte?
      </StaticInfoBold>
      <StaticInfoP>A través de esta plataforma, la ciudadanía puede hacer comentarios generales, para dar su opinión o postura general sobre la propuesta de ley. Además, puede realizar aportes puntuales seleccionando una parte específica del texto y haciendo un aporte particular. 
      </StaticInfoP>
      <StaticInfoP>
        Los diputados y su equipo analizarán los aportes. En la medida en se realicen cambios a la propuesta original se generarán nuevas versiones de la propuesta. Así, las y los usuarios cuyos aportes fueran incorporados, serán colaboradores en la redacción de la propuesta.
      </StaticInfoP>
      <StaticInfoP>Para más detalles sobre las funcionalidades básicas de esta plataforma descargue/consulte el MANUAL DE USUARIO</StaticInfoP>

    </ComoParticiparWrapper>
  </section>
)
