import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.div`
  width: ${(props) => props.small ? '4rem' : '6rem'};
  height: ${(props) => props.small ? '3.8rem' : '5.5rem'};
  background-image: url('${(props) => props.img}');
  background-position: center;
  background-repeat:no-repeat;
`

const ActivityIcon = ({ img, link, size }) => (
  <a href={link}>
    <StyledIcon img={img} size={size} />
  </a>
)

ActivityIcon.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.string
}

export default ActivityIcon
