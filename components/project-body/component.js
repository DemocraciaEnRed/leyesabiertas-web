import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FundationContainer from '../fundation-container/component'
import ProjectLinkArticulate from '../../components/project-link'

const value = {
  'object': 'value',
  'document': {
    'object': 'document',
    'data': {

    },
    'nodes': [
      {
        'object': 'block',
        'type': 'paragraph',
        'data': {

        },
        'nodes': [
          {
            'object': 'text',
            'leaves': [
              {
                'object': 'leaf',
                'text': 'Por qué proponemos una Ley de Acceso a la Información Pública' ,
                'marks': [
                  {
                    'object': 'mark',
                    'type': 'title',
                    'data': {

                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        'object': 'block',
        'type': 'paragraph',
        'data': {

        },
        'nodes': [
          {
            'object': 'text',
            'leaves': [
              {
                'object': 'leaf',
                'text': 'La presente ley tiene por objeto garantizar el efectivo ejercicio del derecho de acceso a la zinformación pública, promover la participación ciudadana y la transparencia de la gestión pública, y se funda en los siguientes principios: Presunción de publicidad: toda la información en poder del Estado se presume pública, salvo las excepciones previstas por esta ley. Transparencia y máxima divulgación: toda la información en poder, custodia o bajo control del sujeto obligado debe ser accesible para todas las personas.',
                'marks': [
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}

const value = {
  'object': 'value',
  'document': {
    'object': 'document',
    'data': {

    },
    'nodes': [
      {
        'object': 'block',
        'type': 'paragraph',
        'data': {

        },
        'nodes': [
          {
            'object': 'text',
            'leaves': [
              {
                'object': 'leaf',
                'text': 'Por qué proponemos una Ley de Acceso a la Información Pública' ,
                'marks': [
                  {
                    'object': 'mark',
                    'type': 'title',
                    'data': {

                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        'object': 'block',
        'type': 'paragraph',
        'data': {

        },
        'nodes': [
          {
            'object': 'text',
            'leaves': [
              {
                'object': 'leaf',
                'text': 'La presente ley tiene por objeto garantizar el efectivo ejercicio del derecho de acceso a la zinformación pública, promover la participación ciudadana y la transparencia de la gestión pública, y se funda en los siguientes principios: Presunción de publicidad: toda la información en poder del Estado se presume pública, salvo las excepciones previstas por esta ley. Transparencia y máxima divulgación: toda la información en poder, custodia o bajo control del sujeto obligado debe ser accesible para todas las personas.',
                'marks': [
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}

const ProjectBodyContainer = styled.div`
  min-height: 383px;
  width:90%;
  display: flex;
  flex-direction:column;
  margin-right:auto;
  margin-left:auto;
  padding:5% 20% 5% 10%;

`
const P = styled.p`
  font-size: 18px;
  line-height: 1.94;
  padding-bottom:3rem;
  color: #203340;`

const H2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  color: #5c97bc;
  padding-bottom:4rem;`

const BoldP = styled.p`
  font-size: 18px;
  line-height: 1.94;
  padding-bottom:3rem;
  color: #203340;
  font-family:var(--bold);
`

const ProjectBody = ({ project }) => (
  <ProjectBodyContainer>
    <FundationContainer value={value} />
    <ProjectLinkArticulate id={project.id} />
  </ProjectBodyContainer>
)

ProjectBody.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectBody
