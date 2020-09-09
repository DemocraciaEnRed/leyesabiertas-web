import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const WrapperDiv = styled.div`
  width: ${(props) => props.width || '350px'};
  margin-top: 10px;
  font-size: 1.4rem;
  line-height: 2.5rem;
  color: #203340;
  padding: 0 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  text-align: justify;
`
const ChipDiv = styled.div`
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  padding: 2px 10px;
  border-radius: 10px;
  margin-bottom: 5px;
  margin-right: 3px;
  margin-left: 3px;
  cursor: pointer

  &.selected {
    background-color: #5c97bc;
    color: white;
  }
`

const ProfileTags = (props) => (
  <WrapperDiv {...props}>
    {props.allTags && props.allTags.map(tag => (
      <ChipDiv
        key={tag._id}
        className={props.tags && props.tags.includes(tag._id) ? 'selected' : 'not-selected'}
        onClick={() => props.onTagClick(tag)}>
        {tag.name}
      </ChipDiv>
    ))}
  </WrapperDiv>
)

ProfileTags.propTypes = {
  allTags: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
  onTagClick: PropTypes.func.isRequired,
  width: PropTypes.string
}

export default ProfileTags
