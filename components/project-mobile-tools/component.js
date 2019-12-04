import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProjectTogglePublish from './project-toggle-publish.js'
import ProjectToggleEdit from './project-toggle-edit.js'

const ClosedProposalWrapper = styled.div`
  width: 100%;
  border: 1px solid #1B95BA;
  padding: 10px 15px 10px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px #3032401f;
  margin-bottom: 30px;
  display: none;
  @media (max-width:700px){
    display: block;
  }
`

const Row = styled.div`
  display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;
    font-size:12px;
`

const ItemTitle = styled.div`
  font-family: var(--bold);
  color:#203340;
  margin-top: 8px;
`


export default ({ project, isPublished, setPublish, togglePublish }) => (
  <ClosedProposalWrapper>
    <Row>
      <ItemTitle>
        Modo edición
      </ItemTitle>
      <ProjectToggleEdit />
    </Row>
    <Row>
      <ItemTitle>
        Publicar
      </ItemTitle>
      <ProjectTogglePublish project={project} isPublished={isPublished} setPublish={setPublish} togglePublish={togglePublish}/>
    </Row>
  </ClosedProposalWrapper>
)
