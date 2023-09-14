import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import getConfig from 'next/config'
import WithUserContext from '../with-user-context/component'

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
  input {
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #2c4c61;
    cursor: pointer;
    color: #2c4c61;
    width: 100px;
    text-align: center;
  }
`

const TitleMetric = styled.div`
  display:flex;
  justify-content: space-between;
  color: #5c97bc;
  padding: 5px 0px;
  border-bottom: 2px solid #eaeaea;
  width: 100%;
  margin-bottom: 8px;
  font-family: var(--bold);
  font-weight: bold;
  font-size: 1.6rem;
`

class MetricsUsers extends Component {
  constructor (props) {
    super(props)
    this.state = {
      yearList: [],
      selectedYear: '',
      selectedMonths: '1',
      monthOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '16', '20', '24'],
      isLoading: true,
      totalUsers: 0,
      totalCommonUsers: 0,
      totalActiveUsers: 0
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
    fetch(`${API_URL}/api/v1/metric/users?months=1`, {
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => {
          return {
            totalUsers: data.totalUsers,
            totalCommonUsers: data.totalCommonUsers,
            totalActiveUsers: data.totalActiveUsers,
            isLoading: false
          }
        })
      })
      .catch((err) => console.error(err))
  }

  changeYear (e) {
    const year = e.target.value
    const months = this.state.selectedMonths
    this.setState({ isLoading: true })
    this.fetchByYear(year, months)
  }

  changeMonths (e) {
    const year = this.state.selectedYear
    const months = e.target.value
    console.log(e.target.value)
    this.setState({ isLoading: true })
    this.fetchByYear(year, months)
  }

  fetchByYear (year, months) {
    let query = ''
    let queries = []
    if (year) {
      queries.push(`year=${year}`)
    }
    if (months) {
      queries.push(`months=${months}`)
    }
    if (queries.length > 0) {
      query = `?${queries.join('&')}`
    }
    fetch(`${API_URL}/api/v1/metric/users${query}`, {
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => {
          return {
            totalUsers: data.totalUsers,
            totalCommonUsers: data.totalCommonUsers,
            totalActiveUsers: data.totalActiveUsers,
            isLoading: false,
            selectedYear: year,
            selectedMonths: months
          }
        })
      })
      .catch((err) => console.error(err))
  }

  render () {
    const { isLoading, totalUsers, totalCommonUsers, totalActiveUsers, monthOptions, yearList } = this.state
    return (
      <MetricWrapper>
        <TitleMetric>
          Datos generales
        </TitleMetric>
        <FilterRow>
          <p>Filtrar por año</p>
          <select onChange={(e) => this.changeYear(e)}>
            <option value=''>Todos</option>
            {
              yearList.map((year) => {
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
        { !isLoading && (
          <div>
            <DataTable>
              <thead>
                <tr>
                  <th>Metrica</th>
                  <th width='25%' style={{ textAlign: 'center' }}>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cantidad total de usuarios</td>
                  <td style={{ textAlign: 'center' }}>{totalUsers}</td>
                </tr>
                <tr>
                  <td>Cantidad usuarios comunes</td>
                  <td style={{ textAlign: 'center' }}>{totalCommonUsers}</td>
                </tr>
              </tbody>
            </DataTable>
          </div>
        ) }
        <br />
        <TitleMetric>
          Usuarios activos
        </TitleMetric>
        <FilterRow>
          <span>Usuarios activos en los últimos..&nbsp;</span>
          <select onChange={(e) => this.changeMonths(e)}>
            {
              monthOptions.map((month) => {
                return (
                  <option key={`meses${month}`} value={month}>{month} meses</option>
                )
              })
            }
          </select>
        </FilterRow>
        { !isLoading && (
          <div>
            <DataTable>
              <thead>
                <tr>
                  <th>Metrica</th>
                  <th width='25%' style={{ textAlign: 'center' }}>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Usuarios activos (Iniciaron sesión)</td>
                  <td style={{ textAlign: 'center' }}>{totalActiveUsers}</td>
                </tr>
              </tbody>
            </DataTable>
          </div>
        ) }
      </MetricWrapper>
    )
  }
}

export default WithUserContext(MetricsUsers)
