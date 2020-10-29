import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ApoyarFormulario from '../../components/apoyar-formulario/component'
import getConfig from 'next/config'
const { publicRuntimeConfig: { API_URL } } = getConfig()

const StyledButton = styled.button`
  border: none;
  padding: 10px 40px;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: ${(props) => props.active ? '#4a5d68' : '#FFF'};
  background-color: ${(props) => props.active ? 'white' : '#5c97bc'};
  font-family: ${(props) => props.active ? 'var(--bold)' : 'var(--regular)'};
  cursor: pointer;
  font-weight: bold;
  :hover{}
  @media(max-width:700px){
    padding: 10px 9px;
  }

  img {
    position: absolute;
    top: 8px;
    @media(max-width:700px){
      display: none
    }
  }
`

const Text = styled.span`
  margin-left: 25px;
  @media(max-width:700px){
    margin-left: 0;
  }
`
const TextCount = styled.span`
  @media(max-width:700px){
    display: none
  }
`

const WrapperDiv = styled.div`
  position: relative; /*para que funcione el absolute del formulario popup*/
  float: right;
`

const ModeBarApoyarButton = (props) => {
  // react hooks
  const [showFormulario, setShowFormulario] = useState(false);

  function toggleFormulario() {
    setShowFormulario(!showFormulario)
  }

  const { project } = props

  if (!project) return null

  return <WrapperDiv>
    <StyledButton {...props} onClick={toggleFormulario}>
      <img src={`${'/static/assets/apoyar-icon.svg'}`} />
      <Text>Quiero Apoyar<TextCount> ({project._id&&200})</TextCount></Text>
    </StyledButton>
    <ApoyarFormulario {...props} show={showFormulario} toggleFormulario={toggleFormulario }/>
  </WrapperDiv>
}

export default ModeBarApoyarButton
