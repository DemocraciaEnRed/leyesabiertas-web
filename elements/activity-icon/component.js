import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.div`
  width: ${(props) => props.small ? '4rem' : '8.6rem'};
  height: ${(props) => props.small ? '3.8rem' : '8rem'};
  background-image: url('${(props) => props.img}');
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 2rem;
`

const ActivityIcon = ({ img, size }) => (
  <StyledIcon img={img} size={size} />
)

ActivityIcon.propTypes = {
  img: PropTypes.string.isRequired,
  size: PropTypes.string
}

export default ActivityIcon
