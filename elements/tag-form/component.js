import React, { Component, useEffect, useState } from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { trash2 } from 'react-icons-kit/feather'
import slugify from 'slugify'
import PropTypes from 'prop-types'

const NewTagWrapper = styled.div`
`

const TagInputLabel = styled.label`
display:flex;
flex-direction: column;
    font-size: 1.4rem;
    line-height: 2.5rem;
    color: #203340;
    margin: 19px 0;

`

const TagInput = styled.input`
width: 100%;
    height: 40px;
    border: solid 1px #dae1e7;
    background-color: #ffffff;
    font-size: 1.4rem;
    line-height: 1.5rem;
    color: #203340;
    margin-top: 10px;
    padding: 14px;
`

const TagButton = styled.button`
margin:23px 0; 
min-width: 100px;
max-width: 200px;
height: 39px;
background-color: #5c97bc;
font-size: 1.4rem;
color: var(--white);
border-style: none;
cursor: pointer;
padding: 0 2rem;
font-family: var(--bold);
&[disabled] {
    background-color: #CACACA;
    color: #FFF;
    cursor: not-allowed;
    }
`

const TagNew = (props) => {
  const [input, setInput] = useState('')
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const sendTag = () => {
    props.addTag(input)
    setInput('')
  }
  return (
    <NewTagWrapper>
      <TagInputLabel>Agregar nueva etiqueta
        <TagInput type='text' value={input} onChange={(e) => handleInput(e)} />
        <TagButton onClick={() => sendTag()} disabled={!input}>Agregar</TagButton>
      </TagInputLabel>
    </NewTagWrapper>

  )
}

TagNew.propTypes = {
}

export default TagNew
