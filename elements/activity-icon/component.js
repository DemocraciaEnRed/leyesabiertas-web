import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.div`
  width: 60px;
  height: 55px;
  background-image: url('${(props) => props.img}');
  background-position: center;
  background-repeat:no-repeat;
`

const ActivityIcon = ({ img, link }) => (
  <a href={link}>
    <StyledIcon img={img} />
  </a>
)

ActivityIcon.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default ActivityIcon
