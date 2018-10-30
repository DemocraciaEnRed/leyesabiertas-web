/* eslint react/prop-types: 0 */

import React, { Fragment } from 'react'
import CommentCounter from '../../elements/comment-counter/component'
import CommentMark from '../../elements/comment-mark/component'

export default (options) => {
  return {
    renderMark (props, editor, next) {
      const { children, mark, attributes } = props

      switch (mark.type) {
        case 'comment':
          return <CommentMark
            id={props.mark.toJSON().data['data-id']}
            onMouseEnter={options.onMouseEnter}
            onMouseLeave={options.onMouseLeave}
            {...props} />
        default:
          return next()
      }
    },
    renderEditor: (props, editor, next) => {
      if (props.readOnly === true) return null

      const children = next()

      return (
        <Fragment>
          {
            options.count > 0 &&
              <CommentCounter
                count={options.count}
                top={options.top}
                left={options.left} />
          }
          <div onClick={options.onClick}>
            {children}
          </div>
        </Fragment>
      )
    }
  }
}
