import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import ProjectBar from '../../elements/project-bar/component'
import ProjectHeader from '../../components/project-header/component'

const API_KEY = process.env.API_KEY

class ProjectContainer extends Component {
  state = {
    project: null
  }

  async componentDidMount () {
    try {
      const project = await (await fetch(`https://my.api.mockaroo.com/projects/${this.props.project}.json?key=${API_KEY}`)).json()
      this.setState({ project })
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
        <ProjectHeader project={project} />
      </div>
    )
  }
}

ProjectContainer.propTypes = {
  project: PropTypes.string.isRequired
}

export default ProjectContainer
