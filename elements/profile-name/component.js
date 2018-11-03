import styled from 'styled-components'

const ProfileName = styled.input`
  font-size: 4.0rem;
  font-family: var(--bold);
  line-height: 1.63rem;
  text-align: center;
  color: #203340;
  border: none;
  margin-bottom: 30px;
  &:read-only,
  &:disabled {
    cursor: not-allowed;
  }
`

export default ProfileName
