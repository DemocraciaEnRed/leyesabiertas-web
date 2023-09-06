import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { download } from 'react-icons-kit/feather/download'
import StaticInfoWrapper from '../../elements/static-info-wrapper/component'
import StaticInfoNav from '../../elements/static-info-nav/component'
import StaticInfoButton from '../../elements/static-info-button/component'
import ComoParticipar from '../como-participar/component'
import FAQ from '../faq/component'
import SobreLaPlataforma from '../sobre-la-plataforma/component'
import SobreElSitio from '../sobre-el-sitio/component'
import Contacto from '../contacto/component'

const buttons = [
  {
    'name': 'Acerca de',
    'value': 'acerca-de'
  },
  {
    'name': 'Cómo participar',
    'value': 'como-participar'
  },
  {
    'name': 'Preguntas frecuentes',
    'value': 'faq'
  },
  {
    'name': 'Sobre el sitio',
    'value': 'sobre-el-sitio'
  },
  {
    'name': 'Contacto',
    'value': 'contacto'
  }
]

const content = {
  'como-participar': <ComoParticipar />,
  'acerca-de': <SobreLaPlataforma />,
  'faq': <FAQ />,
  'sobre-el-sitio': <SobreElSitio />,
  'contacto': <Contacto />
}

const StyledStaticInfo = styled.div`
`

const BannerWrapper = styled.div`
width:100%;

height: 0;
padding-top: 30%;

background-image: ${(props)=> `url(${props.backgroundImg})`};
background-repeat: no-repeat;
background-size: 100% auto;
background-position: center
`

const selectBackground = (section)=>{
  switch (section){
    case 'como-participar':
      return '/static/assets/images/como_participar.jpg'
    case 'sobre-el-sitio':
      return '/static/assets/images/sobre_el_sitio.jpg'
    case 'faq':
        return '/static/assets/images/preguntas_frecuentes.jpg'
    default:
      return '/static/assets/images/foto_acerca_de.png'
  }
}

const StaticInfo = (props) => (
  <StyledStaticInfo >
    <BannerWrapper backgroundImg={selectBackground(props.section)} />
    <StaticInfoWrapper>
    <StaticInfoNav>
        {buttons.map((button, i) => (
          <StaticInfoButton
            className={props.section === button.value ? 'active' : ''}
            onClick={() => props.changeSection(button.value)}
            key={i}>
            {button.name}
          </StaticInfoButton>
        ))}
        <StaticInfoButton onClick={() => window.open('/static/files/congreso_manual_de_usuario.pdf', '_blank')}>
          <Icon icon={download} size={16} /> Manual de usuario
        </StaticInfoButton>
      </StaticInfoNav>
      {content[props.section]}
      
    </StaticInfoWrapper>
  </StyledStaticInfo>
)

StaticInfo.propTypes = {
  section: PropTypes.string,
  changeSection: PropTypes.func.isRequired
}

export default StaticInfo
