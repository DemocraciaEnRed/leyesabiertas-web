import React, { Component } from 'react'
import router, { Router, withRouter } from 'next/router'
import NavBar from '../containers/navbar/component'
import DashboardBar from '../containers/dashboard-bar/component'
import Footer from '../containers/footer/component'
import AdminDrawer from '../components/admin-drawer/component'
import styled from 'styled-components'
import AdminSection from '../containers/admin-section/component'
import WithUserContext from '../components/with-user-context/component'
import SecondaryNavbar from '../containers/secondary-navbar/component'

const AdminContainer = styled.div`
width:100%;
margin-left:auto;
margin-right:auto;
margin-top:2.5rem;
margin-bottom:2.5rem;
display:flex;
padding:30px;
justify-content:center;
align-items:strech;
`
class Admin extends Component {
  state = {
    section:null
  }

  componentDidMount () {
    if(!this.props.authContext.authenticated) return router.push('/')
    if(this.props.authContext.authenticated && !this.props.authContext.user.roles.includes('admin'))return router.push('/')
    if(this.props.router){
      if (this.props.router.query.section) {
        this.setState({
          section: this.props.router.query.section
        })
      } else {
        this.props.router.push({
          pathname: '/admin',
          query:{section:'tags'}
        })
        this.setState({
          section: 'tags'
        })
      }

    }
  }


  componentDidUpdate (prevProps, prevState) {
    
    if(this.props.authContext.authenticated && !this.props.authContext.user.roles.includes('admin'))return router.push('/')
    if(this.props.router){
    const { query } = this.props.router
    if (query.section !== prevProps.router.query.section) {
      this.setState({
        section: query.section
      })
    }}
  }

  changeSection = (section) => {
    this.props.router.push({
      pathname: '/admin',
      query:{section}
    })
    this.setState({
      section: section
    })
  }
  

  render(){
    return(<div>
      <NavBar />
      {/* <DashboardBar /> */}
    <SecondaryNavbar />
      {this.props.authContext.keycloak && <AdminContainer>
          <AdminDrawer 
          changeSection={this.changeSection} />
          <AdminSection section={this.state.section} token={this.props.authContext.keycloak.token}/>
      
      </AdminContainer>}    
      <Footer />
    </div>)
  }
  
}


export default WithUserContext(withRouter(Admin))