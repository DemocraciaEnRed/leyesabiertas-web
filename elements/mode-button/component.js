import React from 'react'
import styled from 'styled-components'
import { ArticlesContext } from '../../containers/user-project-container/component'

const StyledModeButton = styled.button`
  border: none;
  padding: 9px 20px 8px;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #4a5d68;
  background-color: ${(props) => props.active ? '#f2f5f8' : 'white'};
  font-family: ${(props) => props.active ? 'var(--bold)' : 'var(--regular)'};
  &:hover{
    cursor: pointer;
    background-color: #f2f5f8;
  }
`

const ModeButton = (props) => (
  <ArticlesContext.Consumer>
    {({ withComments, switchComments }) => (
      <StyledModeButton
        onClick={switchComments(!withComments)}
        {...props} />
    )}
  </ArticlesContext.Consumer>
)

export default ModeButton
