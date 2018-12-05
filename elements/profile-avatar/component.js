import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getConfig from 'next/config'
const { publicRuntimeConfig: { API_URL } } = getConfig()

const StyledImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius:50%;
  background-image: url('${(props) => props.id ? `${API_URL}/api/v1/users/${props.id}/avatar?${props.date}` : '/static/assets/userdefault.png'}');
  background-size: cover;
  background-position: center;
  margin-bottom:1.4rem;
`

const ProfileAvatar = ({ id, date }) => (
  <StyledImg
    id={id}
    date={date} />
)

ProfileAvatar.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string
}

export default ProfileAvatar
