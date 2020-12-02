import React from 'react'
import styled from 'styled-components'
// import { ArticlesContext } from '../../containers/user-project-container/component'
import Link from 'next/link'

const StyledLinkButton = styled.button`
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: ${(props) => props.active ? '#FFF' : '#4a5d68'};
  background-color: ${(props) => props.active ? '#5c97bc' : 'white'};
  font-family: ${(props) => props.active ? 'var(--bold)' : 'var(--regular)'};
  &:hover{
    cursor: pointer;
    background-color: #5c97bc;
    color: #FFF;
    font-family: var(--bold);
  }
  @media(max-width:700px){
    padding: 10px 9px;
  }
`

const ModeBarLinkButton = (props) => (
  <Link href={props.href}>
    <StyledLinkButton {...props}>
      {props.children}
    </StyledLinkButton>
  </Link>

)

export default ModeBarLinkButton
