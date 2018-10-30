/* eslint react/prop-types: 0 */

import React, { Component, Fragment } from 'react'
import CommentCounterWrapper from './comment-wrapper'
import CommentMark from './comment-mark'

export const CommentCounterContext = React.createContext({
    addId: null,
    removeId: null,
  })

export default (options) => {
  return {
    renderMark (props, editor, next) {
      if (props.mark.type === 'comment') return <CommentMark {...props} />
      return next()
    },
    renderEditor: (props, editor, next) => 
      <CommentCounterWrapper
        onClick={options.onClick}>
        { next() }
      </CommentCounterWrapper>
  }
}
