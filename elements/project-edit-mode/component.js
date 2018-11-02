import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { toggleRight, toggleLeft } from 'react-icons-kit/feather'
import Icon from 'react-icons-kit'
import { ArticlesContext } from '../../containers/user-project-container/component'	


const StyledProjectEditMode = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid #e9e9e9;
  padding-left: 3.5rem;
  padding-bottom: 20px;
`
const Span = styled.span`
  color:#4a5d68;
  font-size:1.6rem;
  font-family:var(--bold);
`
const StyledIconWrapper = styled.div`
  margin-left: 30px;
  color: ${({ active }) => active ? '#5c97bc' : '#ef885d' };
  cursor: pointer;
`

const ProjectEditMode = () => (
  <ArticlesContext>
    {
      ({ isAuthor, editMode, toggleEditMode }) => isAuthor &&
        <StyledProjectEditMode>
          <Span>Modo edición</Span>
          <StyledIconWrapper active={editMode}>
            <Icon size={50} icon={editMode ? toggleLeft : toggleRight} onClick={toggleEditMode} />
          </StyledIconWrapper>
        </StyledProjectEditMode>
    }
  </ArticlesContext>
)

export default ProjectEditMode
