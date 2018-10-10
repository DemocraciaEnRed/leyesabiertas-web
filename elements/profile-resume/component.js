import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledProfileResume = styled.div`
  font-size: 1.8rem;
  line-height: 1.94;
  color: #203340;
  margin-top:4rem;
`
const ProfileResume = ({ resume }) => (
  <StyledProfileResume>
    {resume}
  </StyledProfileResume>
)

ProfileResume.propTypes = {
  resume: PropTypes.string
}

export default ProfileResume
