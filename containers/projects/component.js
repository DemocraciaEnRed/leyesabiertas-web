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
import WithUserContext from '../../components/with-user-context/component'
import Search from '../../elements/search/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const masonryOptions = {
  transitionDuration: 0
}

const MasonryStyled = styled(Masonry)`
&:after{
  display: ${(props) => props.cover ? 'block':'none'};
  content:" ";
  position:absolute;
  width:100%;
  height:100%
  top: -10px;
  z-index:995;
  backdrop-filter: blur(3px);
}

`

const OptionChoice = styled.div`
display: inline-block;
font-size: 1.4rem;
padding: 10px 22px;
cursor: pointer
color: #000;
background-color: #F1ECEA;
&:hover{
  background-color: #2c4c61;
  color: #FFF
}

&.disabled{
  color: #777;
  border-color: #777;
}
&.active{
  background-color: #567B9A;
  color: #FFF
}
`

const OptionsWrapper = styled.div`
position:relative;
`

const OptionsSection = styled.div`
`

const OptionsHeader = styled.div`
padding:  10px 22px;
display:flex;
justify-content: space-between;

`
const Options = styled.div`
width:100%;
display:flex;
padding-left: 1%
@media(max-width:700px){
  flex-wrap: wrap;
  justify-content: flex-end;
 }
`
const OptionsMenu = styled.div`
background-color: #F1ECEA;
display: ${(props) => props.projectState || props.projectTags || props.projectSort ? 'flex' : 'none'}; 
flex-direction: column;

`
const OptionLabel = styled.div`
font-size: ${(props) => props.isTitle || props.isTopTitle ? '1.6rem' : '1.4rem'};
color: ${(props) => props.isTitle || props.isTopTitle ? '#000' : '#567B9A'}; 
padding: ${(props) =>  props.isTopTitle && '10px 20px'};
font-weight: 'normal';
display: ${(props) => props.isTitle || props.isTopTitle ? 'block' : 'inline-block'};
box-shadow:${(props) => props.isTopTitle && '0px 2px 3px rgb(0 0 0 / 25%);'} ;


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
const IconLoading = styled(Icon)`
width:20px;
height:20px;
filter:grayscale(100%);
animation: rotation 2s infinite linear;

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`


const Filters = styled.div`
width:250px;
background:white;
position: absolute;
right: 0px;
top: 50px;
z-index: 999;
border-radius:5px
box-shadow: 0px 3px 4px 0px #9999996b;
@media(max-width:700px){
  right: 0;
  left: -185px;  
}
`



const SubH3 = styled.div`
font-size: 1.4rem;
color: #101a21;
padding:0 1%;
line-height: 3.5;
`
const CustomSearch = styled(Search)`
margin:0
flex:auto
`


const ArrowIcon = styled.div` 
transform:${(props) => props.projectState || props.projectTags || props.projectSort ? ' rotateZ(180deg)' : '0'};
margin: 10px;
  width: 18px;
  height: 17px;
  background-image: url(${(props) => `/static/assets/${props.icon}`});
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s ease-out;
  filter: brightness(0.2);
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
      projectState:false,
      projectTags:false,
      projectSort:false,
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
        this.fetchDocuments(this.props.authContext.keycloak)
      }, 900))
    } catch (error) {
      console.error(error)
    }
  }

  async fetchDocuments(token) {
    let tag = this.props.router.query.tag;
    let currentQuery = {...this.state.query};
    currentQuery.tag = tag
    
    let query = this.createQuery(currentQuery)
    let projects = []
    try {
      if (token) {
        projects = await (await fetch(`${API_URL}/api/v1/documents${query}`, {
          method: 'get',
          headers: {
            'Authorization': 'Bearer ' + token.token
          }
        }
        )).json()
      } else {
        projects = await (await fetch(`${API_URL}/api/v1/documents${query}`)).json()
      }
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
    } catch (err) {
      console.error(err)
    }
    //const projects = await (await fetch(`${API_URL}/api/v1/documents${query}`)).json()
    // let mergedProjects = this.state.projects.concat(projects.results)
    // const projectsFiltered = mergedProjects.filter((p) => {
    //   if (this.state.query.closed !== null) {
    //     return (this.state.query.closed === p.closed) && p
    //   }
    //   return p
    // })
   
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

  toggleShowMenu = (menuFilter) => {
    this.setState({[menuFilter] : !this.state[menuFilter]})
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
    this.handleShowFilters()
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
      tags,
      projectState,
      projectTags,
      projectSort
    } = this.state
    const currentTag = query.tag && tags.find(tag => tag.value === query.tag).label
    return (
      <Section id='projects' noMargin>
        <TitleH2 style={{paddingLeft:'1%'}}>Propuestas de ley</TitleH2>
        <SubH3>Acá podés acceder a las propuestas de ley para leerlas, apoyarlas y hacer tus aportes. ¡Ayudanos a mejorarlas!</SubH3>
        <Options>
          <CustomSearch type='text' placeholder='Buscá por nombre de la Diputada o Diputado o propuesta' onInput={(e) => this.toggleSort('textFilter', e.target.value)} />
          <OptionsWrapper>
            <FilterButton onClick={this.handleShowFilters}>Filtrar <Icon icon='down-arrow.svg' /></FilterButton>
            <Filters style={{ display: this.state.filterShow ? 'block' : 'none' }}>
            <OptionLabel isTopTitle>Filtrar por:</OptionLabel>
              <OptionsSection>
                <OptionsHeader onClick={() => this.toggleShowMenu('projectSort')}>
                  <div>
                  <OptionLabel isTitle>Ordenar por:</OptionLabel>
                  <OptionLabel>{query.created === 'ASC' ? 'Más antiguos' : query.created === 'SUPP' ? 'Más apoyados' : query.created === 'DESC' && 'Más recientes' }</OptionLabel>
                  </div>
                  <ArrowIcon projectSort={projectSort} icon='down-arrow.svg' />
                </OptionsHeader>
                <OptionsMenu projectSort={projectSort}>

                <OptionChoice className={query.created === 'DESC' && 'active'} onClick={() => this.toggleSort('created', 'DESC')}> Más recientes</OptionChoice>
                <OptionChoice className={query.created === 'ASC' && 'active'} onClick={() => this.toggleSort('created', 'ASC')}> Más antiguas</OptionChoice>
                <OptionChoice className={query.created === 'SUPP' && 'active'} onClick={() => this.toggleSort('created', 'SUPP')}> Más apoyos</OptionChoice>
                
                </OptionsMenu>
              </OptionsSection>
              <OptionsSection>
                
              <OptionsHeader onClick={() => this.toggleShowMenu('projectTags')}>
              <div>
                <OptionLabel isTitle>Etiquetas</OptionLabel>
                <OptionLabel>{currentTag || 'Etiqueta' }</OptionLabel>
                </div>
                  <ArrowIcon projectTags={projectTags} icon='down-arrow.svg' />
              </OptionsHeader>
                <OptionsMenu projectTags={projectTags}>
                {tags.length > 0 && <TagsSelect allTags={tags} selected={query.tag} onTagChange={(tagId) => this.toggleSort('tag', tagId)} />}
                </OptionsMenu>
              </OptionsSection>
              <OptionsSection>
              <OptionsHeader onClick={() => this.toggleShowMenu('projectState')}>
                <div>
                <OptionLabel isTitle>Estados</OptionLabel>
                <OptionLabel>{query.closed === null ? 'todos' : query.closed === true ? 'cerrados' : query.closed === false && 'abiertos' }</OptionLabel>
                </div>
                  <ArrowIcon projectState={projectState} icon='down-arrow.svg' />
              </OptionsHeader>
                <OptionsMenu projectState={projectState}>
                {/* query.closed === null &&  */<OptionChoice className={query.closed && 'active'} onClick={() => this.toggleSort('closed', true)}>Finalizados</OptionChoice>}
                {/* query.closed === true &&  */<OptionChoice className={query.closed === false && 'active'} onClick={() => this.toggleSort('closed', false)}>Abiertos</OptionChoice>}
                {/* query.closed === false &&  */<OptionChoice className={query.closed === null && 'active'} onClick={() => this.toggleSort('closed', null)}>Todos</OptionChoice>}

                </OptionsMenu>
              </OptionsSection>
            </Filters>
          </OptionsWrapper>
        </Options>
        {projects &&
          <Fragment>
            <MasonryStyled
              style={{ width: '100%', margin: '4.8rem 0 1.6rem' }}
              options={masonryOptions}
              cover={this.state.filterShow}
              >
              {projects.map((p, i) => (
                <Card project={p} key={i} tags={tags} />
              ))}

            </MasonryStyled>
          </Fragment>
        }
        {
          !loading && loadMoreAvailable && <LoadMoreButtonContainer>
            <LoadMoreButton onClick={() => this.getDocuments()}>Ver más</LoadMoreButton>
          </LoadMoreButtonContainer>
        }
        {
          loading && <MessagePaginator> <IconLoading icon='circular-bar.svg' /> Cargando...</MessagePaginator>
        }
        {
          !loading && !loadMoreAvailable  &&
          <MessagePaginator>No hay más propuestas de leyes</MessagePaginator>
        }
      </Section>
    )
  }
}

export default withRouter(WithUserContext(WithDocumentTagsContext(Projects)))
