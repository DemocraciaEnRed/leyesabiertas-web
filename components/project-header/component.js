import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'
import ProjectHeaderWrapper from '../../elements/project-header-wrapper/component'
import UserAvatar from '../../elements/user-avatar/component'
import ProjectVersionData from '../../components/project-version-data/component'
import ProjectTitle from '../../elements/project-title/component'
import ProjectLimitDate from '../../elements/project-limit-date/component'
import ProjectEditMode from '../../elements/project-edit-mode/component'
import TogglePublish from '../../components/project-toggle-publish/component'
import ProjectHeaderLink from '../../elements/project-header-link/component'
import ClosingDate from '../../elements/closing-date/component'
import ArticlesCommentsCounter from '../../elements/articles-comments-counter/component'
import ProjectBreadcrumb from '../project-breadcrumb/component'
import ClosedProposal from '../closed-proposal/component'

const ProjectHeaderContainer = styled.div`
  min-height: 383px;
  width:100%;
  background-color: #a4cee8;
  background-image: url('${(props) => props.img}');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
`
const TopBarWrapper = styled.div`
  display: flex;
  height:60px;
  flex-direction:row;
  justify-content:space-between;
  & > div {
    padding: 0 2rem;
    border-right: 1px solid #e9e9e9;
    height: 50px;
  }
  & > div:first-child {
    padding-left:0px;
  }
  & > div:last-child {
    border-right: none;
    padding-right:0px;
  }
  `

const ProjectHeader = ({ project, section, isPublished, isAuthor, setPublish, togglePublish }) => (
  <ProjectHeaderContainer img={project.currentVersion.content.imageCover}>
    <ProjectBreadcrumb
      title={project.currentVersion.content.title}
      id={project._id}
      section={section} />
    <ProjectHeaderWrapper>
      <TopBarWrapper>
        <UserAvatar headerbar
          authorId={project.author._id}
          avatarImg={project.author.avatar}
          name={project.author.fullname}
          party={project.author.fields && project.author.fields.party ? project.author.fields.party : ''} />
        <ProjectVersionData
          version={project.currentVersion.version}
          createdAt={project.currentVersion.createdAt} />
        {!project.closed
          ? <ProjectLimitDate
            limitDate={project.currentVersion.content.closingDate} />
          : <ClosingDate date={project.currentVersion.content.closingDate} />
        }
        {section === '/articulado' && !project.closed && !isAuthor && project.commentsCount &&
          <ArticlesCommentsCounter commentsCount={project.commentsCount} />
        }
        <ProjectEditMode />
        {isAuthor &&
        <TogglePublish project={project} isPublished={isPublished} setPublish={setPublish} togglePublish={togglePublish} />
        }
      </TopBarWrapper>
      { project.closed &&
        <ClosedProposal
          contributors={project.currentVersion.contributors}
          contributions={project.currentVersion.contributions.length} />
      }
      { section === '/articulado'
        ? <Link href={{ pathname: '/proyecto', query: { id: project._id } }}>
          <ProjectHeaderLink>
            <ProjectTitle>{project.currentVersion.content.title}</ProjectTitle>
          </ProjectHeaderLink>
        </Link>
        : <ProjectTitle>{project.currentVersion.content.title}</ProjectTitle>
      }
    </ProjectHeaderWrapper>
  </ProjectHeaderContainer>
)

ProjectHeader.propTypes = {
  project: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired
}

export default ProjectHeader
