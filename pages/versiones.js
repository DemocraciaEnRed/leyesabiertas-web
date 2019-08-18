import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import GeneralContainer from '../containers/general-container/component'

class Versiones extends Component {
  static getInitialProps ({ pathname, query }) {
    return {
      id: query.id,
      path: pathname
    }
  }

  render () {
    const { path, id } = this.props
    return (
      <Fragment>
        <GeneralContainer project={id} path={path} />
      </Fragment>
    )
  }
}

Versiones.propTypes = {
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default Versiones
