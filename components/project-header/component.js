import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icon from 'react-icons-kit'
import { checkSquareO } from 'react-icons-kit/fa/checkSquareO'
import { squareO } from 'react-icons-kit/fa/squareO'
import styled from 'styled-components'
import ProjectHeaderWrapper from '../../elements/project-header-wrapper/component'
import UserAvatar from '../../elements/user-avatar/component'
import ProjectVersionData from '../../components/project-version-data/component'
import FundationTitle from '../../components/fundation-title/component'
import ProjectTitle from '../../elements/project-title/component'
import ProjectSubtitle from '../../elements/project-subtitle/component'
import ProjectEditMode from '../../elements/project-edit-mode/component'
import ProjectHeaderVersion from '../../elements/project-header-version/component'
import TogglePublish from '../../components/project-toggle-publish/component'
import ProjectHeaderLink from '../../elements/project-header-link/component'
import ClosingDate from '../../elements/closing-date/component'
import ArticlesCommentsCounter from '../../elements/articles-comments-counter/component'
import ProjectBreadcrumb from '../project-breadcrumb/component'
import ClosedProposal from '../closed-proposal/component'
import SharerSocial from '../../elements/sharer-social/component'
import ProjectStatus from '../../elements/project-status/component'
import ModeBar from '../../components/mode-bar/component'
import ModeButton from '../../elements/mode-button/component'
import ModeBarLinkButton from '../../elements/mode-bar-link-button/component'
import ModeBarApoyarButton from '../../elements/mode-bar-apoyar-button/component'
import ModeBarSharedButton from '../../elements/mode-bar-shared-button/component'
import ProjectMobileTools from "../project-mobile-tools/component"
import ProgressBar from '../../elements/progress-bar/component'
import SubscribeButton from '../../components/subscribe-button/component'

const ProjectHeaderContainer = styled.div`
  min-height: 383px;
  width:100%;
  background-color: #395595;
  //background-image: url('${(props) => props.img}');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  // display: block;
`
const InfoHeader = styled.div`
margin:30px
`
const SocialSection = styled.div`
display: flex;
flex-direction:row;
align-items:end;
justify-content:flex-end;
@media(max-width:700px){
  flex-direction:column;
  align-items:flex-end;
  justify-content:flex-end;
}
`

const ModeSection = styled.div`
display: flex;
flex-direction:row;
align-items:end;
justify-content:flex-start;
@media(max-width:700px){
  flex-direction:column;
  align-items:flex-start;
  justify-content:flex-end;
}
`

const ProgressBarWrapper = styled.div`
width:33%
@media(max-width:700px){
  width:50%;
  margin-bottom: 16px;
}
`

const TopBarWrapper = styled.div`
  display: flex;
  flex-direction:row;
  margin-bottom: 25px;
  @media (max-width:700px){
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: flex-start;
    margin-bottom: 30px
  }
  // min-height:60px;
  justify-content:flex-start;
  width: 100%;
  // margin-right: 3%;
  // & > div {
  //   padding: 0 1.5rem;
  //   border-right: 1px solid #e9e9e9;
  //   height: 50px;
  //   @media (max-width:510px){
  //     border:none;
  //   }
  // }
  // & > div:first-child {
  //   padding-left:0px;
  // }
  // & > div:last-child {
  //   border-right: none;
  //   padding-right:0px;
  // }
  `

const SharerButton = styled(ModeBarLinkButton)`
color:#567B9A;
`

const SharerSpan = styled.span`
font-family: var(--bold);
margin-right:8px
`

