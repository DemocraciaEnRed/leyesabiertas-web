import React from 'react'
import styled from 'styled-components'
import { TitleH2 } from 'ui'

const Participar = styled.section`
  &:nth-child(even) {
    > h2 {
      color: var(--white);
    }
  }
`

export default () => (
  <Participar>
    <TitleH2>Como participar</TitleH2>
  </Participar>
)