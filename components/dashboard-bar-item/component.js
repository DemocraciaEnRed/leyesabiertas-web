import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledItem = styled.div` 
  padding:1rem 3rem;
  box-sizing:border-box;
  margin-bottom: 5rem;
`

StyledItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default StyledItem
