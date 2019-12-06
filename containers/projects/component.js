import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Section from '../section/component'
import Card from '../../components/card/component'
import TitleH2 from '../../elements/title-h2/component'
import SubtitleH3 from '../../elements/subtitle-h3/component'
import Button from '../../elements/button/component'
import getConfig from 'next/config'
import Masonry from 'react-masonry-component';

const { publicRuntimeConfig: { API_URL } } = getConfig()

const masonryOptions = {
  transitionDuration: 0
};


const OptionChoice = styled.div`
display: inline-block;
margin: 0 5px;
font-size: 1.4rem;
padding: 5px 8px;
border-radius: 4px;
border: 1px solid #2c4c61
cursor: pointer
color: #2c4c61;
&:hover{
  background-color: #2c4c61;
  color: #FFF
}
&:first-child{
  margin-left: 0;
}
&:last-child{
  margin-right: 0;
}
&.disabled{
  color: #777;
  border-color: #777;
}
`
const Options = styled.div`
  
`
const OptionLabel = styled.div`
font-size: 1.4rem;
color: #2c4c61;
display: inline-block;
padding: 5px 8px;
&:first-child{
  margin-left: 0;
  padding-left: 0;
}
`
const LoadMoreButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const LoadMoreButton = styled.div`
margin: 0 auto;
font-size: 2.2
rem;
padding: 5px 25px;
border-radius: 4px;
border: 1px solid #2c4c61
cursor: pointer
color: #2c4c61;
&:hover{
  background-color: #2c4c61;
  color: #FFF
}
&:first-child{
  margin-left: 0;
}
&:last-child{
  margin-right: 0;
}
&.disabled{
  color: #777;
  border-color: #777;
}
`
const MessagePaginator = styled.div`
font-size: 2.5rem;
color: #454246;
font-family: var(--bold);
text-align: center;
width: 100%;
`

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      projectsFiltered: [],
      loadMoreAvailable: false,
      loading: true,
      // page: 1,
      // noMore: false,
      query: {
        created: 'DESC',
        limit: 10,
        page: 1,
        closed: null,
      },
      // filter: {
      //   closed: null
      // }
    }
  }

  createQuery = (sort) => {
    let theQuery = '?' +
      Object.keys(sort).map(function (key) {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(sort[key])
      }).join('&');
    console.log(theQuery)
    return theQuery
  }

  async getDocuments() {
    try {
      this.setState({
        loading: true
      }, this.fetchDocuments)
    } catch (error) {
      console.error(error)
    }
  }

  async fetchDocuments() {
    let query = this.createQuery(this.state.query);
    const projects = await (await fetch(`${API_URL}/api/v1/documents${query}`)).json()
    // let mergedProjects = this.state.projects.concat(projects.results)
    // const projectsFiltered = mergedProjects.filter((p) => {
    //   if (this.state.query.closed !== null) {
    //     return (this.state.query.closed === p.closed) && p
    //   }
    //   return p
    // })
    this.setState((prevState) => {
      let query = prevState.query
      query.page = projects.pagination.page + 1
      return {
        projects: prevState.projects.concat(projects.results),
        // projectsFiltered: projects.results,
        loadMoreAvailable: projects.pagination.page < projects.pagination.pages,
        query: query,
        loading: false
      }
    })
  }

  async componentDidMount() {
    this.getDocuments()
  }

  toggleSort = (parameter, value) => {
    let newQuery = this.state.query
    newQuery[parameter] = value
    newQuery.page = 1
    this.setState({
      projects: [],
      query: newQuery
    }, () => {
      this.getDocuments()
    })
  }

  // toggleFilter = (parameter, value) => {
  //   let newQuery = this.state.query
  //   let newFilter = this.state.filter
  //   newFilter[parameter] = value
  //   newQuery.page = 1
  //   this.setState({
  //     projects: [],
  //     filter: newFilter,
  //     query: newQuery
  //   }, () => {
  //     this.getDocuments()
  //   })
  // }

  render() {
    const {
      projects,
      query,
      loadMoreAvailable,
      loading
    } = this.state
    return (
      <Section id='projects' noMargin>
        <TitleH2>Propuestas de ley abiertas para la co-creación.</TitleH2>
        <SubtitleH3>Estas son las propuestas y proyectos de ley disponibles para leer y aportar . ¡Ayude a mejorarlas!</SubtitleH3>
        <Options>
          <OptionLabel>Ordenar</OptionLabel>
          {query.created === 'ASC' && <OptionChoice onClick={() => this.toggleSort('created', 'DESC')}>Fecha de creación <b>ASC</b></OptionChoice>}
          {query.created === 'DESC' && <OptionChoice onClick={() => this.toggleSort('created', 'ASC')}>Fecha de creación <b>DESC</b></OptionChoice>}
          <OptionLabel>Filtrar</OptionLabel>
          {query.closed === null && <OptionChoice className='disabled' onClick={() => this.toggleSort('closed', true)}>Por periodo</OptionChoice>}
          {query.closed === true && <OptionChoice onClick={() => this.toggleSort('closed', false)}>Periodo <b>FINALIZADOS</b></OptionChoice>}
          {query.closed === false && <OptionChoice onClick={() => this.toggleSort('closed', null)}>Periodo <b>ABIERTOS</b></OptionChoice>}
        </Options>
        {projects &&
          <Fragment>
            <Masonry
              style={{ width: '100%', margin: '4.8rem 0 1.6rem' }}
              options={masonryOptions}>
              {projects.map((p, i) => (
                <Card project={p} key={i} />
              ))}
            </Masonry>
          </Fragment>
        }
        {
          !loading && loadMoreAvailable && <LoadMoreButtonContainer>
            <LoadMoreButton onClick={() => this.getDocuments()}>Cargar más</LoadMoreButton>
          </LoadMoreButtonContainer>
        }
        {
          loading && <MessagePaginator>Cargando...</MessagePaginator>
        }
        {
          !loading && !loadMoreAvailable  &&
          <MessagePaginator>No hay más propuestas de leyes</MessagePaginator>
        }
      </Section>
    )
  }
}

export default Projects
