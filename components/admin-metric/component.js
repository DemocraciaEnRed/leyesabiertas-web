import React, { Component } from 'react'
import styled from 'styled-components'

import Icon from 'react-icons-kit'
import { caretDown } from 'react-icons-kit/fa/caretDown'
import { caretRight } from 'react-icons-kit/fa/caretRight'
import getConfig from 'next/config'
import WithDocumentTagsContext from '../document-tags-context/component'
import TitleContent from '../title-content-admin/component'
import MetricsByAuthor from './metricsByAuthor'
import MetricsUsers from './metricsUsers'
import MetricsUsersByRole from './metricsUsersByRole'
import MetricsInteractions from './metricsInteractions'
import MetricsTags from './metricsTags'
import WithUserContext from '../with-user-context/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const StyledMetricAdmin = styled.div`
 width:100%
 font-size: 1.4rem;
`

const SectionsWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

const SectionHeader = styled.div`
display:flex;
justify-content: space-between;
padding: 7px 7px;
// color: #454246;
// border: 1px solid #eaeaea;
background-color: #5c97bc;
color: #FFF;
// border-radius: 5px;
width: 100%;
cursor: pointer;
margin-top: 20px;
span { 
  font-family: var(--bold);
  font-size: 1.6rem;
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

const DownloadButton = styled.button`
  background-color: #5c97bc;
  color: #FFF;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #2c4c61;
  }
`

class MetricAdmin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tags: [],
      showMetricByAuthor: false,
      showMetricByTags: false,
      showMetricUsers: false,
      showMetricInteractions: false
    }
  }
  
  componentDidMount () {

  }

  downloadXls = async (theUrl, filename) => {
    try {
      const result = await fetch(`${theUrl}`,{
        headers: {
          Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
          'Content-Type': 'application/json'
        }
      })
      const blob = await result.blob()

      // Download API Files With React & Fetch - https://medium.com/yellowcode/download-api-files-with-react-fetch-393e4dae0d9e
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      // set the name as YYYYMMDD_HHmmss.xls
      const date = new Date()
      const dateString = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}_${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
      link.setAttribute('download', `${dateString}_${filename}.xlsx`);  // 3. Append to html page
      document.body.appendChild(link);  // 4. Force download
      link.click();  // 5. Clean up and remove the link
      link.parentNode.removeChild(link);

    } catch (err) {
      console.error(err)
    }
  }


  render () {
    const { showMetricByAuthor, showMetricByTags, showMetricUsers, showMetricInteractions } = this.state
    return (
      <StyledMetricAdmin id='admin-metrics'>
        <TitleContent style={{ 'marginBottom': '20px' }}>Metricas</TitleContent>
        <SectionsWrapper>
          <SectionHeader onClick={() => this.setState({ showMetricByAuthor: !this.state.showMetricByAuthor })}>
            <span>Metricas por autor</span>
            <Icon icon={this.state.showMetricByAuthor ? caretDown : caretRight} size={20} />
          </SectionHeader>
          {
            showMetricByAuthor && <MetricsByAuthor />
          }
          <SectionHeader onClick={() => this.setState({ showMetricByTags: !this.state.showMetricByTags })}>
            <span>Metricas por etiquetas</span>
            <Icon icon={showMetricByTags ? caretDown : caretRight} size={20} />
          </SectionHeader>
          {
            showMetricByTags && <MetricsTags />
          }
          <SectionHeader onClick={() => this.setState({ showMetricInteractions: !this.state.showMetricInteractions })}>
            <span>Metricas de interacciónes en proyectos</span>
            <Icon icon={showMetricInteractions ? caretDown : caretRight} size={20} />
          </SectionHeader>
          {
            showMetricInteractions && (
              <div>
                <MetricsInteractions />
              </div>
            )
          }
          <SectionHeader onClick={() => this.setState({ showMetricUsers: !this.state.showMetricUsers })}>
            <span>Metricas de usuarios</span>
            <Icon icon={showMetricUsers ? caretDown : caretRight} size={20} />
          </SectionHeader>
          {
            showMetricUsers && (
              <div>
                <MetricsUsers />
                <MetricsUsersByRole />
              </div>
            )
          }
        </SectionsWrapper>
        <br />
        <div>
          <TitleMetric>
            Descarga de datasets
          </TitleMetric>
          <br/>
          <p style={{display: 'block', marginBottom: '3px'}}>Listado completo de usuarios</p>
          <DownloadButton onClick={() => this.downloadXls(`${API_URL}/api/v1/metric/users/xls`, 'usuarios')}>Descargar dataset</DownloadButton>
          <br/><br/>
          <p style={{display: 'block', marginBottom: '3px'}}>Listado completo de proyectos con sus autores e interacciones</p>
          <DownloadButton onClick={() => this.downloadXls(`${API_URL}/api/v1/metric/interactions/xls`, 'proyectos')}>Descargar dataset</DownloadButton>
        </div>
      </StyledMetricAdmin>
    )
  }
}

MetricAdmin.propTypes = {
}

export default WithUserContext(MetricAdmin)
