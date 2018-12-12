import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledEditorTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.42;
  color: #5c97bc;
  margin-bottom: 2.6rem;
  margin-top: 2rem;
`

const EditorTitle = ({ children }) => (
  <StyledEditorTitle>
    { children }
  </StyledEditorTitle>
)

export default EditorTitle