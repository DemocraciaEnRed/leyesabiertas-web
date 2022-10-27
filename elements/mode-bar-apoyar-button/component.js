import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ApoyarFormulario from '../../components/apoyar-formulario/component'
import getConfig from 'next/config'
const { publicRuntimeConfig: { API_URL } } = getConfig()

const StyledButton = styled.button`
  border: none;
  padding: 5px 40px 10px 40px;
  font-size: 1.4rem;
  color: ${(props) => props.active ? '#4a5d68' : '#fff'};
  background-color: ${(props) => props.active ? 'white' : '#5c97bc'};
  font-family: ${(props) => props.active ? 'var(--bold)' : 'var(--regular)'};
  cursor: ${(props) => props.project && !props.project.closed ? 'pointer' : 'auto'};
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

`

const CommentaryIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${(props) => `/static/assets/${props.icon}`});
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  margin-left: 8px;
  filter: brightness(10);
  @media(max-width:760px){
    display: none
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
  const [showFormulario, setShowFormulario] = useState(localStorage.getItem('hide-apoyar-form') ? false : true);
  const [hasAnonApoyado, setHasAnonApoyado] = useState(false);

  function toggleFormulario() {
    setShowFormulario(!showFormulario)
  }

  function apoyoAnonExitoso() {
    setHasAnonApoyado(true)
  }

  const { project } = props

  if (!project) return null

  return <WrapperDiv>
    <StyledButton {...props} onClick={!project.closed && toggleFormulario}>
      <Text>
        { project.closed ? 'Apoyos' :
          (project.userIsApoyado ? 'Apoyando' : 'Apoyar proyecto')
        }
      </Text>
      <CommentaryIcon icon='hand-holding-heart-solid.svg' />
    </StyledButton>
    { showFormulario &&
      <ApoyarFormulario
        {...props}
        toggleFormulario={toggleFormulario}
        hasAnonApoyado={hasAnonApoyado}
        apoyoAnonExitoso={apoyoAnonExitoso}
        />
    }
  </WrapperDiv>
}

export default ModeBarApoyarButton
