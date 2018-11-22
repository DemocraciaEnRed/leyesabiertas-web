import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DashboardBarTextContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`

DashboardBarTextContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default DashboardBarTextContainer
