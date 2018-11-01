/* eslint react/prop-types: 0 */

import React, { Fragment } from 'react'
import { renderMark, renderNode } from './renders'
import EditModeWrapper from './edit-mode-wrapper'

export default ({ selectedCommentsIds }) => ({
  renderNode,
  renderMark,
  renderEditor: (props, editor, next) => {
    if (props.readOnly === true) return null

    const children = next()

    return (
      <EditModeWrapper
        editor={editor}
        selectedCommentsIds={selectedCommentsIds}>
        {children}
      </EditModeWrapper>
    )
  }
})
