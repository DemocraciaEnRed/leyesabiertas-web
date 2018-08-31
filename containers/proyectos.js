import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { Section, TitleH2, SubtitleH3, Grid } from 'ui'
const API_KEY = process.env.API_KEY

const project = {
  img: 'https://images.unsplash.com/photo-1521058798685-39dd95c33314?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca1817a75cc6664f629f2e871589c258&auto=format&fit=crop&w=1050&q=80',
  title: 'Acceso a la educacion pública',
  tagTitle: 'libertad de expresión',
  author: {
    avatarImg: 'https://images.unsplash.com/photo-1535355946948-cb41d6a32d9f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9925bc02f73201ed40a1de2377f7eff0&auto=format&fit=crop&w=698&q=80',
    name: 'Alvarez Rodriguez, María C',
    party: 'Frente para la Victoria - PJ',
  },
  commentaries: 33,
  limitDate: '22/10/1990'
}

const projects = Array(6).fill(project)

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
