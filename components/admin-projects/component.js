import React, { Component } from 'react'
import styled from 'styled-components'
import Router,{ withRouter } from 'next/router'
import TitleContent from '../title-content-admin/component'
import getConfig from 'next/config'
import WithUserContext from '../../components/with-user-context/component'
import ProjectTableItem from '../../components/project-table-item/component'
import Search from '../../elements/search/component'
import { clockO } from 'react-icons-kit/fa'
import { plus } from 'react-icons-kit/feather'


const { publicRuntimeConfig: { API_URL } } = getConfig()

const getClosingDate = () => {
  let closingDate = new Date()
  closingDate.setDate(closingDate.getDate() + 30)
  closingDate.setHours(0, 0, 0, 0)
  return closingDate.toISOString()
}

const newDocument = {
  'published': false,
  'closed': false,
  'customForm': 'project-form',
  'content': {
    'title': 'Mi nuevo proyecto',
    'imageCover': null,
    'youtubeId': null,
    'customVideoId': null,
    'sendTagsNotification': true,
    'fundation': {
      'object': 'value',
      'document': {
        'object': 'document',
        'data': {
        },
        'nodes': [
          {
            'object': 'block',
            'type': 'paragraph',
            'data': {
            },
            'nodes': [
              {
                'object': 'text',
                'leaves': [
                  {
                    'object': 'leaf',
                    'text': 'Esta sección es un espacio para redactar un texto que sirve para presentar el proyecto, explicar el contexto (de donde surge, su importancia, etc.), e invitar la ciudadanía a participar. Es muy importante mencionar qué tipo de aportes ciudadanos se esperan. El proyecto tiene que estar explicado de manera muy simple, la redacción debe ser fácil de entender.',
                    'marks': [
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    'articles': {
      'object': 'value',
      'document': {
        'object': 'document',
        'data': {
        },
        'nodes': [
          {
            'object': 'block',
            'type': 'title',
            'data': {
            },
            'nodes': [
              {
                'object': 'text',
                'leaves': [
                  {
                    'object': 'leaf',
                    'text': 'Art. 1º.',
                    'marks': [
                    ]
                  }
                ]
              }
            ]
          },
          {
            'object': 'block',
            'type': 'paragraph',
            'data': {
            },
            'nodes': [
              {
                'object': 'text',
                'leaves': [
                  {
                    'object': 'leaf',
                    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed purus justo. Nam tempus ligula nec est scelerisque aliquet. Phasellus pretium rhoncus pharetra. Duis dapibus felis neque.',
                    'marks': [
                    ]
                  }
                ]
              }
            ]
          },
          {
            'object': 'block',
            'type': 'title',
            'data': {
            },
            'nodes': [
              {
                'object': 'text',
                'leaves': [
                  {
                    'object': 'leaf',
                    'text': 'Art. 2°.',
                    'marks': [
                    ]
                  }
                ]
              }
            ]
          },
          {
            'object': 'block',
            'type': 'paragraph',
            'data': {
            },
            'nodes': [
              {
                'object': 'text',
                'leaves': [
                  {
                    'object': 'leaf',
                    'text': 'Fusce elementum posuere dolor id mattis. Sed magna arcu, rutrum eu pellentesque nec, feugiat sit amet lorem. Fusce volutpat, dolor a pretium fermentum, felis justo rhoncus nisl, vel mollis est diam mollis nisl. Sed aliquet erat sed ipsum lacinia, feugiat interdum ante pulvinar. Integer ut consectetur velit.',
                    'marks': [
                    ]
                  }
                ]
              }
            ]
          },
          {
            'object': 'block',
            'type': 'title',
            'data': {
            },
            'nodes': [
              {
                'object': 'text',
                'leaves': [
                  {
                    'object': 'leaf',
                    'text': 'Art. 3°.',
                    'marks': [
                    ]
                  }
                ]
              }
            ]
          },
          {
            'object': 'block',
            'type': 'paragraph',
            'data': {
            },
            'nodes': [
              {
                'object': 'text',
                'leaves': [
                  {
                    'object': 'leaf',
                    'text': 'In id neque posuere, dictum arcu vitae, euismod nulla. Integer eu euismod ipsum. In aliquet nisl mi, nec vulputate urna hendrerit eu. Integer in mi at quam luctus posuere. Integer magna sem, viverra non ultrices vitae, varius in mi.',
                    'marks': [
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    'closure': null,
    'closingDate': getClosingDate()
  }
}

const StyledProjectsAdmin = styled.div`
 
`
const masonryOptions = {
  transitionDuration: 0
}
const Section =styled.div`
margin-left: '0em';

display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: flex-start;
box-sizing: border-box;
background-color: #fff;
> h2 {
    color: #2c4c61;
  }
}
@media (max-width:700px){
  padding: 35px 10px;
}
`

const LoadMoreButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const LoadMoreButton = styled.div`
margin: 0 auto;
font-size: 2.2rem;
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

const ProjectsTable = styled.table`
  width: 100%;
  margin: 20px 0;
`
const ProjectsTableHead = styled.thead`

`
const ProjectsTableBody = styled.tbody`

`
const ProjectsTableRow = styled.tr`

`
const ProjectsTableCell = styled.td`
  padding: 5px 2px;
  font-size: 13px;
  text-align: ${(props) => props.centered ? 'center' : 'left'};
  border-bottom: 1px solid #cacaca;
  & > a{
    color: #5c97bc
  }
  & > a:hover{
    color: red;
  }
`
const ProjectsTableHeader = styled.th`
  font-family: var(--medium);
  font-size: 16px;
  color: #2c4c61;
  text-align: ${(props) => props.centered ? 'center' : 'left'};
  width: ${(props) => `${props.width}px` || 'auto'};
  border-bottom: 1px solid #CACACA;
  padding: 2px 5px;
  ${(props) => props.hiddenMobile && '@media(max-width:700px){display: none;}'}
`

const ButtonTable = styled.div`
  padding: 5px 20px;
  margin: 10px;
  border: 1px solid #5c97bc;
  border-radius: 5px;
  color: #5c97bc;
  font-size: 17px;
  text-align: center;
  float: ${(props) => props.float || 'none'};
  @media (max-width: 700px) {
    float: none;
  }
  &:hover {
    background-color: #5c97bc;
    color: #FFF;
    cursor: pointer;
  }
  &[disabled]{
    cursor: not-allowed;
    color: #999;
    border-color: #999;
  }
  &[disabled]:hover,
  &[disabled]:active,
  &[disabled]:focus {
    background-color: #eee;
    color: #999;
    border-color: #999;
    font-weight: normal;
    font-family: unset;
  }
`

const ButtonTableDisabled = styled.div`
  padding: 5px 20px;
  margin: 10px;
  // width: 80%;
  border: 1px solid #868686;
  border-radius: 5px;
  color: #868686;
  font-size: 17px;
  float: ${(props) => props.float || 'none'};
  @media (max-width: 700px) {
    float: none;
  }
`


class ProjectsAdmin extends Component{
  state={
    projects: [],
    page: 1,
    noMore: false,
    showAlert: false,
    alertText: null,
    alertType: null,
    isLoading: false,
    fetching: true,
    fetchMoreAvailable: false,
    query: {
      created: 'ASC',
      limit: 10,
      page: 1,
      closed: null,
      author: null
    }
  }

  getDocuments() {
    
      this.setState({
        fetching: true
      }, () => this.fetchProjects(this.props.token))
   
  }

  createQuery = (sort) => {
    let theQuery = '?' +
      Object.keys(sort).map(function (key) {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(sort[key])
      }).join('&');

    return theQuery
  }

  fetchProjects = (token, userId) => {
  
      let query = this.state.query
      if(this.props.router.query.user) query.author = this.props.router.query.user
      let currentQuery = this.createQuery(query);
      fetch(`${API_URL}/api/v1/documents?${currentQuery}`, {
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
      .then(resp=>resp.json())
      .then(projects=>
        this.setState((prevState) => {
          return {
            projects: prevState.projects.concat(projects.results),
            fetchMoreAvailable: projects.pagination.page < projects.pagination.pages,
            fetching: false
          }
        })
        )
      .catch(err=>console.error(err))
   
  }

  componentDidMount(){
    this.getDocuments()
  }

  

  getMoreDocuments(){
    this.setState({
      query:{
      ...this.state.query,
      page: this.state.query.page + 1 
      }
    },()=>this.getDocuments()
  )
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

  createProject = async () => {
  this.setState({
    isLoading: true
  })
  fetch(`${API_URL}/api/v1/documents`, {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
    },
    'body': JSON.stringify(newDocument)
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Forbidden')
      }
      return res.json()
    })
    .then((content) => {
      Router.push({
        pathname: '/propuesta',
        query: {
          id: content._id
        }
      })
    })
    .catch((err) => {
      this.setState({
        menu: false,
        showAlert: true,
        isLoading: false,
        alertStatus: 'error',
        alertText: 'Ocurrió un error al crear una nueva propuesta (¿Limite alcanzado?)'
      })
      console.error(err)
    })
  }

  render(){
    const {
    projects,
    fetchMoreAvailable,
    isLoading,
    fetching
  } = this.state
    return(
  <StyledProjectsAdmin id='admin-projects'>
    <TitleContent>
      proyectos
      {
      isLoading
        ? <ButtonTableDisabled float="right"><Icon icon={clockO} size={20} />&nbsp;&nbsp;Creando nuevo proyecto... Espere unos segundos...</ButtonTableDisabled>
        : <ButtonTable onClick={this.createProject} float="right"><Icon icon={plus} size={20} />&nbsp;&nbsp;Agregar una nueva propuesta</ButtonTable>
      }          
    </TitleContent>
    
    <Search type='text' placeholder='Buscá por nombre de la Diputada o Diputado o propuesta' onInput={(e) => this.toggleSort('textFilter', e.target.value)} />
    <Section id='projects' noMargin >
              <ProjectsTable>
                <ProjectsTableHead>
                  <ProjectsTableRow>
                    <ProjectsTableHeader>Nombre</ProjectsTableHeader>
                    <ProjectsTableHeader hiddenMobile centered>Status</ProjectsTableHeader>
                    {window.location.pathname === '/admin' && <ProjectsTableHeader width={100} hiddenMobile centered>Autor</ProjectsTableHeader>}
                    <ProjectsTableHeader width={100} hiddenMobile centered>Aportes</ProjectsTableHeader>
                    <ProjectsTableHeader width={100} hiddenMobile centered>Apoyos</ProjectsTableHeader>
                    <ProjectsTableHeader width={100} hiddenMobile centered>Fecha creación</ProjectsTableHeader>
                    <ProjectsTableHeader width={100} hiddenMobile centered>Fecha de cierre</ProjectsTableHeader>
                    <ProjectsTableHeader width={120} hiddenMobile centered>Acciones</ProjectsTableHeader>
                  </ProjectsTableRow>
                </ProjectsTableHead>
                <ProjectsTableBody>

                  {projects && projects.map((p, i) => <ProjectTableItem project={p} key={p._id} />)}
                </ProjectsTableBody>
              </ProjectsTable>
              {
                this.state.showAlert &&
                <Alert status={this.state.alertStatus} dismissAlert={this.dismissAlert}>
                  {this.state.alertText}
                </Alert>
              }
              {
                !fetching && fetchMoreAvailable && <LoadMoreButtonContainer>
                  <LoadMoreButton onClick={() => this.getMoreDocuments()}>Cargar más</LoadMoreButton>
                </LoadMoreButtonContainer>
              }
              {
                fetching && <MessagePaginator>Cargando...</MessagePaginator>
              }
              {
                !fetching && !fetchMoreAvailable &&
                <MessagePaginator>No hay más propuestas de leyes</MessagePaginator>
              }

    </Section>

  </StyledProjectsAdmin>
)}
}

ProjectsAdmin.propTypes = {
}

// export default withRouter(ProjectsAdmin)

export default WithUserContext(withRouter(ProjectsAdmin))