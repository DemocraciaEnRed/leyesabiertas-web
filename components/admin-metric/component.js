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
          <a style={{display: 'inline-block', marginBottom: '5px', color: '#5c97bc', padding: '5px 5px', borderRadius: '2px', border: '1px solid #5c97bc', cursor: 'pointer'}}
            href={`${API_URL}/api/v1/metric/users/xls`} target='_blank' rel='noopener noreferrer'>Descargar dataset</a>
          <br/><br/>
          <p style={{display: 'block', marginBottom: '3px'}}>Listado completo de proyectos con sus autores e interacciones</p>
          <a style={{display: 'inline-block', marginBottom: '5px', color: '#5c97bc', padding: '5px 5px', borderRadius: '2px', border: '1px solid #5c97bc', cursor: 'pointer'}} 
            href={`${API_URL}/api/v1/metric/interactions/xls`} target='_blank' rel='noopener noreferrer'>Descargar dataset</a>
        </div>
      </StyledMetricAdmin>
    )
  }
}

MetricAdmin.propTypes = {
}

export default WithDocumentTagsContext(MetricAdmin)
