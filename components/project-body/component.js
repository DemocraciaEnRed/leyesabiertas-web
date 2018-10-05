import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FundationContainer from '../fundation-container/component'
import ProjectLinkArticulate from '../../components/project-link-articulate/component'

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
    <FundationContainer value={project.content.fields.fundation} />
    <ProjectLinkArticulate id={project._id} />
    <ProjectLinkArticulate />
  </ProjectBodyContainer>
)

ProjectBody.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectBody
