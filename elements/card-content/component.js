import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProgressBar from '../progress-bar/component'
import ProjectTags from '../../components/project-tags/component'

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:autos;
  box-sizing: border-box;
`
const Tags = styled.div`
> * {
    margin-bottom:0;
    padding:20px 0 0 0
    >*{ 
        background:#B6D5F2;
        color: #4C4C4E;
        border-radius:5px;
        font-weight: 600;
        font-family: var(--italic);
        padding:5px;
        font-size:12px
        line-height: 15px;
        text-align: center;
        letter-spacing: 1.1px;
        text-transform: capitalize;

    }
}
`

const CardContent = ({ closingDate, closed, creationDate, tags, project }) => (
  <Wrapper>
    <ProgressBar closingDate={closingDate} creationDate={creationDate} closed={closed} />
    {project.currentVersion.content.tags && <Tags>
      <ProjectTags project={project} />
    </Tags>}
  </Wrapper>
)

CardContent.propTypes = {
  project: PropTypes.object,
  closingDate: PropTypes.string,
  closed: PropTypes.bool,
  tags: PropTypes.array,
  creationDate: PropTypes.string
}

export default CardContent
