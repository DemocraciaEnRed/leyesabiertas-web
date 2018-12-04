import React from 'react'
import StaticInfoTitle from '../../elements/static-info-title/component'
import ComoParticiparWrapper from '../../elements/como-participar-wrapper/component'
import StaticInfoP from '../../elements/static-info-p/component'
import StaticInfoBold from '../../elements/static-info-bold/component'

export default () => (
  <section>
    <StaticInfoTitle>Cómo participar</StaticInfoTitle>
    <ComoParticiparWrapper>
      <StaticInfoBold>
        ¿Cómo funciona?
      </StaticInfoBold>
      <StaticInfoP>
      Los Diputados suben <strong>propuestas de ley</strong> para que puedan ser enriquecidas: se pueden hacer aportes, comentarios y sugerencias
      </StaticInfoP>
      <StaticInfoBold>
        ¿Qué es una <em>propuesta</em>?
      </StaticInfoBold>
      <StaticInfoP>
        Una propuesta de ley es al <strong>estado anterior al proyecto de ley</strong> que será presentado para debate en la Cámara. 
      </StaticInfoP>
      <StaticInfoP>
        Los diputados y su equipo leerán los <strong>aportes</strong> realizados por la ciudadanía en la propuesta y a partir de esto realizarán los cambios que consideren necesarios.
      </StaticInfoP>
      <StaticInfoBold>
        ¿Qué entendemos por aporte?
      </StaticInfoBold>
      <StaticInfoP>A través de esta plataforma, la ciudadanía puede hacer <strong>comentarios generales</strong>, para dar su opinión o postura general sobre la propuesta de ley. Además, puede realizar aportes puntuales seleccionando una parte específica del texto y haciendo un <strong>aporte particular</strong>.
      </StaticInfoP>
      <StaticInfoP>
        Los diputados y su equipo analizarán los <strong>aportes</strong>. En la medida en se realicen cambios a la propuesta original se generarán nuevas versiones de la propuesta. Así, las y los usuarios cuyos aportes fueran incorporados, serán colaboradores en la redacción de la propuesta.
      </StaticInfoP>
      <StaticInfoP>Para más detalles sobre las funcionalidades básicas de esta plataforma descargue/consulte el MANUAL DE USUARIO</StaticInfoP>
    </ComoParticiparWrapper>
  </section>
)
