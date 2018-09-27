import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProjectHeaderWrapper from '../../elements/project-header-wrapper/component'
import UserAvatar from '../../elements/user-avatar/component'
import ProjectVersionData from '../../components/project-version-data/component'
import ProjectTitle from '../../elements/project-title/component'
import ProjectLimitDate from '../../elements/project-limit-date/component'

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
  width:80%;
  flex-direction:row;
  justify-content:space-between;
  `

const ProjectHeader = ({ project }) => (
  <ProjectHeaderContainer img={project.img}>
    <ProjectHeaderWrapper>

      <TopBarWrapper>

        <UserAvatar
          avatarImg={project.author.avatarImg}
          name={project.author.name}
          party={project.author.party} />

        <ProjectVersionData
          version={project.version}
          createdAt={project.createdAt} />

        <ProjectLimitDate
          limitDate={project.limitDate} />

      </TopBarWrapper>

      <ProjectTitle>{project.title}</ProjectTitle>

    </ProjectHeaderWrapper>
  </ProjectHeaderContainer>
)

ProjectHeader.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectHeader
