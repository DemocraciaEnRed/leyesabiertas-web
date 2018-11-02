import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ArticlesContext } from '../../containers/user-project-container/component'	


const StyledProjectEditMode = styled.div`
  display: flex;
  flex-flow: column wrap;
  border-left: 1px solid #e9e9e9;
  padding-left: 3.5rem;
`
const Span = styled.span`
  color:#4a5d68;
  font-size:1.6rem;
  font-family:var(--bold);
`
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
`
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Slider} {
    background-color: #2196F3;
  }
  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }
  &:checked + ${Slider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

const ProjectEditMode = ({ limitDate }) => (
  <ArticlesContext>
    {
      ({ isAuthor }) => isAuthor &&
        <StyledProjectEditMode>
          <Span>Modo edición</Span>
          <Switch>
            <Slider />
            <Input />
          </Switch>
        </StyledProjectEditMode>
    }
  </ArticlesContext>
)

export default ProjectEditMode
