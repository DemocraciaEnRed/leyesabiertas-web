import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavBar from '../navbar/component'
import Footer from '../footer/component'
import WithUserContext from '../../components/with-user-context/component'
import SecondaryNavbar from '../../containers/secondary-navbar/component'
import UserProjectContainer from '../user-project-container/component'
import getConfig from 'next/config'

const { publicRuntimeConfig: { API_URL }} = getConfig()

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  min-height:100vh;
`

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

  apoyarProyecto = async (anonData) => {
    // anonData == {token, nombre_apellido, email, captcha}
    const { authenticated, keycloak } = this.props.authContext
    const { project } = this.state

    if (!project)
      return

    let projectId = project.document._id
    let url
    let headers = { 'Content-Type': 'application/json' }
    let body

    if (authenticated && keycloak && keycloak.token){
      url = `${API_URL}/api/v1/documents/${projectId}/apoyar`
      Object.assign(headers, {
        Authorization: `Bearer ${keycloak.token}`
      })
      body = {}
    } else {
      url = `${API_URL}/api/v1/documents/${projectId}/apoyar-anon`
      body = {
        token: anonData.token,
        nombre_apellido: anonData.nombre_apellido,
        email: anonData.email,
        captcha: anonData.captcha,
      }
    }

    return fetch(url, {
      headers,
      method: 'POST',
      body: JSON.stringify(body)
    }).then(async (res) => {
      if (res.status == 200)
        this.fetchDocument(projectId, keycloak && keycloak.token)
      return res
    })
  }

  render () {
    return (
      <Wrapper>
        <div>
          <NavBar />
          <SecondaryNavbar />
        </div>
        <UserProjectContainer
          project={this.state.project}
          section={this.props.path}
          fetchDocument={this.fetchDocument}
          apoyarProyecto={this.apoyarProyecto}
          />
        <Footer />
      </Wrapper>
    )
  }
}

GeneralContainer.propTypes = {
  project: PropTypes.string.isRequired,
  // authContext: PropTypes.object,
  path: PropTypes.string.isRequired
}

export default WithUserContext(GeneralContainer)
