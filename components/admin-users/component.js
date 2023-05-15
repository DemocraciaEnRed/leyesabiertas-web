import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TitleContent from '../title-content-admin/component'
import getConfig from 'next/config'
import CardUser from '../card-users/component'
import Search from '../../elements/search/component'
const { publicRuntimeConfig: { API_URL } } = getConfig()

const StyledUsersAdmin = styled.div`
width:100%
 
`

const Content = styled.div`
display:flex;
flex-wrap: wrap;
margin: 20px 0
`

const LoadMoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const MessagePaginator = styled.div`
  font-size: 2.5rem;
  color: #454246;
  font-family: var(--bold);
  text-align: center;
  width: 100%;
`

const LoadMoreButtonNoUser = styled.div`
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



class UsersAdmin extends Component{
  state = {
    usersList:[],
    fetching:true,
    fetchMoreAvailable:true,
    query:{
      page:1,
      limit:10
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

  componentDidMount(){
    this.fetchUsers()
  }

  getMoreUsers = ()=> {
    try{
      this.setState({
          query:{
          ...this.state.query,
          page: this.state.query.page + 1
        }
      },()=>this.fetchUsers()
      )
    }
    catch(err){
      console.log(err);
    }
  }

  fetchUsers = async () => {
    const {query} = this.state
    const currentQuery = this.createQuery(query) 
      const users = await (await fetch(`${API_URL}/api/v1/users${currentQuery}`,{
        headers: {
          Authorization: `Bearer ${this.props.token}`,
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })).json()

      this.setState((prevState) =>{ 
        return{
        usersList: prevState.usersList.concat(users.results),
        fetching:false,
        fetchMoreAvailable: users.pagination.page < users.pagination.pages
        }
      })
    }
    
    toggleSort = (parameter, value) => {
      let newQuery = this.state.query
      newQuery[parameter] = value
      newQuery.page = 1
      this.setState({
        usersList: [],
        query: newQuery
      }, () => {
        this.fetchUsers()
      })
      
    }
  
  render(){
    const { usersList, fetching, fetchMoreAvailable } = this.state
  return(
  <StyledUsersAdmin id='admin-users'>
    <TitleContent>users</TitleContent>
    <Search type='text' placeholder='Buscá por nombre de la Diputada o Diputado' onInput={(e) => this.toggleSort('search', e.target.value)} />

    <Content>
    {usersList && usersList.map((user, idx) => 
      <CardUser key={idx} user={user} />
    )}
    {
        !fetching && fetchMoreAvailable && <LoadMoreButtonContainer>
          <LoadMoreButtonNoUser onClick={() => this.getMoreUsers()}>Ver más</LoadMoreButtonNoUser>
        </LoadMoreButtonContainer>
      }
      {
        fetching && <MessagePaginator> Cargando...</MessagePaginator>
      }
      {
        !fetching && !fetchMoreAvailable  &&
        <MessagePaginator>No hay más propuestas de leyes</MessagePaginator>
      }
    </Content>

  </StyledUsersAdmin>
)}}

UsersAdmin.propTypes = {
}

export default UsersAdmin
