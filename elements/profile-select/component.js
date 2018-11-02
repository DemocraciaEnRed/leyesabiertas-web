import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSelect = styled.select``

const ProfileSelect = (props) => (
  <StyledSelect {...props}>
    {props.options && props.options.map((op, i) => (
      <option value={op.value} key={i}>{op.name}</option>
    ))}
  </StyledSelect>
)

ProfileSelect.propTypes = {
  options: PropTypes.object.isRequired
}

export default ProfileSelect
