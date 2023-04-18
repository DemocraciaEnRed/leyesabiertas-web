import React from 'react'
import styled from 'styled-components'

const NavbarStyledButton = styled.button`
  height: 22px;
  font-size: ${(props) => props.bigger ? '1.6rem' : '1.4rem'};
  color: #5c97bc;
  border-style: none;
  padding-left:1.5rem;
  padding-bottom:2rem;
  cursor: pointer;
  background:#fff;
  color: ${(props) => props.primary ? '#5c97bc' : '#4a5d68'};
  @media(max-width:760px){
    height:auto;
    padding:0
    font-size: 2.6rem;
    font-family:var(--bold);
    width:100%
    padding: 12px 0 10px 48px
    text-align: start
   }

`

const NavbarButton = (props) => (
  <NavbarStyledButton {...props} onClick={props.onClick} />
)

export default NavbarButton
