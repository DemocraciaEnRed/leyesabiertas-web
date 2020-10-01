import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import Section from '../section/component'
import Card from '../../components/card/component'
import CardNewProject from '../../components/card-new-project/component'
import WithUserContext from '../../components/with-user-context/component'
import TitleH2 from '../../elements/title-h2/component'
import Alert from '../../elements/alert/component'
import getConfig from 'next/config'
import Masonry from 'react-masonry-component';
import ProjectTableItem from '../../components/project-table-item/component'
import { clockO } from 'react-icons-kit/fa'
import Icon from 'react-icons-kit'
import { plus, download } from 'react-icons-kit/feather'
const { publicRuntimeConfig: { API_URL } } = getConfig()

const masonryOptions = {
  transitionDuration: 0
};


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

const ButtonsBar = styled.div`
  width: 100%
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
    font-family: var(--medium);
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

const LoadMoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const LoadMoreButton = styled.div`
  margin: 0 auto;
  font-size: 2.2 rem;
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

class MyProjects extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
        created: 'DESC',
        limit: 12,
        page: 1,
      }
    }
  }

  async getDocuments() {
    try {
      this.setState({
        fetching: true
      }, () => this.fetchProjects(this.props.authContext.keycloak.token))
    } catch (error) {
      console.error(error)
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

  fetchProjects = async (token) => {
    try {
      let query = this.createQuery(this.state.query);
      const projects = await (await fetch(`${API_URL}/api/v1/documents/my-documents?${query}`, {
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })).json()
      this.setState((prevState) => {
        let query = prevState.query
        query.page = projects.pagination.page + 1
        return {
          projects: prevState.projects.concat(projects.results),
          fetchMoreAvailable: projects.pagination.page < projects.pagination.pages,
          query: query,
          fetching: false
        }
      })
    } catch (error) {
      console.error(error)
    }
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

  dismissAlert = () => {
    this.setState({
      showAlert: false
    })
  }

  async componentDidMount() {
    if (!this.props.authContext.keycloak) return
    if (!this.props.authContext.keycloak.authenticated && !this.props.authContext.user) return
    if (!this.props.userId || this.props.userId === this.props.authContext.user._id) {
      this.fetchProjects(this.props.authContext.keycloak.token)
    }
  }

  async componentWillUpdate(props) {
    if (!props.authContext.keycloak) return
    if (!props.authContext.keycloak.authenticated && !props.authContext.user) return
    if (props === this.props) return
    if (!props.userId || props.userId === props.authContext.user._id) {
      this.fetchProjects(props.authContext.keycloak.token)
    }
  }

  downloadXls = async () => {
    try {
      const result = await fetch(`${API_URL}/api/v1/documents/my-documents/export-xls`,{
        headers: {
          Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
          'Content-Type': 'application/json',
          'Content-Disposition': 'attachment; filename="filename.xls"'
        }
      })
      const blob = await result.blob()

      // Download API Files With React & Fetch - https://medium.com/yellowcode/download-api-files-with-react-fetch-393e4dae0d9e
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Proyectos.xls');  // 3. Append to html page
      document.body.appendChild(link);  // 4. Force download
      link.click();  // 5. Clean up and remove the link
      link.parentNode.removeChild(link);

    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const {
      projects,
      isLoading,
      fetching,
      fetchMoreAvailable
    } = this.state
    if (this.props.authContext.user) {
      if (this.props.authContext.isAuthor) {
        const hasProjects = projects && projects.length
        return (
          <Section id='projects' noMargin >
            <TitleH2>Mis proyectos</TitleH2>
            <ButtonsBar>
              {
                isLoading
                  ? <ButtonTableDisabled float='left'><Icon icon={clockO} size={20} />&nbsp;&nbsp;Creando nuevo proyecto... Espere unos segundos...</ButtonTableDisabled>
                  : <ButtonTable onClick={this.createProject} float='left'><Icon icon={plus} size={20} />&nbsp;&nbsp;Agregar un nuevo proyecto</ButtonTable>
              }
              <ButtonTable
                onClick={hasProjects && this.downloadXls}
                float='right'
                disabled={!hasProjects}>
                <Icon icon={download} size={20} />&nbsp;&nbsp;Descargar info. de participantes
              </ButtonTable>
            </ButtonsBar>
            <ProjectsTable>
              <ProjectsTableHead>
                <ProjectsTableRow>
                  <ProjectsTableHeader>Nombre</ProjectsTableHeader>
                  <ProjectsTableHeader hiddenMobile centered>Status</ProjectsTableHeader>
                  <ProjectsTableHeader width={120} hiddenMobile centered>Aportes</ProjectsTableHeader>
                  <ProjectsTableHeader width={120} hiddenMobile centered>Fecha creación</ProjectsTableHeader>
                  <ProjectsTableHeader width={120} hiddenMobile centered>Fecha de cierre</ProjectsTableHeader>
                  <ProjectsTableHeader width={120} hiddenMobile centered>Acciones</ProjectsTableHeader>
                </ProjectsTableRow>
              </ProjectsTableHead>
              <ProjectsTableBody>
                {/* <ProjectsTableRow>
                  <ProjectsTableCell centered colSpan={6}>
                    {
                      isLoading
                        ? <ButtonTableDisabled><Icon icon={clockO} size={20} />Creando nuevo proyecto.. espere</ButtonTableDisabled> :
                        <ButtonTable onClick={this.createProject}><Icon icon={plus} size={20} />Agregar un nuevo proyecto</ButtonTable>
                    }
                  </ProjectsTableCell>
                </ProjectsTableRow> */}
                {projects && projects.map((p, i) => <ProjectTableItem project={p} key={i} />)}
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
                <LoadMoreButton onClick={() => this.getDocuments()}>Cargar más</LoadMoreButton>
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
        )
      }
    }
    return null
  }
}

export default WithUserContext(MyProjects)
