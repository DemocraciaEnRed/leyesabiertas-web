import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoBold from '../../elements/static-info-bold/component'
import StaticInfoP from '../../elements/static-info-p/component'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Preguntas Frecuentes</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoBold>
        ¿Cuál es la diferencia entre una propuesta de ley y un proyecto de ley?
      </StaticInfoBold>
      <StaticInfoP>
      Un proyecto de ley es un texto que fue presentado en alguna de las dos cámaras y tiene tratamiento institucional. En el sitio hablamos siempre de propuestas de ley porque son textos que aún no se presentaron en la Cámara, sino que están en un estado de investigación previa. A éstos también se les suele llamar “ante proyectos de ley”.  
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Los diputados leen los comentarios?
      </StaticInfoBold>
      <StaticInfoP>
        Si, los diputados y su equipo de trabajo tienen el objetivo de subir una propuesta para que la ciudadanía realice aportes en las propuestas de ley para enriquecerlas con más puntos vista. Para que ello suceda el diputado y sus asesores leerán y darán una resolución sobre cada comentario en contexto.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Hay algún certificado por ser colaborador?
      </StaticInfoBold>
      <StaticInfoP>
      Este es un reconocimiento que otorgamos en este sitio pero que no es oficial, esperamos lo sea en en el futuro 
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
      ¿Cómo puedo tener conocimiento sobre qué pasó con el proyecto una vez finalizado el plazo para hacer aportes?
      </StaticInfoBold>
      <StaticInfoP>
      Una vez finalizado el plazo recibirás una notificación de que se ha generado una versión final de la propuesta. Podrás ingresar al sitio para ver los resultados con la cantidad de aportes tenidos en consideración y la cantidad de comentarios en contexto y totales realizados.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Cómo miden los aportes?
      </StaticInfoBold>
      <StaticInfoP>
        Para medir los aportes, el/la autor/a de la propuesta leerá cada comentario en contexto y cada vez que genere una nueva versión seleccionará los comentarios tenidos en consideración a la hora de efectuar modificaciones.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Me puedo contactar con el diputado? ¿Cómo?
      </StaticInfoBold>
      <StaticInfoP>
        Para contactarte con el/la diputado/a puede usar los medios de comunicación habituales, como correo institucional disponible en:  <a rel='noopener noreferrer' target='_blank' href='https://www.diputados.gov.ar/diputados/listadip.html'>https://www.diputados.gov.ar/diputados/listadip.html </a>
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Puedo presentar una propuesta?
      </StaticInfoBold>
      <StaticInfoP>
      En el sitio los únicos que pueden presentar propuestas son la/os diputados que luego podrán presentarlos como proyectos de ley en la cámara de diputados.
      La “iniciativa legislativa”, es decir la facultad de presentar proyectos de ley, corresponde a los diputados, senadores y al presidente de la Nación. La última reforma constitucional de 1994 incorporó también el derecho de “iniciativa popular”, que permite a los ciudadanos presentar proyectos de ley ante la Cámara de Diputados, siempre que cumplan con los requisitos que determina la ley. Si un proyecto ingresa al Congreso por la Cámara de Diputados, esta se convierte en la cámara de origen del proyecto y el Senado pasa a ser la cámara revisora. Cuando un proyecto se presenta en el Senado, este se convierte en cámara de origen y la Cámara de Diputados, en cámara revisora.
      </StaticInfoP>
    </StyledDiv>
  </section>
)