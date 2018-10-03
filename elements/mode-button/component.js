import React from 'react'
import styled from 'styled-components'
import { ArticlesContext } from '../../containers/articles-container/component'

const StyledModeButton = styled.button`
  height: 45px;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #4a5d68;
`

const ModeButton = (props) => (
  <ArticlesContext.Consumer>
    {({ switchComments }) => (
      <StyledModeButton onClick={switchComments} {...props} />
    )}
  </ArticlesContext.Consumer>
)

export default ModeButton