import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SocialBar = styled.div`
  width:130px;
  height:50px;
  margin-right:70px;
  display:flex;
  justify-content: flex-start;
  align-items:center;
`

SocialBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default SocialBar
