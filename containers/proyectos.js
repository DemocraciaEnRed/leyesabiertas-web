import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { Section, TitleH2, SubtitleH3, Grid } from 'democracyos-ui'
const API_KEY = process.env.API_KEY

export default class extends Component {
  state = {
    projects: null
  }

  async componentDidMount () {
    try {
      const projects = await (await fetch(`https://my.api.mockaroo.com/projects.json?key=${API_KEY}`)).json()
      this.setState({ projects })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { projects } = this.state
    return (
      <Section>
        <TitleH2>Proyectos en debate</TitleH2>
        <SubtitleH3>Estos son los proyectos que podes mirar y comentar para ayudar a hacerlos lo mejor posible.</SubtitleH3>
        { projects &&
          <Grid projects={projects} />
        }
      </Section>
    )
  }
}
