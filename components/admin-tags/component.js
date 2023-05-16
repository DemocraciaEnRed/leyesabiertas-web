import React, { Component, useEffect, useState } from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import {trash2} from 'react-icons-kit/feather'

import PropTypes from 'prop-types'
import WithDocumentTagsContext from '../../components/document-tags-context/component'

import getConfig from 'next/config'
import TagsList from '../../elements/tag-list/component'
import TagNew from '../../elements/tag-form/component'
import Modal from '../modal/component'
import TitleContent from '../title-content-admin/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()




const StyledTagsAdmin = styled.div`
 
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

class TagsAdmin extends Component{
  state = {
    allTags:null,
    modalActive:false,
    tagToDelete:null}

  componentDidMount(){

    this.fetchtags()
  }

  fetchtags = () =>{
    this.props.fetchDocumentTags()
    .then(documentTags => {
      const parsedTags = documentTags.map(documentTag => ({ id: documentTag._id, text: documentTag.name }))

      this.setState({
        allTags: parsedTags
      })
    })
    .catch(err=>console.error(err))
  }

  handleModal=()=>{
    this.setState({
      modalActive: !this.state.modalActive
    })
  }

  deleteTag = (tag)=>{
    this.setState({
      tagToDelete: tag,
      modalActive: true
    })
  }
  

  confirmDeleteTag = async () => {
    await fetch(`${API_URL}/api/v1/document-tags/${this.state.tagToDelete.id}`,{
      method:'DELETE',
      headers: {
        'Authorization': 'Bearer ' + this.props.token
      },
    })
    this.setState({tagToDelete:null,modalActive: false})
    this.fetchtags()
  }

  addTag = async (newTag) =>{
    try{
      if(newTag.length > 0){

      
      await fetch(`${API_URL}/api/v1/document-tags`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.token
        },
        body:JSON.stringify(
          {'name':newTag,
           'key':newTag.replace(/ /g,"-")}
          )
      })
      this.fetchtags()
    }else{
      throw Error()
    }
    }catch(error){
      console.log(error);
    }
  }

  render(){
    const {allTags, modalActive, tagToDelete} = this.state
    return(
      <StyledTagsAdmin id='admin-tags'>
        <TitleContent>tags</TitleContent>
        <TagNew addTag={this.addTag} />
        {allTags && <TagsList allTags={allTags} deleteTag={this.deleteTag} />}
      {modalActive && <Modal
      active={modalActive}
      hideModal={() => this.setState({modalActive:false})}
      title={`¿seguro desea eliminar ${tagToDelete.text}?`} 
      footer={<div>
                <ModalButton onClick={() => this.setState({modalActive:false})} type='cancel'>Cancelar</ModalButton>
                <ModalButton onClick={()=> this.confirmDeleteTag()} type='deleteButton'>Eliminar</ModalButton>
              </div>}/>}
      </StyledTagsAdmin>
    )
  }
  }

TagsAdmin.propTypes = {
}

export default WithDocumentTagsContext(TagsAdmin)
