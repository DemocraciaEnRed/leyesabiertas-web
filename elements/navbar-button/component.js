import React from 'react'
import styled from 'styled-components'

const NavbarStyledButton = styled.button`
  max-width: 130px;
  height: 16px;
  font-size: 1.4rem;
  color: #5c97bc;
  border-style: none;
  cursor: pointer;
  background:#fff;
  color: ${(props) => props.primary ? '#5c97bc' : '#4a5d68'};

`

const NavbarButton = (props) => (
  <NavbarStyledButton {...props} />
)

export default NavbarButton
