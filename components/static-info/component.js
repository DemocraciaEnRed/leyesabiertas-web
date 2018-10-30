import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StaticInfoHeader from '../../elements/static-info-header/component'
import StaticInfoWrapper from '../../elements/static-info-wrapper/component'
import StaticInfoNav from '../../elements/static-info-nav/component'
import StaticInfoButton from '../../elements/static-info-button/component'
import ComoParticipar from '../como-participar/component'
import FAQ from '../faq/component'
import SobreLaPlataforma from '../sobre-la-plataforma/component'
import TerminosYCondiciones from '../terminos-y-condiciones/component'

const buttons = [
  {
    'name': 'Cómo participar',
    'value': 'como-participar'
  },
  {
    'name': 'Sobre la plataforma',
    'value': 'sobre-la-plataforma'
  },
  {
    'name': 'Preguntas frecuentes',
    'value': 'faq'
  },
  {
    'name': 'Términos y condiciones',
    'value': 'terminos-y-condiciones'
  }
]

const content = {
  'como-participar': <ComoParticipar />,
  'sobre-la-plataforma': <SobreLaPlataforma />,
  'faq': <FAQ />,
  'terminos-y-condiciones': <TerminosYCondiciones />
}

const StyledStaticInfo = styled.div`
  display: flex;
  justify-content: center;
  background-image: url('/static/assets/header-background.jpg');
  background-repeat: no-repeat;
`

const StaticInfo = (props) => (
  <StyledStaticInfo>
    <StaticInfoWrapper>
      {content[props.section]}
      <StaticInfoNav>
        {buttons.map((button, i) => (
          <StaticInfoButton
            className={props.section === button.value ? 'active' : ''}
            onClick={() => props.changeSection(button.value)}
            key={i}>
            {button.name}
          </StaticInfoButton>
        ))}
      </StaticInfoNav>
    </StaticInfoWrapper>
  </StyledStaticInfo>
)

StaticInfo.propTypes = {
  section: PropTypes.string,
  changeSection: PropTypes.func.isRequired
}

export default StaticInfo
