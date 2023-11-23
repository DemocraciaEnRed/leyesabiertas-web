import React, { Component, useEffect, useState } from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import {trash2} from 'react-icons-kit/feather'

import PropTypes from 'prop-types'


const TagsContent = styled.div`
display: flex;
flex-wrap: wrap;

`

const Tag = styled.div`
margin-bottom: 5px;
margin-right: 5px;
background:#B6D5F2;
color: #4C4C4E;
border-radius:5px;
font-weight: 600;
font-family: var(--italic);
padding: 5px 10px;
font-size: 12px
line-height: 15px;
text-align: center;
text-transform: capitalize;
`

const TagsList = (props) => (
        <TagsContent>
          {props.allTags.map((tag, idx)=><Tag key={idx}>{tag.text}<Icon onClick={()=>props.deleteTag(tag)} icon={trash2} style={{ marginLeft: '5px', cursor:'pointer' }} /></Tag>)}
        </TagsContent>
    )

TagsList.propTypes = {
    allTags:PropTypes.array
}

export default TagsList
