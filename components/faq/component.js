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
        ¿Cuál es la diferencia entre proyecto de ley y una propuesta de ley?
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
        ¿Los diputados y las diputadas leen los comentarios?
      </StaticInfoBold>
      <StaticInfoP>
      Si, los diputados y las diputadas junto a sus equipos de trabajo involucrados en la plataforma administran y moderan sus propuestas. Leen y analizan los comentarios para realizar cambios que consideran necesarios para mejorar la propuesta de ley.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
      ¿Cuál es el plazo para realizar comentarios?
      </StaticInfoBold>
      <StaticInfoP>
      El plazo para realizar comentarios es diferente en cada propuesta de ley y estará indicada al inicio de la propuesta.
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
        ¿Cómo se miden los aportes?
      </StaticInfoBold>
      <StaticInfoP>
      Los diputados y las diputadas con sus equipos leerán los comentarios y sugerencias. A medida que el proyecto avanza seleccionarán como aportes los comentarios tenidos en cuenta a la hora de efectuar modificaciones para una nueva versión del futuro proyecto.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Me puedo contactar con el diputado? ¿Cómo?
      </StaticInfoBold>
      <StaticInfoP>
      A través de los medios publicados por el sitio web oficial de la H. Cámara de Diputados: <u><a rel='noopener noreferrer' target='_blank' href='https://www.diputados.gov.ar/diputados/listadip.html'>https://www.diputados.gov.ar/diputados/listadip.html</a></u>
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Puedo presentar una propuesta?
      </StaticInfoBold>
      <StaticInfoP>
      Las propuestas presentadas son autoría de los diputados y las diputadas, que luego podrán presentarlos como proyectos de ley en la Mesa de Entradas de la Cámara.
      </StaticInfoP>
      <StaticInfoP>
      Esta facultad de presentar proyectos de ley, la “iniciativa legislativa”, corresponde a diputados, senadores y al presidente de la Nación. La última reforma constitucional de 1994 incorporó también la “iniciativa popular”, que permite a los ciudadanos presentar proyectos de ley ante la Cámara de Diputados, siempre que cumplan con los requisitos de la ley <a rel='noopener noreferrer' target='_blank' href='http://servicios.infoleg.gob.ar/infolegInternet/anexos/40000-44999/41025/norma.htm'><u>24.747</u>.</a>
      </StaticInfoP>
    </StyledDiv>
  </section>
)
