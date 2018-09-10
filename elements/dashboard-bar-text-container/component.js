import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DashboardBarTextContainer = styled.div`
 width:22.2rem;
 height:7rem;
 padding-left:2rem;
 display:flex;
 flex-direction:column;
 justify-content:space-between;
`

DashboardBarTextContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default DashboardBarTextContainer
