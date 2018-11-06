/* eslint react/prop-types: 0 */

import React, { Fragment } from 'react'
import { renderMark, renderNode } from './renders'
import EditModeWrapper from './edit-mode-wrapper'

export default ({ id, field, isAuthor }) => {
  let editorTools = {}
  if (isAuthor) {
  editorTools.renderEditor = (props, editor, next) => {
      const children = next()
      if (!isAuthor) return children

      return (
        <EditModeWrapper
          editor={editor}
          field={field}
          id={id}>
          {children}
        </EditModeWrapper>
      )
    }
  }

  return {
    renderNode,
    renderMark,
    ...editorTools
  }
}
