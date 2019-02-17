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
      Un proyecto de ley es un texto presentado en la mesa de entradas de alguna de las dos Cámaras, tiene número de expediente y giro a las Comisiones apropiadas. 
      </StaticInfoP>
      <StaticInfoP>
      Una propuesta de ley es un texto que aún no se presentó formalmente en la Cámara, sino que está en un estado de investigación previa, es un “ante-proyecto de ley”.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Los diputados leen los comentarios?
      </StaticInfoBold>
      <StaticInfoP>
      Si, los diputados y diputadas junto a sus equipos de trabajo involucrados en la plataforma administran y moderan sus proyectos, leen y analizan los comentarios, y aceptan los cambios que consideran necesarios.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
      ¿Cómo puedo saber qué pasó con la propuesta, una vez finalizado el plazo para hacer aportes?
      </StaticInfoBold>
      <StaticInfoP>
      Una vez finalizado el plazo, recibirás una notificación con la versión final de la propuesta. Podrás ingresar al sitio para ver los resultados, con la cantidad de aportes tenidos en consideración y la cantidad de comentarios realizados.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Cómo miden los aportes?
      </StaticInfoBold>
      <StaticInfoP>
      El o la autor/a de la propuesta leerá cada comentario en contexto y, cada vez que genere una nueva versión, seleccionará como “aportes” a los comentarios tenidos en consideración a la hora de efectuar modificaciones.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Me puedo contactar con el diputado? ¿Cómo?
      </StaticInfoBold>
      <StaticInfoP>
      A través de los medios publicados por el sitio web oficial de la H. Cámara de Diputados: https://www.diputados.gov.ar/diputados/listadip.html <a rel='noopener noreferrer' target='_blank' href='https://www.diputados.gov.ar/diputados/listadip.html'>https://www.diputados.gov.ar/diputados/listadip.html </a>
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Puedo presentar una propuesta?
      </StaticInfoBold>
      <StaticInfoP>
      Las propuestas presentadas son autoría de las y los diputados, que luego podrán presentarlos como proyectos de ley en la Mesa de Entradas de la Cámara.
      </StaticInfoP>
      <StaticInfoP>
      Esta facultad de presentar proyectos de ley, la “iniciativa legislativa”, corresponde a diputados, senadores y al presidente de la Nación. La última reforma constitucional de 1994 incorporó también la “iniciativa popular”, que permite a los ciudadanos presentar proyectos de ley ante la Cámara de Diputados, siempre que cumplan con los requisitos de la ley <a rel='noopener noreferrer' target='_blank' href='https://www.google.com/url?q=http://servicios.infoleg.gob.ar/infolegInternet/anexos/40000-44999/41025/norma.htm&sa=D&ust=1541611515633000&usg=AFQjCNHjsQpkJI5VKd8W7_YefO6MsIxU4Q'>24.747.</a>
      </StaticInfoP>
    </StyledDiv>
  </section>
)