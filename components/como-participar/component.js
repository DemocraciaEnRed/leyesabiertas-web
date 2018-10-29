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
        Los Diputados subirán propuestas de ley próximas a ser presentadas como proyecto de ley en la Cámara de Diputados, para que puedan ser revisadas, y se puedan hacer comentarios y sugerencias. 
      </StaticInfoP>
      <StaticInfoBold>
        ¿Qué es una propuesta?
      </StaticInfoBold>
      <StaticInfoP>
      Denominamos propuesta de ley al estado anterior al proyecto de ley que será presentado para debate en la Cámara. 
      </StaticInfoP>
      <StaticInfoP>
        Los diputados y su equipo leerán los aportes realizados por la ciudadanía en la propuesta y a partir de esto realizarán los cambios que consideren necesarios.
      </StaticInfoP>
      <StaticInfoBold>
        ¿Qué entendemos por aporte?
      </StaticInfoBold>
      <StaticInfoP>La ciudadanía puede realizar aportes puntuales seleccionando una parte específica del texto y haciendo un comentario particular. También puede hacer comentarios generales, en los que podrá dar su opinión o postura general sobre el proyecto.</StaticInfoP>
      <StaticInfoP>Los cambios que los diputados realicen en la propuesta de ley darán lugar a nuevas versiones que mencionarán como colaboradores  a los usuarios cuyos aportes fueron incorporados.</StaticInfoP>
      <StaticInfoP>Aquí se puede ver o descargar un manual de usuario que explica las funcionalidades básicas de la Plataforma de Elaboracion Colaborativa de Propuestas de Ley.
      MANUAL DE USUARIO</StaticInfoP>

    </ComoParticiparWrapper>
  </section>
)
