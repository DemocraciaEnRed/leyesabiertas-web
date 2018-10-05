import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../containers/navbar/component'
import { ArticlesContainer } from '../containers/articles-container/component'
import Footer from '../containers/footer/component'

class Proyecto extends Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    return (
      <Fragment>
        <NavBar />
        <ArticlesContainer project={this.props.id} />
        <Footer />
      </Fragment>
    )
  }
}

Proyecto.propTypes = {
  id: PropTypes.string.isRequired
}

export default Proyecto