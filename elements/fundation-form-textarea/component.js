import styled from 'styled-components'

const FundationFormTextarea = styled.textarea`
  margin-top: 15px;
  width: 100%;
  height: 150px;
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  resize: none;
  font-size: 1.6rem;
  padding: 1rem;
  line-height: 1.57rem;
  & .error {
    border: solid 1px #c64343;
  }
`

export default FundationFormTextarea
