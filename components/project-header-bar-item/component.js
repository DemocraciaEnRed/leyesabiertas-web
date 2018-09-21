import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledItem = styled.div`
  width:18rem;
  height:4rem;  
  padding-top: 0.3rem;
  margin-right:3rem;
  display: flex;
  align-items:flex-start;
  box-sizing:border-box;

`

StyledItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default StyledItem
