import React from 'react'
import styled from 'styled-components'
import jump from 'jump.js'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoBold from '../../elements/static-info-bold/component'
import StaticInfoP from '../../elements/static-info-p/component'
import StaticInfoList from '../../elements/static-info-list/component'
import StaticInfoWrapper from '../../elements/static-info-wrapper/component'
import StaticInfoNav from '../../elements/static-info-nav/component'
import StaticInfoButton from '../../elements/static-info-button/component'

const StyledStaticInfo = styled.div`
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
`
const buttons = [
  {
    name: 'Acerca de este sitio',
    value: '#acerca-de'
  },
  {
    name: 'Usuarios, obligaciones y condiciones',
    value: '#usuarios'
  }
]

const scroll = (target) => (e) => {
  jump(target)
}

export default () => (
  <StyledStaticInfo>
    <StaticInfoWrapper  style={{marginTop:'0', width:'100%'}}>
      <section>
        <StaticInfoTitle>
      Términos y condiciones
        </StaticInfoTitle>
        <StaticInfoBold>
      Descripción
        </StaticInfoBold>
        <StaticInfoP>
        El presente documento describe los Términos y Condiciones aplicables al uso de la Plataforma de Elaboración Colaborativa de Propuestas de Ley de diputadas/os nacionales (en adelante, la <em>“Plataforma”</em>) de la Honorable Cámara de Diputados de la Nación Argentina. (en adelante, la <em>“HCDN”</em>).
        </StaticInfoP>
        <StaticInfoP>
        Cualquier persona (en adelante el “Usuario”) que desee usar la plataforma, deberá leer, entender y aceptar todas las condiciones generales establecidas por los presentes Términos y Condiciones de Uso, la Política de Privacidad junto con las demás políticas y principios.
        </StaticInfoP>
        <div id='acerca-de'>
          <StaticInfoBold>
      Acerca de este sitio
          </StaticInfoBold>
          <StaticInfoP>
          La <em>Plataforma</em> es una plataforma web promovida por la Honorable Cámara de Diputados de la Nación Nación (en adelante HCDN) a través de su Programa de Modernización Parlamentaria (en adelante “Modernización Parlamentaria”) a fin de incrementar la participación ciudadana en la redacción y creación de proyectos de ley y generar espacios de colaboración entre el Estado, la sociedad civil, el sector privado y la ciudadanía en general, a la hora de diseñar y producir valor público.
          </StaticInfoP>
          <StaticInfoP>
        La Plataforma es un desarrollo basado en <a href='http://democracyos.org/' target='_blank'>DemocracyOS</a>, una plataforma online de código abierto, diseñada para informar, debatir y votar propuestas públicas hacia la construcción de una democracia adaptada al siglo XXI. DemocracyOS es desarrollada por la Fundación <a href='https://democraciaenred.org/' target='_blank'>Democracia en Red</a>.
          </StaticInfoP>
          <StaticInfoP>
            <u><em>Registro</em></u>
          </StaticInfoP>
          <StaticInfoP>
            El ingreso a la Plataforma no requiere registro online previo, el mismo será requerido si el Usuario desea publicar comentarios, sugerir modificaciones a las propuestas o dar apoyo a comentarios o sugerencias de otros usuarios. En ese caso, el Usuario deberá completar un formulario y brindar un correo electrónico.
            El acceso al perfil del Usuario a está protegido con una clave, y sólo el Usuario podrá modificarla.
          </StaticInfoP>
          <StaticInfoP>
            La Plataforma se reserva el derecho de realizar validaciones en relación a la información brindada por el Usuario al momento de la inscripción. En caso de que la información brindada no pueda validarse, la administración de la Plataforma se reserva el derecho de no dar de alta ese Usuario.
          </StaticInfoP>
          <StaticInfoP>
            <u><em>Usuarios</em></u>
          </StaticInfoP>
          <StaticInfoP>
          La Plataforma está destinada únicamente a personas mayores de 16 años cumplidos, de modo que cualquier registro de uso o acceso al Sitio Web por cualquier menor de esa edad no está autorizado. Al registrarse, el Usuario declara y garantiza ser mayor de 16 años.
          </StaticInfoP>
          <StaticInfoP>
          El Usuario debe registrarse usando su nombre. Las cuentas de “bots” u otros registros automáticos no están permitidas. La privacidad de la contraseña de la cuenta del Usuario es de su exclusiva responsabilidad. Ante cualquier ingreso indebido en su cuenta, el Usuario deberá informarlo inmediatamente a través de  <a href='mailto:leyesabiertas@hcdn.gob.ar'>leyesabiertas@hcdn.gob.ar</a>.​
          </StaticInfoP>
          <StaticInfoP>El usuario será responsable por cualquier incumplimiento en el que incurra respecto de los presentes términos y condiciones, pudiendo la administradora de la plataforma, disponer las medidas que estimare convenientes a fin de hacer cesar tal situación.
          </StaticInfoP>
        </div>
        <div id='usuarios'>
          <StaticInfoBold>
            Obligaciones y condiciones de uso
          </StaticInfoBold>
          <StaticInfoP>
          El usuario es responsable del contenido que suba, publique o muestre en la Plataforma, garantizando que el mismo no infringe estos Términos y Condiciones, ni los derechos de terceros, ni viola ninguna ley, reglamento u otra normativa nacional o internacional vigente en la República Argentina. Los Usuarios de la Plataforma aceptarán que el material y/o contenido que suban y/o publiquen podría ser utilizado por otros usuarios de la Plataforma y/o por terceras personas ajenas, y que la <em>HCDN</em> no será responsable en ningún caso por tales utilizaciones. El usuario debe usar la Plataforma en forma correcta y lícita. En caso contrario, la administración de la Plataforma podrá retirar el contenido y/o suspender la cuenta de quienes incurran en actitudes contrarias a estos términos y condiciones y/o de la política de privacidad, ofensivas, ilegales, violatorias de derechos de terceros, contrarias a la moral y/o amenazas para la seguridad de otros usuarios. En relación a los aportes, colaboraciones y comentarios que las/os usuarias/os realicen en las propuestas para de ley, las mismas no son de carácter vinculante, obligatorio y/o impositivo sobre las acciones de la <em>HCDN</em>.
          </StaticInfoP>
          <StaticInfoP>
            <u><em>Actividades prohibidas</em></u>
          </StaticInfoP>
          <StaticInfoP>
          Las siguientes actividades se encuentran vedadas, sin perjuicio de las prohibiciones generales expuestas anteriormente:
          </StaticInfoP>
          <StaticInfoList>
            <li>Hostigar, acosar, amenazar a otros Usuarios.</li>
            <li>Infringir los derechos a la intimidad de otros Usuarios.</li>
            <li>Solicitar información personal identificable de otros Usuarios con el propósito de hostigar, atacar, explotar o violar la intimidad de los mismos.</li>
            <li>Publicar injurias o calumnias de manera intencionada o con conocimiento.</li>
            <li>Publicar, con el intento de engañar, contenido que es falso o inexacto.</li>
            <li>Intentar usurpar la identidad de otro Usuario, representando de manera falsa su afiliación con cualquier individuo o entidad, o utilizar el nombre de otro Usuario con el propósito de engañar, difamar o de otra forma incurrir en una conducta ilegal o inapropiada.</li>
            <li>Promover, defender o mostrar pornografía, obscenidad, vulgaridad, blasfemia, odio, fanatismo, racismo y/o violencia.</li>
            <li>Vulnerar los derechos establecidos en la Ley N° 25.326 de Protección de Datos Personales.</li>
            <li>Infringir mediante toda publicación cualquier ley, norma, reglamento u otra disposición legal.</li>
          </StaticInfoList>
          <StaticInfoP>
        En caso de sufrir alguna de estas situaciones, comunicarse inmediatamente con la administración de la Plataforma través de <a href='mailto:leyesabiertas@hcdn.gob.ar'>leyesabiertas@hcdn.gob.ar</a>.
          </StaticInfoP>
          <StaticInfoP>
            <u><em>Moderación de las iniciativas</em></u>
          </StaticInfoP>
          <StaticInfoP>
          Cada iniciativa/propuesta publicada en la Plataforma tendrá un/a moderador/a responsable de hacer cumplir estos Términos y Condiciones de uso. Fomentamos un diálogo franco y abierto, pero manteniendo el nivel de la discusión, evitando afrentas a personas o instituciones, cualquier tipo de material comercial no relacionado (SPAM) u otros desvíos de la intención original de la Plataforma.
          </StaticInfoP>
          <StaticInfoP>
          Aún así, la moderación se reserva el derecho de:
          </StaticInfoP>
          <StaticInfoList>
            <li>Rechazar o eliminar contenido que no cumpla con estos Términos y Condiciones de uso o que, de alguna forma, sea cuestionable.</li>
            <li>Quitar el acceso a quien no cumpliera, de alguna forma, con estos Términos y Condiciones de uso.</li>
          </StaticInfoList>
          <StaticInfoP>
            <u><em>Ley aplicable y jurisdicción del Sitio Web</em></u>
          </StaticInfoP>
          <StaticInfoP>
          Los Términos y Condiciones aquí presentados será competente la Justicia Nacional en lo Contencioso Administrativo Federal con asiento en la Ciudad de Buenos Aires.
          </StaticInfoP>
          <StaticInfoP>
          El solo ingreso a la plataforma implicará la aceptación completa e incondicionada de los Términos y Condiciones de Uso que la rigen.
          </StaticInfoP>
          <StaticInfoBold>
        Limitación de la Responsabilidad
          </StaticInfoBold>
          <StaticInfoP>
          La HCDN no garantiza que el contenido incluido en la Plataforma sea exacto, completo, actual o libre de errores técnicos o tipográficos.
          </StaticInfoP>
          <StaticInfoP>
          La HCDN no se responsabiliza por cualquier daño que resultara por el uso o la inhabilidad en el uso de la Plataforma o cualquiera de los sitios enlazados, o descarga de cualquier información, dato, texto, imagen, video, audio, software u otros materiales accesibles a través del mismo.
          </StaticInfoP>
          <StaticInfoP>
          La HCDN se reserva el derecho de realizar cambios y/o actualizaciones de cualquier información contenida en la Plataforma sin previo aviso.
          </StaticInfoP>
          <StaticInfoP>
          La HCDN no garantiza que las funciones contenidas en la Plataforma estarán libres de interrupciones en el servicio o libres de error, tampoco garantiza inmediatez en la corrección de los defectos.
          </StaticInfoP>
          <StaticInfoP>
          La HCDN se reserva el derecho, a su propia discreción y sin ninguna obligación, de realizar mejoras o corregir cualquier error u omisión en cualquiera de los contenidos publicados.
          </StaticInfoP>
          <StaticInfoP>
          La HCDN no se responsabiliza por el uso indebido que hagan los Usuarios de los contenidos de la Plataforma; entendiéndose por contenidos toda información, dato, texto, imagen, video, audio, software u otros materiales multimedia accesibles a través de ella.
          </StaticInfoP>
          <StaticInfoP>
          La HCDN no asumirá bajo ninguna circunstancia la responsabilidad de cualquier reclamación, daño, pérdida o demanda de ningún tipo con respecto al contenido de la Plataforma, incluyendo, a modo enunciativo, pérdidas directas, indirectas o accidentales (ya sean pérdidas económicas, de datos, o de utilización de los servicios), con independencia de que hayan sido notificadas o no.
          </StaticInfoP>
        </div>
      </section>
      <StaticInfoNav>
        {buttons.map((button, i) => (
          <StaticInfoButton
            onClick={scroll(button.value)}
            key={i}>
            {button.name}
          </StaticInfoButton>
        ))}
      </StaticInfoNav>
    </StaticInfoWrapper>
  </StyledStaticInfo>
)
