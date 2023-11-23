import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProgressBar from '../progress-bar/component'
import ProjectTag from '../project-tag/component'

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
  padding: 10px 0 0 0
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
`


const CardContent = ({ closingDate, closed, creationDate, tags, tagList, project }) => {
  let tagsCards = []
  if (tags && tags.length > 0) {
    tags.forEach((tag) => {
      const tagValue = tagList.find((tagOfList) => tagOfList.value === tag)
      if(tagValue) tagsCards.push(tagValue.label)
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
