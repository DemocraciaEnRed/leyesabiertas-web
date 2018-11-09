import React from 'react'
import styled from 'styled-components'

const StyledAlert = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.status === 'success' ? '#b8e986' : '#ea5f5f'};
  font-size: 1.6rem;
  color: ${(props) => props.status === 'success' ? '#000000' : '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 4rem;
  cursor: pointer;
  position: absolute;
  right: 2.5rem;
`

const Alert = ({ children, status, dismissAlert }) => (
  <StyledAlert status={status}>
    { children }
    <StyledButton onClick={dismissAlert}>
      &times;
    </StyledButton>
  </StyledAlert>
)

export default Alert
