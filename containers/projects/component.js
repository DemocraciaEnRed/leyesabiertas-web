import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Section from '../section/component'
import Card from '../../components/card/component'
import TitleH2 from '../../elements/title-h2/component'
import SubtitleH3 from '../../elements/subtitle-h3/component'
import Button from '../../elements/button/component'
const API_KEY = process.env.API_KEY

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4.8rem 0 1.6rem;
  > div {
    margin-bottom: 56px;
  }
  @media (max-width: 1400px) {
    justify-content: space-around;
  }
`

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: null,
      page: 1,
      noMore: false
    }
  }

  async componentDidMount () {
    try {
      const projects = await (await fetch(`https://my.api.mockaroo.com/projects.json?key=${API_KEY}`)).json()
      this.setState({ projects })
    } catch (error) {
      console.error(error)
    }
  }

  fetchMoreProjects = async () => {
    try {
      const projects = await (await fetch(`https://my.api.mockaroo.com/projects.json?key=${API_KEY}&page=${this.state.page + 1}`)).json()
      this.setState((prevState) => ({
        projects: [...prevState.projects].concat(projects),
        page: prevState.page + 1,
        noMore: projects.length < 6 || prevState.page === 2
      }))
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const {
      projects,
      noMore
    } = this.state
    return (
      <Section id='projects'>
        <TitleH2>Propuestas de ley abiertas para lo co-creación.</TitleH2>
        <SubtitleH3>Estas son las propuestas disponibles para leer, comentar y hacer aportes . ¡Ayude a mejorarlos!</SubtitleH3>
        { projects &&
          <Fragment>
            <Grid>
              { projects.map((p, i) => (
                <Card project={p} key={i} />
              ))}
            </Grid>
            {!noMore &&
              <Button
                primary center
                onClick={this.fetchMoreProjects}>
                  Ver más propuestas
              </Button>
            }
          </Fragment>
        }
      </Section>
    )
  }
}

export default Projects
