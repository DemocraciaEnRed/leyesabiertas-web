import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledProfilePeriod = styled.div`
  font-size: 1.6rem;
  font-family:var(--bold);
  color: #4a5d68;
  margin-bottom:1rem;
  `
const ProfilePeriod = ({ period }) => (
  <StyledProfilePeriod>
    {period}
  </StyledProfilePeriod>
)

ProfilePeriod.propTypes = {
  period: PropTypes.string
}

export default ProfilePeriod
