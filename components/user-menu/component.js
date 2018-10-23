import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'


const StyledUl = styled.ul`
  width: 200px;
  height: 154px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e9e9e9;
  background-color: #f6f6f6;
  display:flex;
  flex-direction:column;
  align-content: space-between;
  flex-wrap: wrap;
  right: 1;
  margin-top:42px;
  margin-left:20px;
  position: absolute;
  z-index: 99;
  list-style:none;
  :before {
    content: "";
    position: absolute;
    border-style: solid;
    border-color: #e9e9e9 transparent;
    display: block;
    width: 0;
    top: -13px;
    bottom: auto;
    left: auto;
    right: 9px;
    border-width: 0 13px 13px;
  }
  :after{ 
    content: "";
    position: absolute;
    border-style: solid;
    border-color: #f6f6f6 transparent;
    display: block;
    width: 0;
    top: -12px;
    bottom: auto;
    left: auto;
    right: 9px;
    border-width: 0 13px 13px;
    }
`

const Li = styled.li`
  border-bottom:1px solid #dae1e7;
  &:last-child{
    border:none;
  }
`

const StyledA = styled.a`
 height:5rem;
 font-size:1.6rem;
 color: #101a21;
 align-items:center;
 display:flex;
 padding-left:3rem;
 &:hover{
   background:#f6f6f0;
 }

`

const Usermenu = () => (

  <StyledUl>
    <Li>
      <StyledA>Mi perfil</StyledA>
    </Li>
    <Li>
      <StyledA>Ayuda</StyledA>
    </Li>
    <Li>
      <StyledA onClick={this.props.authContext.logout}>Cerrar sesión</StyledA>
    </Li>
  </StyledUl>
)

export default Usermenu
