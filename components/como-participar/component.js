import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { download } from 'react-icons-kit/feather/download'
import StaticInfoTitle from '../../elements/static-info-title/component'
import ComoParticiparWrapper from '../../elements/como-participar-wrapper/component'
import StaticInfoP from '../../elements/static-info-p/component'
import StaticInfoBold from '../../elements/static-info-bold/component'

const ManualLink = styled.span`
  text-decoration: underline
  color: #5c97bc;
  &:hover{
    cursor: pointer;
  }
`

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
        Una propuesta de ley es el <strong>estado anterior al proyecto de ley</strong>, es decir, antes de iniciado el trámite parlamentario.
      </StaticInfoP>
      <StaticInfoP>
        Los diputados analizarán los <strong>aportes</strong> realizados por la ciudadanía en la propuesta y a partir de esto realizarán los cambios que consideren necesarios para la
 versión final del texto.
      </StaticInfoP>
      <StaticInfoBold>
        ¿Qué entendemos por aporte?
      </StaticInfoBold>
      <StaticInfoP>A través de esta plataforma, la ciudadanía puede hacer <strong>comentarios generales</strong>, para dar su opinión o postura general sobre la propuesta de ley. Además, puede realizar aportes puntuales seleccionando una parte específica del texto y haciendo un <strong>aporte particular</strong>.
      </StaticInfoP>
      <StaticInfoP>
        Los diputados analizarán los <strong>aportes</strong>. En la medida en se realicen cambios a la propuesta original se generarán nuevas versiones de la propuesta. Así, las y los usuarios cuyos aportes fueran incorporados, serán colaboradores en la redacción de la propuesta.
      </StaticInfoP>
      <StaticInfoP>Para más detalles sobre las funcionalidades básicas de esta plataforma descargue/consulte el <Icon icon={download} size={16} /> <Link href='/static/files/congreso_manual_de_usuario.pdf'><ManualLink>Manual de usuario</ManualLink></Link></StaticInfoP>
    </ComoParticiparWrapper>
  </section>
)
