import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import getConfig from 'next/config'
import Icon from 'react-icons-kit'
import { thList } from 'react-icons-kit/fa/thList'
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
  background: #eaeaea;
  padding: 20px 5px;
  margin-bottom: 5px;
  // animate text loading to fade in and out
  p {
    animation: fadeInOut 1.5s ease-in-out infinite;
  }
  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    45% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
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

const TagWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const TagName = styled.p`
  font-weight: bold;
  // color: #5c97bc;
  font-size: 1.2rem;
`

const TagDescription = styled.p`
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

const TitleMetric = styled.div`
  display:flex;
  justify-content: space-between;
  color: #5c97bc;
  padding: 5px 0px;
  border-bottom: 2px solid #5c97bc;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: var(--bold);
  font-weight: bold;
  font-size: 1.6rem;
`

class MetricsTags extends Component {
  constructor (props) {
    super(props)
    this.state = {
      yearList: [],
      selectedYear: '',
      isLoading: true,
      documentsByTags: [],
      documentsWithoutTags: [],
      availableTags: [],
      selectedTag: '',
      showDocumentsTagName: '',
      projects: [],
      projectsByPage: [],
      total: 0,
      page: 1,
      limit: 5,
      totalPages: 0,
      documentsWithoutTagsByPage: [],
      totalDocumentsWithoutTags: 0,
      pageDocumentsWithoutTags: 1,
      limitDocumentsWithoutTags: 5,
      totalPagesDocumentsWithoutTags: 0
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
    fetchArrays.push(fetch(`${API_URL}/api/v1/metric/documentByTags`, {
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
        const documentsByTags = data[0]
        const availableTags = data[1].results
        this.setState((prevState) => {
          return {
            documentsByTags: documentsByTags.tags,
            documentsWithoutTags: documentsByTags.withoutTags.documents,
            availableTags: availableTags,
            isLoading: false,
            documentsWithoutTagsByPage: documentsByTags.withoutTags.documents.slice(prevState.pageDocumentsWithoutTags - 1, prevState.limitDocumentsWithoutTags),
            totalDocumentsWithoutTags: documentsByTags.withoutTags.documents.length,
            totalPagesDocumentsWithoutTags: Math.ceil(documentsByTags.withoutTags.documents.length / prevState.limitDocumentsWithoutTags)
          }
        })
      })
      .catch((err) => console.error(err))
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

  nextPageDocumentsWithoutTags () {
    this.setState((prevState) => {
      return {
        pageDocumentsWithoutTags: prevState.pageDocumentsWithoutTags + 1,
        documentsWithoutTagsByPage: prevState.documentsWithoutTags.slice(prevState.pageDocumentsWithoutTags * prevState.limitDocumentsWithoutTags, prevState.pageDocumentsWithoutTags * prevState.limitDocumentsWithoutTags + prevState.limitDocumentsWithoutTags)
      }
    })
  }

  prevPageDocumentsWithoutTags () {
    this.setState((prevState) => {
      return {
        pageDocumentsWithoutTags: prevState.pageDocumentsWithoutTags - 1,
        documentsWithoutTagsByPage: prevState.documentsWithoutTags.slice((prevState.pageDocumentsWithoutTags - 2) * prevState.limitDocumentsWithoutTags, (prevState.pageDocumentsWithoutTags - 2) * prevState.limitDocumentsWithoutTags + prevState.limitDocumentsWithoutTags)
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

  listDocuments (tagName, documents) {
    // scroll to id=metricTitle
    this.setState((prevState) => {
      return {
        showDocumentsTagName: tagName,
        projects: documents,
        projectsByPage: documents.slice(0, prevState.limit),
        total: documents.length,
        page: 1,
        limit: prevState.limit,
        totalPages: Math.ceil(documents.length / prevState.limit)
      }
    },() => {
      const element = document.getElementById('metricTitle')
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
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
    if (queries.length > 0) {
      query = `?${queries.join('&')}`
    }
    fetch(`${API_URL}/api/v1/metric/documentByTags${query}`, {
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
            documentsByTags: data.tags,
            documentsWithoutTags: data.withoutTags.documents,
            isLoading: false,
            documentsWithoutTagsByPage: data.withoutTags.documents.slice(prevState.pageDocumentsWithoutTags - 1, prevState.limitDocumentsWithoutTags),
            totalDocumentsWithoutTags: data.withoutTags.documents.length,
            totalPagesDocumentsWithoutTags: Math.ceil(data.withoutTags.documents.length / prevState.limitDocumentsWithoutTags),
            selectedYear: year,
            selectedTag: tag,
            selectedAccountableUser: accountableUser,
            showDocumentsTagName: '',
            projects: [],
            projectsByPage: [],
            total: 0,
            page: 1,
            limit: prevState.limit,
            totalPages: 0,
            pageDocumentsWithoutTags: 1,
            limitDocumentsWithoutTags: prevState.limitDocumentsWithoutTags,
          }
        })
      })
      .catch((err) => console.error(err))
  }

  render () {
    const { documentsByTags, documentsWithoutTags, availableTags, isLoading,
      showDocumentsTagName, projectsByPage, page, totalPages, documentsWithoutTagsByPage,
      pageDocumentsWithoutTags, totalPagesDocumentsWithoutTags } = this.state
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
        {/* <FilterRow>
          <p>Filtrar por etiqueta</p>
          <select onChange={(e) => this.changeTag(e)}>
            <option value=''>Todas las etiquetas</option>
            {
              availableTags.map((tag) => {
                return (
                  <option key={tag._id} value={tag._id}>{tag.name}</option>
                )
              })
            }
          </select>
        </FilterRow> */}
        { isLoading && (
          <LoadingAnimation>
            <p>Cargando...</p>
          </LoadingAnimation>
        )}
        { !isLoading && (<div>
          <DataTable>
            <thead>
              <tr>
                <th>Tag</th>
                <th style={{ textAlign: 'center' }}>Cantidad de proyectos</th>
                <th style={{ textAlign: 'center' }}>Listar proyectos</th>
              </tr>
            </thead>
            <tbody>
              {
                documentsByTags.map((tagData) => {
                  return (
                    <tr key={tagData.id}>
                      <td>
                        <TagWrapper>
                          <TagName>{tagData.name}</TagName>
                        </TagWrapper>
                      </td>
                      <td style={{ textAlign: 'center' }}>{tagData.documentsCount}</td>
                      <td style={{ textAlign: 'center' }}>
                        <Icon icon={thList} size={20} style={{ cursor: 'pointer', color: '#5c97bc' }} onClick={() => this.listDocuments(tagData.name, tagData.documents)} />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </DataTable>
          {
            showDocumentsTagName && (
              <div>
                <TitleMetric id="metricTitle">
                  Proyectos con etiqueta "{showDocumentsTagName}"
                </TitleMetric>
                <DataTable>
                  <thead>
                    <tr>
                      <th>Proyecto</th>
                      <th>Autor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      projectsByPage.map((project) => {
                        return (
                          <tr key={project._id}>
                            <td>
                              <ProjectWrapper>
                                <ProjectName><Link href={{ pathname: '/propuesta', query: { id: project._id } }}>{project.title}</Link></ProjectName>
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
            )
          }
          {
            documentsWithoutTags.length > 0 && (
              <div>
                <TitleMetric>
                  Proyectos sin etiquetas
                </TitleMetric>
                <DataTable>
                  <thead>
                    <tr>
                      <th>Proyecto</th>
                      <th>Autor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      documentsWithoutTagsByPage.map((project) => {
                        return (
                          <tr key={project._id}>
                            <td>
                              <ProjectWrapper>
                                <ProjectName><Link href={{ pathname: '/propuesta', query: { id: project._id } }}>{project.title}</Link></ProjectName>
                                <ProjectDescription>Versión {project.version} - {project.tags && project.tags.length > 0 ? project.tags.map((t) => t.name).join(', ') : '(Sin tags)'}</ProjectDescription>
                                <ProjectDescription>Fecha creacion: {new Date(project.createdAt).toLocaleDateString('es-ES', { hour: 'numeric', minute: 'numeric' })} - {this.isOpenOrClosed(project.closingDate) ? <span style={{ color: 'green' }}>Abierto</span> : <span style={{ color: 'purple' }}>Cerrado</span>}</ProjectDescription>
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
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </DataTable>
                <ButtonsWrapper>
                  <button
                    className={pageDocumentsWithoutTags === 1 ? 'disabled' : ''}
                    onClick={() => this.prevPageDocumentsWithoutTags()}
                    disabled={pageDocumentsWithoutTags === 1}>
                    Anterior
                  </button>
                  <button
                    className={pageDocumentsWithoutTags === totalPagesDocumentsWithoutTags ? 'disabled' : ''}
                    onClick={() => this.nextPageDocumentsWithoutTags()}
                    disabled={pageDocumentsWithoutTags === totalPagesDocumentsWithoutTags}>
                    Siguiente
                  </button>
                  <span>
                    Página {pageDocumentsWithoutTags} de {totalPagesDocumentsWithoutTags}
                  </span>
                </ButtonsWrapper>
              </div>
            )
          }
        </div>
        ) }

      </MetricWrapper>
    )
  }
}

export default WithUserContext(MetricsTags)
