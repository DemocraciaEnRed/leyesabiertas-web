import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TitleContent from '../title-content-admin/component'
import getConfig from 'next/config'
import { withRouter } from 'next/router'
import ProjectTableItem from '../../components/project-table-item/component'

import Card from '../card/component'
import Masonry from 'react-masonry-component';

const { publicRuntimeConfig: { API_URL } } = getConfig()

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

  async getDocuments() {
    try {
      this.setState({
        fetching: true
      }, () => this.fetchProjects(this.props.token))
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

    return theQuery
  }

  fetchProjects = async (token, userId) => {
    
    try {
      let query = this.state.query
      if(this.props.router.query.user) query.author = this.props.router.query.user
      let currentQuery = this.createQuery(query);
      console.log(currentQuery);
      const projects = await (await fetch(`${API_URL}/api/v1/documents?${currentQuery}`, {
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })).json()
      this.setState((prevState) => {
        return {
          projects: prevState.projects.concat(projects.results),
          featchMoreAvailable: projects.pagination.page < projects.pagination.pages,
          fetching: false
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  componentDidMount(){
    this.getDocuments()
  }


  render(){
    const {
    projects,
    fetchMoreAvailable,
    fetching
  } = this.state
    return(
  <StyledProjectsAdmin id='admin-projects'>
    <TitleContent>proyectos</TitleContent>
    <Section id='projects' noMargin >
              <ProjectsTable>
                <ProjectsTableHead>
                  <ProjectsTableRow>
                    <ProjectsTableHeader>Nombre</ProjectsTableHeader>
                    <ProjectsTableHeader hiddenMobile centered>Status</ProjectsTableHeader>
                    <ProjectsTableHeader width={100} hiddenMobile centered>Aportes</ProjectsTableHeader>
                    <ProjectsTableHeader width={100} hiddenMobile centered>Apoyos</ProjectsTableHeader>
                    <ProjectsTableHeader width={100} hiddenMobile centered>Fecha creación</ProjectsTableHeader>
                    <ProjectsTableHeader width={100} hiddenMobile centered>Fecha de cierre</ProjectsTableHeader>
                    <ProjectsTableHeader width={120} hiddenMobile centered>Acciones</ProjectsTableHeader>
                  </ProjectsTableRow>
                </ProjectsTableHead>
                <ProjectsTableBody>

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

export default withRouter(ProjectsAdmin)