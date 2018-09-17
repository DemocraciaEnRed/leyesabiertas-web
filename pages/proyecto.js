import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../containers/navbar/component'
import ProjectContainer from '../containers/project-container/component'
import Footer from '../containers/footer/component'

class Proyecto extends Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    return (
      <div>
        <NavBar />
        <ProjectContainer project={this.props.id} />
        <Footer />
      </div>
    )
  }
}

Proyecto.propTypes = {
  id: PropTypes.string.isRequired
}

export default Proyecto
