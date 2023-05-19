import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h2`
  font-family: var(--bold);
  font-size: 3rem;
  color: var(--black);
  padding:10 10 10 0;
  margin-bottom: 10px;
`

const TitleH2 = (props) => (
  <Title style={props.style} >{ props.children }</Title>
)

TitleH2.propTypes = {
  children: PropTypes.string.isRequired
}

export default TitleH2
