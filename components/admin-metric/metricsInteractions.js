import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import getConfig from 'next/config'
import WithUserContext from '../../components/with-user-context/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const MetricWrapper = styled.div`
 padding: 15px 0;
`

const LoadingAnimation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`
const UserAvatar = styled.div`
  height: 32px;
  width: 32px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid #eaeaea;
  background-image: url('${(props) => props.userId ? `${API_URL}/api/v1/users/${props.userId}/avatar` : '/static/assets/userdefault.png'}');
  background-size: cover;
  background-position: center;
`
const UserData = styled.div`

`
const UserName = styled.p`
  font-weight: bold;
  color: #5c97bc;
`

const UserEmail = styled.p`
  color: #777;
  font-size: 1rem;
`

const ProjectWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const ProjectName = styled.p`
  font-weight: bold;
  color: #5c97bc;
`

const ProjectDescription = styled.p`
  color: #777;
  font-size: 1rem;
`

const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #eaeaea;
  thead {
    tr {
      th {
        text-align: left;
        padding: 10px 5px;
        border-bottom: 2px solid #eaeaea;
      }
    }
  }
  tbody {
    tr {
      td {
        padding: 5px 5px
        border-bottom: 1px solid #eaeaea;
      }
    }
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  button {
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #2c4c61;
    cursor: pointer;
    color: #2c4c61;
    &:hover {
      background-color: #2c4c61;
      color: #FFF;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &.disabled {
      color: #777;
      border-color: #777;
    }
  }
`

const FilterRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
  border: 1px solid #eaeaea;
  padding: 10px;
  border-radius: 4px;
  p {
    margin-right: 10px;
  }
  select {
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #2c4c61;
    cursor: pointer;
    color: #2c4c61;
  }
`

class MetricsInteractions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      yearList: [],
      selectedYear: '',
      isLoading: true,
      projects: [],
      accountableUsers: [],
      tags: [],
      selectedTag: '',
      selectedAccountableUser: '',
      projectsByPage: [],
      total: 0,
      page: 1,
      limit: 10,
      totalPages: 0
    }
  }

  componentDidMount () {
    // complete a year list from 2017 to current year
    const currentYear = new Date().getFullYear()
    const yearList = []
    for (let i = 2019; i <= currentYear; i++) {
      yearList.push(i)
    }
    this.setState({ yearList })
    this.init()
  }

  init () {
    const fetchArrays = []
    fetchArrays.push(fetch(`${API_URL}/api/v1/metric/interactions`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }))
    fetchArrays.push(fetch(`${API_URL}/api/v1/metric/usersByRole`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }))
    fetchArrays.push(fetch(`${API_URL}/api/v1/document-tags/`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }))
    Promise.all(fetchArrays)
      .then((responses) => {
        return Promise.all(responses.map((response) => {
          return response.json()
        }))
      })
      .then((data) => {
        const projects = data[0]
        const usersAuthors = data[1].accountableUsers
        const tags = data[2].results
        this.setState((prevState) => {
          return {
            projects: projects,
            accountableUsers: usersAuthors,
            tags: tags,
            isLoading: false,
            projectsByPage: projects.slice(prevState.page - 1, prevState.limit),
            total: projects.length,
            totalPages: Math.ceil(projects.length / prevState.limit)
          }
        })
      })
      .catch((err) => console.error(err))

    // fetch(`${API_URL}/api/v1/metric/interactions`, {
    //   headers: {
    //     Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
    //     'Content-Type': 'application/json'
    //   },
    //   method: 'GET'
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState((prevState) => {
    //       return {
    //         projects: data,
    //         isLoading: false,
    //         projectsByPage: data.slice(prevState.page - 1, prevState.limit),
    //         total: data.length,
    //         totalPages: Math.ceil(data.length / prevState.limit)
    //       }
    //     })
    //   })
    //   .catch((err) => console.error(err))
  }

  nextPage () {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
        projectsByPage: prevState.projects.slice(prevState.page * prevState.limit, prevState.page * prevState.limit + prevState.limit)
      }
    })
  }

  prevPage () {
    this.setState((prevState) => {
      return {
        page: prevState.page - 1,
        projectsByPage: prevState.projects.slice((prevState.page - 2) * prevState.limit, (prevState.page - 2) * prevState.limit + prevState.limit)
      }
    })
  }

  changeYear (e) {
    const year = e.target.value
    const tag = this.state.selectedTag
    const accountableUser = this.state.selectedAccountableUser
    this.setState({ isLoading: true })
    this.fetchByQuery(year, tag, accountableUser)
  }

  changeTag (e) {
    const year = this.state.selectedYear
    const tag = e.target.value
    const accountableUser = this.state.selectedAccountableUser
    this.setState({ isLoading: true })
    this.fetchByQuery(year, tag, accountableUser)
  }

  changeAccountableUser (e) {
    const year = this.state.selectedYear
    const tag = this.state.selectedTag
    const accountableUser = e.target.value
    this.setState({ isLoading: true })
    this.fetchByQuery(year, tag, accountableUser)
  }

  isOpenOrClosed (closingDate) {
    const today = new Date()
    const closing = new Date(closingDate)
    return today < closing
  }

  fetchByQuery (year, tag, accountableUser) {
    let queries = []
    let query = ''
    if (year) {
      queries.push(`year=${year}`)
    }
    if (tag) {
      queries.push(`tag=${tag}`)
    }
    if (accountableUser) {
      queries.push(`author=${accountableUser}`)
    }
    if (queries.length > 0) {
      query = `?${queries.join('&')}`
    }
    fetch(`${API_URL}/api/v1/metric/interactions${query}`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => {
          return {
            projects: data,
            isLoading: false,
            projectsByPage: data.slice(prevState.page - 1, prevState.limit),
            total: data.length,
            totalPages: Math.ceil(data.length / prevState.limit),
            page: 1,
            selectedYear: year,
            selectedTag: tag,
            selectedAccountableUser: accountableUser
          }
        })
      })
      .catch((err) => console.error(err))
  }

  render () {
    const { projectsByPage, isLoading, page, totalPages, tags, accountableUsers } = this.state
    return (
      <MetricWrapper>
        <FilterRow>
          <p>Filtrar por año de creacion del proyecto</p>
          <select onChange={(e) => this.changeYear(e)}>
            <option value=''>Todos los años</option>
            {
              this.state.yearList.map((year) => {
                return (
                  <option key={year} value={year}>{year}</option>
                )
              })
            }
          </select>
        </FilterRow>
        <FilterRow>
          <p>Filtrar por etiqueta</p>
          <select onChange={(e) => this.changeTag(e)}>
            <option value=''>Todas las etiquetas</option>
            {
              tags.map((tag) => {
                return (
                  <option key={tag._id} value={tag._id}>{tag.name}</option>
                )
              })
            }
          </select>
        </FilterRow>
        <FilterRow>
          <p>Filtrar por diputado</p>
          <select onChange={(e) => this.changeAccountableUser(e)}>
            <option value=''>Todos los diputados</option>
            {
              accountableUsers.map((user) => {
                return (
                  <option key={user._id} value={user._id}>{user.fullname}</option>
                )
              })
            }
          </select>
        </FilterRow>
        { isLoading && (
          <LoadingAnimation>
            Cargando...
          </LoadingAnimation>
        )}
        { !isLoading && (<div>
          <DataTable>
            <thead>
              <tr>
                <th>Proyecto</th>
                <th>Autor</th>
                <th style={{ textAlign: 'center' }}>Apoyos</th>
                <th style={{ textAlign: 'center' }}>Comentarios</th>
                <th style={{ textAlign: 'center' }}>Aportes</th>
                <th style={{ textAlign: 'center' }}>Likes</th>
                <th style={{ textAlign: 'center' }}>Total Interacciones</th>
              </tr>
            </thead>
            <tbody>
              {
                projectsByPage.map((project) => {
                  return (
                    <tr key={project.documentId}>
                      <td>
                        <ProjectWrapper>
                          <ProjectName><Link href={{ pathname: '/propuesta', query: { id: project.documentId } }}>{project.title}</Link></ProjectName>
                          <ProjectDescription>Versión {project.version} - {project.tags && project.tags.length > 0 ? project.tags.map((t) => t.name).join(', ') : '(Sin tags)'}</ProjectDescription>
                          <ProjectDescription>Fecha creacion: {new Date(project.createdAt).toLocaleDateString('es-ES', { hour: 'numeric', minute: 'numeric' })} - {this.isOpenOrClosed(project.closingDate) ? <span style={{ color: 'green' }}>Abierto</span> : <span style={{ color: 'purple' }}>Cerrado</span>} - {this.published ? <span style={{ color: 'green' }}>Visible</span> : <span style={{ color: 'purple' }}>Oculto</span>}</ProjectDescription>
                        </ProjectWrapper>
                      </td>
                      <td>
                        <UserWrapper>
                          <UserAvatar userId={project.author.id} />
                          <UserData>
                            <UserName><Link href={{ pathname: '/userprofile', query: { id: project.author.id } }}>{project.author.fullname}</Link></UserName>
                            <UserEmail>{project.author.email}</UserEmail>
                          </UserData>
                        </UserWrapper>
                      </td>
                      <td style={{ textAlign: 'center' }}>{project.apoyosCount}</td>
                      <td style={{ textAlign: 'center' }}>{project.commentsFundationCount}</td>
                      <td style={{ textAlign: 'center' }}>{project.commentsArticlesCount}</td>
                      <td style={{ textAlign: 'center' }}>{project.likesCount}</td>
                      <td style={{ textAlign: 'center' }}>{project.totalInteraction}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </DataTable>
          <ButtonsWrapper>
            <button
              className={page === 1 ? 'disabled' : ''}
              onClick={() => this.prevPage()}
              disabled={page === 1}>
              Anterior
            </button>
            <button
              className={page === totalPages ? 'disabled' : ''}
              onClick={() => this.nextPage()}
              disabled={page === totalPages}>
              Siguiente
            </button>
            <span>
              Página {page} de {totalPages}
            </span>
          </ButtonsWrapper>
        </div>
        ) }

      </MetricWrapper>
    )
  }
}

export default WithUserContext(MetricsInteractions)
