import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import NavBar from '../navbar/component'
import Footer from '../footer/component'
import UserContext from '../../components/user-context/component'
import AuthorProjectContainer from '../author-project-container/component'
import UserProjectContainer from '../user-project-container/component'

const API_URL = process.env.API_URL

class GeneralContainer extends Component {
  state = {
    project: null
  }

  async componentDidMount () {
    try {
      const project = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project}/`)).json()
      this.setState({ project })
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    return (
      <Fragment>
        <NavBar />
          <UserProjectContainer project={this.state.project} section={this.props.path} />
        <Footer />
      </Fragment>
    )
  }
}

GeneralContainer.propTypes = {
  project: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default GeneralContainer