const ProjectHeader = ({ project, section, isPublished, isAuthor, setPublish, togglePublish, contextualCommentsCount, contributionsCount, contributorsCount, currentSection, withComments, apoyarProyecto }) => {
  const childSuportRef = useRef()
  const childSharedRef = useRef()
  const toogleform = (element)=> {
    if (element.apoyarProyecto) {
      childSharedRef.current.close()
    } else {
      childSuportRef.current.close()
    }
  }

  return(
  // <ProjectHeaderContainer img={project.currentVersion.content.imageCover}>
    <ProjectHeaderContainer img='/static/assets/images/trama-default.jpg'>
      <ProjectBreadcrumb
        title={project.currentVersion.content.title}
        id={project._id}
        section={section} />
      <ProjectHeaderWrapper>
        <InfoHeader>
          <TopBarWrapper>
            {/* <SharerSocial id={project._id} /> */}
            <UserAvatar
              projectView
              authorId={project.author._id}
              userId={project.author._id}
              name={project.author.fullname}
              party={project.author.fieds && project.author.fields.party ? project.author.fields.party : ''} />
            <ClosingDate closingDate={project.currentVersion.content.closingDate} closed={project.closed} creationDate={project.currentVersion.createdAt} />
            <ArticlesCommentsCounter commentsCount={project.commentsCount} apoyosCount={project.apoyosCount} project={project._id} />
            <ProjectHeaderVersion
              project={project._id}
              version={project.currentVersion.version}
              />
            <ProjectEditMode />
            {isAuthor &&
              <TogglePublish project={project} isPublished={isPublished} setPublish={setPublish} togglePublish={togglePublish} />
            }
          </TopBarWrapper>
          {/* <ProjectStatus closed={project.closed} /> */}
          <ProjectTitle>{project.currentVersion.content.title}</ProjectTitle>
          <ProgressBarWrapper>
            <ProgressBar closingDate={project.currentVersion.content.closingDate} creationDate={project.currentVersion.createdAt} closed={project.closed} />
          </ProgressBarWrapper>

          {/* <ProjectSubtitle
            project={project._id}
            version={project.currentVersion.version}
            createdAt={project.currentVersion.createdAt}
            commentsCount={project.commentsCount} /> */}
          {isAuthor &&
            <ProjectMobileTools project={project} isPublished={isPublished} setPublish={setPublish} togglePublish={togglePublish} />
          }
          {project.closed &&
            <ClosedProposal
              contributors={contributorsCount}
              contributions={contributionsCount}
              contextualComments={contextualCommentsCount} />
          }
        </InfoHeader>
        {currentSection === '/propuesta' &&
          <ModeBar>
            <ModeSection>
              <ModeBarLinkButton active>Presentación</ModeBarLinkButton>
              <ModeBarLinkButton href={{ pathname: '/articulado', query: { id: project._id } }}>Artículos</ModeBarLinkButton>
            </ModeSection>
            <SocialSection>
              {/* <SharerButton>
                <SharerSpan>
                  Compartir proyecto
                </SharerSpan>
                <Icon icon={shareAlt} size={15} />
              </SharerButton> */}
              <SubscribeButton authorId={project.author._id} />
              <ModeBarSharedButton ref={childSharedRef} project={project} toogleForm={toogleform}/>
              <ModeBarApoyarButton ref={childSuportRef} project={project} apoyarProyecto={apoyarProyecto} toogleForm={toogleform} />
            </SocialSection>
          </ModeBar>
        }
        {currentSection === '/versiones' &&
          <ModeBar>
            <ModeSection>
              <ModeBarLinkButton href={{ pathname: '/propuesta', query: { id: project._id } }}>Presentación</ModeBarLinkButton>
              <ModeBarLinkButton href={{ pathname: '/articulado', query: { id: project._id } }}>Artículos</ModeBarLinkButton>
            </ModeSection>

            <SocialSection>
              {/* <SharerButton>
                <SharerSpan>
                  Compartir proyecto
                </SharerSpan>
                <Icon icon={shareAlt} size={15} />
              </SharerButton> */}
              <SubscribeButton authorId={project.author._id} />
              <ModeBarSharedButton project={project} />
              <ModeBarApoyarButton project={project} apoyarProyecto={apoyarProyecto} />
            </SocialSection>
          </ModeBar>
        }
        {currentSection === '/articulado' &&
          <ModeBar>
            <div>
              <ModeBarLinkButton href={{ pathname: '/propuesta', query: { id: project._id } }}>Presentación</ModeBarLinkButton>
              <ModeBarLinkButton active>Artículos</ModeBarLinkButton>
              <ModeButton>
                {withComments ? <Icon icon={squareO} size={20} /> : <Icon icon={checkSquareO} size={20} />}&nbsp;
                Modo lectura
              </ModeButton>

            </div>
            <SocialSection>
              {/* <SharerButton>
                <SharerSpan>
                  Compartir proyecto
                </SharerSpan>
                <Icon icon={shareAlt} size={15} />
              </SharerButton> */}
              <ModeBarSharedButton project={project} />
              <ModeBarApoyarButton project={project} apoyarProyecto={apoyarProyecto} />
            </SocialSection>
          </ModeBar>
        }
      </ProjectHeaderWrapper>
    </ProjectHeaderContainer>
  )
}

ProjectHeader.propTypes = {
  project: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired
}

export default ProjectHeader
