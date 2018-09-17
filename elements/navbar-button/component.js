import React from 'react'
import styled from 'styled-components'

const NavbarStyledButton = styled.button`
  max-width: 130px;
  height: 16px;
  color: #4a5d68;
  font-size: 1.4rem;
  color: #5c97bc;
  border-style: none;
  cursor: pointer;
  background:#fff;
/* primary = blue background, secondary = white background 
  color: ${(props) => props.primary ? 'var(--white)' : '#2c4c61'};
  */

`

const NavbarButton = (props) => (
  <NavbarStyledButton {...props} />
)

export default NavbarButton
