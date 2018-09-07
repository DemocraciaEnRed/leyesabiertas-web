import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FooterLogo = styled.div`
  width: 102px;
  height: 36px;
  background-image: url('${(props) => props.img}');
  background-size: cover;
  background-position: center;
`

FooterLogo.propTypes = {
  img: PropTypes.string.isRequired
}

export default FooterLogo
