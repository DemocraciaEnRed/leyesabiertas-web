import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import DashboardDraftsItem from '../../components/dashboard-drafts-item/component'
import DashboardDraftsTitle from '../../elements/dashboard-drafts-title/component'
const API_KEY = process.env.API_KEY

const StyledDraftsContainer = styled.div`
  min-height:640px;
  width:100%;
  display:flex;
  flex-direction:column;
  box-sizing: border-box;
  }
`
class DashboardDrafts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: null
    }
  }

  async componentDidMount () {
    try {
      const projects = await (await fetch(`https://my.api.mockaroo.com/projects.json?key=${API_KEY}`)).json()
      this.setState({ projects })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const {
      projects
    } = this.state
    return (
      <StyledDraftsContainer id='drafts'>

        <DashboardDraftsTitle>Borradores</DashboardDraftsTitle>

        { projects &&
         projects.map((a, i) => (
           <DashboardDraftsItem project={a} key={i} />
         ))
        }
      </StyledDraftsContainer>
    )
  }
}

export default DashboardDrafts
