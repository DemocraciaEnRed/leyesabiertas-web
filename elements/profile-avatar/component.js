import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImg = styled.div`
  width: 130px;
  height: 130px;
  border-radius:50%;
  background-image: url('${(props) => props.img}');
  background-size: cover;
  background-position: center;
  margin-bottom:1.4rem;
`

const ProfileAvatar = ({ img }) => (
  <StyledImg img={img} />
)

ProfileAvatar.propTypes = {
  img: PropTypes.string
}

export default ProfileAvatar
