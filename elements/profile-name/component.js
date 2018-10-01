import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledProfileName = styled.div`
  font-size: 4rem;
  color: #2c4c61;
  font-family:var(--bold);
`
const ProfileName = ({ name }) => (
  <StyledProfileName>
    {name}
  </StyledProfileName>
)

ProfileName.propTypes = {
  name: PropTypes.string
}

export default ProfileName
