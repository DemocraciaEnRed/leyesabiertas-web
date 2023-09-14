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

// const FilterRow = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   margin-bottom: 5px;
//   border: 1px solid #eaeaea;
//   padding: 10px;
//   border-radius: 4px;
//   p {
//     margin-right: 10px;
//   }
//   select {
//     padding: 5px 10px;
//     border-radius: 4px;
//     border: 1px solid #2c4c61;
//     cursor: pointer;
//     color: #2c4c61;
//   }
// `

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

class MetricsUsersByRole extends Component {
  constructor (props) {
    super(props)
    this.state = {

      isLoading: true,
      totalAdminUsers: 0,
      totalAccountableUsers: 0,
      adminUsers: [],
      accountableUsers: [],
      adminUsersByPage: [],
      accountableUsersByPage: [],
      adminTableTotal: 0,
      adminTablePage: 1,
      adminTableLimit: 10,
      adminTableTotalPages: 0,
      accountableTableTotal: 0,
      accountableTablePage: 1,
      accountableTableLimit: 10,
      accountableTableTotalPages: 0
    }
  }

  componentDidMount () {
    this.init()
  }

  init () {
    fetch(`${API_URL}/api/v1/metric/usersByRole`, {
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
            isLoading: false,
            adminUsers: data.adminUsers,
            accountableUsers: data.accountableUsers,
            adminUsersByPage: data.adminUsers.slice(prevState.adminTablePage - 1, prevState.adminTableLimit),
            accountableUsersByPage: data.accountableUsers.slice(prevState.accountableTablePage - 1, prevState.accountableTableLimit),
            adminTableTotal: data.adminUsers.length,
            adminTablePage: 1,
            adminTableLimit: prevState.adminTableLimit,
            adminTableTotalPages: Math.ceil(data.adminUsers.length / prevState.adminTableLimit),
            accountableTableTotal: data.accountableUsers.length,
            accountableTablePage: 1,
            accountableTableLimit: prevState.accountableTableLimit,
            accountableTableTotalPages: Math.ceil(data.accountableUsers.length / prevState.accountableTableLimit)
          }
        })
      })
      .catch((err) => console.error(err))
  }

  nextPageAdmin () {
    this.setState((prevState) => {
      return {
        adminTablePage: prevState.adminTablePage + 1,
        adminUsersByPage: prevState.adminUsers.slice(prevState.adminTablePage * prevState.adminTableLimit, prevState.adminTablePage * prevState.adminTableLimit + prevState.adminTableLimit)
      }
    })
  }

  prevPageAdmin () {
    this.setState((prevState) => {
      return {
        adminTablePage: prevState.adminTablePage - 1,
        adminUsersByPage: prevState.adminUsers.slice((prevState.adminTablePage - 2) * prevState.adminTableLimit, (prevState.adminTablePage - 2) * prevState.adminTableLimit + prevState.adminTableLimit)
      }
    })
  }

  nextPageAccountable () {
    this.setState((prevState) => {
      return {
        accountableTablePage: prevState.accountableTablePage + 1,
        accountableUsersByPage: prevState.accountableUsers.slice(prevState.accountableTablePage * prevState.accountableTableLimit, prevState.accountableTablePage * prevState.accountableTableLimit + prevState.accountableTableLimit)
      }
    })
  }

  prevPageAccountable () {
    this.setState((prevState) => {
      return {
        accountableTablePage: prevState.accountableTablePage - 1,
        accountableUsersByPage: prevState.accountableUsers.slice((prevState.accountableTablePage - 2) * prevState.accountableTableLimit, (prevState.accountableTablePage - 2) * prevState.accountableTableLimit + prevState.accountableTableLimit)
      }
    })
  }

  render () {
    const { isLoading, adminUsers, accountableUsers, adminUsersByPage, accountableUsersByPage, adminTablePage, adminTableTotalPages, accountableTablePage, accountableTableTotalPages } = this.state

    return (
      <MetricWrapper>
        <TitleMetric>
          Lista de usuarios admin & autores
        </TitleMetric>
        { isLoading && (
          <LoadingAnimation>
            Cargando...
          </LoadingAnimation>
        )}
        { !isLoading && (<div>
          <DataTable>
            <thead>
              <tr>
                <th>Usuario (Rol admin)</th>
                <th width='25%' style={{ textAlign: 'center' }}>Fecha creacion de cuenta</th>
              </tr>
            </thead>
            <tbody>
              {
                adminUsersByPage.map((user) => {
                  return (
                    <tr key={`admin${user._id}`}>
                      <td>
                        <UserWrapper>
                          <UserAvatar userId={user._id} />
                          <UserData>
                            <UserName><Link href={{ pathname: '/userprofile', query: { id: user._id } }}>{user.fullname}</Link></UserName>
                            <UserEmail>{user.email}</UserEmail>
                          </UserData>
                        </UserWrapper>
                      </td>
                      <td style={{ textAlign: 'center' }}>{user.createdAt.split('T')[0]}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </DataTable>
          <ButtonsWrapper>
            <button
              className={adminTablePage === 1 ? 'disabled' : ''}
              onClick={() => this.prevPageAdmin()}
              disabled={adminTablePage === 1}>
              Anterior
            </button>
            <button
              className={adminTablePage === adminTableTotalPages ? 'disabled' : ''}
              onClick={() => this.nextPageAdmin()}
              disabled={adminTablePage === adminTableTotalPages}>
              Siguiente
            </button>
            <span>
              Página {adminTablePage} de {adminTableTotalPages}
            </span>
          </ButtonsWrapper>
          <br />
          <DataTable>
            <thead>
              <tr>
                <th>Usuario (Rol autor)</th>
                <th width='25%' style={{ textAlign: 'center' }}>Fecha creacion de cuenta</th>
              </tr>
            </thead>
            <tbody>
              {
                accountableUsersByPage.map((user) => {
                  return (
                    <tr key={`accountable${user._id}`}>
                      <td>
                        <UserWrapper>
                          <UserAvatar userId={user._id} />
                          <UserData>
                            <UserName><Link href={{ pathname: '/userprofile', query: { id: user._id } }}>{user.fullname}</Link></UserName>
                            <UserEmail>{user.email}</UserEmail>
                          </UserData>
                        </UserWrapper>
                      </td>
                      <td style={{ textAlign: 'center' }}>{user.createdAt.split('T')[0]}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </DataTable>
          <ButtonsWrapper>
            <button
              className={accountableTablePage === 1 ? 'disabled' : ''}
              onClick={() => this.prevPageAccountable()}
              disabled={accountableTablePage === 1}>
              Anterior
            </button>
            <button
              className={accountableTablePage === accountableTableTotalPages ? 'disabled' : ''}
              onClick={() => this.nextPageAccountable()}
              disabled={accountableTablePage === accountableTableTotalPages}>
              Siguiente
            </button>
            <span>
              Página {accountableTablePage} de {accountableTableTotalPages}
            </span>
          </ButtonsWrapper>
        </div>
        ) }

      </MetricWrapper>
    )
  }
}

export default WithUserContext(MetricsUsersByRole)
