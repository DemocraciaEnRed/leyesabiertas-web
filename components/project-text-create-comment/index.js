/* eslint react/prop-types: 0 */

import React, { Component, Fragment } from 'react'
import AddCommentWrapper from './add-comment-wrapper'
import HighlightMark from '../../elements/highlight-mark/component'


export default (options) => {
  return {
    renderMark: (props, editor, next) => {
      switch (props.mark.type) {
        case 'highlight':
          return <HighlightMark {...props} />
        default:
          return next()
      }
    },
    renderEditor: (props, editor, next) => 
      <AddCommentWrapper editor={editor} id={options.id}>
        { next() }
      </AddCommentWrapper>
  }
}
