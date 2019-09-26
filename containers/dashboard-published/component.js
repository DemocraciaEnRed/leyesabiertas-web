import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Card from '../../components/card/component'
import TitleH2 from '../../elements/title-h2/component'
import SubtitleH3 from '../../elements/subtitle-h3/component'
import Button from '../../elements/button/component'
import getConfig from 'next/config'

const { publicRuntimeConfig: { API_KEY }} = getConfig()

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4.8rem 0 1.6rem;

    // @media (max-width: 1400px) {
    //   justify-content: space-around;
    // }
`
const Section = styled.section`
  padding: 8.4rem 7%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  background-color: #f2f5f8;
  }
`
class DashboardPublished extends Component {
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
        <TitleH2>Proyectos publicados del bloque</TitleH2>
        <SubtitleH3>Más comentados</SubtitleH3>
        { projects &&
          <Fragment>
            <Grid>
              { projects.map((p, i) => (
                <Card project={p} key={i} />
              ))}
            </Grid>
            {!noMore &&
              <Button
                center
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

export default DashboardPublished
