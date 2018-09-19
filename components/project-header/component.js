import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProjectHeaderWrapper from '../../elements/project-header-wrapper/component'
import UserAvatar from '../../elements/user-avatar/component'
import ProjectVersionData from '../../components/project-version-data/component'
import ProjectTitle from '../../elements/project-title/component'
import ProjectHeaderComments from '../../elements/project-header-comments/component'
import ProjectHeaderBarItem from '../../components/project-header-bar-item/component'
import CommentIcon from '../../elements/comment-icon/component'

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
  width:100%;
  flex-direction:row;
  justify-content:space-between;
  `
const RightWrapper = styled.div`
  display: flex;
  flex-direction:row;
`

const ProjectHeader = ({ project }) => (
  <ProjectHeaderContainer img={project.img}>
    <ProjectHeaderWrapper>

      <TopBarWrapper>
        <UserAvatar
          avatarImg={project.author.avatarImg}
          name={project.author.name}
          party={project.author.party} />

        <RightWrapper>
          <ProjectHeaderBarItem>
            <CommentIcon />
            <ProjectHeaderComments number={5} />
          </ProjectHeaderBarItem>
          <ProjectVersionData
            version={project.version}
            createdAt={project.createdAt} />
        </RightWrapper>

      </TopBarWrapper>

      <ProjectTitle>{project.title}</ProjectTitle>

    </ProjectHeaderWrapper>
  </ProjectHeaderContainer>
)

ProjectHeader.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectHeader
