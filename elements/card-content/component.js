import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProgressBar from '../progress-bar/component'

const Wrapper = styled.div`
  margin: auto;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:autos;
  box-sizing: border-box;
`
const Tags = styled.div`
  width:90%;
  margin: auto
  margin-bottom:0;
  padding:20px 0 0 0
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
`

const ProjectTag = styled.div`
margin-bottom: 5px;
margin-right: 5px;
background:#B6D5F2;
color: #4C4C4E;
border-radius:5px;
font-weight: 600;
font-family: var(--italic);
padding:8px;
font-size:12px
line-height: 15px;
text-align: center;
letter-spacing: 1.1px;
text-transform: capitalize;

`

const CardContent = ({ closingDate, closed, creationDate, tags, tagList, project }) => {
  let tagsCards = []
  if (tags && tags.length > 0) {
    tagsCards = tags.map((tag) => {
      const tagValue = tagList.find((tagOfList) => tagOfList.value === tag)

      return tagValue.label
    })
  }
  return (
    <Wrapper>
      {tagsCards.length > 0 && <Tags>
        {tagsCards.map((tag, i) => (
          <ProjectTag key={i}> {tag} </ProjectTag>
        ))}
      </Tags>}
      <ProgressBar closingDate={closingDate} creationDate={creationDate} closed={closed} />
    </Wrapper>
  )
}

CardContent.propTypes = {
  project: PropTypes.object,
  closingDate: PropTypes.string,
  closed: PropTypes.bool,
  tags: PropTypes.array,
  tagList: PropTypes.array,
  creationDate: PropTypes.string
}

export default CardContent
