/* eslint react/prop-types: 0 */

import React, { Fragment } from 'react'
import CommentCounter from '../../elements/comment-counter/component'
import CommentMark from '../../elements/comment-mark/component'

export default () => {
  return {
    renderMark (props, editor, next) {
      const { children, mark, attributes } = props

      switch (mark.type) {
        case 'comment':
          return <CommentMark
            id={props.mark.toJSON().data['data-id']}
            onMouseEnter={(e) => console.log(e)}
            onMouseLeave={(e) => console.log(e)}
            onClick={(e) => console.log(e)}
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
          <CommentCounter
            count={5}
            top={0}
            left={0} />
          {children}
        </Fragment>
      )
    }
  }
}
