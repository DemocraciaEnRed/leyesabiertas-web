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

class MetricsByAuthor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      yearList: [],
      selectedYear: '',
      isLoading: true,
      projectsByUserList: [],
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
    fetch(`${API_URL}/api/v1/metric/documentByAuthors`, {
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
            projectsByUserList: data,
            isLoading: false,
            projectsByPage: data.slice(prevState.page - 1, prevState.limit),
            total: data.length,
            totalPages: Math.ceil(data.length / prevState.limit)
          }
        })
      })
      .catch((err) => console.error(err))
  }

  nextPage () {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
        projectsByPage: prevState.projectsByUserList.slice(prevState.page * prevState.limit, prevState.page * prevState.limit + prevState.limit)
      }
    })
  }

  prevPage () {
    this.setState((prevState) => {
      return {
        page: prevState.page - 1,
        projectsByPage: prevState.projectsByUserList.slice((prevState.page - 2) * prevState.limit, (prevState.page - 2) * prevState.limit + prevState.limit)
      }
    })
  }

  changeYear (e) {
    const year = e.target.value
    this.setState({ isLoading: true })
    this.fetchByYear(year)
  }

  fetchByYear (year) {
    let selectedYear = year
    let query = ''
    if (selectedYear) {
      query = `?year=${selectedYear}`
    }
    fetch(`${API_URL}/api/v1/metric/documentByAuthors${query}`, {
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
            projectsByUserList: data,
            isLoading: false,
            projectsByPage: data.slice(prevState.page - 1, prevState.limit),
            total: data.length,
            totalPages: Math.ceil(data.length / prevState.limit),
            page: 1,
            selectedYear: selectedYear
          }
        })
      })
      .catch((err) => console.error(err))
  }

  render () {
    const { projectsByPage, isLoading, page, totalPages } = this.state
    return (
      <MetricWrapper>
        <FilterRow>
          <p>Filtrar por año</p>
          <select onChange={(e) => this.changeYear(e)}>
            <option value=''>Todos</option>
            {
              this.state.yearList.map((year) => {
                return (
                  <option key={year} value={year}>{year}</option>
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
                <th>Usuario</th>
                <th width='25%' style={{ textAlign: 'center' }}>Cantidad de proyectos</th>
              </tr>
            </thead>
            <tbody>
              {
                projectsByPage.map((userData) => {
                  return (
                    <tr key={userData._id}>
                      <td>
                        <UserWrapper>
                          <UserAvatar userId={userData._id} />
                          <UserData>
                            <UserName><Link href={{ pathname: '/userprofile', query: { id: userData._id } }}>{userData.user.fullname}</Link></UserName>
                            <UserEmail>{userData.user.email}</UserEmail>
                          </UserData>
                        </UserWrapper>
                      </td>
                      <td style={{ textAlign: 'center' }}>{userData.count}</td>
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

export default WithUserContext(MetricsByAuthor)
