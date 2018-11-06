import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProjectHeaderWrapper from '../../elements/project-header-wrapper/component'
import UserAvatar from '../../elements/user-avatar/component'
import ProjectVersionData from '../../components/project-version-data/component'
import ProjectTitle from '../../elements/project-title/component'
import ProjectLimitDate from '../../elements/project-limit-date/component'
import ProjectEditMode from '../../elements/project-edit-mode/component'

const ProjectHeaderContainer = styled.div`
  height: 383px;
  width:100%;
  background-color: #a4cee8;
  background-image: url('${(props) => props.img}');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: flex-end;
`
const TopBarWrapper = styled.div`
  display: flex;
  height:60px;
  flex-direction:row;
  justify-content:space-between;
  & > div {
    padding: 0 30px;
    border-right: 1px solid #e9e9e9;
    height: 50px;
  }
  & > div:last-child {
    border-right: none;
  }
  `

const ProjectHeader = ({ project }) => (
  <ProjectHeaderContainer img={project.currentVersion.content.imageCover}>
    <ProjectHeaderWrapper>
      <TopBarWrapper>
        <UserAvatar
          authorId={project.author._id}
          avatarImg={project.author.avatar}
          name={project.author.fullname}
          party={project.author.fields && project.author.fields.party ? project.author.fields.party : ''} />
        <ProjectVersionData
          version={project.currentVersion.version}
          createdAt={project.currentVersion.createdAt} />
        <ProjectLimitDate
          limitDate={project.currentVersion.content.closingDate} />
        <ProjectEditMode />
      </TopBarWrapper>
      <ProjectTitle>{project.currentVersion.content.title}</ProjectTitle>
    </ProjectHeaderWrapper>
  </ProjectHeaderContainer>
)

ProjectHeader.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectHeader
