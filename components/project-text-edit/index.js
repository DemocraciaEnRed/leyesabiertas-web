/* eslint react/prop-types: 0 */

import React, { Fragment } from 'react'
import Toolbar from './toolbar'

export default () => ({
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
