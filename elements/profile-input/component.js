import styled from 'styled-components'

const ProfileInput = styled.input`
  width: 350px;
  height: 40px;
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  font-size: 1.4rem;
  line-height: 2.5rem;
  color: #203340;
  margin-top: 10px;
  padding: 14px;
  &:read-only,
  &:disabled {
    cursor: not-allowed;
    background-color: #f7f7f7
  }
`

export default ProfileInput
