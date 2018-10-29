import styled from 'styled-components'

const StaticInfoButton = styled.button`
  background: white;
  border: none;
  font-size: 1.6rem;
  text-align: left;
  padding: 15px;
  color: #454246;

  &:not(:last-child)  {
    border-bottom: solid 1px #dae1e7;
  }
  &.active {
    color: #5c97bc;
  }
`

export default StaticInfoButton
