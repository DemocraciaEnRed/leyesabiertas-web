import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import ProjectBar from '../../elements/project-bar/component'
import ProjectHeader from '../../components/project-header/component'
import ProjectBody from '../../components/project-body/component'
import ProjectComments from '../../components/project-comments/component'

const API_URL = process.env.API_URL

class ProjectContainer extends Component {
  state = {
    project: null
  }

  async componentDidMount () {
    try {
      const result = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project}/`)).json()
      this.setState({ project: result })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { project } = this.state
    if (!project) return null
    return (
      <div>
        <ProjectBar />
        <ProjectHeader project={project.document} />
        <ProjectBody project={project.document} />
        <ProjectComments project={project.document} />
      </div>
    )
  }
}

ProjectContainer.propTypes = {
  project: PropTypes.string.isRequired
}

export default ProjectContainer
