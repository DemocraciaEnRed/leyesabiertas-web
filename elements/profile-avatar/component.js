import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getConfig from 'next/config'
const { publicRuntimeConfig: { API_URL } } = getConfig()

const StyledImg = styled.div`
  width: 130px;
  height: 130px;
  border-radius:50%;
  background-image: url('${(props) => props.id ? `${API_URL}/api/v1/users/${props.id}/avatar` : '/static/assets/userdefault.png'}');
  background-size: cover;
  background-position: center;
  margin-bottom:1.4rem;
`

const ProfileAvatar = ({ id }) => (
  <StyledImg id={id} />
)

ProfileAvatar.propTypes = {
  id: PropTypes.string
}

export default ProfileAvatar
