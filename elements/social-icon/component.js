import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius:50%;
  background-image: url('${(props) => props.img}');
  background-size: cover;
  background-position: center;
  margin: 0 5px;
`

const SocialIcon = ({ img, link }) => (
  <a href={link} target='blank' rel='noopener noreferrer' >
    <StyledIcon img={img} />
  </a>
)

SocialIcon.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default SocialIcon
