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
    name: 'Políticas de privacidad',
    value: '#politicas'
  }
]

const scroll = (target) => (e) => {
  jump(target)
}

export default () => (
  <StyledStaticInfo>
    <StaticInfoWrapper style={{marginTop:'0', width:'100%'}}>
      <section>
        <StaticInfoTitle>
      Políticas de privacidad
        </StaticInfoTitle>
        <StaticInfoBold>
      Descripción
        </StaticInfoBold>
        <StaticInfoP>
        El presente documento describe las Políticas de privacidad aplicables al uso de la Plataforma de Elaboración Colaborativa de Propuestas de Ley de diputadas/os nacionales (en adelante, la <em>“Plataforma”</em>) de la Honorable Cámara de Diputados de la Nación Argentina. (en adelante, la <em>“HCDN”</em>).
        </StaticInfoP>
        <StaticInfoP>
        Cualquier persona (en adelante el “Usuario”) que desee usar la plataforma, deberá leer, entender y aceptar todas las condiciones generales establecidas por los Términos y Condiciones de Uso, la Política de Privacidad junto con las demás políticas y principios.
        </StaticInfoP>
        <div id='politicas'>
          <StaticInfoBold>
        Políticas de privacidad
          </StaticInfoBold>
          <StaticInfoP>
            La recolección y tratamiento de los datos personales tiene como finalidad conocer más sobre el uso de la Plataforma, para mejorar la propuesta.
          </StaticInfoP>
          <StaticInfoP>
            La HCDN no cederá a ninguna otra persona ni organismo los datos personales de los usuarios que se registren, salvo orden judicial en contrario.
          </StaticInfoP>
          <StaticInfoP>
            La administración de la Plataforma garantiza la debida protección integral de los datos personales almacenados, así como también el acceso a la información personal que se registre, de conformidad a lo establecido en el artículo 43, párrafo tercero de la Constitución Nacional y la Ley N° 25.326 de Protección de los Datos Personales.
          </StaticInfoP>
          <StaticInfoP>
            Los Usuarios se comprometen a notificar de inmediato al correo <a href='mailto:leyesabiertas@hcdn.gob.ar'>leyesabiertas@hcdn.gob.ar</a>, cualquier uso no autorizado de su cuenta o cualquier otra situación que pudiera ir contra la seguridad del sitio, como así también de casos de cyberbullying, cyberstalking, cybergrooming y/o cualquier otra situación de hostigamiento, discriminación o acoso.
          </StaticInfoP>
          <StaticInfoP>
            <u><em>Información proporcionada por las/os usuarias/os</em></u>
          </StaticInfoP>
          <StaticInfoP>
          El uso efectivo de la Plataforma requiere que los usuarios se registren. En ese caso, se les solicitará información personal directa, como nombre y apellido, documento, dirección de correo electrónico y la que nos proporcione indirectamente, tal como cookies (información sobre preferencias del usuario cuando visita una página web), tipo de navegador, página de referencia, avance a través del sitio, dominio ISP, conexiones y sistemas de información. Toda la información de cookies será almacenada en formatos que no permitan identificar a su titular. En el caso de no estar registrado el Usuario, estos datos serán almacenados en forma anónima.
          </StaticInfoP>
          <StaticInfoP>
          El perfil del Usuario visible públicamente puede incluir el nombre y la foto seleccionada.
          </StaticInfoP>
          <StaticInfoP>
          La HCDN puede compartir sus datos personales con terceros, tales como proveedores de servicios de programación, administradores de páginas web y managers de cuentas en redes sociales, ejecutores de proyectos, como parte del desarrollo del proyecto, respetando las condiciones de esta política de privacidad.
          </StaticInfoP>
          <StaticInfoP>
          Asimismo, si un Usuario se pone en contacto con la Administración de la Plataforma, es posible que la comunicación quede registrada para poder resolver más fácilmente cualquier incidencia que se pueda haber producido.
          </StaticInfoP>

          <StaticInfoP>
          Las direcciones de correo electrónico sólo se utilizarán para enviar notificaciones sobre el uso de la plataforma, avisos sobre futuras publicaciones y otra información relevante sobre la HCDN. No obstante, cada usuario podrá darse de baja en cualquier momento si así lo desea.
          El Usuario puede ejercer los derechos que como titular de datos personales le asisten (acceso, rectificación, cancelación, oposición, información o revocación). Para tal efecto, puede enviar una comunicación a <a href='mailto:leyesabiertas@hcdn.gob.ar'>leyesabiertas@hcdn.gob.ar</a>.
          </StaticInfoP>
          <StaticInfoP>
          El Usuario deberá garantizar la veracidad de la información personal directa y comunicar a la Plataforma cualquier modificación que se produzca.
          </StaticInfoP>
          <StaticInfoP>
            <u><em>Información obtenida a partir del uso de la plataforma</em></u>
          </StaticInfoP>
          <StaticInfoP>
          La Plataforma puede recopilar información sobre la forma en que los usuarios navegan la plataforma. Entre la información obtenida de esta forma, se incluye el tipo de navegador utilizado, las preferencias de lenguaje y los comentarios que ha realizado.
          </StaticInfoP>
          <StaticInfoP>
          La HCDN podrá compartir información de manera agregada, y en carácter no personal, con el público en general (por ejemplo, mostrar tendencias sobre el uso del sitio).
          </StaticInfoP>
          <StaticInfoP>
          Asimismo, garantiza la debida protección de los datos personales almacenados en esta plataforma web, así como también el acceso a la información registrada en el mismo, de conformidad a lo establecido en el artículo 43, párrafo tercero de la Constitución Nacional y la Ley N° 25.326 de Protección de los Datos Personales.
          </StaticInfoP>
          <StaticInfoP>
            <u><em>Modificaciones a la presente política de privacidad</em></u>
          </StaticInfoP>
          <StaticInfoP>
          Con motivo de la mejora continua de procesos, se realizarán modificaciones y correcciones a esta Política de Privacidad. Se sugiere verificar estos Términos y Condiciones regularmente para consultar los cambios que puedan haber existido
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
