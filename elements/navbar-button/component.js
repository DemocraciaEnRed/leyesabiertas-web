import React from 'react'
import styled from 'styled-components'

const NavbarStyledButton = styled.button`
  max-width: 130px;
  height: 16px;
  font-size: 1.4rem;
  color: #5c97bc;
  border-style: none;
  padding-left:1.5rem;
  text-transform:uppercase;
  cursor: pointer;
  background:#fff;
  color: ${(props) => props.primary ? '#5c97bc' : '#4a5d68'};

`

const NavbarButton = (props) => (
  <NavbarStyledButton {...props} />
)

export default NavbarButton
