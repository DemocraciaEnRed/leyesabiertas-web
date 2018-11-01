import styled from 'styled-components'
import React from 'react'

const Label = styled.span`
  width: 95px;
  height: 20px;
  border-radius: 4px;
  background-color: #e3effa;
  font-size: 1.0rem;
  font-weight: 500;
  color: #4a5d68;
  padding: 5px 8px;
  text-transform: uppercase;
  align-self: flex-end;
  margin-bottom: 8px;
`

const BetaLabelContainer = styled.div`
  width:33%;
  display:flex;
  align-items:flex-end;
  `

const BetaLabel = () => (
  <BetaLabelContainer>
    <Label>Versión beta</Label>
  </BetaLabelContainer>
)

export default BetaLabel
