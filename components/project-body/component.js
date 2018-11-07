import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FundationContainer from '../fundation-container/component'
import ProjectVideo from '../project-video/component'
import ProjectLinkArticulate from '../../components/project-link-articulate/component'
import { ArticlesContext } from '../../containers/user-project-container/component'

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
    <ArticlesContext.Consumer>
      {
        ({ isAuthor, editMode, setYoutubeId, editedYoutubeId, newYoutubeId }) => (
          <div>
            <ProjectVideo
              isAuthor={isAuthor}
              editMode={editMode}
              projectId={project._id}
              youtubeId={editedYoutubeId ? newYoutubeId : project.currentVersion.content.youtubeId}
              editedYoutubeId={editedYoutubeId}
              setYoutubeId={setYoutubeId} />
            <FundationContainer
              isAuthor={isAuthor}
              editMode={editMode}
              id={project._id}
              value={project.currentVersion.content.fundation} />
          </div>
        )
      }
    </ArticlesContext.Consumer>
    <ProjectLinkArticulate id={project._id} />
  </ProjectBodyContainer>
)

ProjectBody.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectBody
