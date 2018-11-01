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

  async componentDidMount () {
    try {
      let project = null
      if (this.props.authContext.authenticated) {
        project = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project}/`, {
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
          }
        }
        )).json()
      } else {
        project = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project}/`)).json()
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
        <UserProjectContainer project={this.state.project} section={this.props.path} />
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
