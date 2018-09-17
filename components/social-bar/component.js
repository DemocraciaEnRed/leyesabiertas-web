import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SocialBar = styled.div`
  width:130px;
  height:50px;
  margin-right:auto;
  margin-left:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:5rem;
`

SocialBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default SocialBar
