import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledProfileCharge = styled.div`
  font-size: 2.2rem;
  font-family:var(--bold);
  line-height: 1.55;
  color: #5c97bc;
  color:#5c97bc;
  text-transform:uppercase;
  margin:1rem 0rem;`
const ProfileCharge = ({ charge }) => (
  <StyledProfileCharge>
    {charge}
  </StyledProfileCharge>
)

ProfileCharge.propTypes = {
  charge: PropTypes.string
}

export default ProfileCharge
