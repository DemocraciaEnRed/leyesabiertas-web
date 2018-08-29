import React from 'react'
import styled from 'styled-components'
import { 
  HeroTitle,
  HeroSubtitle, 
  HeroButton
} from 'ui'

const Hero = styled.div`
  margin: 105px 80px 55px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const HeroTextWrapper = styled.div`
  max-width: 630px;
  > button {
    margin: 37px 0;
  }
`

export default () => (
  <Hero>
    <HeroTextWrapper>
      <HeroTitle>Ciudadanos y Representantes juntos para crear mejores leyes.</HeroTitle>
      <HeroSubtitle>Sus sugerencias son importantes y serán tenidas en cuenta  por los especialistas y parlamentaristas.</HeroSubtitle>
      <HeroButton>Como participo</HeroButton>
    </HeroTextWrapper>
  </Hero>
)
