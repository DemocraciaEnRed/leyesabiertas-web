import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import NavBar from '../navbar/component'
import Footer from '../footer/component'
import WithUserContext from '../../components/with-user-context/component'
import SecondaryNavbar from '../../containers/secondary-navbar/component'
import UserProjectContainer from '../user-project-container/component'
import SecondaryFooter from '../../containers/secondary-footer/component'

const API_URL = process.env.API_URL

class GeneralContainer extends Component {
  state = {
    project: null
  }

  componentDidMount () {
    if (!this.props.authContext.keycloak) return
    this.fetchDocument(this.props.project, this.props.authContext.keycloak.token)
  }

  componentWillUpdate (props) {
    if (!props.authContext.keycloak) return
    if (props === this.props) return
    this.fetchDocument(props.project, props.authContext.keycloak.token)
  }

  fetchDocument = async (id, token) => {
    try {
      let project = null
      if (token) {
        project = await (await fetch(`${API_URL}/api/v1/documents/${id}/`, {
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
        )).json()
      } else {
        project = await (await fetch(`${API_URL}/api/v1/documents/${id}/`)).json()
      }
      this.setState({ project })
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    return (
      <Fragment>
        <NavBar />
        <SecondaryNavbar />
        <UserProjectContainer project={this.state.project} section={this.props.path} fetchDocument={this.fetchDocument} />
        <SecondaryFooter />
        <Footer />
      </Fragment>
    )
  }
}

GeneralContainer.propTypes = {
  project: PropTypes.string.isRequired,
  // authContext: PropTypes.object,
  path: PropTypes.string.isRequired
}

export default WithUserContext(GeneralContainer)
