import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSelect = styled.select`
  width: 350px;
  height: 40px;
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  margin-top: 10px;
  font-size: 1.4rem;
  line-height: 2.5rem;
  color: #203340;
  padding: 0 14px;
`

const ProfileSelect = (props) => (
  <StyledSelect {...props}>
    {props.options && props.options.map((op, i) => (
      <option value={op.value} key={i}>{op.name}</option>
    ))}
  </StyledSelect>
)

ProfileSelect.propTypes = {
  options: PropTypes.array.isRequired
}

export default ProfileSelect
