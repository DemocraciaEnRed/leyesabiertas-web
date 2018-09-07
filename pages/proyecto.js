import React, { Component } from 'react'
import NavBar from '../containers/navbar/component'
import ProjectContainer from '../containers/project-container/component'
import Footer from '../containers/footer/component'

export default class extends Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    return (
      <div>
        <NavBar />
        <ProjectContainer />
        <Footer />
      </div>
    )
  }
}
