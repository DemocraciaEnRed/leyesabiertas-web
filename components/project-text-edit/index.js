/* eslint react/prop-types: 0 */

import React, { Fragment } from 'react'
import Toolbar from './toolbar'
import { renderMark, renderNode } from './renders'

export default () => ({
  renderNode,
  renderMark,
  renderEditor: (props, editor, next) => {
    if (props.readOnly === true) return null

    const children = next()

    return (
      <Fragment>
        <Toolbar editor={editor} />
        {children}
      </Fragment>
    )
  }
})
