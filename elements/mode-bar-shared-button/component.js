import React, { useState, useImperativeHandle, forwardRef } from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { shareAlt } from "react-icons-kit/fa";
import ModeBarLinkButton from '../mode-bar-link-button/component'
import SharerSocial from '../../elements/sharer-social/component'
import getConfig from 'next/config'
const { publicRuntimeConfig: { API_URL } } = getConfig()

const SharerButton = styled.button`
cursor:pointer;
border: none;
padding:9px 20px;
//text-transform: uppercase;
font-size: 1.4rem;
color:#567B9A;
background-color: ${(props) => props.active ? '#567B9A' : 'white'};
font-family: ${(props) => props.active ? 'var(--bold)' : 'var(--regular)'};
@media(max-width:760px){
    padding:9px;
  }
`

const SharerSpan = styled.span`
font-family: var(--bold);
margin-right:8px
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
  
`

const ModeBarSharedButton = forwardRef((props, ref) => {
  // react hooks
  const [showSocialShared, setshowSocialShared] = useState(localStorage.getItem('hide-apoyar-form') ? false : true);
  const { toogleForm }= props

  function toggleSocial() {
    setshowSocialShared(!showSocialShared)
    toogleForm(props)
  }

  useImperativeHandle(ref, () => ({
    close: () => {
      setshowSocialShared(false)
    }
  }))
  const { project } = props

  if (!project) return null

  return <WrapperDiv>
    <SharerButton {...props} onClick={toggleSocial}>
      <SharerSpan>
        Compartir proyecto
      </SharerSpan>
      <Icon icon={shareAlt} size={window.innerWidth > 760 ? 14 : 10} />
    </SharerButton>
    { showSocialShared && <SharerSocial id={project._id} /> }
  </WrapperDiv>
})

export default ModeBarSharedButton
