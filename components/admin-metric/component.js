import React, { Component } from 'react'
import styled from 'styled-components'

import WithDocumentTagsContext from '../document-tags-context/component'

import getConfig from 'next/config'
import TagsList from '../../elements/tag-list/component'
import TagNew from '../../elements/tag-form/component'
import Modal from '../modal/component'
import TitleContent from '../title-content-admin/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()




const StyledMetricAdmin = styled.div`
 
`

const TagsContent = styled.div`
display: flex;
flex-wrap: wrap;

`

const Tag = styled.div`
margin-bottom: 5px;
margin-right: 5px;
background:#B6D5F2;
color: #4C4C4E;
border-radius:5px;
font-weight: 600;
font-family: var(--italic);
padding:8px;
font-size:12px
line-height: 15px;
text-align: center;
letter-spacing: 1.1px;
text-transform: capitalize;
`

const ModalButton = styled.button`
margin:23px 8px; 
min-width: 125px;
max-width: 230px;
height: 39px;
background-color: ${(props) => props.type === 'deleteButton' ? '#CF1419': '#5c97bc'};
font-size: 1.4rem;
color: var(--white);
border-style: none;
cursor: pointer;
padding: 0 2rem;
font-family: var(--bold);
`

class MetricAdmin extends Component{

  componentDidMount(){
    
  }



  render(){
    return(
      <StyledMetricAdmin id='admin-tags'>
        <TitleContent>Metricas</TitleContent>
      </StyledMetricAdmin>
    )
  }
  }

MetricAdmin.propTypes = {
}

export default WithDocumentTagsContext(MetricAdmin)
