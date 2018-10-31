/* eslint react/prop-types: 0 */

import React, { Component, Fragment } from 'react'
import AddCommentWrapper from './add-comment-wrapper'

export default (options) => {
  return {
    renderEditor: (props, editor, next) => 
      <AddCommentWrapper editor={editor} reset={options.reset}>
        { next() }
      </AddCommentWrapper>
  }
}
