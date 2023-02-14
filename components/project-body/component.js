import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FundationContainer from '../fundation-container/component'
import ProjectVideo from '../project-video/component'
import ProjectCustomVideo from '../project-custom-video/component'
import ProjectLinkArticulate from '../../components/project-link-articulate/component'
import ProjectFields from '../../components/project-fields/component'
import { ArticlesContext } from '../../containers/user-project-container/component'

const ProjectBodyContainer = styled.div`
  // min-height: 383px;
  width:90%;
  display: flex;
  flex-direction:column;
  margin-right:auto;
  margin-left:auto;
  // padding:5% 20% 0% 10%;
  padding: 15px 20% 0% 3.5%;

  @media (max-width:769px){
    padding:5% 0px;
  }

`
const P = styled.p`
  font-size: 18px;
  line-height: 1.94;
  padding-bottom:3rem;
  color: #203340;
  @media (max-width: 700px) {
    // font-size: 18px;
    // line-height: 1.3;
  }
  `

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


const ProjectBody = ({ project, isAdmin }) => (
  <ProjectBodyContainer>
    <ArticlesContext.Consumer>
      {
        ({ isAuthor, editMode, setYoutubeId, editedYoutubeId, newYoutubeId, setNewFields }) => (
          <div>
            {isAuthor && editMode &&
              <ProjectFields
                title={project.currentVersion.content.title}
                author={project.author._id}
                closingDate={project.currentVersion.content.closingDate}
                imageCover={project.currentVersion.content.imageCover}
                youtubeId={project.currentVersion.content.youtubeId}
                customVideoId={project.currentVersion.content.customVideoId}
                closure={project.currentVersion.content.closure}
                tags={project.currentVersion.content.tags}
                sendTagsNotification={project.currentVersion.content.sendTagsNotification}
                publishedMailSent={project.publishedMailSent}
                setNewFields={setNewFields} 
                isAdmin={isAdmin}
                />
            }
            {
              project.currentVersion.content.youtubeId &&
              <ProjectVideo
                isAuthor={isAuthor}
                editMode={editMode}
                projectId={project._id}
                youtubeId={editedYoutubeId ? newYoutubeId : project.currentVersion.content.youtubeId}
                editedYoutubeId={editedYoutubeId}
                setYoutubeId={setYoutubeId} />
            }
            {
              project.currentVersion.content.customVideoId &&
            <ProjectCustomVideo videoId={project.currentVersion.content.customVideoId} />
            }
            <FundationContainer
              isAuthor={isAuthor}
              editMode={editMode}
              id={project._id}
              value={project.currentVersion.content.fundation}
              closure={project.currentVersion.content.closure}
              closed={project.closed} />
          </div>
        )
      }
    </ArticlesContext.Consumer>
    <ProjectLinkArticulate closed={project.closed} id={project._id} />
  </ProjectBodyContainer>
)

ProjectBody.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectBody
