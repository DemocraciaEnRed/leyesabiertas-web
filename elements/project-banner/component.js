import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledBanner = styled.div`
  height: 38.3rem;
  background-color: #a4cee8;
  background-image: url('${(props) => props.img}');
  background-size: cover;
  background-position: center;
  overflow:hidden;
`

StyledBanner.propTypes = {
  img: PropTypes.string.isRequired
}

export default StyledBanner
