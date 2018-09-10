import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import ProjectBar from '../../elements/project-bar/component'
import ProjectBanner from '../../elements/project-banner/component'
const API_KEY = process.env.API_KEY

class ProjectContainer extends Component {
  state = {
    project: null
  }

  async componentDidMount () {
    try {
      const project = await (await fetch(`https://my.api.mockaroo.com/projects/${this.props.project}.json?key=${API_KEY}`)).json()
      this.setState({ project }, () => console.log(this.state.project))
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
        <ProjectBanner img={project.img} />
      </div>
    )
  }
}

ProjectContainer.propTypes = {
  project: PropTypes.string.isRequired
}

export default ProjectContainer
