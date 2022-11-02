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
import router, {withRouter} from 'next/router'
import Masonry from 'react-masonry-component';
import TagsSelect from '../../elements/tags-select/component.js'
import WithDocumentTagsContext from '../../components/document-tags-context/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const masonryOptions = {
  transitionDuration: 0
}

const OptionChoice = styled.div`
display: inline-block;
margin: 5px;
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

const OptionsWrapper = styled.div`
position:relative;
`

const OptionsSection = styled.div`
padding-left: 5px
`
const Options = styled.div`
width:70%;
display:flex;
@media(max-width:700px){
  width:100%;
  flex-wrap: wrap;
  justify-content: flex-end;
 }
`
const OptionLabel = styled.div`
font-size: 1.4rem;
color: #2c4c61;
padding: ${(props) => props.isTitle ? '8px 0' : '5px 8px'};
font-weight: ${(props) => props.isTitle ? 'bold' : 'normal'};
display: ${(props) => props.isTitle ? 'block' : 'inline-block'};
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

const FilterButton = styled.button`
margin-left:25px;
border: none;
border-radius:5px;
padding: 10px 20px;
font-size: 1.4rem;
color: #FFF;
background-color: #5c97bc;
font-family: var(--bold);
cursor: pointer;
@media(max-width:700px){
  margin-top: 8px;
  color: #5c97bc;
  background-color:#fff0;
 }
`
const Icon = styled.div`
  width: 18px;
  height: 15px;
  background-image: url(${(props) => `/static/assets/${props.icon}`});
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  top: 2px;
  @media(max-width:700px){
filter:grayscale(100%) brightness(54%) sepia(100%) hue-rotate(-180deg) saturate(700%) contrast(0.8);
}
`

const Search = styled.input`
display: inline-block;
margin: 0 5px;
font-size: 1.5rem;
padding: 8px;
border-radius: 4px;
border: 1px solid #4C4C4E;
width:75%;
::placeholder{
  font-size:1.5rem;
}
&.disabled{
  color: #777;
  border-color: #777;
}
@media(max-width:700px){
  display: block;
  width:100%;
 }
`
const Filters = styled.div`
background:white;
position: absolute;
right: -195px;
top: 50px;
z-index: 999;
padding: 15px
border-radius:5px
box-shadow: 0px 3px 4px 0px #9999996b;
@media(max-width:700px){
  right: 0;
  left: -185px;  
}
`

let delay = (function () {
  let timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()
class Projects extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      projectsFiltered: [],
      loadMoreAvailable: false,
      loading: true,
      filterShow:false,
      // page: 1,
      // noMore: false,
      query: {
        created: 'SUPP',
        limit: 10,
        page: 1,
        closed: null,
        tag: null,
        textFilter: null
      },
      // filter: {
      //   closed: null
      // }
      tags: []
    }
  }

  createQuery = (sort) => {
    let theQuery = '?' +
      Object.keys(sort).map(function (key) {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(sort[key])
      }).join('&');
    return theQuery
  }

  async getDocuments() {
    try {
      this.setState({
        loading: true
      }, delay(() => {
        this.fetchDocuments()
      }, 500))
    } catch (error) {
      console.error(error)
    }
  }

  async fetchDocuments() {
    let tag = this.props.router.query.tag;
    let currentQuery = {...this.state.query};
    currentQuery.tag = tag
    
    let query = this.createQuery(currentQuery)
    
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
        query: {
          ...query,    
          tag
        },
        loading: false
      }
    })
  }

  async componentWillMount () {
    this.setState({
      tags: (await this.props.fetchDocumentTags()).map(
        tag => ({ value: tag._id, label: tag.name, key: tag.key })
      )
    })
  }

  async componentDidMount() {
    this.getDocuments()
  }

  handleShowFilters = () => {
    this.setState({
      filterShow: !this.state.filterShow
    })
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
    let tag = newQuery['tag']
    if (tag) {
      router.push({
        pathname: this.props.router.pathname,
        query: { tag }
      })
    } else {
      router.push({
        pathname: this.props.router.pathname
      })
    }
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
      loading,
      tags
    } = this.state
    return (
      <Section id='projects' noMargin>
        <TitleH2>Propuestas de ley</TitleH2>
        <SubtitleH3>Acá podés acceder a las propuestas de ley para leerlas, apoyarlas y hacer tus aportes. ¡Ayudanos a mejorarlas!</SubtitleH3>
        <Options>
          <Search type='text' placeholder='Buscá por nombre de la Diputada o Diputado o propuesta' onInput={(e) => this.toggleSort('textFilter', e.target.value)} />
          <OptionsWrapper>
            <FilterButton onClick={this.handleShowFilters}>Filtrar <Icon icon='down-arrow.svg' /></FilterButton>
            <Filters style={{ display: this.state.filterShow ? 'block' : 'none' }}>
              <OptionsSection>
                <OptionLabel>Ordenar:</OptionLabel>
                {query.created === 'ASC' && <OptionChoice onClick={() => this.toggleSort('created', 'DESC')}> Más antiguas</OptionChoice>}
                {query.created === 'SUPP' && <OptionChoice onClick={() => this.toggleSort('created', 'ASC')}> Más recientes</OptionChoice>}
                {query.created === 'DESC' && <OptionChoice onClick={() => this.toggleSort('created', 'SUPP')}> Más apoyos</OptionChoice>}
              </OptionsSection>
              <OptionLabel isTitle>Filtrar por:</OptionLabel>
              <OptionsSection>
                <OptionLabel>Estado:</OptionLabel>
                {query.closed === null && <OptionChoice onClick={() => this.toggleSort('closed', true)}>TODOS</OptionChoice>}
                {query.closed === true && <OptionChoice onClick={() => this.toggleSort('closed', false)}>FINALIZADOS</OptionChoice>}
                {query.closed === false && <OptionChoice onClick={() => this.toggleSort('closed', null)}>ABIERTOS</OptionChoice>}
              </OptionsSection>
              <OptionsSection>
                <OptionLabel>Etiqueta</OptionLabel>
                {tags.length > 0 && <TagsSelect allTags={tags} selected={query.tag} onTagChange={(tagId) => this.toggleSort('tag', tagId)} />}
              </OptionsSection>
            </Filters>
          </OptionsWrapper>
        </Options>
        {projects &&
          <Fragment>
            <Masonry
              style={{ width: '100%', margin: '4.8rem 0 1.6rem' }}
              options={masonryOptions}>
              {projects.map((p, i) => (
                <Card project={p} key={i} tags={tags} />
              ))}
            </Masonry>
          </Fragment>
        }
        {
          !loading && loadMoreAvailable && <LoadMoreButtonContainer>
            <LoadMoreButton onClick={() => this.getDocuments()}>Ver más</LoadMoreButton>
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

export default withRouter(WithDocumentTagsContext(Projects))
